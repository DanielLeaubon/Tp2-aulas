const port = 8080;
const { render } = require('ejs');
const express = require('express')
const app = express()
app.use(express.urlencoded({ extended: true }))
app.set('view engine', 'ejs')
app.get("/",(req,res)=>{
    n1 = ''
    n2 = ''
    result = ''

    res.render("index")
})

app.post("/soma",(req,res)=>{
    n1 = parseFloat(req.body.num1)
    n2 = parseFloat(req.body.num2)
    result = n1 + n2


    res.render("index",{result})
   })
app.post("/multi",(req,res)=>{
    n1 = parseFloat(req.body.num1)
    n2 = parseFloat(req.body.num2)
    result = n1 * n2



    res.render("index",{result})
   })

app.post("/sub",(req,res)=>{
    n1 = parseFloat(req.body.num1)
    n2 = parseFloat(req.body.num2)
    result = n1 - n2



    res.render("index",{result})
   })

app.post("/div",(req,res)=>{
    n1 = parseFloat(req.body.num1)
    n2 = parseFloat(req.body.num2)
    result = n1 / n2



    res.render("index",{result})
   })

app.listen(port, () => {
    console.log(`Servidor funcionando na porta: ${port}`);
});