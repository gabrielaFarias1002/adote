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

_model.virtual('total').get(function() {
    return this.itens ? this.itens.reduce((total, item) => total + (item.preco * item.quantidade), 0) : 0;
})

mongoose.model('adote', _model);