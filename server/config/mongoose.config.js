const mongoose = require('mongoose')
//DB_EXPORT
module.exports = (DB) =>{ 
mongoose.connect('mongodb://127.0.0.1:27017/'+DB , {
    useNewUrlParser: true, 
    useUnifiedTopology: true
}
    ) //CONNECT_TO_DB_
    .then(() => console.log(`Connected SUCCESSFULLY to: ${DB} DATABASE ✨✨✨✨✨🚀🚀✌ `))
    .catch(err => console.log(`Something went wrong when connecting to the ${DB} database` , err));

}
