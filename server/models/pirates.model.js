// Import mongoose to build a model ===========>

const mongoose = require('mongoose');

// The Schema

const PirateSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "{PATH} is required."],
        minLength: [3, "{PATH} must be more than 3 characters"]
    },

    image: {
        type: String,
        required: [true, "{PATH} is required."],
        minLength: [10, "{PATH} must be more than 10 characters"]
       
       
    },
    treasure:{
        type: Number,
        required : [true, "{PATH} is required.t"],
        min :0,

    },

    piratecatch:{
        type: String,
        required: [true, "{PATH} is required."],
    },

    crewposition:{
        type: String,
        required: [true, "{PATH} is required."]
    },
    
    pegleg: {
        type: Boolean,
        default: true
    
    },
    eyepatch: {
        type: Boolean,
        default: true
    
    },
    hookhand: {
        type: Boolean,
        default: true
    
    }


}, { timestamps: true })

const Pirate = mongoose.model('Pirate', PirateSchema);


module.exports = Pirate;