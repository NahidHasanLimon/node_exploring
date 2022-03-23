
const express = require('express');
const app = express()

const PORT = process.env.PORT || 8080
const demoObj = {
    topic: 'Node JS Learning',
    startDate: Date(2022-03-07),
    Purpose: 'Learning Mongo DB and node js and tends to nest js for microservice.',
    Source: 'Stackschool.com',
    personalDetails: {
        name: 'Nahid Hasan Limon',
        email: 'nh.limon2010@gmail.com',
        phone: '01621316727'
    },
    modification: '2.0'
}
function customMiddleware(req,res,next){
    console.log('Logged from my own middleware. '+ req.url)
    if( req.url == '/block'){
        res.send('<h1> Alert! You are accessing a blocked page. </h1>')
    }
    next()
}
function simpleLogger(){
    return (req,res,next) => {
        console.log(`${req.method} -- ${req.url}`)
        next()
    }
}
const myMiddleWares = [customMiddleware,simpleLogger()]
app.use(myMiddleWares)
app.get('/block',(req,res) => res.send ('<h2> Its a block page </h2>'))
app.get('/contact',(req,res) => res.send('Thank you for contacting with us!'))
app.get('/json', (req,res) => {
    res.json(demoObj);
})
app.get('/', (req,res) => {
    res.send('hey! Yes! Congrats! Route handler checked! Alright!');
})
app.listen(PORT, function(){
    console.log(`server is running on ${PORT}`);
})
console.log('hey! its nodemon! ');

app.get('*',(req,res) => res.send('<h2> Route Not Found </h2>'))
// console.log(express);