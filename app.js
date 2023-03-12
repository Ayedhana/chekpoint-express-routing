const express=require('express');
const app=express();
const {router:homeRouter}=require('./routes/home')
const {router:contactRouter}=require('./routes/contact')
const {router:servicesRouter}=require('./routes/services')

app.use('/home',homeRouter)
app.use('/contact',contactRouter)
app.use('/services',servicesRouter)

app.listen (5000,(err)=>{
    if (err) console.log('server is not running')
    else{console.log('server is running on port 5000 ')}
} )