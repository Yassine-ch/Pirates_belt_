const express = require('express');
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const app = express();
dotenv.config({path :'./.env'});
//PROCESS_FROM_.ENV
const PORT = process.env.PORT;
const DB = process.env.DB;
//_MIDDLEWARE
app.use(cookieParser());
app.use(cors({credentials: true, origin: 'http://localhost:3000'}));
app.use(express.json(), express.urlencoded({extends:true}));
//ROUTES_IMPORT
require('./config/mongoose.config')(DB);
require('./routes/pirates.route')(app)
require('./routes/user.route')(app)



app.listen(PORT, () => console.log(`Listening on port: ${PORT}`) );