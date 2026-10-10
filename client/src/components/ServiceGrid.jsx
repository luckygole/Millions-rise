// import { Link } from "react-router-dom";
// import { SV } from "../lib/data";

// /* ------------------------------------------------------------------ */
// /*  Rangin flat icons (inline SVG - koi extra package nahi chahiye).   */
// /*  Key = SV ka title (s[1]). Sab icons 64x64 viewBox me bane hain.    */
// /* ------------------------------------------------------------------ */

// const SKIN = "#F9C9A3";
// const SKIN_DARK = "#F2A97A";

// /* Do haath (Mutual Funds aur Health Insurance dono me use hota hai) */
// const Hands = (
//   <>
//     <path
//       d="M6 38 C10 36 16 38 22 44 L30 50 C32 52 30 55 27 54 L16 51 C9 49 6 44 6 38Z"
//       fill={SKIN}
//       stroke={SKIN_DARK}
//       strokeWidth="1"
//     />
//     <g transform="translate(64,0) scale(-1,1)">
//       <path
//         d="M6 38 C10 36 16 38 22 44 L30 50 C32 52 30 55 27 54 L16 51 C9 49 6 44 6 38Z"
//         fill={SKIN}
//         stroke={SKIN_DARK}
//         strokeWidth="1"
//       />
//     </g>
//   </>
// );

// const ICONS = {
//   /* 1. Money bag + haath */
//   "Mutual Funds & SIP": (
//     <>
//       <path d="M26 14 L28 8 H36 L38 14Z" fill="#5BAE2E" />
//       <path
//         d="M24 20 Q16 30 19 38 Q23 45 32 45 Q41 45 45 38 Q48 30 40 20Z"
//         fill="#7AC943"
//       />
//       <rect x="26" y="14" width="12" height="6" rx="2" fill="#5BAE2E" />
//       <text
//         x="32"
//         y="39"
//         textAnchor="middle"
//         fontSize="15"
//         fontWeight="700"
//         fill="#fff"
//         fontFamily="Poppins, sans-serif"
//       >
//         $
//       </text>
//       {Hands}
//     </>
//   ),

//   /* 2. Target + arrow */
//   "Goal-Based Investment": (
//     <>
//       <circle cx="30" cy="34" r="22" fill="#E53935" />
//       <circle cx="30" cy="34" r="16" fill="#fff" />
//       <circle cx="30" cy="34" r="10" fill="#E53935" />
//       <circle cx="30" cy="34" r="4" fill="#fff" />
//       <path d="M30 34 L54 10" stroke="#29466D" strokeWidth="3" strokeLinecap="round" />
//       <path d="M50 8 L56 8 L56 14 L52 14 L50 12Z" fill="#FFC93C" />
//     </>
//   ),

//   /* 3. Pie chart */
//   "Portfolio Review": (
//     <>
//       <circle cx="32" cy="32" r="22" fill="#3B82F6" />
//       <path d="M32 32 L32 10 A22 22 0 0 1 54 32Z" fill="#FFC93C" />
//       <path d="M32 32 L54 32 A22 22 0 0 1 20 51Z" fill="#FF7043" />
//       <circle cx="32" cy="32" r="22" fill="none" stroke="#fff" strokeWidth="2" />
//       <path d="M32 32 L32 10 M32 32 L54 32 M32 32 L20 51" stroke="#fff" strokeWidth="2" />
//     </>
//   ),

//   /* 4. Sparkle / new */
//   NFO: (
//     <>
//       <path d="M30 8 L37 26 L55 33 L37 40 L30 58 L23 40 L5 33 L23 26Z" fill="#FFC93C" />
//       <path d="M30 18 L34 29 L45 33 L34 37 L30 48 L26 37 L15 33 L26 29Z" fill="#FFE08A" />
//       <path d="M50 6 l2 5 5 2 -5 2 -2 5 -2 -5 -5 -2 5 -2z" fill="#FF7043" />
//     </>
//   ),

//   /* 5. Certificate */
//   "Bonds & NCDs": (
//     <>
//       <rect x="8" y="10" width="46" height="36" rx="3" fill="#fff" stroke="#3B82F6" strokeWidth="3" />
//       <rect x="15" y="18" width="24" height="3.5" rx="1.5" fill="#BBD3F8" />
//       <rect x="15" y="26" width="32" height="3.5" rx="1.5" fill="#BBD3F8" />
//       <rect x="15" y="34" width="18" height="3.5" rx="1.5" fill="#BBD3F8" />
//       <path d="M40 50 L36 60 L44 56 L52 60 L48 50Z" fill="#E53935" />
//       <circle cx="44" cy="44" r="9" fill="#FFC93C" stroke="#F5A623" strokeWidth="2" />
//       <path d="M44 39 L45.8 42.8 L50 43.3 L47 46.2 L47.8 50.3 L44 48.3 L40.2 50.3 L41 46.2 L38 43.3 L42.2 42.8Z" fill="#fff" />
//     </>
//   ),

