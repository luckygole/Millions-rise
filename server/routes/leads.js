const r=require('express').Router(),rateLimit=require('express-rate-limit'),Lead=require('../models/Lead'),auth=require('../middleware/auth'),admin=require('../middleware/admin'),wrap=require('../utils/wrap');
r.post('/',rateLimit({windowMs:60*60e3,max:10}),wrap(async(q,s)=>{const{name,phone,interest}=q.body;await Lead.create({name,phone,interest});s.status(201).json({ok:true})}));
r.get('/',auth,admin,wrap(async(q,s)=>s.json(await Lead.find().sort({createdAt:-1}).limit(500))));
module.exports=r;
