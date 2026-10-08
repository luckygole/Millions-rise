import { useCallback, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import CalcWidget from "../components/CalcWidget";
import ServiceGrid from "../components/ServiceGrid";
import Head from "../components/Head";
import StatsCounter from "../components/StatsCounter";
import { C } from "../lib/calculators";
import { useBlogs } from "../lib/api";
import IpoList from "../components/IpoList";
import CalcShowcase from "../components/CalcShowcase";

/* ---------- HERO SLIDER DATA ---------- */
// Apna sahi demat account link yahan daalo
const DEMAT_URL =
  "https://www.motilaloswal.com/open-demat-account";

const img = (id) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=1800&q=70`;

// 5 images (people + laptop). Koi image na dikhe to bas uska src badal do.
const SLIDES = [
  {
    src: img("photo-1556761175-5973dc0f32e7"),
    alt: "Financial advisor and client reviewing investments on a laptop",
  },
  {
    src: img("photo-1522202176988-66273c2fd55f"),
    alt: "Professional team planning with laptops",
  },
  {
    src: img("photo-1521791136064-7986c2920216"),
    alt: "Handshake building trust with a client",
  },
  {
    src: img("photo-1517048676732-d65bc937f952"),
    alt: "Team meeting discussing financial goals",
  },
  {
    src: img("photo-1573496359142-b8d87734a5a2"),
    alt: "Confident wealth consultant",
  },
];

const Chevron = ({ dir }) => (
  <svg
    viewBox="0 0 24 24"
    className="h-6 w-6"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path
      d={
        dir === "left"
          ? "M15 5l-7 7 7 7"
          : "M9 5l7 7-7 7"
      }
    />
  </svg>
);

export default function Home() {
  const blogs = useBlogs();

  // Common responsive container
  const container = `
    mx-auto
    w-full
    max-w-[1600px]
    min-w-0
    px-[12px]
    sm:px-[16px]
    md:px-[20px]
    lg:px-[24px]
    xl:px-[32px]
    2xl:px-[40px]
  `;

  /* =========================================================
      SCROLL REVEAL ANIMATION
      Hero section ko intentionally touch nahi kiya gaya.
  ========================================================= */

  useEffect(() => {
    const elements = document.querySelectorAll(".home-reveal");

    if (!elements.length) return;

    // Reduced motion enabled ho to animation disable
    if (
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      elements.forEach((element) => {
        element.classList.add("home-reveal-visible");
      });

      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("home-reveal-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  /* =========================================================
      SLIDER STATE
  ========================================================= */

  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [broken, setBroken] = useState({});
  const touchX = useRef(null);

  const go = useCallback(
    (d) =>
      setIndex(
        (p) => (p + d + SLIDES.length) % SLIDES.length
      ),
    []
  );

  // Auto-play har 5 second (hover/focus par ruk jata hai)
  useEffect(() => {
    if (
      paused ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    )
      return;

    const t = setInterval(() => go(1), 5000);

    return () => clearInterval(t);
  }, [paused, go]);

  const onKeyDown = (e) => {
    if (e.key === "ArrowLeft") go(-1);
    if (e.key === "ArrowRight") go(1);
  };

  const onTouchEnd = (e) => {
    if (touchX.current === null) return;

    const dx =
      e.changedTouches[0].clientX - touchX.current;

    if (Math.abs(dx) > 50) {
      go(dx < 0 ? 1 : -1);
    }

    touchX.current = null;
  };

  return (
    <>
      {/* =====================================================
          PAGE ANIMATION STYLES

          IMPORTANT:
          Ye styles sirf .home-reveal classes par apply hongi.
          Hero par .home-reveal nahi hai.
      ===================================================== */}

      <style>{`
        .home-reveal {
          opacity: 0;
          transition-property: opacity, transform;
          transition-duration: 750ms;
          transition-timing-function: cubic-bezier(0.22, 1, 0.36, 1);
          will-change: opacity, transform;
        }

        /* Bottom → Top */
        .home-reveal-bottom {
          transform: translate3d(0, 55px, 0);
        }

        /* Left → Right */
        .home-reveal-left {
          transform: translate3d(-60px, 0, 0);
        }

        /* Right → Left */
        .home-reveal-right {
          transform: translate3d(60px, 0, 0);
        }

        /* Top → Bottom */
        .home-reveal-top {
          transform: translate3d(0, -55px, 0);
        }

        .home-reveal-visible {
          opacity: 1;
          transform: translate3d(0, 0, 0);
        }

        @media (prefers-reduced-motion: reduce) {
          .home-reveal {
            opacity: 1 !important;
            transform: none !important;
            transition: none !important;
            will-change: auto !important;
          }
        }
      `}</style>

      <main className="w-full min-w-0 overflow-x-clip">
        {/* =========================================================
            HERO (IMAGE SLIDER)

            HERO IS COMPLETELY UNCHANGED
        ========================================================= */}

        <section
          className="relative w-full overflow-hidden border-b border-slate-200 bg-[#0A1F3D]"
          aria-roledescription="carousel"
          aria-label="Millions Rise highlights"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocus={() => setPaused(true)}
          onBlur={() => setPaused(false)}
          onKeyDown={onKeyDown}
          onTouchStart={(e) =>
            (touchX.current = e.touches[0].clientX)
          }
          onTouchEnd={onTouchEnd}
        >
          {/* BACKGROUND IMAGES */}

          <div className="absolute inset-0" aria-hidden="true">
            {SLIDES.map((s, i) =>
              broken[i] ? null : (
                <img
                  key={s.src}
                  src={s.src}
                  alt=""
                  loading={i === 0 ? "eager" : "lazy"}
                  decoding="async"
                  onError={() =>
                    setBroken((b) => ({
                      ...b,
                      [i]: true,
                    }))
                  }
                  className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
                    i === index
                      ? "opacity-100"
                      : "opacity-0"
                  }`}
                />
              )
            )}

            {/* navy tint + white fade (text saaf padhne ke liye) */}

            <div className="absolute inset-0 bg-[#0A1F3D]/25" />
            <div className="absolute inset-0 bg-white/80 lg:hidden" />
            <div className="absolute inset-0 hidden bg-gradient-to-r from-white via-white/90 to-white/0 lg:block" />
            <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#0A1F3D]/40 to-transparent" />
          </div>

          <p className="sr-only" aria-live="polite">
            {`Slide ${index + 1} of ${SLIDES.length}: ${
              SLIDES[index].alt
            }`}
          </p>

          {/* LEFT ARROW */}

          <button
            type="button"
            aria-label="Previous slide"
            onClick={() => go(-1)}
            className="
              absolute left-2 top-1/2 z-20 grid h-11 w-11 -translate-y-1/2
              place-items-center rounded-md bg-transparent text-gray-100 shadow-lg
              transition-all duration-300
              hover:bg-black/10 hover:text-ink
              active:scale-95
              sm:left-5 sm:h-12 sm:w-12
            "
          >
            <Chevron dir="left" />
          </button>

          {/* RIGHT ARROW */}

          <button
            type="button"
            aria-label="Next slide"
            onClick={() => go(1)}
            className="
              absolute right-2 top-1/2 z-20 grid h-11 w-11 -translate-y-1/2
              place-items-center rounded-md bg-transparent text-gray-50 shadow-lg
              transition-all duration-300
              hover:bg-black/10 hover:text-ink
              active:scale-95
              sm:right-5 sm:h-12 sm:w-12
            "
          >
            <Chevron dir="right" />
          </button>

          {/* HERO CONTENT */}

          <div
            className={`
              relative z-10
              ${container}
              py-8
              sm:py-10
              md:py-12
              lg:py-14
            `}
          >
            <div
              className="
                flex
                min-h-[430px]
                min-w-0
                max-w-2xl
                flex-col
                justify-center
                px-8
                sm:px-10
                lg:min-h-[480px]
                lg:px-0
              "
            >
              <span
                className="
                  inline-block
                  w-fit
                  max-w-full
                  rounded-full
                  border
                  border-slate-200
                  bg-white/90
                  px-3
                  py-1.5
                  text-xs
                  font-semibold
                  text-ink
                  shadow-sm
                  backdrop-blur
                  transition-all
                  duration-300
                  hover:border-[#E7B65A]
                  hover:bg-white
                  hover:shadow-md
                  sm:px-4
                "
              >
                AMFI Registered Mutual Fund Distributor
              </span>

              <h1
                className="
                  mt-5
                  max-w-2xl
                  break-words
                  font-serif
                  text-4xl
                  leading-tight
                  text-ink
                  sm:text-5xl
                  lg:text-5xl
                  xl:text-6xl
                "
              >
                Build. Protect. Grow.
                <br />
                <i className="text-gold transition-colors duration-300 hover:text-[#D69E35]">
                  Your Wealth.
                </i>
              </h1>

              <p
                className="
                  my-5
                  max-w-xl
                  text-[15px]
                  leading-7
                  text-slate-700
                  sm:text-base
                "
              >
                Goal-based investing, transparent guidance and
                complete financial solutions for families and
                businesses, from Mandi Dabwali.
              </p>

              {/* BUTTONS */}

              <div className="flex max-w-full flex-wrap gap-3">
                <Link
                  to="/contact"
                  className="
                    btn
                    whitespace-nowrap
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:shadow-[0_10px_25px_rgba(231,182,90,0.25)]
                    active:translate-y-0
                  "
                >
                  Start Investing
                </Link>

                <Link
                  to="/contact"
                  className="
                    btn
                    btn-o
                    whitespace-nowrap
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:border-[#29466D]
                    hover:bg-[#29466D]
                    hover:text-white
                    hover:shadow-[0_10px_25px_rgba(41,70,109,0.18)]
                    active:translate-y-0
                  "
                >
                  Book a Consultation
                </Link>

                {/* THIRD BUTTON */}

                <a
                  href={DEMAT_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    btn
                    btn-o
                    whitespace-nowrap
                    border-[#E7B65A]
                    bg-[#E7B65A]
                    text-ink
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:border-[#D69E35]
                    hover:bg-[#D69E35]
                    hover:text-ink
                    hover:shadow-[0_10px_25px_rgba(231,182,90,0.35)]
                    active:translate-y-0
                  "
                >
                  Open Demat Account
                </a>
              </div>

              {/* HERO STATS */}

              <div
                className="
                  mt-8
                  grid
                  max-w-lg
                  grid-cols-1
                  gap-3
                  min-[400px]:grid-cols-3
                "
              >
                {[
                  ["15+", "Financial Solutions"],
                  ["16+", "Smart Calculators"],
                  ["1:1", "Personal Guidance"],
                ].map(([value, label]) => (
                  <div
                    key={label}
                    className="
                      group
                      min-w-0
                      rounded-xl
                      border
                      border-slate-200
                      bg-white/95
                      p-4
                      shadow-sm
                      backdrop-blur
                      transition-all
                      duration-300
                      hover:-translate-y-1
                      hover:border-[#29466D]
                      hover:shadow-[0_10px_25px_rgba(41,70,109,0.12)]
                    "
                  >
                    <p className="font-serif text-2xl text-ink transition-colors duration-300 group-hover:text-[#29466D]">
                      {value}
                    </p>

                    <p className="mt-1 text-xs leading-5 text-slate-500">
                      {label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* DOTS */}

          <div
            className="absolute inset-x-0 bottom-4 z-20 flex justify-center gap-2"
            role="tablist"
            aria-label="Choose slide"
          >
            {SLIDES.map((s, i) => (
              <button
                key={s.src}
                type="button"
                role="tab"
                aria-selected={i === index}
                aria-label={`Go to slide ${i + 1}`}
                onClick={() => setIndex(i)}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  i === index
                    ? "w-8 bg-[#E7B65A]"
                    : "w-2.5 bg-white/70 hover:bg-white"
                }`}
              />
            ))}
          </div>
        </section>

        {/* =========================================================
            ANIMATED STATS
        ========================================================= */}

        <div className="home-reveal home-reveal-bottom w-full min-w-0">
          <StatsCounter />
        </div>

        {/* =========================================================
            FINANCIAL SOLUTIONS
        ========================================================= */}

        <section
          className="
            home-reveal
            home-reveal-left
            w-full
            min-w-0
            overflow-hidden
            py-12
            sm:py-14
            lg:py-16
          "
        >
          <div className={container}>
            <Head
              e="Financial Solutions"
              t="Complete solutions, under one roof"
              s="Explore investment, protection and wealth planning solutions designed around your financial needs."
            />

            <ServiceGrid n={6} />

            <div className="mt-7">
              <Link
                to="/services"
                className="
                  btn
                  btn-o
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:shadow-md
                  active:translate-y-0
                "
              >
                View all services →
              </Link>
            </div>
          </div>
        </section>

        {/* =========================================================
            IPO CENTER LIST
        ========================================================= */}

        <section
          className="
            home-reveal
            home-reveal-right
            sec
            bg-white
          "
        >
          <div className="w">
            <h2 className="mb-8 text-center font-serif text-3xl text-ink sm:text-4xl">
              IPO Corner
            </h2>

            <IpoList limit={2} />
          </div>
        </section>

        {/* =========================================================
            FINANCIAL GOALS
        ========================================================= */}

        <div className="home-reveal home-reveal-bottom w-full min-w-0">
          <CalcShowcase />
        </div>

        {/* =========================================================
            SMART FINANCIAL TOOLS
        ========================================================= */}

        {/*
        <section className="w-full overflow-hidden py-12 sm:py-14 lg:py-16">
          <div className={container}>
            <Head
              e="Smart Financial Tools"
              t="Make better decisions with the right numbers"
              s="Use our simple tools to understand investments, returns, risk and financial goals."
            />

            <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
              {[
                {
                  icon: "📈",
                  title: "SIP Calculator",
                  text: "Estimate how your monthly SIP investment can grow over time.",
                  link: "/calculators/sip",
                  label: "Calculate SIP →",
                },
                {
                  icon: "⚖️",
                  title: "Compare Funds",
                  text: "Compare mutual funds side by side and understand key details.",
                  link: "/compare",
                  label: "Compare Funds →",
                },
                {
                  icon: "🧭",
                  title: "Risk Profile",
                  text: "Understand your investment risk profile with a quick quiz.",
                  link: "/risk",
                  label: "Check Your Risk →",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="
                    card
                    group
                    min-w-0
                    transition-all
                    duration-300
                    hover:-translate-y-2
                    hover:border-[#29466D]
                    hover:shadow-[0_14px_35px_rgba(41,70,109,0.14)]
                  "
                >
                  <div
                    className="
                      mb-3
                      text-3xl
                      transition-transform
                      duration-300
                      group-hover:scale-110
                    "
                  >
                    {item.icon}
                  </div>

                  <h3 className="font-serif text-xl text-ink transition-colors duration-300 group-hover:text-[#29466D]">
                    {item.title}
                  </h3>

                  <p className="my-3 text-sm leading-6 text-slate-500">
                    {item.text}
                  </p>

                  <Link
                    to={item.link}
                    className="
                      inline-flex
                      items-center
                      gap-1
                      text-sm
                      font-bold
                      text-brand
                      transition-all
                      duration-300
                      hover:gap-2
                      hover:text-[#D69E35]
                    "
                  >
                    {item.label}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
        */}

        {/* =========================================================
            EXPLORE
        ========================================================= */}

        <section
          className="
            home-reveal
            home-reveal-top
            w-full
            min-w-0
            overflow-hidden
            bg-slate-50
            py-12
            sm:py-14
            lg:py-16
          "
        >
          <div className={container}>
            <Head
              e="Explore"
              t="Useful resources for your financial journey"
            />

            <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
              {[
                {
                  ey: "IPO Corner",
                  title: "Current & upcoming IPOs",
                  text: "Explore current and upcoming IPO opportunities and learn more before making investment decisions.",
                  link: "/ipo",
                  button: "Open IPO Corner",
                },
                {
                  ey: "Free · 2 minutes",
                  title: "What kind of investor are you?",
                  text: "Take our quick risk profile quiz and understand your investment comfort level.",
                  link: "/risk",
                  button: "Take the Quiz",
                },
                {
                  ey: "Compare",
                  title: "Compare funds & check NAV",
                  text: "Explore mutual funds side by side and use live NAV search.",
                  link: "/compare",
                  button: "Compare Funds",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="
                    card
                    group
                    min-w-0
                    transition-all
                    duration-300
                    hover:-translate-y-2
                    hover:border-[#29466D]
                    hover:shadow-[0_14px_35px_rgba(41,70,109,0.14)]
                  "
                >
                  <span className="ey transition-colors duration-300 group-hover:text-[#D69E35]">
                    {item.ey}
                  </span>

                  <h3 className="my-2 break-words font-serif text-xl text-ink transition-colors duration-300 group-hover:text-[#29466D]">
                    {item.title}
                  </h3>

                  <p className="mb-5 text-sm leading-6 text-slate-500">
                    {item.text}
                  </p>

                  <Link
                    to={item.link}
                    className="
                      btn
                      transition-all
                      duration-300
                      hover:-translate-y-1
                      hover:shadow-md
                      active:translate-y-0
                    "
                  >
                    {item.button}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =========================================================
            WHY CHOOSE US
        ========================================================= */}

        <section
          className="
            home-reveal
            home-reveal-left
            w-full
            min-w-0
            overflow-hidden
            py-12
            sm:py-14
            lg:py-16
          "
        >
          <div className={container}>
            <Head
              e="Why choose us"
              t="Financial planning made simpler"
              s="We focus on making financial decisions easier to understand and easier to act on."
            />

            <div className="grid grid-cols-1 gap-5 sm:gap-6 md:grid-cols-2">
              {[
                {
                  number: "01",
                  title: "Understand your goals",
                  text: "We start by understanding what you want to achieve instead of simply recommending a financial product.",
                },
                {
                  number: "02",
                  title: "Build the right strategy",
                  text: "Choose suitable investment and financial solutions based on your goals, time horizon and risk comfort.",
                },
                {
                  number: "03",
                  title: "Track your progress",
                  text: "Financial planning is not a one-time activity. Review your progress and adjust your strategy as your needs change.",
                },
                {
                  number: "04",
                  title: "Stay focused",
                  text: "Avoid unnecessary complexity and stay focused on long-term financial goals.",
                },
              ].map((item) => (
                <div
                  key={item.number}
                  className="
                    group
                    min-w-0
                    rounded-2xl
                    border
                    border-[#29466D]
                    bg-[#071A33]
                    p-5
                    shadow-sm
                    transition-all
                    duration-300
                    hover:-translate-y-2
                    hover:border-[#E7B65A]
                    hover:shadow-[0_16px_35px_rgba(41,70,109,0.28)]
                    sm:p-6
                  "
                >
                  <div
                    className="
                      mb-4
                      text-3xl
                      font-semibold
                      text-[#E7B65A]
                      transition-transform
                      duration-300
                      group-hover:translate-x-1
                    "
                  >
                    {item.number}
                  </div>

                  <h3 className="break-words font-serif text-xl text-white transition-colors duration-300 sm:text-2xl">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-[#D6E2F0]">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =========================================================
            HOW IT WORKS
        ========================================================= */}

        {/*
        <section className="w-full overflow-hidden bg-slate-50 py-12 sm:py-14 lg:py-16">
          <div className={container}>
            <Head
              e="How it works"
              t="Start your financial journey in 3 simple steps"
            />

            <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
              {[
                [
                  "Step 01",
                  "Share your goals",
                  "Tell us about your financial goals, priorities and investment requirements.",
                ],
                [
                  "Step 02",
                  "Get a plan",
                  "Explore suitable financial solutions based on your requirements.",
                ],
                [
                  "Step 03",
                  "Take action",
                  "Start investing and keep tracking your journey towards your financial goals.",
                ],
              ].map(([step, title, text]) => (
                <div
                  key={step}
                  className="
                    card
                    group
                    min-w-0
                    transition-all
                    duration-300
                    hover:-translate-y-2
                    hover:border-[#29466D]
                    hover:shadow-[0_14px_35px_rgba(41,70,109,0.14)]
                  "
                >
                  <span className="ey transition-colors duration-300 group-hover:text-[#D69E35]">
                    {step}
                  </span>

                  <h3 className="my-2 break-words font-serif text-xl text-ink transition-colors duration-300 group-hover:text-[#29466D]">
                    {title}
                  </h3>

                  <p className="text-sm leading-6 text-slate-500">
                    {text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
        */}

        {/* =========================================================
            INSIGHTS
        ========================================================= */}

        <section
          className="
            home-reveal
            home-reveal-right
            w-full
            min-w-0
            overflow-hidden
            py-12
            sm:py-14
            lg:py-16
          "
        >
          <div className={container}>
            <Head
              e="Insights"
              t="Smarter investing"
              s="Simple financial insights to help you understand money and investing better."
            />

            <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
              {blogs.slice(0, 3).map((b) => (
                <Link
                  key={b[1]}
                  to="/blogs"
                  className="
                    card
                    group
                    min-w-0
                    transition-all
                    duration-300
                    hover:-translate-y-2
                    hover:border-[#29466D]
                    hover:shadow-[0_14px_35px_rgba(41,70,109,0.14)]
                  "
                >
                  <span className="text-[10px] font-extrabold text-gold transition-colors duration-300 group-hover:text-[#D69E35]">
                    {b[0]}
                  </span>

                  <h3 className="my-2 break-words font-serif text-lg text-ink transition-colors duration-300 group-hover:text-[#29466D]">
                    {b[1]}
                  </h3>

                  <p className="text-sm leading-6 text-slate-500">
                    {b[2].slice(0, 100)}…
                  </p>

                  <span
                    className="
                      mt-4
                      inline-flex
                      items-center
                      gap-1
                      text-sm
                      font-bold
                      text-brand
                      transition-all
                      duration-300
                      group-hover:gap-2
                      group-hover:text-[#D69E35]
                    "
                  >
                    Read more →
                  </span>
                </Link>
              ))}
            </div>

            <Link
              to="/blogs"
              className="
                group
                mt-6
                inline-flex
                max-w-full
                break-words
                items-center
                gap-1
                text-sm
                font-bold
                text-brand
                transition-all
                duration-300
                hover:gap-2
                hover:text-[#D69E35]
              "
            >
              View all insights →
            </Link>
          </div>
        </section>

        {/* =========================================================
            FINAL CTA
        ========================================================= */}

        <section
          className="
            home-reveal
            home-reveal-bottom
            w-full
            min-w-0
            overflow-hidden
            border-y
            border-slate-200
            bg-slate-900
          "
        >
          <div
            className={`
              ${container}
              py-12
              text-center
              sm:py-14
              lg:py-16
            `}
          >
            <span className="text-xs font-bold uppercase tracking-wider text-gold">
              Ready to get started?
            </span>

            <h2
              className="
                mx-auto
                mt-3
                max-w-2xl
                break-words
                font-serif
                text-3xl
                leading-tight
                text-white
                sm:text-4xl
              "
            >
              Your financial goals deserve a clear plan.
            </h2>

            <p
              className="
                mx-auto
                mt-4
                max-w-xl
                text-sm
                leading-6
                text-slate-300
              "
            >
              Start with a free consultation and take the first
              step towards better financial planning.
            </p>

            <div className="mt-7 flex flex-wrap justify-center gap-3">
              <Link
                to="/contact"
                className="
                  btn
                  whitespace-nowrap
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:shadow-[0_10px_25px_rgba(231,182,90,0.25)]
                  active:translate-y-0
                "
              >
                Book a Consultation
              </Link>

              <Link
                to="/calculators/sip"
                className="
                  btn
                  btn-o
                  whitespace-nowrap
                  border-slate-500
                  text-white
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-[#E7B65A]
                  hover:bg-[#E7B65A]
                  hover:text-[#071A33]
                  hover:shadow-[0_10px_25px_rgba(231,182,90,0.2)]
                  active:translate-y-0
                "
              >
                Try a Calculator
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}