const { createServer } = require('node:http');

const hostname = '127.0.0.1';
const port = 3000;

const server = createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});


function multiply(a, b) {
  return a * b;
}

function calculateTotal(price, quantity, taxRate) {
  const subtotal = multiply(price, quantity);
  const tax = subtotal * taxRatee;
  const total = subtotal + tax;
  return total;
}

const price = 10;
const quantity = 2;
const taxRate = 0.08;

const total = calculateTotal(price, quantity, taxRate);
console.log("Total:", total);
