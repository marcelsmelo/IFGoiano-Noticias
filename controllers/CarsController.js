module.exports = {
    esportivos: (req, res) => {
        let resposta = require('../esportivos.json');
        res.status(200).json(resposta);
    },
    classicos: (req, res) => {
        let resposta = require('../classicos.json');
        res.status(200).json(resposta);
    },
}