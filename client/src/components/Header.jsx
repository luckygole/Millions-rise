// import { useState } from "react";
// import { Link, NavLink, useNavigate } from "react-router-dom";
// import logo from "../assets/logo.png";
// import { C } from "../lib/calculators";
// import { CFG } from "../config";
// import { useSite } from "../context/SettingsContext";
// import { useAuth } from "../context/AuthContext";

// const NAV = [
//   ["Home", "/"],
//   ["About Us", "/about"],
//   ["Financial Solutions", "/services"],
//   [
//     "Mutual Funds",
//     "/compare",
//     [
//       ["Compare Funds", "/compare"],
//       ["Risk Profile Quiz", "/risk"],
//     ],
//   ],
//   [
//     "Tools & Calculators",
//     "/calculators/sip",
//     Object.keys(C).map((k) => [C[k].n, "/calculators/" + k]),
//   ],
//   [
//     "Insights",
//     "/blogs",
//     [
//       ["Blogs", "/blogs"],
//       ["FAQs", "/faq"],
//     ],
//   ],
//   ["IPO Corner", "/ipo"],
//   ["Contact", "/contact"],
// ];

// const PG = {
//   "ipo corner": "/ipo",
//   "compare funds": "/compare",
//   "risk profile": "/risk",
//   services: "/services",
//   contact: "/contact",
// };

// export default function Header() {
//   const [o, setO] = useState(false);

//   const nav = useNavigate();
//   const { user, logout } = useAuth();
//   const S = useSite();

//   const close = () => setO(false);

//   const go = (e) => {
//     const v = e.target.value.toLowerCase();

//     const k = Object.keys(C).find(
//       (k) => C[k].n.toLowerCase() === v
//     );

//     if (k || PG[v]) {
//       nav(k ? "/calculators/" + k : PG[v]);
//       e.target.value = "";
//       close();
//     }
//   };

//   const search = (cls) => (
//     <input
//       list="sl"
//       onChange={go}
//       placeholder="Search funds, services, calculators…"
//       className={`
//         inp
//         h-10
//         w-full
//         min-w-0
//         rounded-lg
//         border
//         border-slate-300
//         px-4
//         text-sm
//         outline-none
//         transition-all
//         duration-200
//         hover:border-gold
//         focus:border-gold
//         focus:ring-1
//         focus:ring-gold
//         ${cls}
//       `}
//     />
//   );

//   return (
//     <header
//       className="
//         sticky
//         top-0
//         z-50
//         w-full
//         min-w-0
//         overflow-x-clip
//         border-b
//         border-slate-200
//         bg-white
//         shadow-sm
//       "
//     >
//       {/* =========================================================
//           TOP HEADER
//       ========================================================= */}
//       <div
//         className="
//           w-full
//           px-[12px]
//           sm:px-[16px]
//           md:px-[20px]
//           lg:px-[24px]
//           xl:px-[32px]
//           2xl:px-[40px]
//         "
//       >
//         <div
//           className="
//             flex
//             min-h-[68px]
//             w-full
//             min-w-0
//             items-center
//             gap-3
//             py-2
//             sm:min-h-[74px]
//             sm:gap-4
//             lg:min-h-[82px]
//             lg:gap-5
//           "
//         >
//           {/* =====================================================
//               LOGO
//           ===================================================== */}
//           <Link
//             to="/"
//             onClick={close}
//             className="
//               block
//               shrink-0
//               transition-transform
//               duration-300
//               hover:scale-[1.02]
//             "
//           >
//             <img
//               src={logo}
//               alt="Millions Rise"
//               className="
//                 block
//                 h-[56px]
//                 w-auto
//                 max-w-[170px]
//                 object-contain
//                 sm:h-[62px]
//                 sm:max-w-[185px]
//                 md:h-[68px]
//                 md:max-w-[200px]
//                 lg:h-[72px]
//                 lg:max-w-[210px]
//                 xl:h-[76px]
//                 xl:max-w-[220px]
//               "
//             />
//           </Link>

