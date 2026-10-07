// // import { useState } from "react";
// // import { C } from "../lib/calculators";
// // const G = "#4aa83c",
// //   B = "#1f3a93",
// //   AC = "#2f55d4";
// // const fmt = (n) => "₹" + Math.round(n).toLocaleString("en-IN");
// // const sh = (n) =>
// //   n >= 1e7
// //     ? +(n / 1e7).toFixed(2) + " Cr"
// //     : n >= 1e5
// //       ? +(n / 1e5).toFixed(2) + " L"
// //       : Math.round(n).toLocaleString("en-IN");
// // const nice = (m) => {
// //   const e = Math.pow(10, Math.floor(Math.log10(m))),
// //     f = m / e;
// //   return (f <= 1 ? 1 : f <= 2 ? 2 : f <= 5 ? 5 : 10) * e;
// // };

// // function Donut({ a, b, l }) {
// //   const t = a + b || 1,
// //     pa = (a / t) * 100,
// //     R = 40,
// //     Cc = 2 * Math.PI * R;
// //   return (
// //     <svg
// //       viewBox="0 0 120 120"
// //       className="mx-auto h-44 w-44 -rotate-90"
// //       role="img"
// //       aria-label="Invested vs gains pie chart"
// //     >
// //       <circle cx="60" cy="60" r={R} fill="none" stroke={B} strokeWidth="22">
// //         <title>
// //           {l[1]}: {fmt(b)} ({(100 - pa).toFixed(1)}%)
// //         </title>
// //       </circle>
// //       <circle
// //         cx="60"
// //         cy="60"
// //         r={R}
// //         fill="none"
// //         stroke={G}
// //         strokeWidth="22"
// //         strokeDasharray={`${(Cc * pa) / 100} ${Cc}`}
// //       >
// //         <title>
// //           {l[0]}: {fmt(a)} ({pa.toFixed(1)}%)
// //         </title>
// //       </circle>
// //     </svg>
// //   );
// // }

// // function Bars({ s, l }) {
// //   const W = 400,
// //     H = 220,
// //     L = 48,
// //     Bt = 26,
// //     T = 8,
// //     R = 8,
// //     iw = W - L - R,
// //     ih = H - Bt - T,
// //     n = s.length;
// //   const mx = nice(Math.max(...s.map((x) => x[0] + x[1]), 1)),
// //     bw = Math.min(34, (iw / n) * 0.62),
// //     step = Math.ceil(n / 10),
// //     y = (v) => T + ih - (v / mx) * ih;
// //   return (
// //     <svg
// //       viewBox={`0 0 ${W} ${H}`}
// //       className="w-full"
// //       role="img"
// //       aria-label="Year-wise projected value chart"
// //     >
// //       {[0, 1, 2, 3, 4].map((i) => {
// //         const v = (mx * i) / 4;
// //         return (
// //           <g key={i}>
// //             <line x1={L} x2={W - R} y1={y(v)} y2={y(v)} stroke="#e5eaf2" />
// //             <text
// //               x={L - 5}
// //               y={y(v) + 3}
// //               textAnchor="end"
// //               fontSize="9"
// //               fontWeight="700"
// //             >
// //               {sh(v)}
// //             </text>
// //           </g>
// //         );
// //       })}
// //       {s.map(([a, b], i) => {
// //         const cx = L + (iw / n) * (i + 0.5);
// //         return (
// //           <g key={i} className="hover:opacity-75">
// //             <title>{`Year ${i + 1}\n${l[0]}: ${fmt(a)}\n${l[1]}: ${fmt(b)}\nTotal: ${fmt(a + b)}`}</title>
// //             <rect
// //               x={cx - bw / 2}
// //               y={y(a)}
// //               width={bw}
// //               height={y(0) - y(a)}
// //               fill={G}
// //             />
// //             <rect
// //               x={cx - bw / 2}
// //               y={y(a + b)}
// //               width={bw}
// //               height={Math.max(y(a) - y(a + b), 0)}
// //               fill={B}
// //             />
// //             {i % step === 0 && (
// //               <text
// //                 x={cx}
// //                 y={H - 9}
// //                 textAnchor="middle"
// //                 fontSize="9"
// //                 fontWeight="700"
// //               >
// //                 {i + 1}
// //               </text>
// //             )}
// //           </g>
// //         );
// //       })}
// //       <line x1={L} x2={L} y1={T} y2={y(0)} stroke="#222" />
// //       <line x1={L} x2={W - R} y1={y(0)} y2={y(0)} stroke="#222" />
// //     </svg>
// //   );
// // }

