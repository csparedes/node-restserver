//puerto
process.env.PORT = process.env.PORT || 3000;



//entorno
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

//vencimiento del token
process.env.CADUCIDAD_TOKEN = 60 * 60 * 24 * 30;

//seed de autenticación
process.env.SEED = process.env.SEE || 'este-es-el-seed-desarrollo';



//base de datos
let urlDB;

if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:27017/cafe'
} else {
    urlDB = process.env.MONGO_URI;
}

process.env.URLDB = urlDB;