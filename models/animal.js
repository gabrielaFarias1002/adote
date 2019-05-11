const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const _model = new Schema({
    codigo: {
        type:String,
        required: true
    },
    raca: String,
    cor: String,
    porte: String,
    idadeMedia: Number,
    cuidadosEspeciais: String,
});

mongoose.model('animal', _model);