// // const Dot = ({ c }) => (
// //   <i
// //     className="mr-1.5 inline-block h-2 w-2 rounded-full"
// //     style={{ background: c }}
// //   />
// // );

// // export default function CalcWidget({ id, compact }) {
// //   const c = C[id];
// //   const [raw, setRaw] = useState(() =>
// //     Object.fromEntries(c.f.map((f) => [f[0], f[2]])),
// //   );
// //   const v = Object.fromEntries(
// //     c.f.map(([k, , , mn, mx]) => [
// //       k,
// //       Math.min(mx, Math.max(mn, +raw[k] || mn)),
// //     ]),
// //   );
// //   const o = c.k(v),
// //     l = o.l || ["Invested Amount", "Growth"],
// //     t = o.b[0] + o.b[1] || 1,
// //     pa = ((o.b[0] / t) * 100).toFixed(0);
// //   const box = "rounded-2xl border border-blue-700/60 bg-white p-5";
// //   return (
// //     <div className={`grid gap-4 ${compact ? "" : "lg:grid-cols-2"}`}>
// //       <div className={box}>
// //         {c.f.map(([k, lb, , mn, mx, st]) => (
// //           <div key={k} className="mb-5">
// //             <div className="flex items-center justify-between gap-3">
// //               <label htmlFor={id + k} className="text-sm font-semibold">
// //                 {lb}
// //               </label>
// //               <input
// //                 id={id + k}
// //                 type="number"
// //                 inputMode="decimal"
// //                 min={mn}
// //                 max={mx}
// //                 step={st}
// //                 value={raw[k]}
// //                 onChange={(e) => setRaw({ ...raw, [k]: e.target.value })}
// //                 onBlur={() => setRaw({ ...raw, [k]: v[k] })}
// //                 className="w-32 rounded-lg bg-green-50 px-3 py-2 text-right text-sm font-bold outline-none focus:ring-2 focus:ring-blue-300"
// //               />
// //             </div>
// //             <input
// //               type="range"
// //               aria-label={lb}
// //               min={mn}
// //               max={mx}
// //               step={st}
// //               value={v[k]}
// //               onChange={(e) => setRaw({ ...raw, [k]: +e.target.value })}
// //               className="mt-2 w-full"
// //               style={{ accentColor: AC }}
// //             />
// //           </div>
// //         ))}
// //         <div className="mt-6 rounded-xl border border-slate-200 px-4">
// //           {o.r.map(([a, b]) => (
// //             <div
// //               key={a}
// //               className="flex items-center justify-between gap-3 border-b border-slate-100 py-3 last:border-0"
// //             >
// //               <span className="text-sm text-slate-500">{a}</span>
// //               <b className="text-right" style={{ color: AC }}>
// //                 {b}
// //               </b>
// //             </div>
// //           ))}
// //         </div>
// //         <p className="mt-3 text-[11px] text-slate-400">
// //           For illustration only. Returns are not guaranteed.
// //         </p>
// //       </div>
// //       <div className="grid content-start gap-4">
// //         <div className={box}>
// //           <h3 className="text-center font-bold">{c.n} - Pie Chart</h3>
// //           <div className="mt-3">
// //             <Donut a={o.b[0]} b={o.b[1]} l={l} />
// //           </div>
// //           <div className="mt-3 flex flex-wrap justify-center gap-x-4 text-xs">
// //             <span>
// //               <Dot c={G} />
// //               {l[0]} ({pa}%)
// //             </span>
// //             <span>
// //               <Dot c={B} />
// //               {l[1]} ({100 - pa}%)
// //             </span>
// //           </div>
// //         </div>
// //         <div className={box}>
// //           <h3 className="font-bold">
// //             {c.n.replace(" Calculator", "")} Projected Value
// //           </h3>
// //           <div className="mt-2">
// //             <Bars s={o.s} l={l} />
// //           </div>
// //           <div className="mt-1 text-center text-xs">
// //             <span className="mr-4">
// //               <Dot c={B} />
// //               {l[1]}
// //             </span>
// //             <span>
// //               <Dot c={G} />
// //               {l[0]}
// //             </span>
// //           </div>
// //           <p className="mt-1 text-center text-[11px] text-slate-400">
// //             X-axis: year · hover a bar for exact values
// //           </p>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }


