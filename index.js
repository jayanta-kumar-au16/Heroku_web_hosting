const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');
const port = 5000;
const app = express();
app.use(express.static('public'));
app.engine('hbs' , exphbs({ defaultLayout: 'index' , extname: 'hbs'}));
app.set('view engine' , 'hbs');


app.get('/hoverboard', (req,res) =>{

    res.render('Hoverboard');
});
app.get('/TicTacToe',(req,res)=>{
    res.sendFile(path.join(__dirname +'/ticTactoe.html'));
});

app.listen(port, ()=>{
    console.log("server started....");
});