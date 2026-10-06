module.exports=f=>(q,s,n)=>f(q,s,n).catch(e=>s.status(400).json({error:e.code===11000?'This email is already registered':e.message}));