// import { useState } from "react";
// import { C } from "../lib/calculators";

// // =========================
// // Theme Colors
// // =========================
// const PRIMARY = "#29466D";
// const DARK = "#071A33";
// const CARD = "#0B2342";
// const CARD_LIGHT = "#102D50";
// const BLUE = "#4D78A8";
// const BLUE_LIGHT = "#7FA4CC";
// const GOLD = "#E7B65A";
// const BORDER = "#29466D";
// const TEXT = "#FFFFFF";
// const MUTED = "#B8C7D9";

// // =========================
// // Formatting
// // =========================
// const fmt = (n) => "₹" + Math.round(n).toLocaleString("en-IN");

// const sh = (n) =>
//   n >= 1e7
//     ? +(n / 1e7).toFixed(2) + " Cr"
//     : n >= 1e5
//       ? +(n / 1e5).toFixed(2) + " L"
//       : Math.round(n).toLocaleString("en-IN");

// const nice = (m) => {
//   const e = Math.pow(10, Math.floor(Math.log10(m)));
//   const f = m / e;

//   return (f <= 1 ? 1 : f <= 2 ? 2 : f <= 5 ? 5 : 10) * e;
// };

// // =========================
// // Donut / Pie Chart
// // =========================
// function Donut({ a, b, l }) {
//   const t = a + b || 1;
//   const pa = (a / t) * 100;

//   const R = 40;
//   const Cc = 2 * Math.PI * R;

//   return (
//     <svg
//       viewBox="0 0 120 120"
//       className="mx-auto h-44 w-44 -rotate-90"
//       role="img"
//       aria-label="Invested vs gains pie chart"
//     >
//       {/* Background circle */}
//       <circle
//         cx="60"
//         cy="60"
//         r={R}
//         fill="none"
//         stroke="#16375E"
//         strokeWidth="22"
//       />

//       {/* Growth */}
//       <circle
//         cx="60"
//         cy="60"
//         r={R}
//         fill="none"
//         stroke={BLUE}
//         strokeWidth="22"
//         strokeDasharray={`${(Cc * (100 - pa)) / 100} ${Cc}`}
//         strokeDashoffset={-(Cc * pa) / 100}
//       >
//         <title>
//           {l[1]}: {fmt(b)} ({(100 - pa).toFixed(1)}%)
//         </title>
//       </circle>

//       {/* Invested */}
//       <circle
//         cx="60"
//         cy="60"
//         r={R}
//         fill="none"
//         stroke={GOLD}
//         strokeWidth="22"
//         strokeDasharray={`${(Cc * pa) / 100} ${Cc}`}
//       >
//         <title>
//           {l[0]}: {fmt(a)} ({pa.toFixed(1)}%)
//         </title>
//       </circle>
//     </svg>
//   );
// }

// // =========================
// // Bar Chart
// // =========================
// function Bars({ s, l }) {
//   const W = 400;
//   const H = 220;
//   const L = 48;
//   const Bt = 26;
//   const T = 8;
//   const R = 8;

//   const iw = W - L - R;
//   const ih = H - Bt - T;
//   const n = s.length;

//   const mx = nice(
//     Math.max(...s.map((x) => x[0] + x[1]), 1),
//   );

//   const bw = Math.min(34, (iw / n) * 0.62);
//   const step = Math.ceil(n / 10);

//   const y = (v) => T + ih - (v / mx) * ih;

//   return (
//     <div className="w-full overflow-x-auto">
//       <svg
//         viewBox={`0 0 ${W} ${H}`}
//         className="w-full min-w-[360px]"
//         role="img"
//         aria-label="Year-wise projected value chart"
//       >
//         {/* Horizontal grid lines */}
//         {[0, 1, 2, 3, 4].map((i) => {
//           const v = (mx * i) / 4;

//           return (
//             <g key={i}>
//               <line
//                 x1={L}
//                 x2={W - R}
//                 y1={y(v)}
//                 y2={y(v)}
//                 stroke="#29466D"
//                 strokeOpacity="0.65"
//               />

//               <text
//                 x={L - 5}
//                 y={y(v) + 3}
//                 textAnchor="end"
//                 fontSize="9"
//                 fontWeight="700"
//                 fill={MUTED}
//               >
//                 {sh(v)}
//               </text>
//             </g>
//           );
//         })}

