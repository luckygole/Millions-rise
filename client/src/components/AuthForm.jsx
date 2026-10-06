import {useState} from 'react';import {Link,Navigate,useLocation} from 'react-router-dom';import {useAuth} from '../context/AuthContext';
export default function AuthForm({mode}){const su=mode==='signup';const{user,login,register}=useAuth();const loc=useLocation();
 const[f,setF]=useState({name:'',email:'',phone:'',password:'',confirm:''}),[err,setErr]=useState(''),[busy,setBusy]=useState(false);
 if(user)return <Navigate to={user.role==='admin'?'/admin':loc.state?.from||'/'} replace/>;
 const on=k=>e=>setF({...f,[k]:e.target.value});
 const submit=async e=>{e.preventDefault();setErr('');if(su&&f.password!==f.confirm)return setErr('Passwords do not match');
  setBusy(true);try{su?await register({name:f.name,email:f.email,phone:f.phone,password:f.password}):await login(f.email,f.password)}catch(x){setErr(x.message==='Failed to fetch'?'Server not reachable':x.message);setBusy(false)}};
 return(<section className="sec"><div className="w"><form onSubmit={submit} className="card mx-auto max-w-md space-y-3 p-6"><span className="ey">Millions Rise</span>
 <h1 className="font-serif text-2xl text-ink">{su?'Create your account':'Welcome back'}</h1>
 {su&&<input className="inp" placeholder="Full name" required value={f.name} onChange={on('name')}/>}
 <input className="inp" type="email" placeholder="Email" required value={f.email} onChange={on('email')}/>
 {su&&<input className="inp" placeholder="Mobile (optional, 10 digits)" pattern="[0-9]{10}" value={f.phone} onChange={on('phone')}/>}
 <input className="inp" type="password" placeholder="Password" required minLength={su?8:1} value={f.password} onChange={on('password')}/>
 {su&&<input className="inp" type="password" placeholder="Confirm password" required value={f.confirm} onChange={on('confirm')}/>}
 {err&&<p className="text-sm text-red-600">{err}</p>}<button disabled={busy} className="btn w-full disabled:opacity-60">{busy?'Please wait…':su?'Sign Up':'Login'}</button>
 <p className="text-center text-sm text-slate-500">{su?<>Already have an account? <Link to="/login" className="font-bold text-brand">Login</Link></>:<>New here? <Link to="/signup" className="font-bold text-brand">Create an account</Link></>}</p></form></div></section>)}
