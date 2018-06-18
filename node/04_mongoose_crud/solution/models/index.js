const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/items-db");
mongoose.set("debug", true);

module.exports.Item = require("./Item");
