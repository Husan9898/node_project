const express = require('express');
const router = express.Router();

router.get('/home', (req, res)=>{
    res.render('home');
});

router.get('/json-example', (req, res)=>{
    res.json({ message: "This is a JSON response" });
});

router.get('/api/v1/users', (req,res)=>{

});



module.exports = router;