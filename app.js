const axios = require('axios');

const notificationData = {
  // Fill in the required data for your notification
};

axios.post('http://your-server-url/ipn', notificationData)
  .then(response => {
    console.log('Notification sent successfully');
  })
  .catch(error => {
    console.error('Error sending notification:', error);
  });
