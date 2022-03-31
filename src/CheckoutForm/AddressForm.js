import React from 'react'
import {Button, Grid, Typography} from "@material-ui/core";
import {useForm, FormProvider} from "react-hook-form"
import AddressInput from "./AddressInput";
import { Link } from 'react-router-dom';
import {useStateValue} from "../StateProvider"
import {actionTypes} from "../reducer";

const AddressForm = ({nextStep}) => {
  const methods = useForm();
  const [{shippingData}, dispatch] = useStateValue();
  return (
    <>
    <Typography variant="h6" gutterBottom>
    Datos de envío
     </Typography>
     <FormProvider {...methods}>
     <form onSubmit={methods.handleSubmit(data => {
       dispatch({
         type: actionTypes.SET_SHIPPINGDATA,
         shippingData: data,
       });
       nextStep();
     })}>
          <Grid cotainer spacing={3}>
            <AddressInput required name="firstName" label="Nombre"/>
            <AddressInput required name="lastName" label="Apellido"/>
            <AddressInput required name="address1" label="Dirección"/>
            <AddressInput required name="email" label="Correo electrónico"/>
            <AddressInput required name="city" label="Ciudad"/>
            <AddressInput required name="postCode" label="Código postal"/>
          </Grid>
          <div style={{display:"flex", justifyContent:"space-between", marginTop: "1rem"}}>
             <Button component={Link} to="/checkout-page">Regresar</Button>
          <Button type="submit" variant="contained" color="primary">Siguiente</Button>
          </div>
         
     </form>
     </FormProvider>
  </>
  )
}

export default AddressForm