//   /* 6. Bank */
//   "Fixed Deposits": (
//     <>
//       <path d="M6 24 L32 7 L58 24Z" fill="#3B82F6" />
//       <circle cx="32" cy="18" r="3.5" fill="#FFC93C" />
//       <rect x="12" y="28" width="9" height="20" rx="1.5" fill="#CFE3FF" />
//       <rect x="27.5" y="28" width="9" height="20" rx="1.5" fill="#CFE3FF" />
//       <rect x="43" y="28" width="9" height="20" rx="1.5" fill="#CFE3FF" />
//       <rect x="8" y="50" width="48" height="7" rx="2" fill="#29466D" />
//     </>
//   ),

//   /* 7. Rocket */
//   IPO: (
//     <>
//       <path d="M28 44 L32 60 L36 44Z" fill="#FF9F43" />
//       <path d="M30 44 L32 54 L34 44Z" fill="#FFD27A" />
//       <path d="M24 32 L12 46 L25 42Z" fill="#E53935" />
//       <path d="M40 32 L52 46 L39 42Z" fill="#E53935" />
//       <path d="M32 4 C43 13 45 28 41 44 H23 C19 28 21 13 32 4Z" fill="#E8EEF7" />
//       <path d="M32 4 C36 7 39 11 40.5 16 H23.5 C25 11 28 7 32 4Z" fill="#E53935" />
//       <circle cx="32" cy="27" r="6" fill="#3B82F6" stroke="#fff" strokeWidth="2" />
//     </>
//   ),

//   /* 8. Candlesticks */
//   "Demat & Share Trading": (
//     <>
//       <path d="M17 14 V52 M35 10 V50 M53 8 V38" stroke="#29466D" strokeWidth="2.5" strokeLinecap="round" />
//       <rect x="11" y="24" width="12" height="20" rx="2" fill="#43A047" />
//       <rect x="29" y="16" width="12" height="22" rx="2" fill="#E53935" />
//       <rect x="47" y="12" width="12" height="18" rx="2" fill="#43A047" />
//       <rect x="6" y="55" width="52" height="3" rx="1.5" fill="#BBD3F8" />
//     </>
//   ),

//   /* 9. Magnifier + chart */
//   "Equity/Commodity Research": (
//     <>
//       <path d="M40 40 L56 56" stroke="#FF9F43" strokeWidth="7" strokeLinecap="round" />
//       <circle cx="27" cy="27" r="19" fill="#E3F0FF" stroke="#3B82F6" strokeWidth="4" />
//       <path
//         d="M16 34 L23 27 L29 31 L38 20"
//         fill="none"
//         stroke="#43A047"
//         strokeWidth="3"
//         strokeLinecap="round"
//         strokeLinejoin="round"
//       />
//       <circle cx="38" cy="20" r="2.5" fill="#43A047" />
//     </>
//   ),

//   /* 10. Briefcase */
//   PMS: (
//     <>
//       <path
//         d="M23 22 V15 a3 3 0 0 1 3-3 h12 a3 3 0 0 1 3 3 V22"
//         fill="none"
//         stroke="#6D4128"
//         strokeWidth="4"
//       />
//       <rect x="6" y="22" width="52" height="32" rx="5" fill="#B87A4F" />
//       <path d="M6 33 H58 V27 a5 5 0 0 0 -5 -5 H11 a5 5 0 0 0 -5 5Z" fill="#CF8F5F" />
//       <rect x="6" y="36" width="52" height="4" fill="#6D4128" />
//       <rect x="28" y="33" width="8" height="10" rx="2" fill="#FFC93C" stroke="#F5A623" strokeWidth="1.5" />
//     </>
//   ),

//   /* 11. Layers */
//   "AIF / SIF / IAP": (
//     <>
//       <path d="M32 40 L58 28 L58 34 L32 46 L6 34 L6 28Z" fill="#93C5FD" />
//       <path d="M32 30 L58 18 L58 24 L32 36 L6 24 L6 18Z" fill="#60A5FA" />
//       <path d="M32 6 L58 18 L32 30 L6 18Z" fill="#2F6FDB" />
//       <path d="M32 12 L48 18 L32 24 L16 18Z" fill="#7DB2FF" />
//     </>
//   ),

