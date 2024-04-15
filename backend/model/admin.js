const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate-v2");

const adminSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});
adminSchema.plugin(mongoosePaginate);
const Admin = mongoose.model("Admin", adminSchema);
module.exports = { Admin };
