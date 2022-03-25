import React from 'react'
import {Button, makeStyles} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    
}))


const Total = () => {
  return (
    <div className={classes.root}>
        <h5>Total items: 3</h5>
        <h5>{accounting.formatNumber(50)}</h5>
        <Button className={classes.button} variant="contained" color="secondary">Check out</Button>
    </div>
    )
}

export default Total