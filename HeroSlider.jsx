import { useCallback, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

// If you already have a `container` string/variable in your project, delete this line.
const container = "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8";

// Put your own Motilal Oswal / demat account link here (or use settings from your API).
const DEMAT_URL = "https://www.motilaloswal.com/open-demat-account";

/* 5 share-market / wealth themed images.
   If any link ever breaks, just replace the `src`. The slide keeps working with the navy
   background, and you can also use your own files, e.g. "/images/hero-1.jpg". */
const u = (id) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=1800&q=70`;
const SLIDES = [
  { src: u("photo-1611974789855-9c2a0a7236a3"), alt: "Stock market candlestick chart on a screen" },
  { src: u("photo-1590283603385-17ffb3a7f29f"), alt: "Live share market trading screens" },
  { src: u("photo-1579621970563-ebec7560ff3e"), alt: "Coins and growth representing long-term wealth" },
  { src: u("photo-1554224155-6726b3ff858f"), alt: "Financial planning documents and calculator" },
  { src: u("photo-1450101499163-c8848c66ca85"), alt: "Advisor guiding a client on investments" },
];

const STATS = [
  ["15+", "Financial Solutions"],
  ["16+", "Smart Calculators"],
  ["1:1", "Personal Guidance"],
];

const Chevron = ({ dir }) => (
  <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d={dir === "left" ? "M15 5l-7 7 7 7" : "M9 5l7 7-7 7"} />
  </svg>
);

export default function HeroSlider() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [broken, setBroken] = useState({});
  const touchX = useRef(null);

  const go = useCallback((d) => setIndex((p) => (p + d + SLIDES.length) % SLIDES.length), []);

  // autoplay every 5s (pauses on hover/focus, off for reduced-motion users)
  useEffect(() => {
    if (paused || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const t = setInterval(() => go(1), 5000);
    return () => clearInterval(t);
  }, [paused, go]);

  const onKeyDown = (e) => {
    if (e.key === "ArrowLeft") go(-1);
    if (e.key === "ArrowRight") go(1);
  };
  const onTouchEnd = (e) => {
    if (touchX.current === null) return;
    const dx = e.changedTouches[0].clientX - touchX.current;
    if (Math.abs(dx) > 50) go(dx < 0 ? 1 : -1);
    touchX.current = null;
  };

  return (
    <section
      className="relative w-full overflow-hidden border-b border-slate-200 bg-[#0A1F3D]"
      aria-roledescription="carousel"
      aria-label="Millions Rise highlights"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
      onKeyDown={onKeyDown}
      onTouchStart={(e) => (touchX.current = e.touches[0].clientX)}
      onTouchEnd={onTouchEnd}
    >
      {/* BACKGROUND IMAGES (cross-fade) */}
      <div className="absolute inset-0" aria-hidden="true">
        {SLIDES.map((s, i) =>
          broken[i] ? null : (
            <img
              key={s.src}
              src={s.src}
              alt=""
              loading={i === 0 ? "eager" : "lazy"}
              decoding="async"
              onError={() => setBroken((b) => ({ ...b, [i]: true }))}
              className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
                i === index ? "opacity-100" : "opacity-0"
              }`}
            />
          )
        )}
        {/* light overlay so the dark text stays readable */}
        <div className="absolute inset-0 bg-white/80 lg:hidden" />
        <div className="absolute inset-0 hidden bg-gradient-to-r from-white via-white/85 to-white/5 lg:block" />
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white/60 to-transparent" />
      </div>

      {/* screen-reader text for the current image */}
      <p className="sr-only" aria-live="polite">
        {`Slide ${index + 1} of ${SLIDES.length}: ${SLIDES[index].alt}`}
      </p>

      {/* LEFT / RIGHT ARROWS */}
      <button
        type="button"
        aria-label="Previous slide"
        onClick={() => go(-1)}
        className="absolute left-2 top-1/2 z-20 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-md bg-ink text-white shadow-lg transition-all duration-300 hover:bg-[#E7B65A] hover:text-ink active:scale-95 sm:left-5 sm:h-12 sm:w-12"
      >
        <Chevron dir="left" />
      </button>
      <button
        type="button"
        aria-label="Next slide"
        onClick={() => go(1)}
        className="absolute right-2 top-1/2 z-20 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-md bg-ink text-white shadow-lg transition-all duration-300 hover:bg-[#E7B65A] hover:text-ink active:scale-95 sm:right-5 sm:h-12 sm:w-12"
      >
        <Chevron dir="right" />
      </button>

      {/* HERO CONTENT (same text as before) */}
      <div className={`relative z-10 ${container} py-12 sm:py-16 lg:py-20`}>
        <div className="min-h-[430px] min-w-0 max-w-2xl px-8 sm:px-10 lg:min-h-[480px] lg:px-0 flex flex-col justify-center">
          <span className="inline-block w-fit max-w-full rounded-full border border-slate-200 bg-white/90 px-3 py-1.5 text-xs font-semibold text-ink shadow-sm backdrop-blur transition-all duration-300 hover:border-[#E7B65A] hover:bg-white hover:shadow-md sm:px-4">
            AMFI Registered Mutual Fund Distributor
          </span>

          <h1 className="mt-5 max-w-2xl break-words font-serif text-4xl leading-tight text-ink sm:text-5xl xl:text-6xl">
            Build. Protect. Grow.
            <br />
            <i className="text-gold transition-colors duration-300 hover:text-[#D69E35]">Your Wealth.</i>
          </h1>

          <p className="my-5 max-w-xl text-[15px] leading-7 text-slate-700 sm:text-base">
            Goal-based investing, transparent guidance and complete financial solutions for families and businesses,
            from Mandi Dabwali.
          </p>

          {/* 3 BUTTONS */}
          <div className="flex max-w-full flex-wrap gap-3">
            <Link
              to="/contact"
              className="btn whitespace-nowrap transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_25px_rgba(231,182,90,0.25)] active:translate-y-0"
            >
              Start Investing
            </Link>

            <Link
              to="/contact"
              className="btn btn-o whitespace-nowrap transition-all duration-300 hover:-translate-y-1 hover:border-[#29466D] hover:bg-[#29466D] hover:text-white hover:shadow-[0_10px_25px_rgba(41,70,109,0.18)] active:translate-y-0"
            >
              Book a Consultation
            </Link>

            <a
              href={DEMAT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-o whitespace-nowrap border-[#E7B65A] bg-[#E7B65A] text-ink transition-all duration-300 hover:-translate-y-1 hover:border-[#D69E35] hover:bg-[#D69E35] hover:text-ink hover:shadow-[0_10px_25px_rgba(231,182,90,0.35)] active:translate-y-0"
            >
              Open Demat Account
            </a>
          </div>

          {/* HERO STATS */}
          <div className="mt-8 grid max-w-lg grid-cols-1 gap-3 min-[400px]:grid-cols-3">
            {STATS.map(([value, label]) => (
              <div
                key={label}
                className="group min-w-0 rounded-xl border border-slate-200 bg-white/95 p-4 shadow-sm backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-[#29466D] hover:shadow-[0_10px_25px_rgba(41,70,109,0.12)]"
              >
                <p className="font-serif text-2xl text-ink transition-colors duration-300 group-hover:text-[#29466D]">{value}</p>
                <p className="mt-1 text-xs leading-5 text-slate-500">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* DOTS */}
      <div className="absolute inset-x-0 bottom-4 z-20 flex justify-center gap-2" role="tablist" aria-label="Choose slide">
        {SLIDES.map((s, i) => (
          <button
            key={s.src}
            type="button"
            role="tab"
            aria-selected={i === index}
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => setIndex(i)}
            className={`h-2.5 rounded-full transition-all duration-300 ${
              i === index ? "w-8 bg-[#E7B65A]" : "w-2.5 bg-slate-400/70 hover:bg-slate-500"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
