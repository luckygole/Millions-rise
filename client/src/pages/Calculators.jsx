import { Link, useNavigate, useParams } from "react-router-dom";
import { C } from "../lib/calculators";
import CalcWidget from "../components/CalcWidget";

/* =========================================================
   Calculator Images
========================================================= */

import education from "../assets/cal/cal-education1.png";
import lumpsum from "../assets/cal/cal-lumpsum1.png";
import retirement from "../assets/cal/cal-retirement1.png";
import sip from "../assets/cal/cal-sip1.png";
import vacation from "../assets/cal/cal-vacation1.png";
import wedding from "../assets/cal/cal-wedding1.png";

import stepup from "../assets/cal/sip top up.png";
import dreamCar from "../assets/cal/dream car.png";
import lifeInsurance from "../assets/cal/life-insurance.png";
import home from "../assets/cal/home loan.png";
import limitTime from "../assets/cal/limited-time.png";
import target from "../assets/cal/target03.png";
import emi from "../assets/cal/emi.png";
import costofDelay from "../assets/cal/cost of delay.png";
import swpcal from "../assets/cal/swpcal3.jpg";


/* =========================================================
   Calculator Image Map
========================================================= */

const CALCULATOR_IMAGES = {

  /* ---------- SIP ---------- */
  sip: sip,

  /* ---------- SIP Top Up ---------- */
  topup: stepup,
  sipTopup: stepup,

  /* ---------- Lumpsum ---------- */
  lumpsum: lumpsum,

  /* ---------- Limited Period SIP ---------- */
  limited: limitTime,
  limitedPeriodSip: limitTime,

  /* ---------- Retirement ---------- */
  retire: retirement,

  /* ---------- Education ---------- */
  edu: education,

  /* ---------- Wedding ---------- */
  wed: wedding,

  /* ---------- Vacation ---------- */
  vac: vacation,

  /* ---------- Home ---------- */
  home: home,
  homeLoan: home,

  /* ---------- Dream Car ---------- */
  car: dreamCar,

  /* ---------- Life Insurance ---------- */
  insurance: lifeInsurance,
  lifeInsurance: lifeInsurance,

  /* ---------- EMI ---------- */
  emi: emi,

  /* ---------- Cost of Delay ---------- */
  delay: costofDelay,
  costOfDelay: costofDelay,

  /* ---------- Birthday ---------- */
  birthday: education,
  birthdaySip: education,

  /* ---------- SWP ---------- */
  swp: swpcal,

  /* ---------- Goal / Target ---------- */
  goal: target,

  /* ---------- Time to Reach Goal ---------- */
  time: target,
  timeToReachGoal: target,

  /* ---------- FD / RD ---------- */
  fd: lumpsum,
  rd: lumpsum,

  /* ---------- Inflation ---------- */
  inflation: target,

  /* ---------- Tax ---------- */
  tax: lumpsum,

  /* ---------- Plane / Travel ---------- */
  plane: vacation,
};


/* =========================================================
   Get Image based on calculator key/name
========================================================= */

