var mongoose=require('mongoose');
var Schema=mongoose.Schema;


var CategorySchema=new Schema({
    name:{type:Schema.Types.String,required:true,unique:true},
    createdOn:{type:Schema.Types.Date,required:true},
    description:{type:Schema.Types.String,required:true}
})

module.exports=mongoose.model('Category',CategorySchema);