import React,{useState} from 'react';
import useStyles from "./styles";
import {Paper, Typography, Stepper, Step, StepLabel} from "@material-ui/core";
import AddressForm from "./AddressForm";
import PaymentForm from "./PaymentForm";
import Confirmation from './Confirmation';
import { useStateValue } from '../StateProvider';

const Checkout = () => {
  const classes = useStyles();
  const [activeStep, setActivestep] = useState(0);
  const [{paymentMessage}, dispatch] = useStateValue();
  const steps = ["Datos de envío", "Detalles de pago"];

  const nextStep = () => setActivestep((prevActivestep) => prevActivestep + 1);
  const backStep = () => setActivestep((prevActivestep) => prevActivestep - 1);

  const Form = () => activeStep === 0 ? <AddressForm nextStep={nextStep}/> : <PaymentForm  backStep={backStep} nextStep={nextStep}/>

  return (
    <>
    <main className={classes.layout}>
      <Paper className={classes.paper}>
        <Typography component="h1" variant="h4" align="center">
          Comprar
        </Typography>
        <Stepper activeStep={activeStep} className={classes.stepper}>
      {steps.map(step => (
        <Step key={step}>
          <StepLabel>{step}</StepLabel>
        </Step>
      ))}
        </Stepper>
        {
          activeStep === steps.length ? (<Confirmation message={paymentMessage}/>) : (<Form/>)
        }
         
      </Paper>
     
    </main>
    </>
  )
}

export default Checkout