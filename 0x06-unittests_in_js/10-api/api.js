const express = require('express');
const app = express();

const PORT = 7865;

app.use(express.json());

app.get('/', (_, res) => {
  res.send('Welcome to the payment system');
});

app.get('/cart/:id([0-9]+)', (req, res) => {
  const id = req.params.id;

  res.send(`Payment methods for cart ${id}`);
});

app.get('/available_payments', (_, res) => {
  res.set("Content-Type", "application/json");
  const payMethods = {
    payment_methods: {
      credit_cards: true,
      paypal: false
    }
  }
  res.send(payMethods);
});

app.post('/login', (req, res) => {
  const username = req.body.userName;

  if (username) {
    res.send(`Welcome ${username}`);
  } else {
    res.status(404).send();
  }
});

app.listen(PORT, () => {
  console.log(`API available on localhost port ${PORT}`);
});

module.exports = app;
