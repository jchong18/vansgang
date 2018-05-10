var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var UserSchema = new Schema(
  {
    user_id: {type: String, required: true, max: 15},
    first_name: {type: String, required:true, max: 30},
    family_name: {type: String, required: true, max: 30},
  }
);

// Virtual for user's full name
UserSchema
.virtual('name')
.get(function () {
  return this.family_name + ', ' + this.first_name;
});

//Export model
module.exports = mongoose.model('User', UserSchema);