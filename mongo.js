const mongoose = require('mongoose')
const mongoPath = "mongodb+srv://niksostr:PWwn075dkJo6bUTk@cluster0.lnihr.mongodb.net/Cluster0?retryWrites=true&w=majority"

//const { mongoPath } = require('./config.json')
module.exports = async () => {
  await mongoose.connect(mongoPath, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  return mongoose
}
