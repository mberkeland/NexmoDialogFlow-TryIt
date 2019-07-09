# Nexmo-DialogFlow TryIt 
Very simple DialogFlow/Nexmo integration with Agent Escalation

Install npm, node, and (if needed) install ngrok (to allow external access to the app)

npm install

Create a file called ".env" to store the following Environment Variables<br />
`//********************ENVIRONMENT VARS******************** . <br />
// API_KEY= .  <br />
// API_SECRET=  <br />
// APPLICATION_ID= . <br />
// PRIVATE_KEY_PATH= . <br />
// NEXMO_NUMBER= . <br />
// DIALOGFLOW_NUMBER= . <br />
// BASE_URL= . <br />
// SUPPORT_NUMBER= . <br />
//********************END ENVIRONMENT VARS******************** . <br />
`
The BASE_URL will probably be your ngrok address, such as "https://nexmo-demo.ngrok.io" . <br />
The SUPPORT_NUMBER is the phone number the customer will be forwarded to when they request an agent . <br />
The DIALOGFLOW_NUMBER is the phone number of your DialogFlow Agent (as defined with the Phone Gateway Integration) . <br />
The rest are your Nexmo credentials, keys, etc.  <br />
 
If you have a free ngrok account, the ngrok URL will change each time you launch ngrok, so go ahead
and run this now, using port 3000:

  ngrok http 3000

Leave this running, and note the URL it is serving up as your BASE_URL.

When you have created your DialogFlow agent, make sure the Fulfillment Webhook is:  <br />
(Your BASE_URL)/google . <br />
eg:  <br />
 https://nexmo-demo.ngrok.io/google . <br />

Set your Nexmo Answer URL to:  <br />
(Your BASE_URL)/answer . <br />
eg:  <br />
 https://nexmo-demo.ngrok.io/answer . <br />

When all is set up, run:  <br />
node app . <br />

Note the port this is running on (most likely 3000) . <br />

Now, you can dial your Nexmo Number, and it should connect to the DialogFlow Agent.  <br />
You transfer to the SUPPORT_NUMBER, say "agent" or "representative" (or whatever you set up in yout DF Intent)
 
