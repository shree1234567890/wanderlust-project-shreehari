const mongoose = require("mongoose");
const Listing = require("../models/listing");
const { data } = require("./data");

const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";

async function seedDB() {
    await mongoose.connect(MONGO_URL);

    await Listing.deleteMany({});

const newData = data.map((obj) => ({
    ...obj,
    owner: "69f4f8872b37aa98d138afe3",
}));

await Listing.insertMany(newData);
    console.log("Database seeded");
    mongoose.connection.close();
}

seedDB();