//         {/* Bars */}
//         {s.map(([a, b], i) => {
//           const cx = L + (iw / n) * (i + 0.5);

//           return (
//             <g
//               key={i}
//               className="transition-opacity duration-200 hover:opacity-75"
//             >
//               <title>
//                 {`Year ${i + 1}
// ${l[0]}: ${fmt(a)}
// ${l[1]}: ${fmt(b)}
// Total: ${fmt(a + b)}`}
//               </title>

//               {/* Invested */}
//               <rect
//                 x={cx - bw / 2}
//                 y={y(a)}
//                 width={bw}
//                 height={y(0) - y(a)}
//                 fill={GOLD}
//                 rx="2"
//               />

//               {/* Growth */}
//               <rect
//                 x={cx - bw / 2}
//                 y={y(a + b)}
//                 width={bw}
//                 height={Math.max(y(a) - y(a + b), 0)}
//                 fill={BLUE}
//                 rx="2"
//               />

//               {/* Year */}
//               {i % step === 0 && (
//                 <text
//                   x={cx}
//                   y={H - 9}
//                   textAnchor="middle"
//                   fontSize="9"
//                   fontWeight="700"
//                   fill={MUTED}
//                 >
//                   {i + 1}
//                 </text>
//               )}
//             </g>
//           );
//         })}

//         {/* Y Axis */}
//         <line
//           x1={L}
//           x2={L}
//           y1={T}
//           y2={y(0)}
//           stroke={BLUE_LIGHT}
//         />

//         {/* X Axis */}
//         <line
//           x1={L}
//           x2={W - R}
//           y1={y(0)}
//           y2={y(0)}
//           stroke={BLUE_LIGHT}
//         />
//       </svg>
//     </div>
//   );
// }

// // =========================
// // Legend Dot
// // =========================
// const Dot = ({ c }) => (
//   <i
//     className="mr-1.5 inline-block h-2 w-2 rounded-full"
//     style={{ background: c }}
//   />
// );

// // =========================
// // Main Calculator
// // =========================
// export default function CalcWidget({ id, compact }) {
//   const c = C[id];

//   const [raw, setRaw] = useState(() =>
//     Object.fromEntries(
//       c.f.map((f) => [f[0], f[2]]),
//     ),
//   );

//   const v = Object.fromEntries(
//     c.f.map(([k, , , mn, mx]) => [
//       k,
//       Math.min(
//         mx,
//         Math.max(mn, +raw[k] || mn),
//       ),
//     ]),
//   );

//   const o = c.k(v);

//   const l =
//     o.l || ["Invested Amount", "Growth"];

//   const t = o.b[0] + o.b[1] || 1;

//   const pa = ((o.b[0] / t) * 100).toFixed(0);

//   // =========================
//   // Common Card Style
//   // =========================
//   const box = `
//     rounded-2xl
//     border
//     border-[#29466D]
//     bg-[#071A33]
//     p-4
//     sm:p-5
//     shadow-[0_8px_24px_rgba(7,26,51,0.18)]
//     transition-all
//     duration-300
//   `;

//   return (
//     <div
//       className={`
//         grid
//         grid-cols-1
//         gap-4
//         ${compact ? "" : "lg:grid-cols-2"}
//       `}
//     >
//       {/* =================================
//           LEFT - INPUTS
//       ================================= */}
//       <div className={box}>
//         {c.f.map(([k, lb, , mn, mx, st]) => (
//           <div
//             key={k}
//             className="mb-5 last:mb-0"
//           >
//             {/* Label + Number Input */}
//             <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between sm:gap-3">
//               <label
//                 htmlFor={id + k}
//                 className="text-sm font-semibold text-white"
//               >
//                 {lb}
//               </label>

