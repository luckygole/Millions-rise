import {useState} from 'react';import {F} from '../lib/data';import {api} from '../lib/api';import Head from '../components/Head';
export default function Compare(){const[a,setA]=useState(0),[b,setB]=useState(1),[q,setQ]=useState(''),[res,setRes]=useState([]),[nav,setNav]=useState(null),[err,setErr]=useState('');
const search=async v=>{setQ(v);try{setRes(await api('/funds/search?q='+encodeURIComponent(v)));setErr('')}catch{setErr('Backend not connected.')}};
const pick=async c=>{try{setNav(await api('/funds/'+c));setRes([])}catch(e){setErr(e.message)}};
const sel=(v,f)=><select className="inp" value={v} onChange={e=>f(+e.target.value)}>{F.map((x,i)=><option key={x[0]} value={i}>{x[0]}</option>)}</select>;
return(<section className="sec"><div className="w"><Head e="Mutual Funds" t="Compare funds" s="Pick two funds to compare. Sample values; live NAV search below uses real AMFI data."/>
<div className="grid gap-3 sm:grid-cols-2">{sel(a,setA)}{sel(b,setB)}</div>
<div className="card mt-4 overflow-x-auto"><table className="w-full text-left text-sm"><thead><tr><th/><th className="p-2">{F[a][0]}</th><th className="p-2">{F[b][0]}</th></tr></thead><tbody>{['Category','Risk','3Y return','5Y return','Expense ratio'].map((r,j)=><tr key={r} className="border-t border-slate-100"><td className="p-2 text-slate-500">{r}</td><td className="p-2">{F[a][j+1]}</td><td className="p-2">{F[b][j+1]}</td></tr>)}</tbody></table></div>
<h2 className="h2 mt-10">Live NAV search</h2><input className="inp" value={q} onChange={e=>search(e.target.value)} placeholder="Scheme name, e.g. flexi cap"/>{err&&<p className="mt-2 text-sm text-red-600">{err}</p>}
{res.map(f=><button key={f.schemeCode} onClick={()=>pick(f.schemeCode)} className="mt-2 block w-full rounded-lg border border-slate-200 p-3 text-left text-sm hover:border-gold">{f.schemeName}</button>)}
{nav&&<div className="card mt-3"><h3 className="font-serif text-ink">{nav.meta.scheme_name}</h3><p className="text-sm text-slate-500">{nav.meta.scheme_category}</p><p className="font-serif text-2xl text-ink">NAV ₹{nav.latest.nav} <small className="text-sm">({nav.latest.date})</small></p></div>}</div></section>)}
