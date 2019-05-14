const mongoose = require('mongoose');
const adoteModel = mongoose.model('adote');

module.exports = function (app) {
    app.get('/adote', function (req, resp) {
        adoteModel.find({}, ['emissao', 'cliente', 'itens.animal'], {sort: {emissao: 1}})
            .populate('cliente', 'documento nome email')
            .populate('animal', 'raca')
            .then(
                function (data) {
                    resp.status(200).send(data);
                }, 
                function (err) {
                    resp.status(500).send(err);
                }
            );
    });
    app.post('/adote', function (req, resp) {
        adoteModel.create(req.body)
            .then(
                function (data) {
                    resp.status(201).send(data);
                },
                function (err) {
                    resp.status(500).send(err);
                }
            );
    });
    app.get('/adote/:id', function (req, resp) {
        adoteModel.findById(req.params.id)
            .populate('cliente')
            .populate('itens.animal')
            .then(
                function (data) {
                    if (!data) {
                        resp.status(404).send();
                    } else {
                        resp.status(200).send(data);
                    }
                },
                function (err) {
                    resp.status(500).send(err);
                }
            );
    });
    app.put('/adote/:id', function (req, resp) {
        adoteModel.findOneAndUpdate({ '_id': req.params.id }, req.body)
            .then(
                function (data) {
                    if (!data) {
                        resp.status(404).send();
                    } else {
                        resp.status(200).send(data);
                    }
                },
                function (err) {
                    resp.status(500).send(err);
                }
            );
    });
    app.delete('/adote/:id', function (req, resp) {
        adoteModel.deleteOne({ '_id': req.params.id })
            .then(
                function () {
                    resp.status(204).send();
                },
                function (err) {
                    resp.status(500).send(err);
                }
            );
    });
}