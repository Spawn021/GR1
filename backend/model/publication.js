const mongoose = require("mongoose");

const publicationSchema = new mongoose.Schema({
  year: {
    type: String,
    required: true,
  },
  names: {
    type: [String],
    required: true,
  },
});

const Publication = mongoose.model("Publication", publicationSchema);

module.exports = { Publication };