//           {/* =====================================================
//               DESKTOP SEARCH
//               First code UI + second code logic
//           ===================================================== */}
//           <div
//             className="
//               mx-auto
//               hidden
//               min-w-0
//               w-full
//               max-w-[420px]
//               lg:block
//               xl:max-w-[480px]
//               2xl:max-w-[520px]
//             "
//           >
//             {search("")}
//           </div>

//           {/* =====================================================
//               SEARCH OPTIONS
//           ===================================================== */}
//           <datalist id="sl">
//             {Object.keys(C).map((k) => (
//               <option
//                 key={k}
//                 value={C[k].n}
//               />
//             ))}

//             {[
//               "IPO Corner",
//               "Compare Funds",
//               "Risk Profile",
//               "Services",
//               "Contact",
//             ].map((x) => (
//               <option
//                 key={x}
//                 value={x}
//               />
//             ))}
//           </datalist>

//           {/* =====================================================
//               DESKTOP CONTACT + WHATSAPP + CONSULTATION
//           ===================================================== */}
//           <div
//             className="
//               ml-auto
//               hidden
//               min-w-0
//               items-center
//               justify-end
//               gap-3
//               text-[16px]
//               font-bold
//               lg:flex
//               xl:gap-5
//               xl:text-[17px]
//               2xl:gap-7
//               2xl:text-[18px]
//             "
//           >
//             {/* PHONE */}
//             <a
//               href={"tel:" + S.tel}
//               className="
//                 whitespace-nowrap
//                 transition-all
//                 duration-200
//                 hover:text-gold
//               "
//             >
//               📞 {S.phone}
//             </a>

            
//             <a
//               href={S.waLink}
//               target="_blank"
//               rel="noreferrer"
//               className="
//                 whitespace-nowrap
//                 transition-all
//                 duration-200
//                 hover:text-gold
//               "
//             >
//               💬 WhatsApp
//             </a>

//             {/* CONSULTATION */}
//             <Link
//               to="/contact"
//               className="
//                 btn
//                 whitespace-nowrap
//                 transition-all
//                 duration-300
//                 hover:-translate-y-0.5
//                 hover:shadow-md
//                 active:translate-y-0
//               "
//             >
//               Book a Consultation
//             </Link>
//           </div>

//           {/* =====================================================
//               MOBILE / TABLET MENU
//           ===================================================== */}
//           <button
//             onClick={() => setO(!o)}
//             aria-label="Menu"
//             aria-expanded={o}
//             type="button"
//             className="
//               ml-auto
//               flex
//               h-11
//               w-11
//               shrink-0
//               items-center
//               justify-center
//               rounded-lg
//               border
//               border-slate-200
//               bg-white
//               text-2xl
//               leading-none
//               transition-all
//               duration-200
//               hover:border-gold
//               hover:bg-slate-50
//               focus:outline-none
//               focus:ring-2
//               focus:ring-gold
//               lg:hidden
//               xl:hidden
//             "
//           >
//             {o ? "✕" : "☰"}
//           </button>
//         </div>
//       </div>

//       {/* =========================================================
//           NAVIGATION
//           Mobile/Tablet collapsible
//           Desktop from XL (1280px)
//       ========================================================= */}
//       <div
//         className={`
//           w-full
//           border-t
//           border-slate-200
//           bg-white
//           ${o ? "block" : "hidden"}
//           xl:block
//         `}
//       >
//         <div
//           className="
//             w-full
//             px-[12px]
//             sm:px-[16px]
//             md:px-[20px]
//             lg:px-[24px]
//             xl:px-[32px]
//             2xl:px-[40px]
//           "
//         >
//           <div
//             className="
//               w-full
//               min-w-0
//               xl:flex
//               xl:items-center
//               xl:justify-between
//               xl:gap-4
//               2xl:gap-6
//             "
//           >
//             {/* ===================================================
//                 MOBILE / TABLET EXTRA CONTROLS
//             =================================================== */}
//             <div
//               className="
//                 space-y-3
//                 py-3
//                 xl:hidden
//               "
//             >
//               {/* MOBILE SEARCH */}
//               {search("block")}

