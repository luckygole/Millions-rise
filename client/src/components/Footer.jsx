// import { Link } from "react-router-dom";
// import logo from "../assets/logo.png";
// import { CFG } from "../config";
// import { useSite } from "../context/SettingsContext";
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
//   const S = useSite();
//   return (
//     <footer className="border-t border-slate-200 bg-white pt-10 text-sm">
//       <div className="w grid gap-8 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr_1fr]">
//         <div>
//           <img src={logo} alt="Millions Rise" className="h-20 w-auto sm:h-24" />
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
//         📞 {S.phone} &nbsp;|&nbsp; ✉ {S.email} &nbsp;|&nbsp; 📍 {S.address}
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
//         href={S.waLink}
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

import amfi from "../assets/cal/amfi-logo.png";
import mutual from "../assets/cal/mutualfund.png";

const COLS = [
  [
    "COMPANY",
    [
      ["About Us", "/about"],
      ["Insights", "/blogs"],
      ["FAQs", "/faq"],
      ["Contact Us", "/contact"],
      ["Privacy Policy", "/privacy-policy"],
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
];

// const LEGAL_LINKS = [
//   ["Risk Factors", "/disclaimer"],
//   ["Terms & Conditions", "/terms"],
//   ["SID/SAI/KIM", "/disclaimer"],
//   ["Code of Conduct", "/disclaimer"],
//   ["Investor Grievance Redressal", "/contact"],
//   ["Important Links", "/disclaimer"],
//   ["SEBI Circulars", "/disclaimer"],
//   ["Privacy Policy", "/privacy-policy"],
// ];

function SocialIcon({ type }) {
  const common = {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    className: "h-6 w-6",
    "aria-hidden": true,
  };

  if (type === "instagram") {
    return (
      <svg {...common}>
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" />
      </svg>
    );
  }

  if (type === "facebook") {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        className="h-6 w-6"
        aria-hidden="true"
      >
        <path d="M13.5 21v-8h2.7l.4-3.1h-3.1V8c0-.9.3-1.5 1.6-1.5h1.7V3.7c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3v2H7.3V13h2.8v8h3.4Z" />
      </svg>
    );
  }

  if (type === "linkedin") {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        className="h-6 w-6"
        aria-hidden="true"
      >
        <path d="M5.2 8.4a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM3.5 10h3.4v10H3.5V10Zm5.5 0h3.3v1.4h.1a3.6 3.6 0 0 1 3.2-1.7c3.4 0 4 2.2 4 5V20h-3.4v-4.7c0-1.1 0-2.6-1.6-2.6s-1.9 1.2-1.9 2.5V20H9V10Z" />
      </svg>
    );
  }

  return (
    <svg {...common}>
      <path d="m5 5 14 14M19 5 5 19" />
      <path d="M5 3h3l11 18h-3L5 3Z" />
    </svg>
  );
}

function ContactIcon({ type }) {
  const paths = {
    location: (
      <>
        <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" />
        <circle cx="12" cy="10" r="2.5" />
      </>
    ),
    phone: (
      <path d="M7 3H4a1 1 0 0 0-1 1 17 17 0 0 0 17 17 1 1 0 0 0 1-1v-3l-5-2-2 3a14 14 0 0 1-5-5l3-2-2-5Z" />
    ),
    email: (
      <>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m4 7 8 6 8-6" />
      </>
    ),
  };

  return (
    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white/10 text-[#E6CF9A]">
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-6 w-6"
        aria-hidden="true"
      >
        {paths[type]}
      </svg>
    </span>
  );
}

function WhatsAppIcon() {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="currentColor"
      className="h-9 w-9"
      aria-hidden="true"
    >
      <path d="M16.04 2.67A13.2 13.2 0 0 0 4.76 22.72L3 29l6.43-1.69a13.2 13.2 0 1 0 6.61-24.64Zm0 24.04a10.85 10.85 0 0 1-5.53-1.51l-.4-.24-3.82 1 1.02-3.72-.26-.41a10.85 10.85 0 1 1 8.99 4.88Zm5.96-8.13c-.33-.17-1.95-.96-2.25-1.07-.3-.11-.52-.17-.74.17-.22.33-.85 1.07-1.04 1.29-.19.22-.38.25-.71.08-.33-.17-1.4-.52-2.66-1.65-.98-.88-1.64-1.96-1.83-2.29-.19-.33-.02-.51.15-.68.15-.15.33-.39.5-.58.16-.19.22-.33.33-.55.11-.22.06-.41-.03-.58-.08-.17-.74-1.78-1.01-2.44-.27-.64-.54-.55-.74-.56l-.63-.01c-.22 0-.58.08-.88.41-.3.33-1.15 1.12-1.15 2.73 0 1.62 1.18 3.18 1.35 3.4.17.22 2.32 3.54 5.62 4.96.79.34 1.41.55 1.89.7.79.25 1.51.21 2.08.13.63-.09 1.95-.8 2.23-1.57.28-.77.28-1.43.19-1.57-.08-.14-.3-.22-.63-.39Z" />
    </svg>
  );
}

