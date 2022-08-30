var mongoose  = require('mongoose')

var contactSchema = mongoose.Schema({
name:{
    type: String
},
email:{
    type: String
},

subject:{
    type: String
    },

message:{
type: String
}


});

var contactmodel  = mongoose.model('Slabing', contactSchema);
module.exports= contactmodel;
