// import {Link,useParams} from 'react-router-dom';import {C} from '../lib/calculators';import CalcWidget from '../components/CalcWidget';
// export default function Calculators(){const{id:p}=useParams();const id=C[p]?p:'sip';
// return(<section className="sec"><div className="w"><span className="ey">Tools & Calculators</span><h1 className="h2">{C[id].n}</h1><div className="grid gap-6 lg:grid-cols-[230px_1fr]">
// <div className="flex gap-1 overflow-x-auto lg:grid lg:content-start">{Object.keys(C).map(k=><Link key={k} to={'/calculators/'+k} className={`shrink-0 rounded-lg px-3 py-2 text-[13.5px] font-semibold ${k===id?'bg-slate-100 text-gold':'hover:bg-slate-50'}`}>{C[k].n}</Link>)}</div>
// <CalcWidget key={id} id={id}/></div></div></section>)}


// import { Link, useParams } from "react-router-dom";
// import { C } from "../lib/calculators";
// import CalcWidget from "../components/CalcWidget";
// export default function Calculators() {
//   const { id: p } = useParams();
//   const id = C[p] ? p : "sip";
//   return (
//     <section className="sec">
//       <div className="w">
//         <span className="ey">Tools & Calculators</span>
//         <h1 className="h2">{C[id].n}</h1>
//         <div className="grid gap-6 lg:grid-cols-[230px_1fr]">
//           <div className="flex gap-1 overflow-x-auto lg:grid lg:content-start">
//             {Object.keys(C).map((k) => (
//               <Link
//                 key={k}
//                 to={"/calculators/" + k}
//                 className={`shrink-0 rounded-lg px-3 py-2 text-[13.5px] font-semibold ${k === id ? "bg-slate-100 text-gold" : "hover:bg-slate-50"}`}
//               >
//                 {C[k].n}
//               </Link>
//             ))}
//           </div>
//           <CalcWidget key={id} id={id} />
//         </div>
//       </div>
//     </section>
//   );
// }


import { Link, useNavigate, useParams } from "react-router-dom";
import {
  ChartNoAxesCombined,
  Wallet,
  GraduationCap,
  Hourglass,
  Gem,
  Umbrella,
  House,
  Car,
  Plane,
  Target,
  Calculator as CalculatorIcon,
  Banknote,
  Landmark,
  ShieldCheck,
  TrendingUp,
  PiggyBank,
} from "lucide-react";

import { C } from "../lib/calculators";
import CalcWidget from "../components/CalcWidget";

/* --------------------------------------------------
   Calculator Icons
-------------------------------------------------- */

const CALCULATOR_ICONS = {
  sip: ChartNoAxesCombined,
  lumpsum: Wallet,
  edu: GraduationCap,
  retire: Hourglass,
  wed: Gem,
  vac: Umbrella,
  home: House,
  car: Car,
  goal: Target,

  swp: TrendingUp,
  fd: Banknote,
  rd: PiggyBank,
  inflation: TrendingUp,
  tax: Landmark,
  insurance: ShieldCheck,
  emi: CalculatorIcon,
  plane: Plane,
};

/* --------------------------------------------------
   Get icon
-------------------------------------------------- */

const getCalculatorIcon = (key) => {
  return CALCULATOR_ICONS[key] || CalculatorIcon;
};

/* --------------------------------------------------
   Main Component
-------------------------------------------------- */