//               <input
//                 id={id + k}
//                 type="number"
//                 inputMode="decimal"
//                 min={mn}
//                 max={mx}
//                 step={st}
//                 value={raw[k]}
//                 onChange={(e) =>
//                   setRaw({
//                     ...raw,
//                     [k]: e.target.value,
//                   })
//                 }
//                 onBlur={() =>
//                   setRaw({
//                     ...raw,
//                     [k]: v[k],
//                   })
//                 }
//                 className="
//                   h-10
//                   w-full
//                   rounded-lg
//                   border
//                   border-[#29466D]
//                   bg-[#102D50]
//                   px-3
//                   py-2
//                   text-right
//                   text-sm
//                   font-bold
//                   text-white
//                   outline-none
//                   transition-all
//                   duration-200
//                   placeholder:text-[#7F95AE]
//                   hover:border-[#E7B65A]
//                   focus:border-[#E7B65A]
//                   focus:ring-1
//                   focus:ring-[#E7B65A]
//                   sm:w-32
//                 "
//               />
//             </div>

//             {/* Range Slider */}
//             <input
//               type="range"
//               aria-label={lb}
//               min={mn}
//               max={mx}
//               step={st}
//               value={v[k]}
//               onChange={(e) =>
//                 setRaw({
//                   ...raw,
//                   [k]: +e.target.value,
//                 })
//               }
//               className="
//                 mt-3
//                 w-full
//                 cursor-pointer
//                 accent-[#E7B65A]
//               "
//               style={{
//                 accentColor: GOLD,
//               }}
//             />
//           </div>
//         ))}

//         {/* =================================
//             RESULTS
//         ================================= */}
//         <div
//           className="
//             mt-6
//             rounded-xl
//             border
//             border-[#29466D]
//             bg-[#0B2342]
//             px-4
//           "
//         >
//           {o.r.map(([a, b]) => (
//             <div
//               key={a}
//               className="
//                 flex
//                 items-center
//                 justify-between
//                 gap-3
//                 border-b
//                 border-[#29466D]/60
//                 py-3
//                 last:border-0
//               "
//             >
//               <span className="text-sm text-[#B8C7D9]">
//                 {a}
//               </span>

//               <b
//                 className="text-right"
//                 style={{
//                   color: GOLD,
//                 }}
//               >
//                 {b}
//               </b>
//             </div>
//           ))}
//         </div>

//         <p className="mt-3 text-[11px] text-[#8FA4BC]">
//           For illustration only. Returns are not guaranteed.
//         </p>
//       </div>

//       {/* =================================
//           RIGHT - CHARTS
//       ================================= */}
//       <div className="grid content-start gap-4">

//         {/* =================================
//             PIE CHART
//         ================================= */}
//         <div className={box}>
//           <h3 className="text-center font-bold text-white">
//             {c.n} - Pie Chart
//           </h3>

//           <div className="mt-3 rounded-xl bg-[#0B2342] py-2">
//             <Donut
//               a={o.b[0]}
//               b={o.b[1]}
//               l={l}
//             />
//           </div>

//           {/* Pie Legend */}
//           <div className="mt-4 flex flex-wrap justify-center gap-x-5 gap-y-2 text-xs text-[#D7E0ED]">
//             <span>
//               <Dot c={GOLD} />
//               {l[0]} ({pa}%)
//             </span>

//             <span>
//               <Dot c={BLUE} />
//               {l[1]} ({100 - pa}%)
//             </span>
//           </div>
//         </div>

//         {/* =================================
//             BAR GRAPH
//         ================================= */}
//         <div className={box}>
//           <h3 className="font-bold text-white">
//             {c.n.replace(
//               " Calculator",
//               "",
//             )}{" "}
//             Projected Value
//           </h3>

//           <div
//             className="
//               mt-3
//               rounded-xl
//               border
//               border-[#29466D]/60
//               bg-[#0B2342]
//               p-2
//             "
//           >
//             <Bars
//               s={o.s}
//               l={l}
//             />
//           </div>

//           {/* Graph Legend */}
//           <div className="mt-3 text-center text-xs text-[#D7E0ED]">
//             <span className="mr-5">
//               <Dot c={BLUE} />
//               {l[1]}
//             </span>

//             <span>
//               <Dot c={GOLD} />
//               {l[0]}
//             </span>
//           </div>

//           <p className="mt-2 text-center text-[11px] text-[#8FA4BC]">
//             X-axis: year · hover a bar for exact values
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }


import { useState } from "react";
import { C } from "../lib/calculators";

// =========================
// Theme Colors
// =========================
const PRIMARY = "#29466D";
const DARK = "#071A33";
const CARD = "#0B2342";
const CARD_LIGHT = "#102D50";
const BLUE = "#4D78A8";
const BLUE_LIGHT = "#7FA4CC";
const GOLD = "#E7B65A";
const BORDER = "#29466D";
const TEXT = "#FFFFFF";
const MUTED = "#B8C7D9";

