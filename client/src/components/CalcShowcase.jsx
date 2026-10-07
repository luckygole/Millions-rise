import { Link } from "react-router-dom";
import { C } from "../lib/calculators";

/* ---------- 6 calculators ka selection ----------
   Naam/key se in 6 ko pehle dhundta hai; na mile to baaki calculators se bhar deta hai. */
const WANT = [/sip/i, /lump/i, /educ/i, /retire/i, /wedd|marri/i, /vacat|holiday|travel/i];

function pick() {
  const keys = Object.keys(C);
  const chosen = [];
  WANT.forEach((re) => {
    const k = keys.find((x) => !chosen.includes(x) && (re.test(x) || re.test(C[x].n)));
    if (k) chosen.push(k);
  });
  keys.forEach((k) => chosen.length < 6 && !chosen.includes(k) && chosen.push(k));
  return chosen.slice(0, 6);
}

/* ---------- line icons: [navy lines, gold accent] ---------- */
const ICONS = [
  [/sip/i, [<path d="M4 20h16M6 20v-5M11 20v-8M16 20v-11" />, <path d="M5 9l5-4 3 3 6-5M15 3h4v4" />]],
  [/lump/i, [<path d="M9 4h6l-1.5 3h-3zM8 21h8c2 0 3-2 3-5 0-3-3-6-7-6s-7 3-7 6c0 3 1 5 3 5z" />, <path d="M12 13v5M10.5 14.5c0-1 3-1 3 0s-3 1-3 2.5c0 1 3 1 3 0" />]],
  [/educ/i, [<path d="M2 9l10-5 10 5-10 5zM6 11.5V16c0 1.5 3 3 6 3s6-1.5 6-3v-4.5" />, <path d="M22 9v6" />]],
  [/retire/i, [<path d="M6 3h12M6 21h12M7 3v4l5 5-5 5v4M17 3v4l-5 5 5 5v4" />, <path d="M10 18h4" />]],
  [/wedd|marri/i, [<><circle cx="9" cy="15" r="5" /><circle cx="15" cy="15" r="5" /></>, <path d="M12 3l2 3-2 3-2-3z" />]],
  [/vacat|holiday|travel/i, [<path d="M3 12a9 9 0 0 1 18 0zM12 12v8" />, <path d="M12 20a2 2 0 0 0 4 0" />]],
];
const FALLBACK = [<rect x="5" y="3" width="14" height="18" rx="2" />, <path d="M8 7h8M8 12h2M12 12h2M8 16h2M12 16h2" />];

const Icon = ({ name }) => {
  const [, ic] = ICONS.find(([re]) => re.test(name)) || [null, FALLBACK];
  return (
    <svg viewBox="0 0 24 24" className="h-8 w-8 sm:h-9 sm:w-9" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <g>{ic[0]}</g>
      <g className="text-[#E7B65A]">{ic[1]}</g>
    </svg>
  );
};

export default function CalcShowcase() {
  const keys = pick();

  return (
    <section
      className="relative isolate w-full overflow-hidden py-14 sm:py-16 lg:py-20"
      style={{ background: "radial-gradient(ellipse at 35% 55%, #123A6B 0%, #0A2447 38%, #071A33 70%)" }}
    >
      {/* decorative waves (original SVG) */}
      <svg className="pointer-events-none absolute inset-0 -z-10 h-full w-full" viewBox="0 0 1440 640" preserveAspectRatio="none" aria-hidden="true">
        <path d="M0 120C180 60 260 260 120 400S40 600 0 640V0z" fill="rgba(255,255,255,0.05)" />
        <path d="M1440 40C1280 120 1180 300 1300 420S1420 600 1440 640V0z" fill="rgba(231,182,90,0.10)" />
        <path d="M1440 200C1340 260 1300 380 1380 480S1440 620 1440 640z" fill="rgba(255,255,255,0.06)" />
      </svg>

      <div className="mx-auto w-full max-w-[1600px] px-[12px] sm:px-[16px] md:px-[20px] lg:px-[24px] xl:px-[32px] 2xl:px-[40px]">
        <div className="grid items-center gap-10 lg:grid-cols-[1fr_1.35fr] lg:gap-12 xl:gap-16">
          {/* ===== LEFT: TEXT ===== */}
          <div className="min-w-0">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#E7B65A]">Tools &amp; Calculators</span>
            <h2 className="mt-3 font-serif text-3xl leading-tight text-white sm:text-4xl xl:text-[2.6rem]">
              Give Shape to Your Financial Goals
            </h2>
            <p className="mt-5 max-w-xl text-[15px] leading-7 text-slate-200 sm:text-base">
              Financial goals are the priorities you set for how you want to save and spend your money. Everyone's
              goals are different, so our calculators help you see the monthly amount, the time needed and the likely
              corpus before you invest, so you always know where your money is heading.
            </p>
            <Link
              to="/calculators/sip"
              className="mt-7 inline-flex items-center gap-2 rounded-lg border-2 border-[#E7B65A] bg-[#E7B65A] px-6 py-3 text-sm font-semibold text-[#071A33] transition-all duration-300 hover:-translate-y-0.5 hover:bg-transparent hover:text-white hover:shadow-[0_10px_25px_rgba(231,182,90,0.25)] active:translate-y-0"
            >
              View All Calculators <span aria-hidden="true">&gt;</span>
            </Link>
          </div>

          {/* ===== RIGHT: 6 CARDS ===== */}
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
                  <span className="grid h-[68px] w-[68px] place-items-center rounded-full border-2 border-[#E7B65A] bg-white text-[#071A33] shadow-md transition-transform duration-300 group-hover:scale-105 sm:h-20 sm:w-20">
                    <Icon name={C[k].n} />
                  </span>
                  <span className="mt-4 text-sm font-bold leading-snug text-white sm:text-[15px]">{C[k].n}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}