import {useState} from 'react';import {C} from '../lib/calculators';
const G='#4aa83c',B='#1f3a93',AC='#2f55d4';
const fmt=n=>'₹'+Math.round(n).toLocaleString('en-IN');
const sh=n=>n>=1e7?+(n/1e7).toFixed(2)+' Cr':n>=1e5?+(n/1e5).toFixed(2)+' L':Math.round(n).toLocaleString('en-IN');
const nice=m=>{const e=Math.pow(10,Math.floor(Math.log10(m))),f=m/e;return(f<=1?1:f<=2?2:f<=5?5:10)*e};

function Donut({a,b,l}){const t=a+b||1,pa=a/t*100,R=40,Cc=2*Math.PI*R;
 return(<svg viewBox="0 0 120 120" className="mx-auto h-44 w-44 -rotate-90" role="img" aria-label="Invested vs gains pie chart">
 <circle cx="60" cy="60" r={R} fill="none" stroke={B} strokeWidth="22"><title>{l[1]}: {fmt(b)} ({(100-pa).toFixed(1)}%)</title></circle>
 <circle cx="60" cy="60" r={R} fill="none" stroke={G} strokeWidth="22" strokeDasharray={`${Cc*pa/100} ${Cc}`}><title>{l[0]}: {fmt(a)} ({pa.toFixed(1)}%)</title></circle></svg>)}

function Bars({s,l}){const W=400,H=220,L=48,Bt=26,T=8,R=8,iw=W-L-R,ih=H-Bt-T,n=s.length;
 const mx=nice(Math.max(...s.map(x=>x[0]+x[1]),1)),bw=Math.min(34,iw/n*.62),step=Math.ceil(n/10),y=v=>T+ih-v/mx*ih;
 return(<svg viewBox={`0 0 ${W} ${H}`} className="w-full" role="img" aria-label="Year-wise projected value chart">
 {[0,1,2,3,4].map(i=>{const v=mx*i/4;return<g key={i}><line x1={L} x2={W-R} y1={y(v)} y2={y(v)} stroke="#e5eaf2"/><text x={L-5} y={y(v)+3} textAnchor="end" fontSize="9" fontWeight="700">{sh(v)}</text></g>})}
 {s.map(([a,b],i)=>{const cx=L+iw/n*(i+.5);return(<g key={i} className="hover:opacity-75"><title>{`Year ${i+1}\n${l[0]}: ${fmt(a)}\n${l[1]}: ${fmt(b)}\nTotal: ${fmt(a+b)}`}</title>
  <rect x={cx-bw/2} y={y(a)} width={bw} height={y(0)-y(a)} fill={G}/><rect x={cx-bw/2} y={y(a+b)} width={bw} height={Math.max(y(a)-y(a+b),0)} fill={B}/>
  {i%step===0&&<text x={cx} y={H-9} textAnchor="middle" fontSize="9" fontWeight="700">{i+1}</text>}</g>)})}
 <line x1={L} x2={L} y1={T} y2={y(0)} stroke="#222"/><line x1={L} x2={W-R} y1={y(0)} y2={y(0)} stroke="#222"/></svg>)}

const Dot=({c})=><i className="mr-1.5 inline-block h-2 w-2 rounded-full" style={{background:c}}/>;

export default function CalcWidget({id,compact}){const c=C[id];
 const[raw,setRaw]=useState(()=>Object.fromEntries(c.f.map(f=>[f[0],f[2]])));
 const v=Object.fromEntries(c.f.map(([k,,,mn,mx])=>[k,Math.min(mx,Math.max(mn,+raw[k]||mn))]));
 const o=c.k(v),l=o.l||['Invested Amount','Growth'],t=o.b[0]+o.b[1]||1,pa=(o.b[0]/t*100).toFixed(0);
 const box='rounded-2xl border border-blue-700/60 bg-white p-5';
 return(<div className={`grid gap-4 ${compact?'':'lg:grid-cols-2'}`}>
 <div className={box}>
  {c.f.map(([k,lb,,mn,mx,st])=><div key={k} className="mb-5"><div className="flex items-center justify-between gap-3"><label htmlFor={id+k} className="text-sm font-semibold">{lb}</label>
   <input id={id+k} type="number" inputMode="decimal" min={mn} max={mx} step={st} value={raw[k]} onChange={e=>setRaw({...raw,[k]:e.target.value})} onBlur={()=>setRaw({...raw,[k]:v[k]})} className="w-32 rounded-lg bg-green-50 px-3 py-2 text-right text-sm font-bold outline-none focus:ring-2 focus:ring-blue-300"/></div>
   <input type="range" aria-label={lb} min={mn} max={mx} step={st} value={v[k]} onChange={e=>setRaw({...raw,[k]:+e.target.value})} className="mt-2 w-full" style={{accentColor:AC}}/></div>)}
  <div className="mt-6 rounded-xl border border-slate-200 px-4">{o.r.map(([a,b])=><div key={a} className="flex items-center justify-between gap-3 border-b border-slate-100 py-3 last:border-0"><span className="text-sm text-slate-500">{a}</span><b className="text-right" style={{color:AC}}>{b}</b></div>)}</div>
  <p className="mt-3 text-[11px] text-slate-400">For illustration only. Returns are not guaranteed.</p></div>
 <div className="grid content-start gap-4">
  <div className={box}><h3 className="text-center font-bold">{c.n} - Pie Chart</h3><div className="mt-3"><Donut a={o.b[0]} b={o.b[1]} l={l}/></div>
   <div className="mt-3 flex flex-wrap justify-center gap-x-4 text-xs"><span><Dot c={G}/>{l[0]} ({pa}%)</span><span><Dot c={B}/>{l[1]} ({100-pa}%)</span></div></div>
  <div className={box}><h3 className="font-bold">{c.n.replace(' Calculator','')} Projected Value</h3><div className="mt-2"><Bars s={o.s} l={l}/></div>
   <div className="mt-1 text-center text-xs"><span className="mr-4"><Dot c={B}/>{l[1]}</span><span><Dot c={G}/>{l[0]}</span></div>
   <p className="mt-1 text-center text-[11px] text-slate-400">X-axis: year · hover a bar for exact values</p></div></div></div>)}
