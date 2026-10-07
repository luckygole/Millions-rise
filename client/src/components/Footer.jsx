// import { Link } from "react-router-dom";
// import logo from "../assets/logo.png";
// import { CFG } from "../config";
// const COLS = [
//   [
//     "COMPANY",
//     [
//       ["About", "/about"],
//       ["Insights", "/blogs"],
//       ["FAQs", "/faq"],
//       ["Contact", "/contact"],
//     ],
//   ],
//   [
//     "INVEST",
//     [
//       ["Mutual Funds & SIP", "/services"],
//       ["IPO Corner", "/ipo"],
//       ["Bonds & NCDs", "/services"],
//       ["Compare Funds", "/compare"],
//     ],
//   ],
//   [
//     "PROTECT",
//     [
//       ["Health Insurance", "/services"],
//       ["Life & Term", "/services"],
//       ["Vehicle Insurance", "/services"],
//       ["ITR & Tax", "/services"],
//     ],
//   ],
//   [
//     "TOOLS",
//     [
//       ["SIP Calculator", "/calculators/sip"],
//       ["Lumpsum", "/calculators/lump"],
//       ["Goal Planner", "/calculators/goal"],
//       ["Risk Profile", "/risk"],
//     ],
//   ],
// ];
// export default function Footer() {
//   return (
//     <footer className="border-t border-slate-200 bg-white pt-10 text-sm">
//       <div className="w grid gap-8 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr_1fr]">
//         <div>
//           <img src={logo} alt="Millions Rise" className="h-14 w-auto" />
//           <p className="my-3 text-slate-500">
//             Millions Rise helps individuals, families and businesses make
//             informed financial decisions through investment, protection and
//             wealth management.
//           </p>
//           <b className="text-[11px] tracking-[.14em] text-slate-500">
//             TRUST • STRATEGY • GROWTH
//           </b>
//         </div>
//         {COLS.map(([h, l]) => (
//           <div key={h}>
//             <h4 className="mb-3 inline-block border-b-2 border-gold pb-1 text-[11px] font-extrabold tracking-[.14em]">
//               {h}
//             </h4>
//             {l.map(([a, b]) => (
//               <Link
//                 key={a}
//                 to={b}
//                 className="block py-1 text-slate-500 hover:text-gold"
//               >
//                 {a}
//               </Link>
//             ))}
//           </div>
//         ))}
//       </div>
//       <div className="w py-6 text-slate-500">
//         📞 {CFG.phone} &nbsp;|&nbsp; ✉ {CFG.email} &nbsp;|&nbsp; 📍{" "}
//         {CFG.address}
//       </div>
//       <div className="bg-ink py-4 text-[11px] text-slate-300">
//         <div className="w">
//           © 2026 Millions Rise. All Rights Reserved.{" "}
//           <Link to="/disclaimer" className="text-[#e6cf9a]">
//             Disclaimer & Disclosures
//           </Link>
//           <p className="mt-2">
//             <b>AMFI Registered Mutual Fund Distributor | {CFG.arn}</b>. Mutual
//             fund investments are subject to market risks. Read all scheme
//             related documents carefully. Past performance does not guarantee
//             future returns. Information is for general purposes and is not
//             investment, legal or tax advice.
//           </p>
//         </div>
//       </div>
//       <a
//         href={CFG.waLink}
//         target="_blank"
//         rel="noreferrer"
//         aria-label="WhatsApp"
//         className="fixed bottom-4 right-4 z-40 grid place-items-center rounded-full bg-[#25d366] p-3.5 text-2xl shadow-lg"
//       >
//         💬
//       </a>
//     </footer>
//   );
// }

import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { CFG } from "../config";
import { useSite } from "../context/SettingsContext";
const COLS = [
  [
    "COMPANY",
    [
      ["About", "/about"],
      ["Insights", "/blogs"],
      ["FAQs", "/faq"],
      ["Contact", "/contact"],
    ],
  ],
  [
    "INVEST",
    [
      ["Mutual Funds & SIP", "/services"],
      ["IPO Corner", "/ipo"],
      ["Bonds & NCDs", "/services"],
      ["Compare Funds", "/compare"],
    ],
  ],
  [
    "PROTECT",
    [
      ["Health Insurance", "/services"],
      ["Life & Term", "/services"],
      ["Vehicle Insurance", "/services"],
      ["ITR & Tax", "/services"],
    ],
  ],
  [
    "TOOLS",
    [
      ["SIP Calculator", "/calculators/sip"],
      ["Lumpsum", "/calculators/lump"],
      ["Goal Planner", "/calculators/goal"],
      ["Risk Profile", "/risk"],
    ],
  ],
];
export default function Footer() {
  const S = useSite();
  return (
    <footer className="border-t border-slate-200 bg-white pt-10 text-sm">
      <div className="w grid gap-8 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr_1fr]">
        <div>
          <img src={logo} alt="Millions Rise" className="h-20 w-auto sm:h-24" />
          <p className="my-3 text-slate-500">
            Millions Rise helps individuals, families and businesses make
            informed financial decisions through investment, protection and
            wealth management.
          </p>
          <b className="text-[11px] tracking-[.14em] text-slate-500">
            TRUST • STRATEGY • GROWTH
          </b>
        </div>
        {COLS.map(([h, l]) => (
          <div key={h}>
            <h4 className="mb-3 inline-block border-b-2 border-gold pb-1 text-[11px] font-extrabold tracking-[.14em]">
              {h}
            </h4>
            {l.map(([a, b]) => (
              <Link
                key={a}
                to={b}
                className="block py-1 text-slate-500 hover:text-gold"
              >
                {a}
              </Link>
            ))}
          </div>
        ))}
      </div>
      <div className="w py-6 text-slate-500">
        📞 {S.phone} &nbsp;|&nbsp; ✉ {S.email} &nbsp;|&nbsp; 📍 {S.address}
      </div>
      <div className="bg-ink py-4 text-[11px] text-slate-300">
        <div className="w">
          © 2026 Millions Rise. All Rights Reserved.{" "}
          <Link to="/disclaimer" className="text-[#e6cf9a]">
            Disclaimer & Disclosures
          </Link>
          <p className="mt-2">
            <b>AMFI Registered Mutual Fund Distributor | {CFG.arn}</b>. Mutual
            fund investments are subject to market risks. Read all scheme
            related documents carefully. Past performance does not guarantee
            future returns. Information is for general purposes and is not
            investment, legal or tax advice.
          </p>
        </div>
      </div>
      <a
        href={S.waLink}
        target="_blank"
        rel="noreferrer"
        aria-label="WhatsApp"
        className="fixed bottom-4 right-4 z-40 grid place-items-center rounded-full bg-[#25d366] p-3.5 text-2xl shadow-lg"
      >
        💬
      </a>
    </footer>
  );
}

