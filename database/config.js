const mongoose = require('mongoose')



const dbConnection = async() => {
    try {
        await mongoose.connect(process.env.DB_CNN);
        console.log('Db Online');
    } catch (error) {
        console.log(error);
        throw new Error('Erro a la hora de inicializar la base de datos')

    }


}

module.exports = {
    dbConnection
}