// =========================
// Formatting
// =========================
const fmt = (n) => "₹" + Math.round(n).toLocaleString("en-IN");

const sh = (n) =>
  n >= 1e7
    ? +(n / 1e7).toFixed(2) + " Cr"
    : n >= 1e5
      ? +(n / 1e5).toFixed(2) + " L"
      : Math.round(n).toLocaleString("en-IN");

const nice = (m) => {
  const e = Math.pow(10, Math.floor(Math.log10(m)));
  const f = m / e;

  return (f <= 1 ? 1 : f <= 2 ? 2 : f <= 5 ? 5 : 10) * e;
};

// =========================
// Donut / Pie Chart
// =========================
function Donut({ a, b, l }) {
  const t = a + b || 1;
  const pa = (a / t) * 100;

  const R = 40;
  const Cc = 2 * Math.PI * R;

  return (
    <div className="flex w-full items-center justify-center overflow-hidden">
      <svg
        viewBox="0 0 120 120"
        preserveAspectRatio="xMidYMid meet"
        className="
          block
          h-auto
          w-[150px]
          max-w-full
          -rotate-90
          sm:w-[170px]
          md:w-[180px]
        "
        role="img"
        aria-label="Invested vs gains pie chart"
      >
        {/* Background */}
        <circle
          cx="60"
          cy="60"
          r={R}
          fill="none"
          stroke="#16375E"
          strokeWidth="22"
        />

        {/* Growth */}
        <circle
          cx="60"
          cy="60"
          r={R}
          fill="none"
          stroke={BLUE}
          strokeWidth="22"
          strokeDasharray={`${(Cc * (100 - pa)) / 100} ${Cc}`}
          strokeDashoffset={-(Cc * pa) / 100}
        >
          <title>
            {l[1]}: {fmt(b)} ({(100 - pa).toFixed(1)}%)
          </title>
        </circle>

        {/* Invested */}
        <circle
          cx="60"
          cy="60"
          r={R}
          fill="none"
          stroke={GOLD}
          strokeWidth="22"
          strokeDasharray={`${(Cc * pa) / 100} ${Cc}`}
        >
          <title>
            {l[0]}: {fmt(a)} ({pa.toFixed(1)}%)
          </title>
        </circle>
      </svg>
    </div>
  );
}

// =========================
// Bar Chart
// =========================
function Bars({ s, l }) {
  const W = 400;
  const H = 220;

  const L = 52;
  const Bt = 28;
  const T = 10;
  const R = 8;

  const iw = W - L - R;
  const ih = H - Bt - T;
  const n = Math.max(s.length, 1);

  const mx = nice(
    Math.max(...s.map((x) => x[0] + x[1]), 1),
  );

  const bw = Math.min(30, (iw / n) * 0.58);
  const step = Math.max(1, Math.ceil(n / 10));

  const y = (v) =>
    T + ih - (v / mx) * ih;

  return (
    <div
      className="
        flex
        w-full
        min-w-0
        items-center
        justify-center
        overflow-hidden
      "
    >
      <svg
        viewBox={`0 0 ${W} ${H}`}
        preserveAspectRatio="xMidYMid meet"
        className="
          block
          h-auto
          w-full
          max-w-[500px]
        "
        role="img"
        aria-label="Year-wise projected value chart"
      >
        {/* Horizontal Grid Lines */}
        {[0, 1, 2, 3, 4].map((i) => {
          const v = (mx * i) / 4;

          return (
            <g key={i}>
              <line
                x1={L}
                x2={W - R}
                y1={y(v)}
                y2={y(v)}
                stroke="#29466D"
                strokeOpacity="0.65"
              />

              <text
                x={L - 6}
                y={y(v) + 3}
                textAnchor="end"
                fontSize="9"
                fontWeight="700"
                fill={MUTED}
              >
                {sh(v)}
              </text>
            </g>
          );
        })}

        {/* Bars */}
        {s.map(([a, b], i) => {
          const cx =
            L + (iw / n) * (i + 0.5);

          return (
            <g
              key={i}
              className="transition-opacity duration-200 hover:opacity-75"
            >
              <title>
                {`Year ${i + 1}
${l[0]}: ${fmt(a)}
${l[1]}: ${fmt(b)}
Total: ${fmt(a + b)}`}
              </title>

              {/* Invested */}
              <rect
                x={cx - bw / 2}
                y={y(a)}
                width={bw}
                height={y(0) - y(a)}
                fill={GOLD}
                rx="2"
              />

              {/* Growth */}
              <rect
                x={cx - bw / 2}
                y={y(a + b)}
                width={bw}
                height={Math.max(
                  y(a) - y(a + b),
                  0,
                )}
                fill={BLUE}
                rx="2"
              />

              {/* Year */}
              {i % step === 0 && (
                <text
                  x={cx}
                  y={H - 9}
                  textAnchor="middle"
                  fontSize="9"
                  fontWeight="700"
                  fill={MUTED}
                >
                  {i + 1}
                </text>
              )}
            </g>
          );
        })}

        {/* Y Axis */}
        <line
          x1={L}
          x2={L}
          y1={T}
          y2={y(0)}
          stroke={BLUE_LIGHT}
        />

        {/* X Axis */}
        <line
          x1={L}
          x2={W - R}
          y1={y(0)}
          y2={y(0)}
          stroke={BLUE_LIGHT}
        />
      </svg>
    </div>
  );
}