//   /* 12. Family + umbrella */
//   "Life & Term Insurance": (
//     <>
//       <path d="M6 26 A26 20 0 0 1 58 26Z" fill="#3B82F6" />
//       <path d="M32 6 A26 20 0 0 1 58 26 H32Z" fill="#5B9BF8" />
//       <path d="M6 26 q6.5 6 13 0 q6.5 6 13 0 q6.5 6 13 0 q6.5 6 13 0" fill="#3B82F6" />
//       <rect x="31" y="3" width="2" height="5" fill="#29466D" />
//       {/* papa */}
//       <circle cx="19" cy="37" r="5" fill={SKIN} />
//       <path d="M14 36 a5 5 0 0 1 10 -1 v-1 a5 5 0 0 0 -10 1Z" fill="#6D4128" />
//       <rect x="12" y="43" width="14" height="15" rx="4" fill="#2F6FDB" />
//       {/* mummy */}
//       <circle cx="45" cy="37" r="5" fill={SKIN} />
//       <path d="M39.5 37 a5.5 5.5 0 0 1 11 0 v7 h-3 v-5 h-5 v5 h-3Z" fill="#F5A623" />
//       <rect x="38" y="43" width="14" height="15" rx="4" fill="#2EAE5B" />
//       {/* bachcha */}
//       <circle cx="32" cy="47" r="4.5" fill={SKIN} />
//       <rect x="27" y="51" width="10" height="9" rx="3" fill="#FF7B7B" />
//     </>
//   ),

//   /* 13. Heart + haath */
//   "Health Insurance": (
//     <>
//       <path
//         d="M32 40 C12 28 14 9 26 11 C30 12 32 15 32 18 C32 15 34 12 38 11 C50 9 52 28 32 40Z"
//         fill="#E53935"
//       />
//       <rect x="29" y="16" width="6" height="14" rx="1.5" fill="#fff" />
//       <rect x="25" y="20" width="14" height="6" rx="1.5" fill="#fff" />
//       {Hands}
//       <rect x="6" y="46" width="9" height="5" rx="1" fill="#2F6FDB" transform="rotate(20 10 48)" />
//       <rect x="49" y="46" width="9" height="5" rx="1" fill="#2F6FDB" transform="rotate(-20 54 48)" />
//     </>
//   ),

//   /* 14. Car + shield */
//   "Vehicle Insurance": (
//     <>
//       <path d="M5 40 L10 29 Q12 25 17 25 H43 Q48 25 50 29 L56 40 V50 H5Z" fill="#3B82F6" />
//       <path d="M15 30 H46 L50 38 H11Z" fill="#CFE3FF" />
//       <path d="M30 30 V38" stroke="#3B82F6" strokeWidth="2" />
//       <circle cx="12" cy="43" r="2.5" fill="#FFC93C" />
//       <circle cx="49" cy="43" r="2.5" fill="#FFC93C" />
//       <circle cx="17" cy="50" r="7" fill="#29466D" />
//       <circle cx="17" cy="50" r="3" fill="#CFE3FF" />
//       <circle cx="44" cy="50" r="7" fill="#29466D" />
//       <circle cx="44" cy="50" r="3" fill="#CFE3FF" />
//       <path d="M48 4 L58 8 V16 C58 22 53 26 48 28 C43 26 38 22 38 16 V8Z" fill="#43A047" stroke="#fff" strokeWidth="2" />
//       <path d="M43 16 L47 20 L54 12" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
//     </>
//   ),

//   /* 15. Receipt + % */
//   "ITR, TDS & Tax Planning": (
//     <>
//       <path
//         d="M12 5 H44 V59 L39 55 L34 59 L28 55 L23 59 L17 55 L12 59Z"
//         fill="#fff"
//         stroke="#3B82F6"
//         strokeWidth="3"
//         strokeLinejoin="round"
//       />
//       <rect x="18" y="13" width="20" height="3.5" rx="1.5" fill="#BBD3F8" />
//       <rect x="18" y="21" width="20" height="3.5" rx="1.5" fill="#BBD3F8" />
//       <rect x="18" y="29" width="12" height="3.5" rx="1.5" fill="#BBD3F8" />
//       <circle cx="46" cy="42" r="12" fill="#FF9F43" stroke="#fff" strokeWidth="2" />
//       <circle cx="41.5" cy="37.5" r="2.4" fill="#fff" />
//       <circle cx="50.5" cy="46.5" r="2.4" fill="#fff" />
//       <path d="M50 36 L42 48" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" />
//     </>
//   ),

