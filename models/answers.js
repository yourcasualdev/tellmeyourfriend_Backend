const mongoose = require('mongoose');

const answerSchema = new mongoose.Schema({
    game: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Session',
        required: true
    },
    name: {
        type: String,
        required: true
    },
    answers:
        [{
            type: Object,
        }
        ]
    ,
    score: {
        type: Number,
        required: true
    },
});

const Answer = mongoose.model('Answer', answerSchema);
module.exports = Answer;