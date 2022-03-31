import React from 'react'
import {Typography, Divider, Button} from '@material-ui/core';
import {Link} from "react-router-dom";


const Confirmation = ({message}) => {
  return (
    <>
    <Typography variant="h6">¡Pago realizado con éxito!</Typography>
    <Divider/>
    <Typography variant="subtitle2" gutterBottom>
        {
            message === "Pago realizado con éxito" ? 
            "Tu número de ticket: Rgh278942kj" 
            : ""
        }
    </Typography>
    <Button component={Link} to="/" variant="outlined" type="button">
        Volver a la página principal
    </Button>
    </>
  )
}

export default Confirmation