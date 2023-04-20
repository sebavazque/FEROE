const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path')
require('dotenv').config();

app.use (express.json());

// SDK de Mercado Pago
const mercadopago = require ('mercadopago');


app.use(bodyParser.urlencoded({ extended: false }))

app.use(express.static(
  path.join(__dirname,"./public")));

  mercadopago.configure({
  access_token: process.env.MERCADOPAGO_KEY })

          //routes
          app.post('http://feroeee.onrender.com/payment', (req, res) => {
           
            let preference = {
              items: [
                {
                  title:req.body.title,
                  unit_price: parseInt(req.body.price),
                  quantity: 1,
                  currency_id: 'ARS'
                }],
            };
            mercadopago.preferences.create(preference)


            .then((response)=> {

              global.id = response.body.id;

            }).catch(function(error){
              console.log(error);
            });
          })


        app.listen(3001);
        console.log("Server")