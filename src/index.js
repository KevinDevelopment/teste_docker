const express = require("express");
const app = express();


app.get("/docker", (req, res) => {
  res.send({
    message: "ola voce usou o docker certo",
    teste: "teste de mensagem"
  })
})


const PORT = 8080;

app.listen(PORT,() => {
  console.log("Parabens voce conseguiu rodar com Docker!!")
})