//               {/* MOBILE CONTACT BUTTONS */}
//               <div
//                 className="
//                   flex
//                   flex-wrap
//                   gap-2
//                   text-sm
//                 "
//               >
//                 <a
//                   href={"tel:" + S.tel}
//                   className="
//                     btn
//                     btn-o
//                     px-4
//                     py-2
//                     transition-all
//                     duration-300
//                     hover:-translate-y-0.5
//                   "
//                 >
//                   📞 Call
//                 </a>

//                 <a
//                   href={S.waLink}
//                   target="_blank"
//                   rel="noreferrer"
//                   className="
//                     btn
//                     btn-o
//                     px-4
//                     py-2
//                     transition-all
//                     duration-300
//                     hover:-translate-y-0.5
//                   "
//                 >
//                   💬 WhatsApp
//                 </a>

//                 <Link
//                   to="/contact"
//                   onClick={close}
//                   className="
//                     btn
//                     px-4
//                     py-2
//                     transition-all
//                     duration-300
//                     hover:-translate-y-0.5
//                   "
//                 >
//                   Book a Consultation
//                 </Link>
//               </div>
//             </div>

//             {/* ===================================================
//                 NAV LINKS
//             =================================================== */}
//             <nav
//               className="
//                 flex
//                 min-w-0
//                 flex-col
//                 py-2
//                 xl:flex-1
//                 xl:flex-row
//                 xl:items-center
//                 xl:py-0
//               "
//             >
//               {NAV.map(([t, to, sub]) => (
//                 <div
//                   key={t}
//                   className="
//                     group
//                     relative
//                     min-w-0
//                   "
//                 >
//                   <NavLink
//                     to={to}
//                     end={to === "/"}
//                     onClick={close}
//                     className={({ isActive }) =>
//                       `
//                         block
//                         rounded-md
//                         border-b-2
//                         px-3
//                         py-3
//                         text-[13px]
//                         font-semibold
//                         transition-all
//                         duration-200
//                         hover:border-gold
//                         hover:bg-slate-50
//                         xl:whitespace-nowrap
//                         xl:rounded-none
//                         xl:px-2
//                         xl:py-4
//                         xl:hover:bg-transparent
//                         2xl:px-3
//                         ${
//                           isActive
//                             ? "border-gold text-ink"
//                             : "border-transparent"
//                         }
//                       `
//                     }
//                   >
//                     {t}
//                   </NavLink>

//                   {/* =============================================
//                       DESKTOP DROPDOWN
//                   ============================================= */}
//                   {sub && (
//                     <div
//                       className="
//                         hidden
//                         xl:invisible
//                         xl:absolute
//                         xl:left-0
//                         xl:top-full
//                         xl:z-40
//                         xl:block
//                         xl:min-w-[230px]
//                         xl:rounded-xl
//                         xl:border
//                         xl:border-slate-200
//                         xl:bg-white
//                         xl:p-1.5
//                         xl:opacity-0
//                         xl:shadow-xl
//                         xl:transition-all
//                         xl:duration-200
//                         xl:group-hover:visible
//                         xl:group-hover:opacity-100
//                       "
//                     >
//                       {sub.map(([a, b]) => (
//                         <Link
//                           key={a}
//                           to={b}
//                           onClick={close}
//                           className="
//                             block
//                             rounded-md
//                             px-3
//                             py-2
//                             text-[13px]
//                             transition-all
//                             duration-200
//                             hover:bg-slate-50
//                             hover:pl-4
//                             hover:text-[#29466D]
//                           "
//                         >
//                           {a}
//                         </Link>
//                       ))}
//                     </div>
//                   )}
//                 </div>
//               ))}
//             </nav>

//             {/* ===================================================
//                 USER ACTIONS
//             =================================================== */}
//             <div
//               className="
//                 flex
//                 min-w-0
//                 flex-wrap
//                 items-center
//                 gap-3
//                 border-t
//                 border-slate-100
//                 py-4
//                 xl:shrink-0
//                 xl:gap-2
//                 xl:border-0
//                 xl:py-0
//                 2xl:gap-3
//               "
//             >
//               {/* CLIENT PORTAL */}
//               <a
//                 href={CFG.login}
//                 target="_blank"
//                 rel="noreferrer"
//                 className="
//                   whitespace-nowrap
//                   px-2
//                   py-1.5
//                   text-[13px]
//                   font-semibold
//                   transition-all
//                   duration-200
//                   hover:text-gold
//                 "
//               >
//                 ↗ Client Portal
//               </a>

