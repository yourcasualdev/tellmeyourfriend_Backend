const mongoose = require('mongoose');

const sessionSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    questions: [
        {
            type: Object,
            required: true
        }
    ],
    leaderboard: [
        {
            type: Object,
        }
    ],
});

module.exports = mongoose.model('Session', sessionSchema);