

// import { Link } from 'react-router-dom';
// import { SV } from '../lib/data';

// export default function ServiceGrid({ n = 16 }) {
//   return (
//     <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
//       {SV.slice(0, n).map((s) => (
//         <Link
//           key={s[1]}
//           to="/services"
//           className="card group border border-slate-200 transition-all duration-300 hover:-translate-y-1 hover:border-[#29466D] hover:bg-[#071A33] hover:shadow-[0_12px_30px_rgba(7,26,51,0.25)]"
//         >
//           <div className="text-2xl transition-colors duration-300 group-hover:text-[#E7B65A]">
//             {s[0]}
//           </div>

//           <h3 className="mt-2 font-serif text-base text-ink transition-colors duration-300 group-hover:text-white">
//             {s[1]}
//           </h3>

//           <p className="text-[13.5px] text-slate-500 transition-colors duration-300 group-hover:text-[#D7E0ED]">
//             {s[2]}
//           </p>
//         </Link>
//       ))}
//     </div>
//   );
// }

import { Link } from "react-router-dom";
import { SV } from "../lib/data";

/* Professional line icons (koi extra package nahi chahiye).
   Har icon = [main lines, gold accent]. Key = SV ka title. */
const ICONS = {
  "Mutual Funds & SIP": [<path d="M4 20h16M6 20v-5M11 20v-8M16 20v-11" />, <path d="M5 9l5-4 3 3 6-5M15 3h4v4" />],
  "Goal-Based Investment": [<><circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="5" /></>, <><circle cx="12" cy="12" r="1.3" /><path d="M12 12l7-7" /></>],
  "Portfolio Review": [<circle cx="12" cy="12" r="9" />, <path d="M12 12V3a9 9 0 0 1 9 9z" />],
  NFO: [<path d="M12 3l2.5 6.5L21 12l-6.5 2.5L12 21l-2.5-6.5L3 12l6.5-2.5z" />, <path d="M19 3v4M17 5h4" />],
  "Bonds & NCDs": [<path d="M6 3h9l4 4v14H6zM14 3v5h5" />, <path d="M9 14h7M9 17h5" />],
  "Fixed Deposits": [<path d="M3 10l9-6 9 6M5 10v8M10 10v8M14 10v8M19 10v8M3 20h18" />, <path d="M3 10h18" />],
  IPO: [<path d="M12 3c3 2 5 6 5 10l-3 3h-4l-3-3c0-4 2-8 5-10zM9 16l-3 3M15 16l3 3" />, <circle cx="12" cy="9.5" r="1.8" />],
  "Demat & Share Trading": [<><path d="M7 4v16M17 3v17" /><rect x="5" y="8" width="4" height="7" rx="1" /><rect x="15" y="6" width="4" height="8" rx="1" /></>, <path d="M3 21h18" />],
  "Equity/Commodity Research": [<><circle cx="10" cy="10" r="6" /><path d="M15 15l6 6" /></>, <path d="M7 11l2-2 2 1.5 2-3" />],
  PMS: [<path d="M3 8h18v12H3zM9 8V5h6v3" />, <path d="M3 13h18" />],
  "AIF / SIF / IAP": [<path d="M12 3l9 5-9 5-9-5z" />, <path d="M3 13l9 5 9-5" />],
  "Life & Term Insurance": [<path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z" />, <path d="M9 12l2 2 4-4" />],
  "Health Insurance": [<path d="M12 20s-8-5-8-11a4.5 4.5 0 0 1 8-2 4.5 4.5 0 0 1 8 2c0 6-8 11-8 11z" />, <path d="M8 12h2l1.5-3 2 5 1.5-2h1" />],
  "Vehicle Insurance": [<path d="M4 16v-3l2-5h12l2 5v3zM7 19v-3M17 19v-3" />, <path d="M7 13h10" />],
  "ITR, TDS & Tax Planning": [<path d="M6 3h12v18l-3-2-3 2-3-2-3 2z" />, <path d="M9 8h6M9 12h6" />],
  "NRI / GIFT City": [<><circle cx="12" cy="12" r="9" /><path d="M3 12h18" /></>, <path d="M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18" />],
};

const Icon = ({ name, fallback }) => {
  const ic = ICONS[name];
  if (!ic) return <span className="text-3xl">{fallback}</span>; // koi naya item aaye to emoji dikhega
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-8 w-8"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <g>{ic[0]}</g>
      <g className="text-[#E7B65A]">{ic[1]}</g>
    </svg>
  );
};

export default function ServiceGrid({ n = 6 }) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3">
      {SV.slice(0, n).map((s, i) => (
        <Link
          key={s[1]}
          to="/services" // alag page chahiye to: `/services/${slug}`
          className="
            group relative flex flex-col items-center overflow-hidden
            rounded-[2rem] border border-slate-100 bg-white
            px-6 pb-8 pt-10 text-center
            shadow-[0_10px_40px_rgba(15,42,92,0.08)]
            transition-all duration-300
            hover:-translate-y-1.5 hover:border-[#071A33] hover:bg-[#071A33]
            hover:shadow-[0_18px_45px_rgba(7,26,51,0.30)]
            focus-visible:-translate-y-1.5 focus-visible:bg-[#071A33]
            focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E7B65A]
          "
        >
          {/* NUMBER */}
          <span
            className="
              absolute left-6 top-4 font-sans text-4xl font-extrabold
              text-[#C9D6F7] transition-colors duration-300
              group-hover:text-white group-focus-visible:text-white
            "
          >
            {String(i + 1).padStart(2, "0")}
          </span>

          {/* ICON: normal me bina bg, hover par white rounded box */}
          <div
            className="
              grid h-16 w-16 place-items-center rounded-2xl
              bg-transparent text-[#29466D]
              transition-all duration-300
              group-hover:bg-white group-hover:shadow-lg
              group-focus-visible:bg-white
            "
          >
            <Icon name={s[1]} fallback={s[0]} />
          </div>

          {/* TITLE */}
          <h3
            className="
              mt-6 font-serif text-xl leading-snug text-ink
              transition-colors duration-300
              group-hover:text-white group-focus-visible:text-white
            "
          >
            {s[1]}
          </h3>

          {/* DESCRIPTION (2-3 line, ab clamp nahi hai) */}
          <p
            className="
              mt-3 min-h-[4.5rem] text-[14.5px] leading-6 text-slate-600
              transition-colors duration-300
              group-hover:text-[#D7E0ED] group-focus-visible:text-[#D7E0ED]
            "
          >
            {s[2]}
          </p>

          {/* READ MORE: normal me gold fill, hover par white outline */}
          <span
            className="
              mt-6 inline-flex items-center gap-1.5 rounded-lg border-2
              border-[#E7B65A] bg-[#E7B65A] px-6 py-2.5 text-sm font-semibold text-ink
              transition-all duration-300
              group-hover:border-white group-hover:bg-transparent group-hover:text-white
              group-focus-visible:border-white group-focus-visible:bg-transparent group-focus-visible:text-white
            "
          >
            Read More <span aria-hidden="true">&gt;</span>
          </span>
        </Link>
      ))}
    </div>
  );
}