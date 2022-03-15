const express = require('express')
var app = express();
const bodyParser = require('body-parser');
const port = 3600;
//const firebase = require('firebase');
const fireApp = require('@firebase/app');
const cors = require('cors');
const sgMail = require('@sendgrid/mail');

//var firebaseauth = require('firebase/auth')
var admin = require('firebase-admin')

const serviceAccount = require('./serviceAccount.json');

app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}))

admin.initializeApp({
        credential: admin.credential.cert(serviceAccount),
        databaseURL: "https://invitecards-952f3-default-rtdb.firebaseio.com"
    },
    console.log('Db Connected')
);
app.listen(port, () => {
    console.log("listening " + port)
})
var firebaseAdmin = admin.database();


app.post('/signup', (req, res) => {
    var result = {}
    var final_response = {};
    result = req.body.data
    var name = result.name
    var email = result.u_email
    var password = result.password
    const ref = firebaseAdmin.ref('users');
    var isSent = false;

    ref.orderByChild('u_email').once('value', (snapshot) => {
        if (snapshot.val() != null) {
            snapshot.forEach(child => {
                console.log('Data Available----->', child.val().u_email, email)
                if (child.val().u_email != email) {
                    console.log(snapshot.key + ' was ' + snapshot.val().u_email);
                    signup()
                    console.log(result)
                } else {
                    if (!isSent) {
                        isSent = true;
                        final_response = { message: 'This email address is already Registered, Please Log In.' }
                        res.send(final_response)
                    }
                }
            });
        } else {
            console.log('No Data----->', snapshot.val())
            signup()
        }
    });

    function signup() {
        admin.auth().createUser({
                email: email,
                emailVerified: false,
                password: password,
                displayName: name,
                disabled: false
            })
            .then((userCredential) => {
                var successmsg = "User Registered Successfully"
                final_response = { message: successmsg }
                if (!isSent) {
                    isSent = true
                    res.send(final_response)
                }
                console.log('success--->', userCredential)
            })
            .catch((error) => {
                var successmsg = "User Registered Successfully"
                final_response = { message: successmsg }
                if (!isSent) {
                    isSent = true
                    res.send(final_response)
                }
            });
        firebaseAdmin.ref('users').push(result);
        console.log(result)
    }
})



app.post('/login', async(req, res) => {
    var result = {}
    console.log('login Data------>', req.body.data)
    var password = req.body.data.password
    var email = req.body.data.usrname
    await admin.auth().getUserByEmail(req.body.data.usrname)
        .then((user) => {
            currentUser = user.toJSON();
            console.log(currentUser)
            ref.orderByChild('u_email').equalTo(email).once('value', (snapshot) => {
                console.log("data available", snapshot.val());
                // if (snapshot.val() != null) {
                //     snapshot.forEach(child => {
                //         console.log('Data Available----->', child.val().u_email, email)

                //     });
                // } else {
                //     console.log('No Data----->', snapshot.val())
                //     signup()
                // }
            });

            if (password)
                res.status(200).send(JSON.stringify(currentUser));
        }).catch(err => {
            result = {
                message: 'Email or password invalid!'
            }
            res.status(200).send(result)
            console.log(err);
        });
})
app.post('/getall', (req, res) => {
    var result = []
    const dbRef = admin.database().ref();
    const redisGet = () => new Promise((resolve, reject) => {
        dbRef.child("data").on('value', snapshot => {
            if (snapshot.exists) {
                snapshot.forEach(child => {
                    result.push(child.val())
                    if (snapshot.numChildren() == result.length)
                        resolve(result)
                    console.log(child.val());
                });
            } else {
                reject("err")
                console.log("No data available");
            }
        });
    });
    redisGet().then((data) => { res.send(data) }).catch((err) => {});
})

app.post('/getallProducts', (req, res) => {
    var result = []
    const dbRef = admin.database().ref();
    const redisGet = () => new Promise((resolve, reject) => {
        dbRef.child("products").on('value', snapshot => {
            if (snapshot.exists) {
                snapshot.forEach(child => {
                    result.push(child.val())
                    if (snapshot.numChildren() == result.length)
                        resolve(result)
                    console.log(child.val());
                });
            } else {
                reject("err")
                console.log("No data available");
            }
        });
    });
    redisGet().then((data) => { res.send(data) }).catch((err) => {});
})
app.post('/store', (req, res) => {
    const dbRef = admin.database();
    var result = {}
    result = req.body.data
    dbRef.ref('data').push(result);
    console.log(result)
    res.send("its working" + result)
})


app.post('/products', (req, res) => {
    var result = {
        name: req.body.data.name,
        description: req.body.data.description,
        imgUrl: req.body.data.productImgUrl.imgUrl
    }
    firebaseAdmin.ref('products').push(result);
    console.log('products===>', result)
    res.send("its working" + result)
})

app.post('/contactUs', (req, res) => {
    apikey = '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'
    var contactDetails = req.body.data
    console.log('contactDetails--->', contactDetails)
    sgMail.setApiKey(apikey);
    const msg = {
        to: 'anandmar883@gmail.com',
        from: 'anandntech147@gmail.com',
        subject: 'Sending with SendGrid is Fun',
        contactDetails: contactDetails,
        html: '<strong>Name:</strong>',
    };
    sgMail.send(msg)
        .then((response) => {
            console.log(response[0].statusCode)
            console.log(response[0].headers)
        })
        .catch((error) => {
            console.error(error)
        })
    var successmsg = "successfully submitted"
    final_response = { message: successmsg }
    res.send(final_response)

})