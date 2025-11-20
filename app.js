const express = require('express');
const app = express();
const router = require('./routes/pages.js');
const userRoute = require('./routes/users.js');
const ejs = require('ejs');
const port = 3000;

app.set('view engine', 'ejs');
app.set('views', './views');

app.use(router);
app.use(userRoute);

app.listen(port, () =>{
    console.log(`Server is running on http://localhost:${port}`)
});