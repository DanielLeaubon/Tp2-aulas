const port = 8080;
const express = require('express')
const app = express()
app.use(express.urlencoded({ extended: true }))
app.set('view engine', 'ejs')
app.get
app.get('/', (request, response) => {
  let numero = 12

  if (numero > 10){
    response.send("Número maior que 10")
  }
  else if(numero == 10) {
    response.send("Número 10")
  }
  else if(numero > 10) {
    response.send("Número maior que 10")
  }
 
  

})
app.listen(port, () => {
    console.log(`Servidor funcionando na porta: ${port}`);
});