export default function Calculators() {
  const { id: p } = useParams();
  const navigate = useNavigate();

  const id = C[p] ? p : "sip";

  const calculatorKeys = Object.keys(C);

  /* ------------------------------------------------
     Card click:
     1. Change calculator URL
     2. Smoothly move to calculator
  ------------------------------------------------- */

  const handleCalculatorClick = (event, key) => {
    event.preventDefault();

    // Change URL / selected calculator
    navigate(`/calculators/${key}`);

    // Wait for React route/render update
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
    }, 80);
  };

  return (
    <main className="min-h-screen w-full overflow-x-clip bg-white">

      {/* ==================================================
          CALCULATORS SECTION
      ================================================== */}

      <section className="w-full px-3 py-8 sm:px-5 sm:py-10 md:px-6 lg:px-8 lg:py-12">

        <div className="mx-auto w-full max-w-[1180px]">

          {/* ==================================================
              PAGE HEADING
          ================================================== */}

          <div className="mb-7 text-center sm:mb-9">

            <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#E7B65A] sm:text-[12px]">
              Tools & Calculators
            </span>

            <h1 className="mt-2 font-serif text-2xl font-semibold text-[#071A33] sm:text-3xl md:text-4xl">
              Financial Calculators
            </h1>

            <p className="mx-auto mt-2 max-w-[620px] text-sm leading-6 text-slate-500 sm:text-[15px]">
              Plan your investments, savings and financial goals
              with our simple financial calculators.
            </p>

          </div>


          {/* ==================================================
              CALCULATOR CARDS
          ================================================== */}

          <div
            className="
              mx-auto
              grid
              w-full
              max-w-[900px]
              grid-cols-2
              justify-items-center
              gap-3
              sm:gap-4
              lg:grid-cols-3
              lg:gap-5
          "
          >

            {calculatorKeys.map((k) => {
              const Icon = getCalculatorIcon(k);
              const active = k === id;

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
                    aspect-square
                    w-full
                    max-w-[220px]
                    min-w-0
                    flex-col
                    items-center
                    justify-center
                    overflow-hidden
                    rounded-[18px]
                    border
                    px-3
                    py-4
                    text-center
                    transition-all
                    duration-300
                    ease-out

                    ${
                      active
                        ? "border-[#E7B65A] bg-[#29466D] shadow-[0_8px_22px_rgba(41,70,109,0.20)]"
                        : "border-[#29466D]/30 bg-[#29466D]"
                    }

                    hover:-translate-y-1
                    hover:border-[#E7B65A]
                    hover:bg-[#071A33]
                    hover:shadow-[0_12px_25px_rgba(7,26,51,0.18)]

                    focus:outline-none
                    focus:ring-2
                    focus:ring-[#E7B65A]
                    focus:ring-offset-2
                    focus:ring-offset-white

                    active:translate-y-0

                    sm:rounded-[19px]
                    sm:px-4
                    sm:py-5

                    lg:max-w-[225px]
                  `}
                >

                  {/* ------------------------------------------
                      Soft shine
                  ------------------------------------------ */}

                  <span
                    className="
                      pointer-events-none
                      absolute
                      -right-10
                      -top-10
                      h-24
                      w-24
                      rounded-full
                      bg-white/[0.04]
                      blur-xl
                      transition-all
                      duration-500
                      group-hover:scale-150
                    "
                  />


                  {/* ------------------------------------------
                      Icon Circle
                  ------------------------------------------ */}

                  <div
                    className="
                      relative
                      flex
                      h-[60px]
                      w-[60px]
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      border-2
                      border-[#E7B65A]
                      bg-white
                      shadow-[0_4px_12px_rgba(0,0,0,0.12)]
                      transition-all
                      duration-300

                      group-hover:-translate-y-1
                      group-hover:scale-105
                      group-hover:shadow-[0_7px_18px_rgba(231,182,90,0.22)]

                      sm:h-[66px]
                      sm:w-[66px]
                    "
                  >

                    <Icon
                      size={31}
                      strokeWidth={1.9}
                      className="
                        text-[#071A33]
                        transition-all
                        duration-300
                        group-hover:text-[#29466D]
                      "
                    />

                  </div>


                  {/* ------------------------------------------
                      Calculator Name
                  ------------------------------------------ */}

                  <h2
                    className="
                      mt-3
                      max-w-full
                      break-words
                      px-1
                      text-[13px]
                      font-bold
                      leading-5
                      text-white
                      transition-colors
                      duration-300
                      group-hover:text-[#E7B65A]

                      sm:mt-3
                      sm:text-[14px]
                      sm:leading-5

                      md:text-[15px]
                    "
                  >
                    {C[k].n}
                  </h2>


                  {/* ------------------------------------------
                      Gold bottom line
                  ------------------------------------------ */}

                  <span
                    className="
                      absolute
                      bottom-0
                      left-0
                      h-[3px]
                      w-full
                      bg-[#E7B65A]
                      transition-all
                      duration-300
                      group-hover:h-[4px]
                    "
                  />

                </Link>
              );
            })}

          </div>


          {/* ==================================================
              SMALL NOTE
          ================================================== */}

          <div className="mt-7 text-center">
            <p className="text-xs text-slate-400">
              Select any calculator to start planning your
              financial goal.
            </p>
          </div>


          {/* ==================================================
              CALCULATOR WIDGET
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

            {/* ------------------------------------------
                Selected Calculator Heading
            ------------------------------------------ */}

            <div className="mb-5 text-center">

              <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#E7B65A]">
                Selected Calculator
              </span>

              <h2 className="mt-1 font-serif text-xl font-semibold text-[#071A33] sm:text-2xl">
                {C[id].n}
              </h2>

              <div className="mx-auto mt-3 h-[2px] w-12 bg-[#E7B65A]" />

            </div>


            {/* ------------------------------------------
                Actual Calculator
            ------------------------------------------ */}

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