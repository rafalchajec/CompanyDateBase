const mongoose = require('mongoose');
const {Schema}= mongoose;
const RecipientSchema = require('./Reciptient');

const surveySchema= new Schema({

    title: {
        type: String
    },
    body: {
        type: String
    },
    subject: {
        type: String
    },
    recipients: {
        type: [RecipientSchema]
    },
    _user: {
        type: Schema.Types.ObjectId, ref: 'User'
    },
    dateSent: {
        type: Date
    }

});

mongoose.model('surveys', surveySchema);