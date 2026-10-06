// import {Link} from 'react-router-dom';import {SV} from '../lib/data';
// export default function ServiceGrid({n=16}){return(<div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{SV.slice(0,n).map(s=><Link key={s[1]} to="/services" className="card"><div className="text-2xl">{s[0]}</div><h3 className="mt-2 font-serif text-base text-ink">{s[1]}</h3><p className="text-[13.5px] text-slate-500">{s[2]}</p></Link>)}</div>)}


import { Link } from 'react-router-dom';
import { SV } from '../lib/data';

export default function ServiceGrid({ n = 16 }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {SV.slice(0, n).map((s) => (
        <Link
          key={s[1]}
          to="/services"
          className="card group border border-slate-200 transition-all duration-300 hover:-translate-y-1 hover:border-[#29466D] hover:bg-[#071A33] hover:shadow-[0_12px_30px_rgba(7,26,51,0.25)]"
        >
          <div className="text-2xl transition-colors duration-300 group-hover:text-[#E7B65A]">
            {s[0]}
          </div>

          <h3 className="mt-2 font-serif text-base text-ink transition-colors duration-300 group-hover:text-white">
            {s[1]}
          </h3>

          <p className="text-[13.5px] text-slate-500 transition-colors duration-300 group-hover:text-[#D7E0ED]">
            {s[2]}
          </p>
        </Link>
      ))}
    </div>
  );
}