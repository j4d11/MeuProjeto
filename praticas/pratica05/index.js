const express = require('express')
const app = express()

app.use(express.json())

app.listen(3000, function(req, res){
    console.log("API está on :)")
})

module.exports = app