const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI, {  // Connect and stop warnings in the console
            useNewUrlParser: true,
            useUnifiedTopology: true
        })

      console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
}

module.exports = connectDB  // So we can use this on the app.js file