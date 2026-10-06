const m=require('mongoose');
module.exports=m.model('Lead',new m.Schema({name:{type:String,required:true,trim:true,maxlength:80},phone:{type:String,required:true,match:/^[0-9]{10}$/},interest:{type:String,maxlength:60}},{timestamps:true}));
