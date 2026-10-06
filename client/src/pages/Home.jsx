// import { Link } from "react-router-dom";
// import CalcWidget from "../components/CalcWidget";
// import ServiceGrid from "../components/ServiceGrid";
// import Head from "../components/Head";
// import { C } from "../lib/calculators";
// import { useBlogs } from "../lib/api";
// export default function Home() {
//   const blogs = useBlogs();
//   return (
//     <>
//       <section className="border-b border-slate-200 bg-gradient-to-b from-white to-slate-50">
//         <div className="w grid items-center gap-8 py-12 lg:grid-cols-[1.1fr_.9fr] lg:py-16">
//           <div>
//             <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs text-ink">
//               AMFI Registered Mutual Fund Distributor
//             </span>
//             <h1 className="mt-4 font-serif text-4xl leading-tight text-ink sm:text-5xl">
//               Build. Protect. Grow. <i className="text-gold">Your Wealth.</i>
//             </h1>
//             <p className="my-4 max-w-md text-slate-600">
//               Goal-based investing, transparent guidance and complete financial
//               solutions for families and businesses, from Mandi Dabwali.
//             </p>
//             <div className="flex flex-wrap gap-3">
//               <Link to="/contact" className="btn">
//                 Start Investing
//               </Link>
//               <Link to="/contact" className="btn btn-o">
//                 Book a Consultation
//               </Link>
//             </div>
//           </div>
//           <CalcWidget id="sip" compact />
//         </div>
//       </section>
//       <section className="sec">
//         <div className="w">
//           <Head
//             e="Financial Solutions"
//             t="Complete solutions, under one roof"
//           />
//           <ServiceGrid n={8} />
//           <Link to="/services" className="btn btn-o mt-5">
//             View all services →
//           </Link>
//         </div>
//       </section>
//       <section className="sec bg-slate-50">
//         <div className="w">
//           <Head e="Plan with purpose" t="Give shape to your goals" />
//           <div className="mb-4 flex flex-wrap gap-2">
//             {[
//               "goal",
//               "retire",
//               "edu",
//               "wed",
//               "vac",
//               "home",
//               "car",
//               "sip",
//               "lump",
//             ].map((k) => (
//               <Link
//                 key={k}
//                 to={"/calculators/" + k}
//                 className="rounded-full border border-slate-200 bg-white px-4 py-1.5 text-sm font-semibold hover:border-gold"
//               >
//                 {C[k].n}
//               </Link>
//             ))}
//           </div>
//           <Link to="/calculators/sip" className="text-sm font-bold text-brand">
//             Explore all 16 financial calculators →
//           </Link>
//         </div>
//       </section>
//       <section className="sec">
//         <div className="w grid gap-4 md:grid-cols-3">
//           <div className="card">
//             <span className="ey">IPO Corner</span>
//             <h3 className="my-2 font-serif text-xl text-ink">
//               Current & upcoming IPOs
//             </h3>
//             <p className="mb-4 text-sm text-slate-500">
//               Apply through our partner Motilal Oswal.
//             </p>
//             <Link to="/ipo" className="btn">
//               Open IPO Corner
//             </Link>
//           </div>
//           <div className="card">
//             <span className="ey">Free · 2 minutes</span>
//             <h3 className="my-2 font-serif text-xl text-ink">
//               What kind of investor are you?
//             </h3>
//             <p className="mb-4 text-sm text-slate-500">
//               Take the risk profile quiz.
//             </p>
//             <Link to="/risk" className="btn">
//               Take the quiz
//             </Link>
//           </div>
//           <div className="card">
//             <span className="ey">Compare</span>
//             <h3 className="my-2 font-serif text-xl text-ink">
//               Compare funds & check NAV
//             </h3>
//             <p className="mb-4 text-sm text-slate-500">
//               Side by side, with live NAV search.
//             </p>
//             <Link to="/compare" className="btn">
//               Compare funds
//             </Link>
//           </div>
//         </div>
//       </section>
//       <section className="sec bg-slate-50">
//         <div className="w">
//           <Head e="Insights" t="Smarter investing" />
//           <div className="grid gap-4 md:grid-cols-3">
//             {blogs.slice(0, 3).map((b) => (
//               <Link key={b[1]} to="/blogs" className="card">
//                 <span className="text-[10px] font-extrabold text-gold">
//                   {b[0]}
//                 </span>
//                 <h3 className="my-1 font-serif text-base text-ink">{b[1]}</h3>
//                 <p className="text-sm text-slate-500">{b[2].slice(0, 80)}…</p>
//               </Link>
//             ))}
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }

import { Link } from "react-router-dom";
import CalcWidget from "../components/CalcWidget";
import ServiceGrid from "../components/ServiceGrid";
import Head from "../components/Head";
import { C } from "../lib/calculators";
import { useBlogs } from "../lib/api";
export default function Home() {
  const blogs = useBlogs();
  return (
    <>
      <section className="border-b border-slate-200 bg-gradient-to-b from-white to-slate-50">
        <div className="w grid items-center gap-8 py-12 lg:grid-cols-[1.1fr_.9fr] lg:py-16">
          <div>
            <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs text-ink">
              AMFI Registered Mutual Fund Distributor
            </span>
            <h1 className="mt-4 font-serif text-4xl leading-tight text-ink sm:text-5xl">
              Build. Protect. Grow. <i className="text-gold">Your Wealth.</i>
            </h1>
            <p className="my-4 max-w-md text-slate-600">
              Goal-based investing, transparent guidance and complete financial
              solutions for families and businesses, from Mandi Dabwali.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link to="/contact" className="btn">
                Start Investing
              </Link>
              <Link to="/contact" className="btn btn-o">
                Book a Consultation
              </Link>
            </div>
          </div>
          <CalcWidget id="sip" />
        </div>
      </section>
      <section className="sec">
        <div className="w">
          <Head
            e="Financial Solutions"
            t="Complete solutions, under one roof"
          />
          <ServiceGrid n={8} />
          <Link to="/services" className="btn btn-o mt-5">
            View all services →
          </Link>
        </div>
      </section>
      <section className="sec bg-slate-50">
        <div className="w">
          <Head e="Plan with purpose" t="Give shape to your goals" />
          <div className="mb-4 flex flex-wrap gap-2">
            {[
              "goal",
              "retire",
              "edu",
              "wed",
              "vac",
              "home",
              "car",
              "sip",
              "lump",
            ].map((k) => (
              <Link
                key={k}
                to={"/calculators/" + k}
                className="rounded-full border border-slate-200 bg-white px-4 py-1.5 text-sm font-semibold hover:border-gold"
              >
                {C[k].n}
              </Link>
            ))}
          </div>
          <Link to="/calculators/sip" className="text-sm font-bold text-brand">
            Explore all 16 financial calculators →
          </Link>
        </div>
      </section>
      <section className="sec">
        <div className="w grid gap-4 md:grid-cols-3">
          <div className="card">
            <span className="ey">IPO Corner</span>
            <h3 className="my-2 font-serif text-xl text-ink">
              Current & upcoming IPOs
            </h3>
            <p className="mb-4 text-sm text-slate-500">
              Apply through our partner Motilal Oswal.
            </p>
            <Link to="/ipo" className="btn">
              Open IPO Corner
            </Link>
          </div>
          <div className="card">
            <span className="ey">Free · 2 minutes</span>
            <h3 className="my-2 font-serif text-xl text-ink">
              What kind of investor are you?
            </h3>
            <p className="mb-4 text-sm text-slate-500">
              Take the risk profile quiz.
            </p>
            <Link to="/risk" className="btn">
              Take the quiz
            </Link>
          </div>
          <div className="card">
            <span className="ey">Compare</span>
            <h3 className="my-2 font-serif text-xl text-ink">
              Compare funds & check NAV
            </h3>
            <p className="mb-4 text-sm text-slate-500">
              Side by side, with live NAV search.
            </p>
            <Link to="/compare" className="btn">
              Compare funds
            </Link>
          </div>
        </div>
      </section>
      <section className="sec bg-slate-50">
        <div className="w">
          <Head e="Insights" t="Smarter investing" />
          <div className="grid gap-4 md:grid-cols-3">
            {blogs.slice(0, 3).map((b) => (
              <Link key={b[1]} to="/blogs" className="card">
                <span className="text-[10px] font-extrabold text-gold">
                  {b[0]}
                </span>
                <h3 className="my-1 font-serif text-base text-ink">{b[1]}</h3>
                <p className="text-sm text-slate-500">{b[2].slice(0, 80)}…</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