//               {user ? (
//                 <>
//                   {/* USER NAME */}
//                   <span
//                     className="
//                       max-w-[140px]
//                       truncate
//                       px-2
//                       text-[13px]
//                       font-semibold
//                     "
//                   >
//                     Hi, {user.name.split(" ")[0]}
//                   </span>

//                   {/* ADMIN */}
//                   {user.role === "admin" && (
//                     <Link
//                       to="/admin"
//                       onClick={close}
//                       className="
//                         btn
//                         btn-o
//                         whitespace-nowrap
//                         px-3
//                         py-1.5
//                         text-[13px]
//                         transition-all
//                         duration-300
//                         hover:-translate-y-0.5
//                       "
//                     >
//                       Admin Panel
//                     </Link>
//                   )}

//                   {/* LOGOUT */}
//                   <button
//                     type="button"
//                     onClick={() => {
//                       logout();
//                       close();
//                       nav("/");
//                     }}
//                     className="
//                       btn
//                       whitespace-nowrap
//                       px-3
//                       py-1.5
//                       text-[13px]
//                       transition-all
//                       duration-300
//                       hover:-translate-y-0.5
//                     "
//                   >
//                     Logout
//                   </button>
//                 </>
//               ) : (
//                 <>
//                   {/* LOGIN */}
//                   <Link
//                     to="/login"
//                     onClick={close}
//                     className="
//                       btn
//                       btn-o
//                       whitespace-nowrap
//                       px-4
//                       py-1.5
//                       text-[13px]
//                       transition-all
//                       duration-300
//                       hover:-translate-y-0.5
//                     "
//                   >
//                     Login
//                   </Link>

//                   {/* SIGN UP */}
//                   <Link
//                     to="/signup"
//                     onClick={close}
//                     className="
//                       btn
//                       whitespace-nowrap
//                       px-4
//                       py-1.5
//                       text-[13px]
//                       transition-all
//                       duration-300
//                       hover:-translate-y-0.5
//                     "
//                   >
//                     Sign Up
//                   </Link>
//                 </>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// }