const getCalculatorImage = (key, name = "") => {
  const normalizedKey = String(key).toLowerCase();
  const normalizedName = String(name).toLowerCase();


  /* -------------------------------------------------------
     Direct key match
  ------------------------------------------------------- */

  if (CALCULATOR_IMAGES[key]) {
    return CALCULATOR_IMAGES[key];
  }


  /* -------------------------------------------------------
     Key based fallback
  ------------------------------------------------------- */

  if (
    normalizedKey.includes("topup") ||
    normalizedKey.includes("top-up") ||
    normalizedKey.includes("stepup")
  ) {
    return stepup;
  }


  if (
    normalizedKey.includes("limited")
  ) {
    return limitTime;
  }


  if (
    normalizedKey.includes("insurance")
  ) {
    return lifeInsurance;
  }


  if (
    normalizedKey.includes("home")
  ) {
    return home;
  }


  if (
    normalizedKey.includes("car")
  ) {
    return dreamCar;
  }


  if (
    normalizedKey.includes("emi")
  ) {
    return emi;
  }


  if (
    normalizedKey.includes("delay")
  ) {
    return costofDelay;
  }


  if (
    normalizedKey.includes("swp")
  ) {
    return swpcal;
  }


  /* -------------------------------------------------------
     Name based fallback
  ------------------------------------------------------- */

  if (
    normalizedName.includes("sip") &&
    (
      normalizedName.includes("top") ||
      normalizedName.includes("step")
    )
  ) {
    return stepup;
  }


  if (
    normalizedName.includes("limited") ||
    normalizedName.includes("limited period")
  ) {
    return limitTime;
  }


  if (
    normalizedName.includes("insurance")
  ) {
    return lifeInsurance;
  }


  if (
    normalizedName.includes("education") ||
    normalizedName.includes("child")
  ) {
    return education;
  }


  if (
    normalizedName.includes("retirement") ||
    normalizedName.includes("retire")
  ) {
    return retirement;
  }


  if (
    normalizedName.includes("wedding") ||
    normalizedName.includes("marriage")
  ) {
    return wedding;
  }


  if (
    normalizedName.includes("vacation") ||
    normalizedName.includes("travel") ||
    normalizedName.includes("holiday")
  ) {
    return vacation;
  }


  if (
    normalizedName.includes("home loan") ||
    normalizedName.includes("home")
  ) {
    return home;
  }


  if (
    normalizedName.includes("dream car") ||
    normalizedName.includes("car")
  ) {
    return dreamCar;
  }


  if (
    normalizedName.includes("emi")
  ) {
    return emi;
  }


  if (
    normalizedName.includes("cost of delay") ||
    normalizedName.includes("delay")
  ) {
    return costofDelay;
  }


  if (
    normalizedName.includes("birthday")
  ) {
    return education;
  }


  if (
    normalizedName.includes("swp")
  ) {
    return swpcal;
  }


  if (
    normalizedName.includes("lumpsum") ||
    normalizedName.includes("lump sum")
  ) {
    return lumpsum;
  }


  if (
    normalizedName.includes("time to reach") ||
    normalizedName.includes("reach goal")
  ) {
    return target;
  }


  if (
    normalizedName.includes("goal") ||
    normalizedName.includes("target")
  ) {
    return target;
  }


  if (
    normalizedName.includes("inflation")
  ) {
    return target;
  }


  if (
    normalizedName.includes("tax")
  ) {
    return lumpsum;
  }


  if (
    normalizedName.includes("fd") ||
    normalizedName.includes("fixed deposit")
  ) {
    return lumpsum;
  }


  if (
    normalizedName.includes("rd") ||
    normalizedName.includes("recurring deposit")
  ) {
    return lumpsum;
  }


  if (
    normalizedName.includes("plane") ||
    normalizedName.includes("flight")
  ) {
    return vacation;
  }


  if (
    normalizedName.includes("sip")
  ) {
    return sip;
  }


  /* -------------------------------------------------------
     Final fallback
  ------------------------------------------------------- */

  return sip;
};


/* =========================================================
   Main Component
========================================================= */

