// Verifies JWT and loads the user from MongoDB on every request, so role changes in the DB apply immediately.
const jwt=require('jsonwebtoken'),User=require('../models/User');
module.exports=async(q,s,n)=>{try{const{id}=jwt.verify((q.headers.authorization||'').replace('Bearer ',''),process.env.JWT_SECRET);const u=await User.findById(id).select('-password');if(!u)throw new Error('no user');q.user=u;n()}catch{s.status(401).json({error:'Unauthorized'})}};
