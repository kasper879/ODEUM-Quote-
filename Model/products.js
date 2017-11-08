
var mongoose = require('mongoose'); 

var Products = mongoose.model('Products', {
    name: {
        type: String, 
        required: true, 
        trim: true,
        minlength: 1
    }, 
    price: {
        type: Number, 
        required: true, 
        min: 1
        
    }
}); 
module.exports = {Products};