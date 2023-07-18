const asyncHandler = require('express-async-handler')
const CreateNotification = require('../model/sendNotification.js')





//@route /api/bank/create-account
//@POST
const notificationCreation = async (req, res)=>{

    const createnotification = new CreateNotification({
        notificationType : req.body.notificationType,
        notificationSubType : req.body.notificationSubType,
        data: req.body.data,


    })

    try {
        const newCreatedNotification = await createnotification.save() //save to database
        res.status(201).json(newCreatedNotification);

        console.log(newCreatedNotification);
      } catch (err) {
        res.status(400).json({ message: err.message })
      }
}

module.exports = {
    notificationCreation
}

