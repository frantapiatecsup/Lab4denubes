const express = require("express");

const app = express();



app.get("/", (req, res) => {
  res.sendFile(__dirname + 'index.html');
});

app.get("/productos", (req, res) => {
  res.sendFile(__dirname + 'productos.html');
});

app.get("/clientes", (req, res) => {
  res.sendFile(__dirname + 'clientes.html');
});


app.listen(9000, () => {
  console.log("Tu app se esta ejecutando... ");
});