export default function Footer() {
  const S = useSite();

  const socialLinks = [
    ["instagram", S.instagram],
    ["x", S.x],
    ["facebook", S.facebook],
    ["linkedin", S.linkedin],
  ].filter(([, url]) => Boolean(url));

  return (
    <footer className="w-full overflow-hidden border-t border-[#29466D] bg-[#0B2345] text-white">
      {/* Main Footer */}
      <div className="mx-auto w-full max-w-[1440px] px-5 pb-10 pt-12 sm:px-8 sm:pb-12 sm:pt-14 lg:px-10 lg:pt-16">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 sm:gap-x-10 sm:gap-y-12 lg:grid-cols-[1.4fr_0.8fr_0.9fr_1.25fr] lg:gap-12">
          {/* Brand */}
          <div className="min-w-0">
            <Link
              to="/"
              aria-label="Millions Rise home"
              className="inline-flex"
            >
              <img
                src={logo}
                alt="Millions Rise"
                className="h-[100px] w-auto max-w-[280px] object-contain object-left sm:h-[120px] lg:h-[130px]"
              />
            </Link>

            <p className="mt-6 max-w-[460px] text-base leading-8 text-slate-200 sm:text-lg sm:leading-9">
              Millions Rise helps individuals, families and businesses make
              informed financial decisions through investment, protection and
              wealth management.
            </p>

            <p className="mt-5 text-sm font-bold uppercase tracking-[0.16em] text-[#E6CF9A] sm:text-base">
              Trust · Strategy · Growth
            </p>
          </div>

          {/* Navigation */}
          {COLS.map(([heading, links]) => (
            <div key={heading} className="min-w-0">
              <h3 className="mb-6 inline-block border-b-2 border-[#E6CF9A] pb-3 font-serif text-2xl font-semibold text-white sm:text-3xl">
                {heading === "COMPANY" ? "Company" : "Invest"}
              </h3>

              <ul className="space-y-4">
                {links.map(([label, path]) => (
                  <li key={label}>
                    <Link
                      to={path}
                      className="inline-block text-base leading-7 text-slate-300 transition-colors duration-200 hover:translate-x-0.5 hover:text-[#E6CF9A] sm:text-lg sm:leading-8"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact */}
          <div className="min-w-0 sm:col-span-2 lg:col-span-1">
            <h3 className="mb-6 inline-block border-b-2 border-[#E6CF9A] pb-3 font-serif text-2xl font-semibold text-white sm:text-3xl">
              Contact Us
            </h3>

            <div className="space-y-5">
              <div className="flex items-start gap-4">
                <ContactIcon type="location" />
                <p className="break-words pt-1 text-base leading-7 text-slate-200 sm:text-lg sm:leading-8">
                  {S.address}
                </p>
              </div>

              <a
                href={`tel:${S.phone || ""}`}
                className="flex items-center gap-4 text-base text-slate-200 transition-colors hover:text-[#E6CF9A] sm:text-lg"
              >
                <ContactIcon type="phone" />
                <span className="break-all">{S.phone}</span>
              </a>

              <a
                href={`mailto:${S.email || ""}`}
                className="flex items-center gap-4 text-base text-slate-200 transition-colors hover:text-[#E6CF9A] sm:text-lg"
              >
                <ContactIcon type="email" />
                <span className="break-all">{S.email}</span>
              </a>
            </div>

            {/* Social Links */}
            {socialLinks.length > 0 && (
              <div className="mt-7 flex flex-wrap items-center gap-4">
                {socialLinks.map(([type, url]) => (
                  <a
                    key={type}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={type}
                    className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white text-[#0B2345] transition-all duration-200 hover:-translate-y-0.5 hover:border-[#E6CF9A] hover:bg-[#E6CF9A] focus:outline-none focus:ring-2 focus:ring-[#E6CF9A]"
                  >
                    <SocialIcon type={type} />
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Registration */}
      <div className="border-t border-white/15 px-5 py-6 text-center sm:px-8">
        <p className="text-base leading-8 text-slate-200 sm:text-lg sm:leading-8">
          Millions Rise is an AMFI Registered Mutual Fund Distributor
          <span className="mx-2 text-[#E6CF9A]">|</span>
          {/* ARN: {CFG.arn} */}
          ARN-319845
        </p>
      </div>

      {/* Legal Links */}
      {/* <div className="mx-auto flex max-w-[1300px] flex-wrap justify-center gap-x-4 gap-y-3 px-5 pb-8 text-center sm:gap-x-5 sm:px-8">
        {LEGAL_LINKS.map(([label, path], index) => (
          <span key={label} className="inline-flex items-center gap-4">
            <Link
              to={path}
              className="text-sm leading-7 text-slate-300 transition-colors hover:text-[#E6CF9A] sm:text-base sm:leading-8"
            >
              {label}
            </Link>

            {index !== LEGAL_LINKS.length - 1 && (
              <span className="text-white/25">|</span>
            )}
          </span>
        ))}
      </div> */}

      {/* Contact Details */}
      <div className="mx-auto max-w-[1250px] px-5 pb-8 text-center sm:px-8">
        <p className="text-base font-semibold leading-8 text-slate-200 sm:text-lg">
          For assistance, contact us at{" "}
          <a
            href={`tel:${S.phone || ""}`}
            className="text-[#E6CF9A] hover:underline"
          >
            {S.phone}
          </a>
          {" · "}
          <a
            href={`mailto:${S.email || ""}`}
            className="break-all text-[#E6CF9A] hover:underline"
          >
            {S.email}
          </a>
        </p>
      </div>

      {/* Disclaimer */}
      <div className="mx-auto max-w-[1360px] space-y-5 px-5 pb-9 text-center sm:px-8">
        <p className="text-sm leading-8 text-slate-300 sm:text-base sm:leading-9">
          <strong className="text-slate-100">Disclaimer: </strong>
          Mutual fund investments are subject to market risks. Read all
          scheme-related documents carefully. The NAVs of schemes may go up
          or down depending on market conditions and other factors. Past
          performance is not necessarily indicative of future performance.
          Returns are subject to market risks and are not guaranteed.
        </p>

        <p className="text-sm leading-8 text-slate-300 sm:text-base sm:leading-9">
          Millions Rise makes no warranties or representations, express or
          implied, regarding products or services offered through this
          platform. Information provided is for general informational
          purposes and does not constitute investment, legal or tax advice.
          Please review the relevant scheme documents and terms before
          investing.
        </p>
      </div>

      {/* Regulatory Logos */}
      <div className="flex flex-wrap items-center justify-center gap-6 px-5 pb-9 sm:gap-10">
        <div className="flex flex-wrap items-center justify-center gap-4">
          <img
            src={amfi}
            alt="AMFI"
            loading="lazy"
            className="h-[76px] w-[100px] rounded-sm bg-white object-contain p-2 sm:h-[88px] sm:w-[120px]"
          />

          <span className="text-base text-slate-200 sm:text-lg">
            {/* ARN - {CFG.arn} */}
            ARN-319845
          </span>
        </div>

        <img
          src={mutual}
          alt="Mutual Funds Sahi Hai"
          loading="lazy"
          className="h-[68px] w-[220px] rounded-sm bg-white object-contain px-3 py-2 sm:h-[76px] sm:w-[250px]"
        />
      </div>

      {/* Copyright */}
      <div className="mx-5 border-t border-white/30 py-6 text-center sm:mx-8">
        <p className="text-sm leading-7 text-slate-300 sm:text-base">
          © {new Date().getFullYear()} Millions Rise. All Rights Reserved.
        </p>
      </div>

      {/* WhatsApp Floating Button */}
      <a
        href={S.waLink}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contact us on WhatsApp"
        className="fixed bottom-5 right-5 z-40 grid h-16 w-16 place-items-center rounded-full border border-white/20 bg-[#25D366] text-white shadow-[0_8px_24px_rgba(0,0,0,0.25)] transition-all duration-200 hover:-translate-y-1 hover:bg-[#1EBE5D] focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:ring-offset-2 sm:bottom-7 sm:right-7 sm:h-[72px] sm:w-[72px]"
      >
        <WhatsAppIcon />
      </a>
    </footer>
  );
}

