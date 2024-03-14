const express = require('express')
const app= express()
app.use(express.json())

app.get("/", function (req, res){
    res.status(200).send("Você fez uma requisiçao GET")
})

app.post("/",function (req, res){
    res.status(201).send("Você fez uma requisição POST")
})

app.put("/",function (req, res){
    res.json({status:"200", message: "sucesso"})
})

app.delete("/", function (req, res){
    res.status(204).end()

})
app.listen(3000,function(){
    console.log("API está ok :)")
})
module.exports=app