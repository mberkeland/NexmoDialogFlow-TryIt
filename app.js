require('dotenv').config()
var express = require('express');
var bodyParser = require('body-parser');
var Nexmo = require('nexmo');
var nexmo = new Nexmo({
    apiKey: process.env.API_KEY,
    apiSecret: process.env.API_SECRET,
    applicationId: process.env.APPLICATION_ID,
    privateKey: process.env.PRIVATE_KEY_PATH,
}, {
        debug: true
    });

var CONVERSATION_UUID;
var USER;

//********************ENVIRONMENT VARS********************
// API_KEY=
// API_SECRET=
// APPLICATION_ID=
// PRIVATE_KEY_PATH=
// NEXMO_NUMBER=
// DIALOGFLOW_NUMBER=
// BASE_URL=
// SUPPORT_NUMBER=
//********************END ENVIRONMENT VARS********************

//********************NOTE********************
// Ngrok url must be updated to DialogFlow fulfillment URL, Nexmo Voice application
//********************End Note********************

const port = process.env.PORT || 3000;
const app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

app.get("/answer", (req, res) => {
    USER = req.query.from;
    CONVERSATION_UUID = req.query.uuid;
    var nexmo_ncco = {
        action: "connect",
        timeout: "0",
        from: process.env.NEXMO_NUMBER,
        endpoint: [{
            type: "phone",
            number: process.env.DIALOGFLOW_NUMBER
        }]
    }
    console.log("IN ANSWER: ", req.query, nexmo_ncco);
    res.send([nexmo_ncco]);
})

// CALLED FROM DIALOG FLOW ACTION
app.all("/google", (req, res) => {
    console.log("************************************")
    console.log("GOOGLE REQ: ", req.body);
    nexmo.calls.update(CONVERSATION_UUID, {
        action: 'transfer',
        destination: {
            "type": "ncco",
            "url": [process.env.BASE_URL + "/agent-escalation"]
        }
    }, (err, res) => {
        if (err) {
            console.error(err);
        } else {
            console.log(res);
        }
    });

    console.log("************************************")

    res.sendStatus(200)
})

app.all("/agent-escalation", (req, res) => {
    console.log("IN: customer service contact");
    res.status(200).send([
        {
            "action": "talk",
            "text": "Connecting your call, please wait."
        },
        {
            action: "connect",
            timeout: "10",
            from: USER,
            endpoint: [{
                type: "phone",
                number: process.env.SUPPORT_NUMBER
            }]
        }])
})

// Start server
app.listen(port, () => {
    console.log('Express server started on port ' + port);
})