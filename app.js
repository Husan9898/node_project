const express = require('express');
const app = express();
const router = require('./router/pages.js');
const port = 3000;

app.set('view engine', 'ejs');
app.set('views', './views');


 app.use(router);



app.listen(port, ()=>{
    console.log(`Server is running on http://localhost:${port}`)

});