const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const _model = new Schema({
    codigo: {
        type:String,
        required: true
    },
    raca: String,    
    idadeMedia: Number,
    porte: String,
    cor: String,
});

mongoose.model('animal', _model);