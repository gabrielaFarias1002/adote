const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const _model = new Schema({
    cliente: {
        required: true,
        type: Schema.Types.ObjectId,
        ref: 'clientes'
    },
    emissao: Date,
    animal: [{
        animal: {
            required: true,
            type: Schema.Types.ObjectId,
            ref: 'animal'
        },
        cartaoFidelidade: Number
    }]
});

mongoose.model('adote', _model);