module.exports = async function (context, myQueueItem) {
    context.log('JavaScript queue trigger function processed work item', myQueueItem);
    const phoneNumber = Buffer.from(myQueueItem, 'base64').toString('ascii');  // Decode the base64-encoded phone number
    try {
        const response = await axios.post('https://graph.facebook.com/v19.0/100475249568306/messages', {
            "messaging_product": "whatsapp",
            "recipient_type": "individual",
            "to": phoneNumber,
            "type": "text",
            "text": {
                "preview_url": false,
                "body": phoneNumber // You can modify here if you want to send a different message
            }

        }, {

            headers: {

                'Authorization': 'Bearer EAALrDxxxxxxx',

                'Content-Type': 'application/json'

            }

        });



        context.log('Message sent successfully:', response.data);

    } catch (error) {

        context.log('Error sending message:', error);

    }



    // Wait 10 seconds before allowing another execution

    await new Promise(resolve => setTimeout(resolve, 10000));

};