import { Link } from "react-router-dom";
import { C } from "../lib/calculators";

import education from "../assets/cal/cal-education1.png";
import lumpsum from "../assets/cal/cal-lumpsum1.png";
import retirement from "../assets/cal/cal-retirement1.png";
import sip from "../assets/cal/cal-sip1.png";
import vacation from "../assets/cal/cal-vacation1.png";
import wedding from "../assets/cal/cal-wedding1.png";

/* ---------- 6 calculators ka selection ---------- */
const WANT = [
  /sip/i,
  /lump/i,
  /educ/i,
  /retire/i,
  /wedd|marri/i,
  /vacat|holiday|travel/i,
];

function pick() {
  const keys = Object.keys(C);
  const chosen = [];

  WANT.forEach((re) => {
    const k = keys.find(
      (x) =>
        !chosen.includes(x) &&
        (re.test(x) || re.test(C[x].n))
    );

    if (k) chosen.push(k);
  });

  keys.forEach(
    (k) =>
      chosen.length < 6 &&
      !chosen.includes(k) &&
      chosen.push(k)
  );

  return chosen.slice(0, 6);
}

/* ---------- Source Images ---------- */
const ICONS = [
  {
    match: /educ/i,
    src: education,
  },
  {
    match: /lump/i,
    src: lumpsum,
  },
  {
    match: /sip/i,
    src: sip,
  },
  {
    match: /retire/i,
    src: retirement,
  },
  {
    match: /wedd|marri/i,
    src: wedding,
  },
  {
    match: /vacat|holiday|travel/i,
    src: vacation,
  },
];

const FALLBACK = sip;

/* ---------- Calculator Icon ---------- */
const Icon = ({ name }) => {
  const icon =
    ICONS.find(({ match }) => match.test(name))?.src ||
    FALLBACK;

  return (
    <img
      src={icon}
      alt=""
      className="h-10 w-10 object-contain sm:h-11 sm:w-11"
      aria-hidden="true"
    />
  );
};

export default function CalcShowcase() {
  const keys = pick();

  return (
    <section
      className="relative isolate w-full overflow-hidden py-14 sm:py-16 lg:py-20"
      style={{
        background:
          "radial-gradient(ellipse at 35% 55%, #123A6B 0%, #0A2447 38%, #071A33 70%)",
      }}
    >
      {/* decorative waves (original SVG) */}
      <svg
        className="pointer-events-none absolute inset-0 -z-10 h-full w-full"
        viewBox="0 0 1440 640"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          d="M0 120C180 60 260 260 120 400S40 600 0 640V0z"
          fill="rgba(255,255,255,0.05)"
        />

        <path
          d="M1440 40C1280 120 1180 300 1300 420S1420 600 1440 640V0z"
          fill="rgba(231,182,90,0.10)"
        />

        <path
          d="M1440 200C1340 260 1300 380 1380 480S1440 620 1440 640z"
          fill="rgba(255,255,255,0.06)"
        />
      </svg>

      <div className="mx-auto w-full max-w-[1600px] px-[12px] sm:px-[16px] md:px-[20px] lg:px-[24px] xl:px-[32px] 2xl:px-[40px]">
        <div className="grid items-center gap-10 lg:grid-cols-[1fr_1.35fr] lg:gap-12 xl:gap-16">

          {/* LEFT */}
          <div className="min-w-0">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#E7B65A]">
              Tools &amp; Calculators
            </span>

            <h2 className="mt-3 font-serif text-3xl leading-tight text-white sm:text-4xl xl:text-[2.6rem]">
              Give Shape to Your Financial Goals
            </h2>

            <p className="mt-5 max-w-xl text-[15px] leading-7 text-slate-200 sm:text-base">
              Financial goals are the priorities you set for how you want to
              save and spend your money. Everyone's goals are different, so our
              calculators help you see the monthly amount, the time needed and
              the likely corpus before you invest, so you always know where
              your money is heading.
            </p>

            <Link
              to="/calculators/sip"
              className="mt-7 inline-flex items-center gap-2 rounded-lg border-2 border-[#E7B65A] bg-[#E7B65A] px-6 py-3 text-sm font-semibold text-[#071A33] transition-all duration-300 hover:-translate-y-0.5 hover:bg-transparent hover:text-white hover:shadow-[0_10px_25px_rgba(231,182,90,0.25)] active:translate-y-0"
            >
              View All Calculators
              <span aria-hidden="true">&gt;</span>
            </Link>
          </div>

          {/* RIGHT */}
          <ul className="grid min-w-0 grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-5">
            {keys.map((k) => (
              <li key={k} className="min-w-0">
                <Link
                  to={"/calculators/" + k}
                  className="
                    group flex h-full min-h-[170px] flex-col items-center
                    rounded-l-md rounded-r-[1.75rem] border border-white/15
                    border-b-4 border-b-[#E7B65A] bg-white/10
                    px-3 pb-6 pt-7 text-center backdrop-blur-sm
                    shadow-[0_10px_30px_rgba(0,0,0,0.25)]
                    transition-all duration-300
                    hover:-translate-y-1.5 hover:bg-white/20
                    focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E7B65A]
                    sm:min-h-[200px] sm:px-4
                  "
                >
                  {/* SOURCE IMAGE ICON */}
                  <span className="grid h-[68px] w-[68px] place-items-center rounded-full border-2 border-[#E7B65A] bg-white shadow-md transition-transform duration-300 group-hover:scale-105 sm:h-20 sm:w-20">
                    <Icon name={C[k].n} />
                  </span>

                  <span className="mt-4 text-sm font-bold leading-snug text-white sm:text-[15px]">
                    {C[k].n}
                  </span>
                </Link>
              </li>
            ))}
          </ul>

        </div>
      </div>
    </section>
  );
}