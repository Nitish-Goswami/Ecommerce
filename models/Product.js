const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    name : {
        type : String,
        required : [true,"Please enter product name."]
    },
    description : {
        type : String,
        required : [true,"Please enter product description."]
    },
    price : {
        type : Number,
        required : [true,"Please enter product price."],
        maxLength : [8,"Price can not exceed 8 digit"]
    },
    rating : {
        type : Number,
        default : 0
    },
    images : [
        {
            public_id : {
                type : String,
                required : true
            },
            url : {
                type : String,
                required : true
            }
        }
    ],
    category : {
        type : String,
        required : [true , "Please Enter product category"]
    },
    stock :{
        type : Number,
        required : [true , "Please Enter product stock"],
        maxLength : [4 , "Please Enter valid stock"],
        default : 1
    },
    numOfReviews : {
        type : Number,
        default : 1

    },
    reviews : [
        {
            name : {
                type : String,
                required :true,
            },
            rating : {
                type : Number,
                required : true
            },
            Comment :{
                type : String,
                required : true
            }
        }
    ],
    createdAt : {
        type : Date,
        default : Date.now()
    }


});

module.exports = mongoose.model("Product",productSchema);