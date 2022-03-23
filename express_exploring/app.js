
const express = require('express');
const app = express()
const userRouter = require('./userRoute')
const PORT = process.env.PORT || 8080

app.use('/user',userRouter)

app.get('/', (req,res) => {
    res.send('hey! Yes! Congrats! Route handler checked! Alright!');
})
app.listen(PORT, function(){
    console.log(`server is running on ${PORT}`);
})
console.log('hey! its nodemon! ');

app.get('*',(req,res) => res.send('<h2> Route Not Found </h2>'))
// console.log(express);