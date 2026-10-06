import {Fragment,useState} from 'react';import {TT} from '../lib/data';import {useIpos} from '../lib/api';import Head from '../components/Head';import ApplyModal from '../components/ApplyModal';
const L=['Open – Close','Price Band','Lot Size','Issue Size','Listing','Subscription','GMP'];
export default function Ipo(){const ipos=useIpos();const[s,setS]=useState('cur');const[ap,setAp]=useState(null);
return(<section className="sec"><div className="w"><Head e="IPO Corner" t="Current, upcoming & listed IPOs" s="Existing Motilal Oswal client? Login and apply. New? Open a demat account."/>
<div className="mb-4 flex flex-wrap gap-2">{Object.keys(TT).map(k=><button key={k} onClick={()=>setS(k)} className={`rounded-full border px-4 py-1.5 text-sm font-semibold ${s===k?'border-ink bg-ink text-white':'border-slate-200'}`}>{TT[k]}</button>)}</div>
<div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">{ipos.filter(x=>x.s===s).map(x=><div key={x.n} className="card"><div className="flex justify-between gap-2"><h3 className="font-serif text-lg text-ink">{x.n}</h3><span className="h-fit rounded-full bg-amber-50 px-2 py-0.5 text-[10px] font-extrabold text-gold">{TT[x.s]}</span></div>
<dl className="my-3 grid grid-cols-2 gap-x-3 gap-y-1.5 text-xs">{L.map((l,i)=><Fragment key={l}><dt className="text-slate-500">{l}</dt><dd className="font-bold">{[x.o+' – '+x.c,x.p,x.l,x.i,x.ld,x.sub,x.g][i]}</dd></Fragment>)}</dl>
{s!=='lst'&&<button className="btn w-full" onClick={()=>setAp(x.n)}>Apply Now</button>}</div>)}</div>
<p className="mt-4 text-xs text-slate-500">Sample data until IPOs are added from /admin. GMP is unofficial and not a guarantee. IPO investments are subject to market risk; read the RHP before applying.</p></div><ApplyModal name={ap} onClose={()=>setAp(null)}/></section>)}
