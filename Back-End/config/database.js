
const mongoose =require("mongoose")

const connectDatabase = () => {

    mongoose.connect(process.env.MONGODB_CONNECTION, () => {
    return    {useNewUrlParser: true,
        useUnifiedTopology: true}
    }).then((res) => {
        console.log(`MongoDB is connected to the host: ${res.connection.host} `);
    }).catch((err) => {
        console.log(err);
    })
}

module.exports =connectDatabase