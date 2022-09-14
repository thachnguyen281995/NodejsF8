const mongoose = require("mongoose");
async function connect() {
    try {
        mongoose.connect("mongodb://localhost:27017/thach_dev");
        console.log("Connect SuccessFully!");
    } catch (err) {
        console.log("Fail");
    }
};
module.exports = { connect };
