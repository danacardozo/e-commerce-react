const express = require("express")
const Stripe = require("stripe")
const cors = require("cors");

const stripe = new Stripe("sk_test_51KgDnlJfsxJYMQkqBsHqDD8SdyU5XUshbt6Z1jTrupPVdiRWxQyma1bD9UfiqzsXNxPaTgU6WpFOMbsigf9E76ml00cMTFepAj")

const app = express();

app.use(cors({origin: "http://localhost:3000" }));
app.use(express.json())

app.post("/api/checkout", async (req, res ) => {
    console.log(req.body); 
    const {id, amount} = req.body;

    try {
       const payment = await stripe.paymentIntents.create({
           amount,
           currency: "ARS",
           description: "Productos a comprar",
           payment_method: id,
           confirm: true,
       })
       console.log(payment);
       return res.status(200).json({message: "Pago realizado con éxito"});
    } catch(error){
       return res.json({message: error.raw.message})}
})


app.listen(3001, () => {
    console.log("Servidor", 3001);
});