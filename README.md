# Nexmo-DialogFlow TryIt 
Very simple DialogFlow/Nexmo integration with Agent Escalation

Install npm, node, and (if needed) install ngrok (to allow external access to the app)

npm install

Create a file called ".env" to store the following Environment Variables . 

`//********************ENVIRONMENT VARS******************** .

// API_KEY= 

// API_SECRET=  

// APPLICATION_ID= 

// PRIVATE_KEY_PATH= 

// NEXMO_NUMBER= 

// DIALOGFLOW_NUMBER= 

// BASE_URL= 

// SUPPORT_NUMBER=  

//********************END ENVIRONMENT VARS******************** 

`
The BASE_URL will probably be your ngrok address, such as "https://nexmo-demo.ngrok.io"

The SUPPORT_NUMBER is the phone number the customer will be forwarded to when they request an agent 

The DIALOGFLOW_NUMBER is the phone number of your DialogFlow Agent (as defined with the Phone Gateway Integration) 

The rest are your Nexmo credentials, keys, etc.  
 
If you have a free ngrok account, the ngrok URL will change each time you launch ngrok, so go ahead
and run this now, using port 3000:

  ngrok http 3000

Leave this running, and note the URL it is serving up as your BASE_URL.

When you have created your DialogFlow agent, make sure the Fulfillment Webhook is: 

(Your BASE_URL)/google . 

eg:  

 https://nexmo-demo.ngrok.io/google .
 

Set your Nexmo Answer URL to:  

(Your BASE_URL)/answer . 

eg:  

 https://nexmo-demo.ngrok.io/answer . 
 

When all is set up, run:  

node app . 


Note the port this is running on (most likely 3000) . 


Now, you can dial your Nexmo Number, and it should connect to the DialogFlow Agent.  

You transfer to the SUPPORT_NUMBER, say "agent" or "representative" (or whatever you set up in yout DF Intent)
 
