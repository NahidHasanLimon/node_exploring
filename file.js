const fs = require ('fs')
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
const objToData = JSON.stringify(demoObj);
// fs.writeFile('demo.json',objToData, function (err) {
//     if(err){
//         console.log(err);
//     } else{
//         console.log('File created with plain function convention and written successfull.');
//     }
// })
// fs.writeFile('demo.html',objToData, (err) =>{
//     if(err) console.log(err)
//     else console.log('File created with arrow function and written successfull.');
// })
// read start 
console.log('Read start');

fs.readFile('demo.json', (err,data) =>{
    if(err) console.log(err)
    console.log(JSON.parse(data));
})