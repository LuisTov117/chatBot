const verificar = (req, res) => {
    res.send('Verificando...');
};

const recibir = (req, res) => {
    res.send('Recibiendo...');
};

module.exports = {
    verificar,
    recibir
};