const mongoose = require("mongoose")

const plantSchema = mongoose.Schema({
    image:{
        type: String,
    },
    family:{
        type: String,
    },
    genus:{
        type: String,
    },
    species:{
        type: String,
    },
    name:{
        type: String,
        required: true
    },
    hybrid:{
        type: Boolean,
    },
    description:{
        type: String,
    },
    cares:{
        type: String,
    },
    toxicity:{
        type: String,
    },
    stock:{
        type: Number,
    }
},
{ collection: 'Plants' });

module.exports = mongoose.model('Plant', plantSchema)