//   /* 16. Globe */
//   "NRI / GIFT City": (
//     <>
//       <circle cx="32" cy="32" r="24" fill="#3B82F6" />
//       <path d="M14 24 Q22 12 33 18 Q30 28 22 32 Q12 32 14 24Z" fill="#7AC943" />
//       <path d="M36 36 Q47 31 52 40 Q48 52 38 50 Q31 43 36 36Z" fill="#7AC943" />
//       <path d="M18 44 Q22 41 26 45 Q24 50 19 49Z" fill="#7AC943" />
//       <ellipse cx="32" cy="32" rx="30" ry="9" fill="none" stroke="#FFC93C" strokeWidth="3" transform="rotate(-25 32 32)" />
//     </>
//   ),
// };

// const Icon = ({ name, fallback }) => {
//   const ic = ICONS[name];
//   if (!ic) return <span className="text-3xl">{fallback}</span>; // koi naya item aaye to emoji dikhega
//   return (
//     <svg viewBox="0 0 80 80" className="h-20 w-20" aria-hidden="true">
//       {ic}
//     </svg>
//   );
// };

// export default function ServiceGrid({ n = 6 }) {
//   return (
//     <div className="grid gap-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3">
//       {SV.slice(0, n).map((s, i) => (
//         <Link
//           key={s[1]}
//           to="/services" // alag page chahiye to: `/services/${slug}`
//           className="
//             group relative flex flex-col items-center overflow-hidden
//             rounded-[2rem] border border-slate-100 bg-white
//             px-6 pb-8 pt-10 text-center
//             shadow-[0_10px_40px_rgba(15,42,92,0.08)]
//             transition-all duration-300
//             hover:-translate-y-1.5 hover:border-[#071A33] hover:bg-[#071A33]
//             hover:shadow-[0_18px_45px_rgba(7,26,51,0.30)]
//             focus-visible:-translate-y-1.5 focus-visible:bg-[#071A33]
//             focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E7B65A]
//           "
//         >
//           {/* NUMBER */}
//           <span
//             className="
//               absolute left-6 top-4 font-sans text-4xl font-extrabold
//               text-[#C9D6F7] transition-colors duration-300
//               group-hover:text-white group-focus-visible:text-white
//             "
//           >
//             {String(i + 1).padStart(2, "0")}
//           </span>

//           {/* ICON: normal me bina bg, hover par white rounded box */}
//           <div
//             className="
//               grid h-16 w-16 place-items-center rounded-2xl
//               bg-transparent text-[#29466D]
//               transition-all duration-300
//               group-hover:bg-white group-hover:shadow-lg
//               group-focus-visible:bg-white
//             "
//           >
//             <Icon name={s[1]} fallback={s[0]} />
//           </div>

//           {/* TITLE */}
//           <h3
//             className="
//               mt-6 font-serif text-xl leading-snug text-ink
//               transition-colors duration-300
//               group-hover:text-white group-focus-visible:text-white
//             "
//           >
//             {s[1]}
//           </h3>

//           {/* DESCRIPTION (2-3 line, ab clamp nahi hai) */}
//           <p
//             className="
//               mt-3 min-h-[4.5rem] text-[14.5px] leading-6 text-slate-600
//               transition-colors duration-300
//               group-hover:text-[#D7E0ED] group-focus-visible:text-[#D7E0ED]
//             "
//           >
//             {s[2]}
//           </p>

//           {/* READ MORE: normal me gold fill, hover par white outline */}
//           <span
//             className="
//               mt-6 inline-flex items-center gap-1.5 rounded-lg border-2
//               border-[#E7B65A] bg-[#E7B65A] px-6 py-2.5 text-sm font-semibold text-ink
//               transition-all duration-300
//               group-hover:border-white group-hover:bg-transparent group-hover:text-white
//               group-focus-visible:border-white group-focus-visible:bg-transparent group-focus-visible:text-white
//             "
//           >
//             Read More <span aria-hidden="true">&gt;</span>
//           </span>
//         </Link>
//       ))}
//     </div>
//   );
// }


import { Link } from "react-router-dom";
import { SV } from "../lib/data";
import { SERVICE_DETAILS } from "../lib/serviceDetails";

/* ------------------------------------------------------------------ */
/* Rangin flat icons — inline SVG, no extra package required           */
/* ------------------------------------------------------------------ */

const SKIN = "#F9C9A3";
const SKIN_DARK = "#F2A97A";

/* Do haath */
const Hands = (
  <>
    <path
      d="M6 38 C10 36 16 38 22 44 L30 50 C32 52 30 55 27 54 L16 51 C9 49 6 44 6 38Z"
      fill={SKIN}
      stroke={SKIN_DARK}
      strokeWidth="1"
    />
    <g transform="translate(64,0) scale(-1,1)">
      <path
        d="M6 38 C10 36 16 38 22 44 L30 50 C32 52 30 55 27 54 L16 51 C9 49 6 44 6 38Z"
        fill={SKIN}
        stroke={SKIN_DARK}
        strokeWidth="1"
      />
    </g>
  </>
);

