const express = require('express');
const app = express();
const PORT = 3000;

function multiply(a, b) {
    return a * b;
  }
  
  function calculateTotal(price, quantity, taxRate) {
    const subtotal = multiply(price, quantity);
    const tax = subtotal * taxRate;
    const total = subtotal + tax;
    return total;
  }
  
  const price = 10;
  const quantity = 2;
  const taxRate = 0.08;
  
  const total = calculateTotal(price, quantity, taxRate);
  console.log("Total:", total);
  