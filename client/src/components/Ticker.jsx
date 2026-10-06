import {MK} from '../lib/data';
export default function Ticker(){const row=MK.map(m=><span key={m[0]} className="mx-6"><b>{m[0]}</b> {m[1]} <i className={m[2]?'text-green-400':'text-red-400'}>{m[2]?'▲':'▼'}</i></span>);
return(<div className="overflow-hidden whitespace-nowrap bg-ink text-xs text-sky-100"><div className="inline-block animate-marquee py-2 motion-reduce:animate-none">{row}{row}{row}{row}</div></div>)}
