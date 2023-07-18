const mongoose = require('mongoose')

const notificationSchema = new mongoose.Schema({

  notificationType: {
    type: String,
    required: true
  },

  notificationSubType: {
    type: String,
    required: true,
  },


  data: {
      type:Object,

    amount:{
      type: String,
      required:true

    },
    transactionType:{
      type:String,
      required:true

    },
    transactionReference:{
      type:String,
      required:true
    },
    CBSReference:{
        type:String,
        required:true
    },
    mobileNumber: {
      type:String,
      required: true
    },

    momoReference: {
      type:String,
      required: true
    },

    custAccount:{
      type: String,
      required: true

    },

    timestamp:{
      type: Date,
      required:true

    },

  },

  creationDate: {
    type: Date,
    required: true,
    default: Date.now
  }

  }
)

module.exports = mongoose.model('SendNotifications', notificationSchema)