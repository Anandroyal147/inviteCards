const express = require('express')
var app = express();
const bodyParser = require('body-parser');
const port = 3800;
const cors = require('cors');
var admin = require('firebase-admin')

const serviceAccount = require('./serviceAccount.json');

app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}))

admin.initializeApp({
        credential: admin.credential.cert(serviceAccount),
        databaseURL: "https://tally-entry-default-rtdb.firebaseio.com"
    },
    console.log('Db Connected')
);
app.listen(port, () => {
    console.log("listening " + port)
})
app.post('/getall', (req, res) => {

    var firebaseAdmin = admin.database();
    var result = {}
    result = req.body.data
    firebaseAdmin.ref('data').push(result);
    console.log(result)
    res.send("its working" + result)
})