const ICONS = {
  "Mutual Funds & SIP": (
    <>
      <path d="M26 14 L28 8 H36 L38 14Z" fill="#5BAE2E" />
      <path
        d="M24 20 Q16 30 19 38 Q23 45 32 45 Q41 45 45 38 Q48 30 40 20Z"
        fill="#7AC943"
      />
      <rect x="26" y="14" width="12" height="6" rx="2" fill="#5BAE2E" />
      <text
        x="32"
        y="39"
        textAnchor="middle"
        fontSize="15"
        fontWeight="700"
        fill="#fff"
        fontFamily="Poppins, sans-serif"
      >
        $
      </text>
      {Hands}
    </>
  ),

  "Goal-Based Investment": (
    <>
      <circle cx="30" cy="34" r="22" fill="#E53935" />
      <circle cx="30" cy="34" r="16" fill="#fff" />
      <circle cx="30" cy="34" r="10" fill="#E53935" />
      <circle cx="30" cy="34" r="4" fill="#fff" />
      <path
        d="M30 34 L54 10"
        stroke="#29466D"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path d="M50 8 L56 8 L56 14 L52 14 L50 12Z" fill="#FFC93C" />
    </>
  ),

  "Portfolio Review": (
    <>
      <circle cx="32" cy="32" r="22" fill="#3B82F6" />
      <path d="M32 32 L32 10 A22 22 0 0 1 54 32Z" fill="#FFC93C" />
      <path d="M32 32 L54 32 A22 22 0 0 1 20 51Z" fill="#FF7043" />
      <circle
        cx="32"
        cy="32"
        r="22"
        fill="none"
        stroke="#fff"
        strokeWidth="2"
      />
      <path
        d="M32 32 L32 10 M32 32 L54 32 M32 32 L20 51"
        stroke="#fff"
        strokeWidth="2"
      />
    </>
  ),

  NFO: (
    <>
      <path
        d="M30 8 L37 26 L55 33 L37 40 L30 58 L23 40 L5 33 L23 26Z"
        fill="#FFC93C"
      />
      <path
        d="M30 18 L34 29 L45 33 L34 37 L30 48 L26 37 L15 33 L26 29Z"
        fill="#FFE08A"
      />
      <path
        d="M50 6 l2 5 5 2 -5 2 -2 5 -2 -5 -5 -2 5 -2z"
        fill="#FF7043"
      />
    </>
  ),

  "Bonds & NCDs": (
    <>
      <rect
        x="8"
        y="10"
        width="46"
        height="36"
        rx="3"
        fill="#fff"
        stroke="#3B82F6"
        strokeWidth="3"
      />
      <rect x="15" y="18" width="24" height="3.5" rx="1.5" fill="#BBD3F8" />
      <rect x="15" y="26" width="32" height="3.5" rx="1.5" fill="#BBD3F8" />
      <rect x="15" y="34" width="18" height="3.5" rx="1.5" fill="#BBD3F8" />
      <path d="M40 50 L36 60 L44 56 L52 60 L48 50Z" fill="#E53935" />
      <circle
        cx="44"
        cy="44"
        r="9"
        fill="#FFC93C"
        stroke="#F5A623"
        strokeWidth="2"
      />
      <path
        d="M44 39 L45.8 42.8 L50 43.3 L47 46.2 L47.8 50.3 L44 48.3 L40.2 50.3 L41 46.2 L38 43.3 L42.2 42.8Z"
        fill="#fff"
      />
    </>
  ),

  "Fixed Deposits": (
    <>
      <path d="M6 24 L32 7 L58 24Z" fill="#3B82F6" />
      <circle cx="32" cy="18" r="3.5" fill="#FFC93C" />
      <rect x="12" y="28" width="9" height="20" rx="1.5" fill="#CFE3FF" />
      <rect x="27.5" y="28" width="9" height="20" rx="1.5" fill="#CFE3FF" />
      <rect x="43" y="28" width="9" height="20" rx="1.5" fill="#CFE3FF" />
      <rect x="8" y="50" width="48" height="7" rx="2" fill="#29466D" />
    </>
  ),

  IPO: (
    <>
      <path d="M28 44 L32 60 L36 44Z" fill="#FF9F43" />
      <path d="M30 44 L32 54 L34 44Z" fill="#FFD27A" />
      <path d="M24 32 L12 46 L25 42Z" fill="#E53935" />
      <path d="M40 32 L52 46 L39 42Z" fill="#E53935" />
      <path
        d="M32 4 C43 13 45 28 41 44 H23 C19 28 21 13 32 4Z"
        fill="#E8EEF7"
      />
      <path
        d="M32 4 C36 7 39 11 40.5 16 H23.5 C25 11 28 7 32 4Z"
        fill="#E53935"
      />
      <circle
        cx="32"
        cy="27"
        r="6"
        fill="#3B82F6"
        stroke="#fff"
        strokeWidth="2"
      />
    </>
  ),

  "Demat & Share Trading": (
    <>
      <path
        d="M17 14 V52 M35 10 V50 M53 8 V38"
        stroke="#29466D"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <rect x="11" y="24" width="12" height="20" rx="2" fill="#43A047" />
      <rect x="29" y="16" width="12" height="22" rx="2" fill="#E53935" />
      <rect x="47" y="12" width="12" height="18" rx="2" fill="#43A047" />
      <rect x="6" y="55" width="52" height="3" rx="1.5" fill="#BBD3F8" />
    </>
  ),

  "Equity/Commodity Research": (
    <>
      <path
        d="M40 40 L56 56"
        stroke="#FF9F43"
        strokeWidth="7"
        strokeLinecap="round"
      />
      <circle
        cx="27"
        cy="27"
        r="19"
        fill="#E3F0FF"
        stroke="#3B82F6"
        strokeWidth="4"
      />
      <path
        d="M16 34 L23 27 L29 31 L38 20"
        fill="none"
        stroke="#43A047"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="38" cy="20" r="2.5" fill="#43A047" />
    </>
  ),

  PMS: (
    <>
      <path
        d="M23 22 V15 a3 3 0 0 1 3-3 h12 a3 3 0 0 1 3 3 V22"
        fill="none"
        stroke="#6D4128"
        strokeWidth="4"
      />
      <rect x="6" y="22" width="52" height="32" rx="5" fill="#B87A4F" />
      <path
        d="M6 33 H58 V27 a5 5 0 0 0 -5 -5 H11 a5 5 0 0 0 -5 5Z"
        fill="#CF8F5F"
      />
      <rect x="6" y="36" width="52" height="4" fill="#6D4128" />
      <rect
        x="28"
        y="33"
        width="8"
        height="10"
        rx="2"
        fill="#FFC93C"
        stroke="#F5A623"
        strokeWidth="1.5"
      />
    </>
  ),

  "AIF / SIF / IAP": (
    <>
      <path d="M32 40 L58 28 L58 34 L32 46 L6 34 L6 28Z" fill="#93C5FD" />
      <path d="M32 30 L58 18 L58 24 L32 36 L6 24 L6 18Z" fill="#60A5FA" />
      <path d="M32 6 L58 18 L32 30 L6 18Z" fill="#2F6FDB" />
      <path d="M32 12 L48 18 L32 24 L16 18Z" fill="#7DB2FF" />
    </>
  ),

  "Life & Term Insurance": (
    <>
      <path d="M6 26 A26 20 0 0 1 58 26Z" fill="#3B82F6" />
      <path d="M32 6 A26 20 0 0 1 58 26 H32Z" fill="#5B9BF8" />
      <path
        d="M6 26 q6.5 6 13 0 q6.5 6 13 0 q6.5 6 13 0 q6.5 6 13 0"
        fill="#3B82F6"
      />
      <rect x="31" y="3" width="2" height="5" fill="#29466D" />
      <circle cx="19" cy="37" r="5" fill={SKIN} />
      <path d="M14 36 a5 5 0 0 1 10 -1 v-1 a5 5 0 0 0 -10 1Z" fill="#6D4128" />
      <rect x="12" y="43" width="14" height="15" rx="4" fill="#2F6FDB" />
      <circle cx="45" cy="37" r="5" fill={SKIN} />
      <path
        d="M39.5 37 a5.5 5.5 0 0 1 11 0 v7 h-3 v-5 h-5 v5 h-3Z"
        fill="#F5A623"
      />
      <rect x="38" y="43" width="14" height="15" rx="4" fill="#2EAE5B" />
      <circle cx="32" cy="47" r="4.5" fill={SKIN} />
      <rect x="27" y="51" width="10" height="9" rx="3" fill="#FF7B7B" />
    </>
  ),

  "Health Insurance": (
    <>
      <path
        d="M32 40 C12 28 14 9 26 11 C30 12 32 15 32 18 C32 15 34 12 38 11 C50 9 52 28 32 40Z"
        fill="#E53935"
      />
      <rect x="29" y="16" width="6" height="14" rx="1.5" fill="#fff" />
      <rect x="25" y="20" width="14" height="6" rx="1.5" fill="#fff" />
      {Hands}
      <rect
        x="6"
        y="46"
        width="9"
        height="5"
        rx="1"
        fill="#2F6FDB"
        transform="rotate(20 10 48)"
      />
      <rect
        x="49"
        y="46"
        width="9"
        height="5"
        rx="1"
        fill="#2F6FDB"
        transform="rotate(-20 54 48)"
      />
    </>
  ),

  "Vehicle Insurance": (
    <>
      <path d="M5 40 L10 29 Q12 25 17 25 H43 Q48 25 50 29 L56 40 V50 H5Z" fill="#3B82F6" />
      <path d="M15 30 H46 L50 38 H11Z" fill="#CFE3FF" />
      <path d="M30 30 V38" stroke="#3B82F6" strokeWidth="2" />
      <circle cx="12" cy="43" r="2.5" fill="#FFC93C" />
      <circle cx="49" cy="43" r="2.5" fill="#FFC93C" />
      <circle cx="17" cy="50" r="7" fill="#29466D" />
      <circle cx="17" cy="50" r="3" fill="#CFE3FF" />
      <circle cx="44" cy="50" r="7" fill="#29466D" />
      <circle cx="44" cy="50" r="3" fill="#CFE3FF" />
      <path
        d="M48 4 L58 8 V16 C58 22 53 26 48 28 C43 26 38 22 38 16 V8Z"
        fill="#43A047"
        stroke="#fff"
        strokeWidth="2"
      />
      <path
        d="M43 16 L47 20 L54 12"
        fill="none"
        stroke="#fff"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </>
  ),

  "ITR, TDS & Tax Planning": (
    <>
      <path
        d="M12 5 H44 V59 L39 55 L34 59 L28 55 L23 59 L17 55 L12 59Z"
        fill="#fff"
        stroke="#3B82F6"
        strokeWidth="3"
        strokeLinejoin="round"
      />
      <rect x="18" y="13" width="20" height="3.5" rx="1.5" fill="#BBD3F8" />
      <rect x="18" y="21" width="20" height="3.5" rx="1.5" fill="#BBD3F8" />
      <rect x="18" y="29" width="12" height="3.5" rx="1.5" fill="#BBD3F8" />
      <circle
        cx="46"
        cy="42"
        r="12"
        fill="#FF9F43"
        stroke="#fff"
        strokeWidth="2"
      />
      <circle cx="41.5" cy="37.5" r="2.4" fill="#fff" />
      <circle cx="50.5" cy="46.5" r="2.4" fill="#fff" />
      <path d="M50 36 L42 48" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" />
    </>
  ),

  "NRI / GIFT City": (
    <>
      <circle cx="32" cy="32" r="24" fill="#3B82F6" />
      <path d="M14 24 Q22 12 33 18 Q30 28 22 32 Q12 32 14 24Z" fill="#7AC943" />
      <path d="M36 36 Q47 31 52 40 Q48 52 38 50 Q31 43 36 36Z" fill="#7AC943" />
      <path d="M18 44 Q22 41 26 45 Q24 50 19 49Z" fill="#7AC943" />
      <ellipse
        cx="32"
        cy="32"
        rx="30"
        ry="9"
        fill="none"
        stroke="#FFC93C"
        strokeWidth="3"
        transform="rotate(-25 32 32)"
      />
    </>
  ),
};

