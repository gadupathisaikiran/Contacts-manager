const mongoose=require("mongoose")

const schema=mongoose.Schema;

const contactschema=new schema({
    firstName:{type:String},
    lastName: {type:String},
    email: {type:String,unique:true},
    phone:{type:Number,unique:true}
    
})

const contactmodel=mongoose.model("Contact",contactschema);

module.exports=contactmodel