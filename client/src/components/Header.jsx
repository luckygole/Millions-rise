import {useState} from 'react';import {Link,NavLink,useNavigate} from 'react-router-dom';
import logo from '../assets/logo.png';import {C} from '../lib/calculators';import {CFG} from '../config';import {useAuth} from '../context/AuthContext';
const NAV=[['Home','/'],['About Us','/about'],['Financial Solutions','/services'],['Mutual Funds','/compare',[['Compare Funds','/compare'],['Risk Profile Quiz','/risk']]],
['Tools & Calculators','/calculators/sip',Object.keys(C).map(k=>[C[k].n,'/calculators/'+k])],['Insights','/blogs',[['Blogs','/blogs'],['FAQs','/faq']]],['IPO Corner','/ipo'],['Contact','/contact']];
const PG={'ipo corner':'/ipo','compare funds':'/compare','risk profile':'/risk',services:'/services',contact:'/contact'};
export default function Header(){const[o,setO]=useState(false);const nav=useNavigate();const{user,logout}=useAuth();
 const go=e=>{const v=e.target.value.toLowerCase(),k=Object.keys(C).find(k=>C[k].n.toLowerCase()===v);if(k||PG[v]){nav(k?'/calculators/'+k:PG[v]);e.target.value=''}};
 return(<header className="sticky top-0 z-30 border-b border-slate-200 bg-white">
 <div className="w flex items-center gap-4 py-2.5"><Link to="/"><img src={logo} alt="Millions Rise" className="h-12 w-auto"/></Link>
 <input list="sl" onChange={go} placeholder="Search funds, services, calculators…" className="inp mx-auto hidden max-w-sm lg:block"/>
 <datalist id="sl">{Object.keys(C).map(k=><option key={k} value={C[k].n}/>)}{['IPO Corner','Compare Funds','Risk Profile','Services','Contact'].map(x=><option key={x} value={x}/>)}</datalist>
 <div className="ml-auto hidden items-center gap-4 text-sm font-bold lg:flex"><a href={'tel:'+CFG.tel}>📞 {CFG.phone}</a><a href={CFG.waLink} target="_blank" rel="noreferrer">WhatsApp</a><Link to="/contact" className="btn">Book a Consultation</Link></div>
 <button className="ml-auto text-2xl lg:hidden" onClick={()=>setO(!o)} aria-label="Menu">☰</button></div>
 <div className={`border-t border-slate-200 ${o?'block':'hidden'} lg:block`}><div className="w lg:flex lg:items-center lg:justify-between">
 <nav className="py-2 lg:flex lg:py-0">{NAV.map(([t,to,sub])=>(<div key={t} className="group relative">
  <NavLink to={to} onClick={()=>setO(false)} className="block border-b-2 border-transparent px-3 py-3 text-[13px] font-semibold hover:border-gold">{t}</NavLink>
  {sub&&<div className="hidden lg:absolute lg:left-0 lg:top-full lg:z-40 lg:min-w-[220px] lg:rounded-xl lg:border lg:border-slate-200 lg:bg-white lg:p-1.5 lg:shadow-xl lg:group-hover:block">{sub.map(([a,b])=><Link key={a} to={b} onClick={()=>setO(false)} className="block rounded-md px-3 py-1.5 text-[13px] hover:bg-slate-50">{a}</Link>)}</div>}</div>))}</nav>
 <div className="mb-3 flex flex-wrap items-center gap-2 lg:mb-0"><a href={CFG.login} target="_blank" rel="noreferrer" className="px-2 text-[13px] font-semibold hover:text-gold">↗ Client Portal</a>
 {user?<><span className="text-[13px] font-semibold">Hi, {user.name.split(' ')[0]}</span>{user.role==='admin'&&<Link to="/admin" onClick={()=>setO(false)} className="btn btn-o px-3 py-1.5 text-[13px]">Admin Panel</Link>}<button onClick={()=>{logout();setO(false);nav('/')}} className="btn px-3 py-1.5 text-[13px]">Logout</button></>
 :<><Link to="/login" onClick={()=>setO(false)} className="btn btn-o px-4 py-1.5 text-[13px]">Login</Link><Link to="/signup" onClick={()=>setO(false)} className="btn px-4 py-1.5 text-[13px]">Sign Up</Link></>}</div></div></div></header>)}
