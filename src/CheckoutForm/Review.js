import React from 'react'
import { Typography, List,ListItem, ListItemText } from '@material-ui/core';
import {useStateValue} from "../StateProvider";
import { getBasketTotal } from '../reducer';
import { accounting } from 'accounting';

const Review = () => {
  const [{basket}, dispatch] = useStateValue();
  return (
     <>
     <Typography variant="h6" gutterBottom>
       Resumen de pedido
     </Typography>
     <List disablePadding>
       {
         basket?.map(product => (
            <ListItem key={product.name}>
              <ListItemText primary={product.name} secondary={`Cantidad: ${1}`}/>
              <Typography variant="body2">
              {accounting.formatMoney(product.price)}
              </Typography>
       </ListItem>
         ))
       }
      <ListItem>
        <ListItemText primary="Total"/>
        <Typography variant="subtitule1">
        {accounting.formatMoney(getBasketTotal(basket))}
        </Typography>
      </ListItem>
   
     </List>
     </>
  )
}

export default Review