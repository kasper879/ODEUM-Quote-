var mongoose = require('mongoose'); 

var Product = mongoose.model('Products', {
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
    }, 
    description: {
        type: String, 
        required: true,
        trim: true
    },
    subscription: {
        type: String,
        required: true, 
        trim: true,
        enum: ['onetime','hourly','monthly','quarterly', 'yearly'] 
    },
    amount: {
        type: Number, 
        required: true, 
        min: 1
    }, 
    discount: {
        type: Number 
    }
}); 
module.exports = {Product};