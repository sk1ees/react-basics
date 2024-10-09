// const mongoose = require('mongoose')
// const mongoURI = "mongodb://localhost:27017/"

// const connectToMongo = () => {
//     mongoose.connect(mongoURI)
//     .then(() => { console.log("Connected!") })
//     .catch((e) => { console.log(e.messsage) })
// }

// module.exports = connectToMongo;

const mongoose = require("mongoose")
const mongoURI ="mongodb://localhost:27017/iNoteBook"

const connectToMongo = ()=>{
    mongoose.connect(mongoURI)
    .then(()=>{console.log("Connected")})
    .catch((e)=>{console.log(e.message)})
}
module.exports = connectToMongo;