const r=require('express').Router(),User=require('../models/User'),auth=require('../middleware/auth'),admin=require('../middleware/admin'),wrap=require('../utils/wrap');
r.get('/',auth,admin,wrap(async(q,s)=>s.json(await User.find().select('-password').sort({createdAt:-1}).limit(500))));
module.exports=r;