import { useEffect, useRef, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import { C } from "../lib/calculators";
import { CFG } from "../config";
import { useAuth } from "../context/AuthContext";

const NAV = [
  ["Home", "/"],
  ["About Us", "/about"],
  ["Financial Solutions", "/services"],
  [
    "Mutual Funds",
    "/compare",
    [
      ["Compare Funds", "/compare"],
      ["Risk Profile Quiz", "/risk"],
    ],
  ],
  [
    "Tools & Calculators",
    "/calculators/sip",
    Object.keys(C).map((k) => [C[k].n, "/calculators/" + k]),
  ],
  [
    "Insights",
    "/blogs",
    [
      ["Blogs", "/blogs"],
      ["FAQs", "/faq"],
    ],
  ],
  ["IPO Corner", "/ipo"],
  ["Contact", "/contact"],
];

/* dropdown theme: navy bg + white text */
const MENU_BOX =
  "rounded-xl border border-[#29466D] bg-[#071A33] p-1.5 shadow-[0_18px_40px_rgba(7,26,51,0.35)]";
const MENU_ITEM =
  "block w-full rounded-lg px-3.5 py-2.5 text-left text-[13.5px] font-medium text-white transition-colors duration-200 hover:bg-[#0F2D57] hover:text-[#E7B65A] focus-visible:bg-[#0F2D57] focus-visible:text-[#E7B65A] focus-visible:outline-none";

const Chevron = ({ className = "" }) => (
  <svg viewBox="0 0 20 20" className={`h-3 w-3 shrink-0 ${className}`} fill="currentColor" aria-hidden="true">
    <path d="M5.5 7.5l4.5 5 4.5-5z" />
  </svg>
);

export default function Header() {
  const [open, setOpen] = useState(false); // mobile menu
  const [acc, setAcc] = useState(null); // mobile accordion
  const [cl, setCl] = useState(false); // desktop Client Login dropdown
  const clRef = useRef(null);

  const nav = useNavigate();
  const { user, logout } = useAuth();

  const close = () => {
    setOpen(false);
    setAcc(null);
    setCl(false);
  };

  useEffect(() => {
    const onDown = (e) => {
      if (clRef.current && !clRef.current.contains(e.target)) setCl(false);
    };
    const onKey = (e) => {
      if (e.key === "Escape") {
        setCl(false);
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  const doLogout = () => {
    logout();
    close();
    nav("/");
  };

  /* Client Login dropdown content: Login/Logout, uske niche "Hi, username" */
  const clientItems = user ? (
    <>
      {user.role === "admin" && (
        <Link to="/admin" onClick={close} className={MENU_ITEM}>
          Admin Panel
        </Link>
      )}
      <button type="button" onClick={doLogout} className={MENU_ITEM}>
        Logout
      </button>
      <p className="mt-1 truncate border-t border-white/10 px-3.5 pb-2 pt-2.5 text-[13px] font-semibold text-[#E7B65A]">
        Hi, {user.name}
      </p>
    </>
  ) : (
    <>
      <Link to="/login" onClick={close} className={MENU_ITEM}>
        Login
      </Link>
      <Link to="/signup" onClick={close} className={MENU_ITEM}>
        Sign Up
      </Link>
    </>
  );

  const portfolioCls =
    "inline-flex h-10 items-center justify-center gap-1.5 whitespace-nowrap rounded-lg bg-[#071A33] px-4 text-[13.5px] font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#29466D] hover:shadow-md active:translate-y-0 2xl:h-11 2xl:px-5 2xl:text-[14px]";

  return (
    <header className="sticky top-0 z-50 w-full min-w-0 border-b border-slate-200 bg-white shadow-sm">
      <div className="w-full px-[12px] sm:px-[16px] md:px-[20px] lg:px-[24px] xl:px-[32px] 2xl:px-[40px]">
        <div className="flex min-h-[72px] w-full min-w-0 items-center gap-4 sm:min-h-[80px] xl:h-[108px] xl:gap-4 2xl:h-[120px]">
          {/* ================= LOGO (desktop par bada, phone par chhota) ================= */}
          <Link
            to="/"
            onClick={close}
            className="block shrink-0 transition-transform duration-300 hover:scale-[1.02]"
          >
            <img
              src={logo}
              alt="Millions Rise"
              className="block h-[52px] w-auto max-w-[150px] object-contain sm:h-[60px] sm:max-w-[170px] md:h-[68px] md:max-w-[190px] xl:h-[90px] xl:max-w-[200px] 2xl:h-[106px] 2xl:max-w-[250px]"
            />
          </Link>

          {/* ================= DESKTOP NAV (logo ke saath same line, beech me) ================= */}
          <nav
            aria-label="Main"
            className="mx-auto hidden min-w-0 items-stretch justify-center self-stretch xl:flex"
          >
            {NAV.map(([t, to, sub]) => (
              <div key={t} className="group relative flex items-stretch">
                <NavLink
                  to={to}
                  end={to === "/"}
                  onClick={close}
                  className={({ isActive }) =>
                    `flex items-center gap-1 whitespace-nowrap border-b-[3px] px-1.5 text-[13px] font-medium transition-colors duration-200 hover:border-gold hover:text-ink 2xl:px-3.5 2xl:text-[15px] ${
                      isActive ? "border-gold text-ink" : "border-transparent text-slate-700"
                    }`
                  }
                >
                  {t}
                  {sub && <Chevron className="transition-transform duration-200 group-hover:rotate-180" />}
                </NavLink>

                {sub && (
                  <div className="invisible absolute left-0 top-full z-40 min-w-[250px] opacity-0 transition-all duration-200 group-focus-within:visible group-focus-within:opacity-100 group-hover:visible group-hover:opacity-100">
                    <div className={`max-h-[70vh] overflow-y-auto ${MENU_BOX}`}>
                      {sub.map(([a, b]) => (
                        <Link key={a} to={b} onClick={close} className={MENU_ITEM}>
                          {a}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* ================= DESKTOP RIGHT: Portfolio Review + Client Login ================= */}
          <div className="hidden shrink-0 items-center gap-2 xl:flex 2xl:gap-3">
            <a href={CFG.login} target="_blank" rel="noreferrer" className={portfolioCls}>
              Portfolio Review <span aria-hidden="true">↗</span>
            </a>

            <div ref={clRef} className="relative">
              <button
                type="button"
                aria-haspopup="menu"
                aria-expanded={cl}
                onClick={() => setCl((v) => !v)}
                className="inline-flex h-10 items-center gap-2 whitespace-nowrap rounded-lg border border-[#29466D] bg-white px-4 text-[13.5px] font-semibold text-ink transition-all duration-200 hover:bg-[#071A33] hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-gold 2xl:h-11 2xl:px-5 2xl:text-[14px]"
              >
                Client Login
                <Chevron className={`transition-transform duration-200 ${cl ? "rotate-180" : ""}`} />
              </button>

              {cl && (
                <div role="menu" className={`absolute right-0 top-full z-50 mt-2 w-60 ${MENU_BOX}`}>
                  {clientItems}
                </div>
              )}
            </div>
          </div>

          {/* ================= PHONE / TABLET: saara menu ek button ke andar ================= */}
          <button
            type="button"
            onClick={() => setOpen(!open)}
            aria-label="Menu"
            aria-expanded={open}
            aria-controls="mobile-menu"
            className="ml-auto grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-[#071A33] text-white transition-all duration-200 hover:bg-[#29466D] focus:outline-none focus-visible:ring-2 focus-visible:ring-gold xl:hidden"
          >
            <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" aria-hidden="true">
              {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
            </svg>
          </button>
        </div>
      </div>

      {/* ================= PHONE / TABLET PANEL ================= */}
      <div
        id="mobile-menu"
        className={`max-h-[calc(100vh-72px)] overflow-y-auto border-t border-slate-200 bg-white xl:hidden ${
          open ? "block" : "hidden"
        }`}
      >
        <div className="px-[12px] py-2 sm:px-[16px] md:px-[20px]">
          <ul>
            {NAV.map(([t, to, sub]) => (
              <li key={t} className="border-b border-slate-100">
                {sub ? (
                  <>
                    <button
                      type="button"
                      aria-expanded={acc === t}
                      onClick={() => setAcc(acc === t ? null : t)}
                      className="flex w-full items-center justify-between px-2 py-3.5 text-left text-[15px] font-semibold text-ink"
                    >
                      {t}
                      <Chevron className={`transition-transform duration-200 ${acc === t ? "rotate-180" : ""}`} />
                    </button>
                    {acc === t && (
                      <div className="mb-3 max-h-[50vh] overflow-y-auto rounded-xl bg-[#071A33] p-1.5">
                        {sub.map(([a, b]) => (
                          <Link key={a} to={b} onClick={close} className={MENU_ITEM}>
                            {a}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <NavLink
                    to={to}
                    end={to === "/"}
                    onClick={close}
                    className={({ isActive }) =>
                      `block px-2 py-3.5 text-[15px] font-semibold ${isActive ? "text-gold" : "text-ink"}`
                    }
                  >
                    {t}
                  </NavLink>
                )}
              </li>
            ))}

            {/* Client Login accordion */}
            <li className="border-b border-slate-100">
              <button
                type="button"
                aria-expanded={acc === "client"}
                onClick={() => setAcc(acc === "client" ? null : "client")}
                className="flex w-full items-center justify-between px-2 py-3.5 text-left text-[15px] font-semibold text-ink"
              >
                Client Login
                <Chevron className={`transition-transform duration-200 ${acc === "client" ? "rotate-180" : ""}`} />
              </button>
              {acc === "client" && <div className="mb-3 rounded-xl bg-[#071A33] p-1.5">{clientItems}</div>}
            </li>
          </ul>

          <a
            href={CFG.login}
            target="_blank"
            rel="noreferrer"
            onClick={close}
            className="my-4 flex h-12 w-full items-center justify-center gap-1.5 rounded-lg bg-[#29466D] text-[15px] font-semibold text-white transition-colors hover:bg-[#071A33]"
          >
            Portfolio Review <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
    </header>
  );
}