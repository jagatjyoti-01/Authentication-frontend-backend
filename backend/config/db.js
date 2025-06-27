const mongoose = require('mongoose'); // ✅ corrected typo

async function connectDB() {
    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("✅ Connected to the database successfully");
    } catch (err) {
        console.log("❌ Error connecting to the database", err);
        process.exit(1); // ❗ critical: stop server if DB fails
    }
}

module.exports = connectDB;
