import {Link,useParams} from 'react-router-dom';import {C} from '../lib/calculators';import CalcWidget from '../components/CalcWidget';
export default function Calculators(){const{id:p}=useParams();const id=C[p]?p:'sip';
return(<section className="sec"><div className="w"><span className="ey">Tools & Calculators</span><h1 className="h2">{C[id].n}</h1><div className="grid gap-6 lg:grid-cols-[230px_1fr]">
<div className="flex gap-1 overflow-x-auto lg:grid lg:content-start">{Object.keys(C).map(k=><Link key={k} to={'/calculators/'+k} className={`shrink-0 rounded-lg px-3 py-2 text-[13.5px] font-semibold ${k===id?'bg-slate-100 text-gold':'hover:bg-slate-50'}`}>{C[k].n}</Link>)}</div>
<CalcWidget key={id} id={id}/></div></div></section>)}
