// import {Fragment,useState} from 'react';import {TT} from '../lib/data';import {useIpos} from '../lib/api';import Head from '../components/Head';import ApplyModal from '../components/ApplyModal';
// const L=['Open – Close','Price Band','Lot Size','Issue Size','Listing','Subscription','GMP'];
// export default function Ipo(){const ipos=useIpos();const[s,setS]=useState('cur');const[ap,setAp]=useState(null);
// return(<section className="sec"><div className="w"><Head e="IPO Corner" t="Current, upcoming & listed IPOs" s="Existing Motilal Oswal client? Login and apply. New? Open a demat account."/>
// <div className="mb-4 flex flex-wrap gap-2">{Object.keys(TT).map(k=><button key={k} onClick={()=>setS(k)} className={`rounded-full border px-4 py-1.5 text-sm font-semibold ${s===k?'border-ink bg-ink text-white':'border-slate-200'}`}>{TT[k]}</button>)}</div>
// <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">{ipos.filter(x=>x.s===s).map(x=><div key={x.n} className="card"><div className="flex justify-between gap-2"><h3 className="font-serif text-lg text-ink">{x.n}</h3><span className="h-fit rounded-full bg-amber-50 px-2 py-0.5 text-[10px] font-extrabold text-gold">{TT[x.s]}</span></div>
// <dl className="my-3 grid grid-cols-2 gap-x-3 gap-y-1.5 text-xs">{L.map((l,i)=><Fragment key={l}><dt className="text-slate-500">{l}</dt><dd className="font-bold">{[x.o+' – '+x.c,x.p,x.l,x.i,x.ld,x.sub,x.g][i]}</dd></Fragment>)}</dl>
// {s!=='lst'&&<button className="btn w-full" onClick={()=>setAp(x.n)}>Apply Now</button>}</div>)}</div>
// <p className="mt-4 text-xs text-slate-500">Sample data until IPOs are added from /admin. GMP is unofficial and not a guarantee. IPO investments are subject to market risk; read the RHP before applying.</p></div><ApplyModal name={ap} onClose={()=>setAp(null)}/></section>)}

import { Fragment, useState } from "react";
import { TT } from "../lib/data";
import { useIpos } from "../lib/api";
import Head from "../components/Head";
import ApplyModal from "../components/ApplyModal";

const L = [
  "Open – Close",
  "Price Band",
  "Lot Size",
  "Issue Size",
  "Listing",
  "Subscription",
  "GMP",
];

