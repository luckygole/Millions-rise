// import { Fragment, useState } from "react";
// import { Link } from "react-router-dom";
// import { TT } from "../lib/data";
// import { useIpos } from "../lib/api";
// import ApplyModal from "./ApplyModal";

// const L = ["Open – Close", "Price Band", "Lot Size", "Issue Size", "Listing", "Subscription", "GMP"];

// /* limit: har tab me kitne cards dikhane hain (page par kuch mat do = sab dikhenge)
//    showViewAll: "View all IPOs" button dikhana hai ya nahi (home ke liye true) */
// export default function IpoList({ limit, showViewAll = false }) {
//   const ipos = useIpos();
//   const [s, setS] = useState("cur");
//   const [ap, setAp] = useState(null);

//   const list = ipos.filter((x) => x.s === s).slice(0, limit);

//   return (
//     <>
//       {/* TABS (Current / Upcoming / Listed) */}
//       <div className="mb-4 flex flex-wrap gap-2">
//         {Object.keys(TT).map((k) => (
//           <button
//             key={k}
//             onClick={() => setS(k)}
//             className={`rounded-full border px-4 py-1.5 text-sm font-semibold transition ${
//               s === k ? "border-ink bg-ink text-white" : "border-slate-200 hover:border-ink"
//             }`}
//           >
//             {TT[k]}
//           </button>
//         ))}
//       </div>

//       {/* CARDS */}
//       <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
//         {list.length === 0 && (
//           <p className="col-span-full rounded-xl border border-slate-200 bg-white p-6 text-sm text-slate-500">
//             No IPOs in this list right now.
//           </p>
//         )}

//         {list.map((x) => (
//           <div key={x.n} className="card">
//             <div className="flex justify-between gap-2">
//               <h3 className="font-serif text-lg text-ink">{x.n}</h3>
//               <span className="h-fit rounded-full bg-amber-50 px-2 py-0.5 text-[10px] font-extrabold text-gold">
//                 {TT[x.s]}
//               </span>
//             </div>

//             <dl className="my-3 grid grid-cols-2 gap-x-3 gap-y-1.5 text-xs">
//               {L.map((l, i) => (
//                 <Fragment key={l}>
//                   <dt className="text-slate-500">{l}</dt>
//                   <dd className="font-bold">
//                     {[x.o + " – " + x.c, x.p, x.l, x.i, x.ld, x.sub, x.g][i]}
//                   </dd>
//                 </Fragment>
//               ))}
//             </dl>

//             {s !== "lst" && (
//               <button className="btn w-full" onClick={() => setAp(x.n)}>
//                 Apply Now
//               </button>
//             )}
//           </div>
//         ))}
//       </div>

//       {showViewAll && (
//         <div className="mt-6 text-center">
//           <Link to="/ipo" className="btn btn-o inline-block">
//             View all IPOs
//           </Link>
//         </div>
//       )}

//       <p className="mt-4 text-xs text-slate-500">
//         Sample data until IPOs are added from /admin. GMP is unofficial and not a guarantee. IPO investments are
//         subject to market risk; read the RHP before applying.
//       </p>

//       <ApplyModal name={ap} onClose={() => setAp(null)} />
//     </>
//   );
// }

















import { Fragment, useState } from "react";
import { TT } from "../lib/data";
import { useIpos } from "../lib/api";
import ApplyModal from "./ApplyModal";

const L = ["Open – Close", "Price Band", "Lot Size", "Issue Size", "Listing", "Subscription", "GMP"];
// TT ke keys ke order me: 1st = current, 2nd = upcoming, 3rd = listed
const DOT = ["bg-emerald-500", "bg-sky-500", "bg-slate-400"];

/* limit: har column me max kitne cards (kuch mat do = sab dikhenge) */
export default function IpoList({ limit }) {
  const ipos = useIpos();
  const [ap, setAp] = useState(null);

  return (
    <>
      <div className="grid items-start gap-5 lg:grid-cols-3">
        {Object.keys(TT).map((k, ci) => {
          const all = ipos.filter((x) => x.s === k);
          const list = limit ? all.slice(0, limit) : all;

          return (
            <div key={k} className="min-w-0 rounded-2xl border border-slate-200 bg-slate-50/70 p-4">
              {/* COLUMN HEADER */}
              <div className="mb-4 flex items-center justify-between gap-2 px-1">
                <h3 className="flex items-center gap-2 font-serif text-lg text-ink">
                  <span className={`h-2.5 w-2.5 rounded-full ${DOT[ci] || "bg-slate-400"}`} />
                  {TT[k]}
                </h3>
                <span className="rounded-full bg-white px-2.5 py-0.5 text-xs font-bold text-slate-500 shadow-sm">
                  {all.length}
                </span>
              </div>

              {/* CARDS */}
              <div className="grid gap-4">
                {list.length === 0 && (
                  <p className="rounded-xl border border-dashed border-slate-300 bg-white p-5 text-center text-sm text-slate-500">
                    No IPOs right now.
                  </p>
                )}

                {list.map((x) => (
                  <div key={x.n} className="card">
                    <h4 className="font-serif text-base leading-snug text-ink">{x.n}</h4>

                    <dl className="my-3 grid grid-cols-2 gap-x-3 gap-y-1.5 text-xs">
                      {L.map((l, i) => (
                        <Fragment key={l}>
                          <dt className="text-slate-500">{l}</dt>
                          <dd className="font-bold">
                            {[x.o + " – " + x.c, x.p, x.l, x.i, x.ld, x.sub, x.g][i]}
                          </dd>
                        </Fragment>
                      ))}
                    </dl>

                    {k !== "lst" && (
                      <button className="btn w-full" onClick={() => setAp(x.n)}>
                        Apply Now
                      </button>
                    )}
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      <p className="mt-4 text-center text-xs text-slate-500">
        GMP is unofficial and not a guarantee. IPO investments are subject to market risk; read the RHP before
        applying.
      </p>

      <ApplyModal name={ap} onClose={() => setAp(null)} />
    </>
  );
}