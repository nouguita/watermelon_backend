const express = require('express');
const bodyParser = require('body-parser');
const app = express();


app.use(bodyParser.urlencoded({extended: true}));


/****************************/
/********** TRANSFERS ***********/
/****************************/

app.get('/transfers', function (req, res) {
    let response = {"page": "wallets"};
    res.send(JSON.stringify(response));
});