export default function Ipo() {
  const ipos = useIpos();
  const [s, setS] = useState("cur");
  const [ap, setAp] = useState(null);

  const filteredIpos = ipos.filter((x) => x.s === s);

  return (
    <section className="min-h-screen w-full overflow-x-clip bg-white py-8 sm:py-10 lg:py-12">
      <div className="mx-auto w-full max-w-[1200px] px-4 sm:px-6 lg:px-8">
        {/* Page Heading */}
        <div className="mb-7">
          <Head
            e="IPO CORNER"
            t="Current IPOs"
            s="Check the list of upcoming IPOs with open and close dates, along with IPOs that are tentatively expected to open in the coming months."
          />
        </div>

        {/* IPO Tabs */}
        <div className="mb-5 overflow-x-auto border-b border-slate-200">
          <div className="flex min-w-max items-end gap-1">
            {Object.keys(TT).map((k) => (
              <button
                key={k}
                type="button"
                onClick={() => setS(k)}
                aria-pressed={s === k}
                className={`
                  relative whitespace-nowrap rounded-t-md border
                  px-4 py-3 text-xs transition-colors duration-200
                  sm:px-5 sm:text-sm
                  ${
                    s === k
                      ? "border-[#29466D] border-b-white bg-white font-semibold text-[#0B2345]"
                      : "border-transparent bg-transparent font-medium text-slate-500 hover:bg-slate-50 hover:text-[#29466D]"
                  }
                `}
              >
                {TT[k]}
                {s === k && (
                  <span className="absolute -bottom-px left-0 right-0 h-[2px] bg-[#0B2345]" />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* IPO Table */}
        <div className="overflow-hidden rounded-lg border border-[#29466D] bg-white shadow-[0_12px_35px_rgba(0,0,0,0.25)]">
          <div className="w-full overflow-x-auto">
            <table className="w-full min-w-[900px] border-collapse text-left text-xs sm:text-sm">
              <thead>
                <tr className="bg-[#0B2345] text-white">
                  <th className="px-4 py-3 text-center font-semibold sm:px-5">
                    Company Name
                  </th>
                  <th className="px-4 py-3 text-center font-semibold">
                    Issue Date
                  </th>
                  <th className="px-4 py-3 text-center font-semibold">
                    Price Range
                  </th>
                  <th className="px-4 py-3 text-center font-semibold">
                    Lot Size
                  </th>
                  <th className="px-4 py-3 text-center font-semibold">
                    Issue Size
                  </th>
                  <th className="px-4 py-3 text-center font-semibold">
                    Min. Investment
                  </th>
                  <th className="px-4 py-3 text-center font-semibold">
                    Listing
                  </th>
                  <th className="px-4 py-3 text-center font-semibold">
                    Subscription
                  </th>
                  <th className="px-4 py-3 text-center font-semibold">
                    GMP
                  </th>
                  {s !== "lst" && (
                    <th className="px-4 py-3 text-center font-semibold">
                      Action
                    </th>
                  )}
                </tr>
              </thead>

              <tbody>
                {filteredIpos.length > 0 ? (
                  filteredIpos.map((x, index) => (
                    <Fragment key={x.n}>
                      <tr
                        className={`
                          border-b border-slate-200 last:border-b-0
                          transition-colors duration-200
                          hover:bg-[#EAF0F7]
                          ${
                            index % 2 === 0
                              ? "bg-[#F1F4F8]"
                              : "bg-white"
                          }
                        `}
                      >
                        <td className="px-4 py-4 text-center font-medium text-[#0B2345] sm:px-5">
                          <div className="min-w-[150px]">{x.n}</div>
                        </td>

                        <td className="whitespace-nowrap px-4 py-4 text-center text-slate-600">
                          {x.o} – {x.c}
                        </td>

                        <td className="whitespace-nowrap px-4 py-4 text-center font-medium text-[#0B2345]">
                          {x.p}
                        </td>

                        <td className="px-4 py-4 text-center text-slate-600">
                          {x.l}
                        </td>

                        <td className="whitespace-nowrap px-4 py-4 text-center text-slate-600">
                          {x.i}
                        </td>

                        <td className="whitespace-nowrap px-4 py-4 text-center font-semibold text-[#0B2345]">
                          {x.minInvestment ??
                            (Number(
                              x.p?.match(/[\d,]+/)?.[0]?.replace(/,/g, "")
                            ) *
                              Number(x.l || 0) || "—")}
                        </td>

                        <td className="whitespace-nowrap px-4 py-4 text-center text-slate-600">
                          {x.ld || "—"}
                        </td>

                        <td className="px-4 py-4 text-center text-slate-600">
                          {x.sub || "—"}
                        </td>

                        <td className="px-4 py-4 text-center font-medium text-[#0B2345]">
                          {x.g || "—"}
                        </td>

                        {s !== "lst" && (
                          <td className="px-4 py-4 text-center">
                            <button
                             href="https://mosl.co/aW0pvQmxUM"
                              target="_blank"
                               rel="noopener noreferrer"
                              type="button"
                              className="
                                whitespace-nowrap rounded-md
                                border border-[#29466D]
                                bg-[#0B2345] px-3 py-2
                                text-xs font-semibold text-white
                                shadow-[0_4px_12px_rgba(0,0,0,0.15)]
                                transition-all duration-200
                                hover:-translate-y-0.5
                                hover:bg-[#29466D]
                                hover:shadow-[0_8px_20px_rgba(0,0,0,0.25)]
                                focus:outline-none focus:ring-2
                                focus:ring-[#29466D] focus:ring-offset-2
                              "
                              onClick={() => setAp(x.n)}
                            >
                              Apply Now
                            </button>
                          </td>
                        )}
                      </tr>
                    </Fragment>
                  ))
                ) : (
                  <tr>
                    <td
                      colSpan={s !== "lst" ? 10 : 9}
                      className="px-5 py-12 text-center"
                    >
                      <div className="mx-auto flex max-w-sm flex-col items-center">
                        <span className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-[#EAF0F7] text-[#0B2345]">
                          <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.7"
                            className="h-6 w-6"
                            aria-hidden="true"
                          >
                            <circle cx="11" cy="11" r="7" />
                            <path d="m16 16 4 4" />
                          </svg>
                        </span>

                        <p className="font-semibold text-[#0B2345]">
                          No IPOs available
                        </p>
                        <p className="mt-1 text-sm text-slate-500">
                          There are currently no IPOs listed in this category.
                          Please check again later.
                        </p>
                      </div>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* Mobile Scroll Hint */}
        <p className="mt-2 text-[11px] text-slate-400 sm:hidden">
          Swipe horizontally to view all IPO details.
        </p>

        {/* Disclaimer */}
        <div className="mt-5 rounded-md border border-[#29466D]/20 bg-[#F1F4F8] px-4 py-3">
          <p className="text-xs leading-5 text-slate-600">
            Sample data until IPOs are added from /admin. GMP is unofficial
            and not a guarantee. IPO investments are subject to market risk;
            read the RHP before applying.
          </p>
        </div>
      </div>

      {/* Existing Apply Modal */}
      <ApplyModal name={ap} onClose={() => setAp(null)} />
    </section>
  );
}