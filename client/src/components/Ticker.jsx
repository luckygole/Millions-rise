// import { MK } from "../lib/data";
// export default function Ticker() {
//   const row = MK.map((m) => (
//     <span key={m[0]} className="mx-6">
//       <b>{m[0]}</b> {m[1]}{" "}
//       <i className={m[2] ? "text-green-400" : "text-red-400"}>
//         {m[2] ? "▲" : "▼"}
//       </i>
//     </span>
//   ));
//   return (
//     <div className="overflow-hidden whitespace-nowrap bg-ink text-xs text-sky-100">
//       <div className="inline-block animate-marquee py-2 motion-reduce:animate-none">
//         {row}
//         {row}
//         {row}
//         {row}
//       </div>
//     </div>
//   );
// }


import { useEffect, useState } from 'react';
import { MK } from '../lib/data';
import { api } from '../lib/api';

const f = (n) =>
  n.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 });

export default function Ticker() {
  const [d, setD] = useState(null);

  useEffect(() => {
    let on = true;
    const load = () =>
      api('/market')
        .then((r) => on && setD(r))
        .catch(() => {});
    load();
    const t = setInterval(load, 60000); // refresh every minute
    return () => {
      on = false;
      clearInterval(t);
    };
  }, []);

  // Falls back to sample data if the live feed is not available
  const items = d || MK.map((m) => ({ name: m[0], price: m[1], up: !!m[2] }));

  const row = items.map((m) => {
    const live = typeof m.price === 'number';
    const up = live ? m.change >= 0 : m.up;
    return (
      <span key={m.name} className="mx-6">
        <b>{m.name}</b> {live ? f(m.price) : m.price}{' '}
        <i className={up ? 'text-green-400' : 'text-red-400'}>
          {up ? '▲' : '▼'}
          {live && ` ${f(Math.abs(m.change))} (${Math.abs(m.pct).toFixed(2)}%)`}
        </i>
      </span>
    );
  });

  return (
    <div className="flex items-center bg-ink text-xs text-sky-100">
      <span className="shrink-0 px-3 text-[10px] font-bold uppercase tracking-wider">
        {d ? '● Live · may be delayed' : 'Sample data'}
      </span>
      <div className="flex-1 overflow-hidden whitespace-nowrap">
        <div className="inline-block animate-marquee py-2 motion-reduce:animate-none">
          {row}{row}{row}{row}
        </div>
      </div>
    </div>
  );
}