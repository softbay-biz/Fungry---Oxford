import React, { Component } from 'react';
import axios from 'axios';
import StripeCheckout from 'react-stripe-checkout';


const successPayment = data => {
    alert('Payment Successful');
  };
  
  const errorPayment = data => {
    alert('Payment Error');
  };
  
const fromEuroToCent = amount => amount * 100;
  
  const onToken = (amount, description) => token =>
   axios.post("https://fungry.club/dev/API/entryPoint.php",fromEuroToCent(amount),
    {headers : {
     'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'
    }})
      .then(successPayment)
      .catch(errorPayment);
  
  const Stripe = ({ name, description, amount }) =>
    <StripeCheckout
      name={name}
      description={description}
      amount={fromEuroToCent(amount)}
      token={onToken(amount, description)}
      stripeKey={"pk_test_U5ViJaHA1lWoWnhLmiDRzF8U"}
    />
  
  export default Stripe;