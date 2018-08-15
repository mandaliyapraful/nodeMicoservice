const express = require('express');
const jwt = require('jsonwebtoken');

const app = express();

app.get('/api',(req,res)=>{
    res.json({
        message : 'Welcome to the API...'
    });
});

app.post('/api/posts',verifytoken,(req,res) => {
    jwt.verify(req.token,'secretkey',(err,authData) =>{
        if(err){
            res.sendStatus(403);
        }else{
            res.json({
                message : 'Post created ...',
                authData
            });    
        }
    });
});

app.post('/api/login',(req,res) => {
    //Mock User
    const User = {
        id : 1,
        username : 'praful',
        email : 'praful@test.com'  
    };
    //signi to genrate  token 
    //params user ,expires time ,secretkey ,callback 

    jwt.sign({User : User}, 'secretkey',{ expiresIn : '30s'},(err, token) =>{
     res.json({
        token : token
     });    
    });
});

//FOrmat of auth token
// Authorization : bearer <access_token>

//verify token //middleware
function verifytoken(req,res,next){
    //get auth header value
    const bearerHeader = req.headers['authorization'];
    //check if undefined 
    if(typeof bearerHeader !== 'undefined'){
        //split the token
        const bearer = bearerHeader.split(' ');
        //get the token from the array
        const bearerToken = bearer[1];
        // set the token
        req.token = bearerToken;
        // call the next middleware
        next();

    }else{
        //forbidden
        res.sendStatus(403);
    }
};



app.listen(3000,() => console.log('Server started on port 3000'));