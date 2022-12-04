const app = require('./app');


// Configration of dotenv
const dotenv = require('dotenv');
dotenv.config({path : './config/config.env'});

// Connecting to DB
const {connectDatabase} = require('./config/dbconn');
connectDatabase(process.env.DB_URL);





app.listen(process.env.PORT,()=>{
    console.log(`Server is runnig on port ${process.env.PORT}`);
})





