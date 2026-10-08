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

/* =========================
   DROPDOWN THEME
========================= */

const MENU_BOX =
  "rounded-xl border border-[#29466D] bg-[#071A33] p-1.5 shadow-[0_18px_40px_rgba(7,26,51,0.35)]";

const MENU_ITEM =
  "block w-full rounded-lg px-3.5 py-2.5 text-left text-[13.5px] font-medium text-white transition-colors duration-200 hover:bg-[#29466D] hover:text-[#E7B65A] focus-visible:bg-[#29466D] focus-visible:text-[#E7B65A] focus-visible:outline-none";

/* =========================
   CHEVRON
========================= */

const Chevron = ({ className = "" }) => (
  <svg
    viewBox="0 0 20 20"
    className={`h-3 w-3 shrink-0 ${className}`}
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M5.5 7.5l4.5 5 4.5-5z" />
  </svg>
);

export default function Header() {
  /* =========================
     MOBILE MENU
  ========================= */

  const [open, setOpen] = useState(false);
  const [acc, setAcc] = useState(null);

  /* =========================
     CLIENT LOGIN DROPDOWN
  ========================= */

  const [cl, setCl] = useState(false);
  const clRef = useRef(null);

  const nav = useNavigate();
  const { user, logout } = useAuth();

  /* =========================
     CLOSE ALL MENUS
  ========================= */

  const close = () => {
    setOpen(false);
    setAcc(null);
    setCl(false);
  };

  /* =========================
     OUTSIDE CLICK + ESCAPE
  ========================= */

  useEffect(() => {
    const onDown = (e) => {
      if (clRef.current && !clRef.current.contains(e.target)) {
        setCl(false);
      }
    };

    const onKey = (e) => {
      if (e.key === "Escape") {
        setCl(false);
        setOpen(false);
        setAcc(null);
      }
    };

    document.addEventListener("mousedown", onDown);
    document.addEventListener("keydown", onKey);

    return () => {
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  /* =========================
     LOGOUT
  ========================= */

  const doLogout = () => {
    logout();
    close();
    nav("/");
  };

  /* =========================
     CLIENT LOGIN DROPDOWN
  ========================= */

  const clientItems = user ? (
    <>
      {user.role === "admin" && (
        <Link
          to="/admin"
          onClick={close}
          className={MENU_ITEM}
        >
          Admin Panel
        </Link>
      )}

      <button
        type="button"
        onClick={doLogout}
        className={MENU_ITEM}
      >
        Logout
      </button>

      <p className="mt-1 truncate border-t border-white/10 px-3.5 pb-2 pt-2.5 text-[13px] font-semibold text-[#E7B65A]">
        Hi, {user.name}
      </p>
    </>
  ) : (
    <>
      <Link
        to="/login"
        onClick={close}
        className={MENU_ITEM}
      >
        Login
      </Link>

      <Link
        to="/signup"
        onClick={close}
        className={MENU_ITEM}
      >
        Sign Up
      </Link>
    </>
  );

  /* =========================
     TOP RIGHT BUTTONS
  ========================= */

  const portfolioCls =
    "inline-flex h-10 items-center justify-center gap-1.5 whitespace-nowrap rounded-lg bg-[#071A33] px-4 text-[13.5px] font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#29466D] hover:shadow-md active:translate-y-0 2xl:h-11 2xl:px-5 2xl:text-[14px]";

  return (
    <header className="sticky top-0 z-50 w-full min-w-0 bg-white shadow-sm">

      {/* =====================================================
          TOP HEADER
          LOGO LEFT | COMPANY NAME CENTER | BUTTONS RIGHT
      ===================================================== */}

      <div className="w-full border-b border-slate-200 bg-white">
        <div className="mx-auto w-full max-w-[1600px] px-[12px] sm:px-[16px] md:px-[20px] lg:px-[24px] xl:px-[32px] 2xl:px-[40px]">

          <div className="relative flex min-h-[76px] w-full items-center justify-between gap-4 sm:min-h-[82px] lg:min-h-[88px] xl:min-h-[96px]">

            {/* ================= LOGO ================= */}

            <Link
              to="/"
              onClick={close}
              className="block shrink-0 transition-transform duration-300 hover:scale-[1.02]"
            >
              <img
  src={logo}
  alt="Millions Rise"
  className="
    block
    h-[58px]
    w-auto
    max-w-[180px]
    object-contain
    sm:h-[66px]
    sm:max-w-[200px]
    md:h-[74px]
    md:max-w-[220px]
    lg:h-[82px]
    lg:max-w-[240px]
    xl:h-[90px]
    xl:max-w-[260px]
    2xl:h-[100px]
    2xl:max-w-[290px]
  "
/>
            </Link>

            {/* ================= COMPANY NAME ================= */}

            <div
              className="
                absolute
                left-1/2
                hidden
                -translate-x-1/2
                items-center
                justify-center
                text-center
                lg:flex
              "
            >
              {/* <h1 className="whitespace-nowrap font-serif text-[20px] font-semibold text-[#071A33] xl:text-[23px] 2xl:text-[26px]">
                AMFI-Registered Mutual Fund Distributor
              </h1> */}
            </div>

            {/* ================= RIGHT BUTTONS ================= */}

            <div className="ml-auto hidden shrink-0 items-center gap-2 xl:flex 2xl:gap-3">

              {/* Portfolio Review */}

              <a
                href={CFG.login}
                target="_blank"
                rel="noreferrer"
                className={portfolioCls}
              >
                Portfolio Review
                <span aria-hidden="true">↗</span>
              </a>

              {/* Client Login */}

              <div
                ref={clRef}
                className="relative"
              >
                <button
                  type="button"
                  aria-haspopup="menu"
                  aria-expanded={cl}
                  onClick={() => setCl((v) => !v)}
                  className="
                    inline-flex
                    h-10
                    items-center
                    gap-2
                    whitespace-nowrap
                    rounded-lg
                    border
                    border-[#29466D]
                    bg-white
                    px-4
                    text-[13.5px]
                    font-semibold
                    text-[#071A33]
                    transition-all
                    duration-200
                    hover:bg-[#071A33]
                    hover:text-white
                    focus:outline-none
                    focus-visible:ring-2
                    focus-visible:ring-[#E7B65A]
                    2xl:h-11
                    2xl:px-5
                    2xl:text-[14px]
                  "
                >
                  Client Login

                  <Chevron
                    className={`transition-transform duration-200 ${
                      cl ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {cl && (
                  <div
                    role="menu"
                    className={`absolute right-0 top-full z-50 mt-2 w-60 ${MENU_BOX}`}
                  >
                    {clientItems}
                  </div>
                )}
              </div>
            </div>

            {/* ================= MOBILE/TABLET MENU BUTTON ================= */}

            <button
              type="button"
              onClick={() => setOpen(!open)}
              aria-label="Menu"
              aria-expanded={open}
              aria-controls="mobile-menu"
              className="
                ml-auto
                grid
                h-11
                w-11
                shrink-0
                place-items-center
                rounded-lg
                bg-[#071A33]
                text-white
                transition-all
                duration-200
                hover:bg-[#29466D]
                focus:outline-none
                focus-visible:ring-2
                focus-visible:ring-[#E7B65A]
                xl:hidden
              "
            >
              <svg
                viewBox="0 0 24 24"
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                aria-hidden="true"
              >
                {open ? (
                  <path d="M6 6l12 12M18 6L6 18" />
                ) : (
                  <>
                    <path d="M4 7h16" />
                    <path d="M4 12h16" />
                    <path d="M4 17h16" />
                  </>
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* =====================================================
          DESKTOP NAVIGATION
          PAGE NAMES FROM YOUR EXISTING HEADER
      ===================================================== */}

      <nav
        aria-label="Main"
        className="
          hidden
          w-full
          border-b
          border-[#29466D]
          bg-[#071A33]
          xl:block
        "
      >
        <div className="mx-auto flex w-full max-w-[1600px] items-stretch justify-center px-[12px] sm:px-[16px] md:px-[20px] lg:px-[24px] xl:px-[32px] 2xl:px-[40px]">

          {NAV.map(([t, to, sub]) => (
            <div
              key={t}
              className="group relative flex items-stretch"
            >

              <NavLink
                to={to}
                end={to === "/"}
                onClick={close}
                className={({ isActive }) =>
                  `
                  flex
                  min-h-[54px]
                  items-center
                  gap-1
                  whitespace-nowrap
                  border-b-[3px]
                  px-2
                  text-[13px]
                  font-medium
                  transition-all
                  duration-200
                  hover:border-[#E7B65A]
                  hover:bg-[#0F2D57]
                  hover:text-[#E7B65A]
                  2xl:px-3.5
                  2xl:text-[15px]
                  ${
                    isActive
                      ? "border-[#E7B65A] bg-[#0F2D57] text-[#E7B65A]"
                      : "border-transparent text-white"
                  }
                `
                }
              >
                {t}

                {sub && (
                  <Chevron
                    className="
                      transition-transform
                      duration-200
                      group-hover:rotate-180
                    "
                  />
                )}
              </NavLink>

              {/* ================= DESKTOP DROPDOWN ================= */}

              {sub && (
                <div
                  className="
                    invisible
                    absolute
                    left-0
                    top-full
                    z-40
                    min-w-[250px]
                    translate-y-1
                    opacity-0
                    transition-all
                    duration-200
                    group-focus-within:visible
                    group-focus-within:translate-y-0
                    group-focus-within:opacity-100
                    group-hover:visible
                    group-hover:translate-y-0
                    group-hover:opacity-100
                  "
                >
                  <div
                    className={`max-h-[70vh] overflow-y-auto ${MENU_BOX}`}
                  >
                    {sub.map(([a, b]) => (
                      <Link
                        key={a}
                        to={b}
                        onClick={close}
                        className={MENU_ITEM}
                      >
                        {a}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </nav>

      {/* =====================================================
          MOBILE / TABLET MENU
      ===================================================== */}

      <div
        id="mobile-menu"
        className={`
          max-h-[calc(100vh-76px)]
          overflow-y-auto
          border-t
          border-slate-200
          bg-white
          xl:hidden
          ${open ? "block" : "hidden"}
        `}
      >
        <div className="px-[12px] py-2 sm:px-[16px] md:px-[20px]">

          {/* Company name on mobile */}

          <div className="border-b border-slate-100 px-2 py-4 text-center">
            <p className="font-serif text-[17px] font-semibold text-[#071A33] sm:text-[19px]">
              AMFI-Registered Mutual Fund Distributor
            </p>
          </div>

          <ul>

            {/* ================= MAIN NAV ================= */}

            {NAV.map(([t, to, sub]) => (
              <li
                key={t}
                className="border-b border-slate-100"
              >
                {sub ? (
                  <>
                    <button
                      type="button"
                      aria-expanded={acc === t}
                      onClick={() =>
                        setAcc(acc === t ? null : t)
                      }
                      className="
                        flex
                        w-full
                        items-center
                        justify-between
                        px-2
                        py-3.5
                        text-left
                        text-[15px]
                        font-semibold
                        text-[#071A33]
                      "
                    >
                      {t}

                      <Chevron
                        className={`transition-transform duration-200 ${
                          acc === t ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    {acc === t && (
                      <div className="mb-3 max-h-[50vh] overflow-y-auto rounded-xl bg-[#071A33] p-1.5">
                        {sub.map(([a, b]) => (
                          <Link
                            key={a}
                            to={b}
                            onClick={close}
                            className={MENU_ITEM}
                          >
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
                      `
                      block
                      px-2
                      py-3.5
                      text-[15px]
                      font-semibold
                      ${
                        isActive
                          ? "text-[#E7B65A]"
                          : "text-[#071A33]"
                      }
                    `
                    }
                  >
                    {t}
                  </NavLink>
                )}
              </li>
            ))}

            {/* ================= CLIENT LOGIN ================= */}

            <li className="border-b border-slate-100">

              <button
                type="button"
                aria-expanded={acc === "client"}
                onClick={() =>
                  setAcc(
                    acc === "client"
                      ? null
                      : "client"
                  )
                }
                className="
                  flex
                  w-full
                  items-center
                  justify-between
                  px-2
                  py-3.5
                  text-left
                  text-[15px]
                  font-semibold
                  text-[#071A33]
                "
              >
                Client Login

                <Chevron
                  className={`transition-transform duration-200 ${
                    acc === "client"
                      ? "rotate-180"
                      : ""
                  }`}
                />
              </button>

              {acc === "client" && (
                <div className="mb-3 rounded-xl bg-[#071A33] p-1.5">
                  {clientItems}
                </div>
              )}
            </li>
          </ul>

          {/* ================= MOBILE PORTFOLIO BUTTON ================= */}

          <a
            href={CFG.login}
            target="_blank"
            rel="noreferrer"
            onClick={close}
            className="
              my-4
              flex
              h-12
              w-full
              items-center
              justify-center
              gap-1.5
              rounded-lg
              bg-[#071A33]
              text-[15px]
              font-semibold
              text-white
              transition-colors
              hover:bg-[#29466D]
            "
          >
            Portfolio Review
            <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
    </header>
  );
}