// =========================
// Legend Dot
// =========================
const Dot = ({ c }) => (
  <i
    className="
      mr-1.5
      inline-block
      h-2
      w-2
      shrink-0
      rounded-full
    "
    style={{ background: c }}
  />
);

// =========================
// Main Calculator
// =========================
export default function CalcWidget({ id, compact }) {
  const c = C[id];

  const [raw, setRaw] = useState(() =>
    Object.fromEntries(
      c.f.map((f) => [f[0], f[2]]),
    ),
  );

  const v = Object.fromEntries(
    c.f.map(([k, , , mn, mx]) => [
      k,
      Math.min(
        mx,
        Math.max(
          mn,
          +raw[k] || mn,
        ),
      ),
    ]),
  );

  const o = c.k(v);

  const l =
    o.l || [
      "Invested Amount",
      "Growth",
    ];

  const t =
    o.b[0] + o.b[1] || 1;

  const pa =
    ((o.b[0] / t) * 100).toFixed(0);

  // =========================
  // Common Card
  // =========================
  const box = `
    w-full
    min-w-0
    overflow-hidden
    rounded-2xl
    border
    border-[#29466D]
    bg-[#071A33]
    p-4
    sm:p-5
    shadow-[0_8px_24px_rgba(7,26,51,0.18)]
    transition-all
    duration-300
  `;

  return (
    <div
      className={`
        grid
        w-full
        min-w-0
        grid-cols-1
        items-start
        gap-4
        ${compact ? "" : "lg:grid-cols-2"}
      `}
    >
      {/* =================================
          LEFT - INPUTS
      ================================= */}
      <div className={box}>
        {c.f.map(
          ([
            k,
            lb,
            ,
            mn,
            mx,
            st,
          ]) => (
            <div
              key={k}
              className="
                mb-5
                min-w-0
                last:mb-0
              "
            >
              {/* Label + Number Input */}
              <div
                className="
                  flex
                  min-w-0
                  flex-col
                  gap-2
                  sm:flex-row
                  sm:items-center
                  sm:justify-between
                  sm:gap-3
                "
              >
                <label
                  htmlFor={id + k}
                  className="
                    min-w-0
                    break-words
                    text-sm
                    font-semibold
                    text-white
                  "
                >
                  {lb}
                </label>

                <input
                  id={id + k}
                  type="number"
                  inputMode="decimal"
                  min={mn}
                  max={mx}
                  step={st}
                  value={raw[k]}
                  onChange={(e) =>
                    setRaw({
                      ...raw,
                      [k]: e.target.value,
                    })
                  }
                  onBlur={() =>
                    setRaw({
                      ...raw,
                      [k]: v[k],
                    })
                  }
                  className="
                    h-10
                    w-full
                    min-w-0
                    rounded-lg
                    border
                    border-[#29466D]
                    bg-[#102D50]
                    px-3
                    py-2
                    text-right
                    text-sm
                    font-bold
                    text-white
                    outline-none
                    transition-all
                    duration-200
                    placeholder:text-[#7F95AE]
                    hover:border-[#E7B65A]
                    focus:border-[#E7B65A]
                    focus:ring-1
                    focus:ring-[#E7B65A]
                    sm:w-32
                    sm:shrink-0
                  "
                />
              </div>

              {/* Range */}
              <input
                type="range"
                aria-label={lb}
                min={mn}
                max={mx}
                step={st}
                value={v[k]}
                onChange={(e) =>
                  setRaw({
                    ...raw,
                    [k]: +e.target.value,
                  })
                }
                className="
                  mt-3
                  block
                  w-full
                  cursor-pointer
                  accent-[#E7B65A]
                "
                style={{
                  accentColor: GOLD,
                }}
              />
            </div>
          ),
        )}

        {/* =================================
            RESULTS
        ================================= */}
        <div
          className="
            mt-6
            w-full
            min-w-0
            overflow-hidden
            rounded-xl
            border
            border-[#29466D]
            bg-[#0B2342]
            px-3
            sm:px-4
          "
        >
          {o.r.map(([a, b]) => (
            <div
              key={a}
              className="
                flex
                min-w-0
                items-center
                justify-between
                gap-3
                border-b
                border-[#29466D]/60
                py-3
                last:border-0
              "
            >
              <span
                className="
                  min-w-0
                  break-words
                  text-sm
                  text-[#B8C7D9]
                "
              >
                {a}
              </span>

              <b
                className="
                  shrink-0
                  text-right
                  text-sm
                  sm:text-base
                "
                style={{
                  color: GOLD,
                }}
              >
                {b}
              </b>
            </div>
          ))}
        </div>

        <p
          className="
            mt-3
            text-[11px]
            leading-5
            text-[#8FA4BC]
          "
        >
          For illustration only. Returns are not guaranteed.
        </p>
      </div>

      {/* =================================
          RIGHT - CHARTS
      ================================= */}
      <div
        className="
          grid
          w-full
          min-w-0
          content-start
          justify-items-stretch
          gap-4
        "
      >
        {/* =================================
            PIE CHART
        ================================= */}
        <div className={box}>
          <h3
            className="
              break-words
              text-center
              text-sm
              font-bold
              text-white
              sm:text-base
            "
          >
            {c.n} - Pie Chart
          </h3>

          <div
            className="
              mx-auto
              mt-3
              flex
              w-full
              max-w-[280px]
              items-center
              justify-center
              rounded-xl
              bg-[#0B2342]
              px-3
              py-4
              sm:max-w-[320px]
            "
          >
            <Donut
              a={o.b[0]}
              b={o.b[1]}
              l={l}
            />
          </div>

          {/* Pie Legend */}
          <div
            className="
              mx-auto
              mt-4
              flex
              w-full
              max-w-full
              flex-wrap
              justify-center
              gap-x-5
              gap-y-2
              text-center
              text-xs
              text-[#D7E0ED]
            "
          >
            <span className="inline-flex items-center">
              <Dot c={GOLD} />
              {l[0]} ({pa}%)
            </span>

            <span className="inline-flex items-center">
              <Dot c={BLUE} />
              {l[1]} ({100 - pa}%)
            </span>
          </div>
        </div>

        {/* =================================
            BAR GRAPH
        ================================= */}
        <div className={box}>
          <h3
            className="
              break-words
              text-center
              text-sm
              font-bold
              text-white
              sm:text-left
              sm:text-base
            "
          >
            {c.n.replace(
              " Calculator",
              "",
            )}{" "}
            Projected Value
          </h3>

          <div
            className="
              mx-auto
              mt-3
              w-full
              min-w-0
              overflow-hidden
              rounded-xl
              border
              border-[#29466D]/60
              bg-[#0B2342]
              p-2
              sm:p-3
            "
          >
            <Bars
              s={o.s}
              l={l}
            />
          </div>

          {/* Graph Legend */}
          <div
            className="
              mt-3
              flex
              flex-wrap
              justify-center
              gap-x-4
              gap-y-2
              text-center
              text-xs
              text-[#D7E0ED]
            "
          >
            <span className="inline-flex items-center">
              <Dot c={BLUE} />
              {l[1]}
            </span>

            <span className="inline-flex items-center">
              <Dot c={GOLD} />
              {l[0]}
            </span>
          </div>

          <p
            className="
              mt-2
              text-center
              text-[11px]
              leading-5
              text-[#8FA4BC]
            "
          >
            X-axis: year · hover a bar for exact values
          </p>
        </div>
      </div>
    </div>
  );
}