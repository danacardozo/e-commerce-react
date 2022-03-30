import React from 'react'
import Review from "./Review";
import {Divider, Typography, Button} from "@material-ui/core"
import {Elements, CardElement, useStripe, useElements} from "@stripe/react-stripe-js"
import { loadStripe } from '@stripe/stripe-js'; 
import { getBasketTotal, actionTypes } from '../reducer';
import { useStateValue } from '../StateProvider';
import { accounting } from 'accounting';
import {axios} from "axios"

const stripePromise = loadStripe("pk_test_51KgDnlJfsxJYMQkqvbBBrjY3h1O70fw0Y9CXdpa4Zoh3LO0Apz4vR4pwM3ABWp3eoW6sODACglNJ44qEXH2JUWXw00zRgrSMrj");

const CARD_ELEMENT_OPTIONS = {
  iconStyle: "solid",
  hidePostalCode: true,
  style: {
    base:{
      iconColor: "rgb(240, 57, 122)",
      color: "333",
      fontSize: "18px",
      "::placeholder": {
        color: "#ccc",
      },
    },
    invalid: {
      color: "#e5424d",
      ":focus": {
        color: "#303238",
      },
    },
  },
};

const CheckoutForm = ({backStep, nextStep}) => {
  const[{basket, paymentMessage}, dispatch] = useStateValue();
  
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async(e) => {
    e.preventDefault();
    const {error, paymentMethod} = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement)
    })
      if(!error){

        const {id} = paymentMethod;

        try{
          const {data} = await axios.post(
            "http://localhost:3001/api/checkout", 
          {
          id,
          amount: getBasketTotal(basket) * 100,
        }) 
        dispatch({
          type: actionTypes.SET_PAYMENT_MESSAGE,
          paymentMessage: data.message
          
        });
        if (data.message === "Pago realizado con éxito") {
          dispatch({
            type: actionTypes.EMPTY_BASKET,
            basket: [],
          });
        }
        elements.getElement(CardElement).clear();
        nextStep();
      }
        catch(error)
        {console.log(error);
          nextStep();
        }
       
      }
  }
  return(
    <form onSubmit={handleSubmit}>
      <CardElement options={CARD_ELEMENT_OPTIONS}/>
      <div style={{display:"flex", justifyContent: "space-between", marginTop: "1rem"}}>
        <Button variant="outlined" onClick={backStep}>Volver</Button>
      <Button disable={false} type="submit" variant="contained" color="primary"> { `Pagar ${accounting.formatMoney(getBasketTotal(basket))}`} </Button>
      </div>
    
    </form>
  )
}

const PaymentForm = ({backStep, nextStep}) => {
  return (
     <>
     <Review/>
     <Divider/>
     <Typography variant="h6" gutterBottom style={{margin: "20px 0"}}>Metodo de pago</Typography>
     <Elements stripe={stripePromise}>
       <CheckoutForm backStep={backStep} nextStep={nextStep}/>
     </Elements>
     </>
  )
}

export default PaymentForm