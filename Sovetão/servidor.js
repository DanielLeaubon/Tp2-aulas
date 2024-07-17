const port = 8080;
const { render } = require('ejs');
const express = require('express')
const app = express()
app.use(express.urlencoded({ extended: true }))
app.set('view engine', 'ejs')
app.get("/",(req,res)=>{

  Valor = ''

 res.render("index",{Valor})
})

app.post("/resultado",(req,res)=>{
  let S0 = parseFloat(req.body.s0) 
  let V = parseFloat(req.body.Velocidade)
  let T = parseFloat(req.body.tempo)
  let a = parseFloat(req.body.aceleração)
  Valor = `S0 + V*T +(a*(T*T)/2) = ${S0 + V*T +(a*(T*T)/2)}`

 


  res.render("index",{Valor})
 })

 app.get("/tudonofront",(req,res)=>{


 res.render("rayane")
  
 })
app.listen(port, () => {
    console.log(`Servidor funcionando na porta: ${port}`);
});