export default function Calculators() {
  const { id: p } = useParams();
  const navigate = useNavigate();

  const id = C[p] ? p : "sip";

  const calculatorKeys = Object.keys(C);


  /* =======================================================
     Card Click

     - Change URL
     - Scroll directly to calculator
  ======================================================= */

  const handleCalculatorClick = (event, key) => {
    event.preventDefault();

    navigate(`/calculators/${key}`);

    /*
      Give React a moment to update the selected calculator
      before scrolling.
    */

    setTimeout(() => {
      const calculatorSection =
        document.getElementById("calculator-widget");

      if (calculatorSection) {
        calculatorSection.scrollIntoView({
          behavior: "smooth",
          block: "start",
          inline: "nearest",
        });
      }
    }, 100);
  };


  return (
    <main className="min-h-screen w-full overflow-x-clip bg-white">

      {/* =====================================================
          Calculator Selection Section
      ====================================================== */}

      <section className="w-full px-3 py-8 sm:px-5 sm:py-10 md:px-6 lg:px-8 lg:py-12">

        <div className="mx-auto w-full max-w-[1200px]">

          {/* =================================================
              Heading
          ================================================= */}

          <div className="mb-7 text-center sm:mb-9">

            <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#E7B65A] sm:text-xs">
              Tools & Calculators
            </span>

            <h1 className="mt-2 font-serif text-2xl font-semibold text-[#071A33] sm:text-3xl md:text-4xl">
              Financial Calculators
            </h1>

            <p className="mx-auto mt-2 max-w-[650px] text-sm leading-6 text-slate-500 sm:text-[15px]">
              Plan your investments, savings and financial goals
              with our simple financial calculators.
            </p>

          </div>


          {/* =================================================
              Calculator Grid
          ================================================== */}

          <div
            className="
              grid
              w-full
              grid-cols-2
              gap-4

              sm:grid-cols-3
              sm:gap-5

              lg:grid-cols-4
              lg:gap-5

              xl:gap-6
            "
          >

            {calculatorKeys.map((k) => {
              const active = k === id;

              const calculatorName = C[k]?.n || k;

              const icon = getCalculatorImage(
                k,
                calculatorName
              );


              return (
                <Link
                  key={k}
                  to={`/calculators/${k}`}
                  onClick={(event) =>
                    handleCalculatorClick(event, k)
                  }

                  className={`
                    group
                    relative
                    flex
                    min-w-0
                    w-full
                    min-h-[128px]
                    flex-col
                    items-center
                    justify-center

                    rounded-[6px]

                    border
                    px-3
                    py-4

                    text-center

                    transition-all
                    duration-200
                    ease-out

                    ${
                      active
                        ? "border-[#29466D]/40 bg-[#FAFAFA] shadow-[0_2px_8px_rgba(7,26,51,0.10)]"
                        : "border-slate-200 bg-[#FAFAFA] shadow-[0_2px_8px_rgba(15,23,42,0.07)]"
                    }

                    hover:-translate-y-[2px]
                    hover:border-[#29466D]/50
                    hover:bg-white
                    hover:shadow-[0_5px_14px_rgba(7,26,51,0.12)]

                    focus:outline-none
                    focus:ring-2
                    focus:ring-[#E7B65A]
                    focus:ring-offset-2
                    focus:ring-offset-white

                    active:translate-y-0

                    sm:min-h-[135px]
                    sm:px-4
                    sm:py-4

                    lg:min-h-[140px]
                  `}
                >

                  {/* =========================================
                      IMAGE ICON
                  ========================================== */}

                  <div
                    className="
                      flex
                      h-[50px]
                      w-[60px]
                      items-center
                      justify-center

                      transition-transform
                      duration-200

                      group-hover:-translate-y-0.5
                      group-hover:scale-[1.04]

                      sm:h-[54px]

                      lg:h-[58px]
                    "
                    aria-hidden="true"
                  >
                    <img
                      src={icon}
                      alt=""
                      className="
                        h-[48px]
                        w-[48px]
                        object-contain

                        sm:h-[52px]
                        sm:w-[52px]

                        lg:h-[56px]
                        lg:w-[56px]
                      "
                    />
                  </div>


                  {/* =========================================
                      Calculator Name
                  ========================================== */}

                  <h2
                    className="
                      mt-2
                      max-w-full

                      break-words

                      px-1

                      text-[13px]
                      font-medium
                      leading-5

                      text-[#071A33]

                      transition-colors
                      duration-200

                      group-hover:text-[#29466D]

                      sm:text-[14px]

                      lg:text-[15px]
                    "
                  >
                    {calculatorName}
                  </h2>

                </Link>
              );
            })}

          </div>


          {/* =================================================
              Helper Text
          ================================================== */}

          <div className="mt-6 text-center">
            <p className="text-xs text-slate-400">
              Select any calculator to start planning your
              financial goal.
            </p>
          </div>


          {/* =================================================
              ACTUAL CALCULATOR
          ================================================== */}

          <section
            id="calculator-widget"
            className="
              mt-12
              scroll-mt-24

              sm:mt-14

              lg:mt-16
            "
          >

            {/* -----------------------------------------------
                Selected Calculator Heading
            ------------------------------------------------ */}

            <div className="mb-6 text-center">

              <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-[#E7B65A]">
                Selected Calculator
              </span>

              <h2
                className="
                  mt-1
                  font-serif
                  text-xl
                  font-semibold
                  text-[#071A33]

                  sm:text-2xl
                "
              >
                {C[id].n}
              </h2>

              <div className="mx-auto mt-3 h-[2px] w-10 bg-[#E7B65A]" />

            </div>


            {/* -----------------------------------------------
                Calculator Widget
            ------------------------------------------------ */}

            <div className="min-w-0 overflow-hidden">

              <CalcWidget
                key={id}
                id={id}
              />

            </div>

          </section>

        </div>

      </section>

    </main>
  );
}