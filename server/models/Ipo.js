const m=require('mongoose');
module.exports=m.model('Ipo',new m.Schema({name:{type:String,required:true},status:{type:String,enum:['cur','up','lst'],required:true},open:String,close:String,priceBand:String,lot:String,issueSize:String,listing:String,subscription:String,gmp:String},{timestamps:true}));