/* ------------------------------------------------------------------ */
/* Icon Component                                                       */
/* ------------------------------------------------------------------ */

const Icon = ({ name, fallback }) => {
  const ic = ICONS[name];

  if (!ic) {
    return <span className="text-3xl">{fallback}</span>;
  }

  return (
    <svg
      viewBox="0 0 80 80"
      className="h-16 w-16 sm:h-20 sm:w-20"
      aria-hidden="true"
    >
      {ic}
    </svg>
  );
};

/* ------------------------------------------------------------------ */
/* Responsive Service Grid                                             */
/* detailed=false: Home page grid                                      */
/* detailed=true: Financial Solutions horizontal list                  */
/* ------------------------------------------------------------------ */

export default function ServiceGrid({ n = 6, detailed = false }) {
  const services = SV.slice(0, n);

  return (
    <div
      className={
        detailed
          ? "flex flex-col gap-5 sm:gap-6"
          : "grid grid-cols-1 items-stretch gap-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3"
      }
    >
      {services.map((s, i) => {
        /* ---------------------------------------------------------- */
        /* FINANCIAL SOLUTIONS — horizontal service rectangle          */
        /* ---------------------------------------------------------- */

        if (detailed) {
          return (
            <article
              key={s[1]}
              className="
                group relative flex w-full min-w-0 flex-col justify-center
                overflow-hidden rounded-2xl border border-slate-100
                bg-white p-5
                shadow-[0_10px_40px_rgba(15,42,92,0.08)]
                transition-all duration-300
                hover:-translate-y-1 hover:border-[#071A33]
                hover:bg-[#071A33]
                hover:shadow-[0_18px_45px_rgba(7,26,51,0.30)]
                sm:p-6 lg:p-7
              "
            >
              <div className="flex w-full min-w-0 flex-col items-stretch gap-5 sm:flex-row sm:items-center sm:gap-6 lg:gap-8">
                {/* LEFT: ICON + SERVICE TITLE */}
                <div className="flex min-w-0 items-center gap-4 sm:w-[34%] sm:shrink-0 sm:gap-5">
                  <div
                    className="
                      grid h-16 w-16 shrink-0 place-items-center
                      rounded-2xl bg-transparent
                      transition-all duration-300
                      group-hover:bg-white group-hover:shadow-lg
                    "
                  >
                    <Icon name={s[1]} fallback={s[0]} />
                  </div>

                  <div className="min-w-0 text-left">
                    <span
                      className="
                        mb-1 block text-xs font-bold tracking-[0.16em]
                        text-[#29466D]/60
                        transition-colors duration-300
                        group-hover:text-[#E7B65A]
                      "
                    >
                      SERVICE {String(i + 1).padStart(2, "0")}
                    </span>

                    <h3
                      className="
                        font-serif text-lg leading-snug text-ink
                        transition-colors duration-300
                        group-hover:text-white
                        sm:text-xl
                      "
                    >
                      {s[1]}
                    </h3>
                  </div>
                </div>

                {/* RIGHT: DESCRIPTION RECTANGLE */}
                <div
                  className="
                    w-full min-w-0 flex-1 rounded-xl
                    border border-[#29466D]/20 bg-slate-50
                    px-4 py-4 text-left
                    transition-all duration-300
                    group-hover:border-[#E7B65A]/50
                    group-hover:bg-[#0F2D57]
                    sm:px-5 sm:py-5 lg:px-6
                  "
                >
                  <p
                    className="
                      break-words text-sm leading-7 text-slate-700
                      transition-colors duration-300
                      group-hover:text-[#E7EAF0]
                    "
                  >
                    {SERVICE_DETAILS[s[1]] || s[2]}
                  </p>
                </div>
              </div>
            </article>
          );
        }

        /* ---------------------------------------------------------- */
        /* HOME PAGE — original clickable service card                 */
        /* ---------------------------------------------------------- */

        return (
          <Link
            key={s[1]}
            to="/services"
            aria-label={`Read more about ${s[1]}`}
            className="
              group relative flex h-full min-w-0 flex-col items-center
              overflow-hidden rounded-[2rem] border border-slate-100
              bg-white px-5 pb-7 pt-10 text-center
              shadow-[0_10px_40px_rgba(15,42,92,0.08)]
              transition-all duration-300
              hover:-translate-y-1.5 hover:border-[#071A33]
              hover:bg-[#071A33]
              hover:shadow-[0_18px_45px_rgba(7,26,51,0.30)]
              focus-visible:-translate-y-1.5 focus-visible:bg-[#071A33]
              focus-visible:outline-none focus-visible:ring-2
              focus-visible:ring-[#E7B65A]
              sm:px-6 sm:pb-8
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

            {/* ICON */}
            <div
              className="
                grid h-16 w-16 shrink-0 place-items-center rounded-2xl
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

            {/* SHORT DESCRIPTION */}
            <p
              className="
                mt-3 min-h-[4.5rem] text-[14.5px] leading-6
                text-slate-600 transition-colors duration-300
                group-hover:text-[#D7E0ED]
                group-focus-visible:text-[#D7E0ED]
              "
            >
              {s[2]}
            </p>

            {/* READ MORE */}
            <span
              className="
                mt-6 inline-flex items-center gap-1.5 rounded-lg
                border-2 border-[#E7B65A] bg-[#E7B65A]
                px-6 py-2.5 text-sm font-semibold text-ink
                transition-all duration-300
                group-hover:border-white group-hover:bg-transparent
                group-hover:text-white
                group-focus-visible:border-white
                group-focus-visible:bg-transparent
                group-focus-visible:text-white
              "
            >
              Read More <span aria-hidden="true">&gt;</span>
            </span>
          </Link>
        );
      })}
    </div>
  );
}