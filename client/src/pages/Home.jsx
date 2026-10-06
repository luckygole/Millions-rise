
import { Link } from "react-router-dom";
import CalcWidget from "../components/CalcWidget";
import ServiceGrid from "../components/ServiceGrid";
import Head from "../components/Head";
import StatsCounter from "../components/StatsCounter";
import { C } from "../lib/calculators";
import { useBlogs } from "../lib/api";



export default function Home() {
  const blogs = useBlogs();

  return (
    <>
      {/* ================= HERO ================= */}
      <section className="border-b border-slate-200 bg-gradient-to-b from-white via-white to-slate-50">
        <div className="w grid items-center gap-10 py-16 lg:grid-cols-[1.05fr_.95fr] lg:py-20">
          <div>
            <span className="inline-block rounded-full border border-slate-200 bg-slate-50 px-4 py-1.5 text-xs font-semibold text-ink">
              AMFI Registered Mutual Fund Distributor
            </span>

            <h1 className="mt-5 max-w-2xl font-serif text-4xl leading-tight text-ink sm:text-5xl lg:text-6xl">
              Build. Protect. Grow.
              <br />
              <i className="text-gold">Your Wealth.</i>
            </h1>

            <p className="my-5 max-w-xl text-base leading-7 text-slate-600">
              Goal-based investing, transparent guidance and complete
              financial solutions for families and businesses, from Mandi
              Dabwali.
            </p>

            <div className="flex flex-wrap gap-3">
              <Link to="/contact" className="btn">
                Start Investing
              </Link>

              <Link to="/contact" className="btn btn-o">
                Book a Consultation
              </Link>
            </div>

            <div className="mt-8 grid max-w-lg grid-cols-3 gap-3">
              <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
                <p className="font-serif text-2xl text-ink">15+</p>

                <p className="mt-1 text-xs text-slate-500">
                  Financial Solutions
                </p>
              </div>

              <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
                <p className="font-serif text-2xl text-ink">16+</p>

                <p className="mt-1 text-xs text-slate-500">
                  Smart Calculators
                </p>
              </div>

              <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
                <p className="font-serif text-2xl text-ink">1:1</p>

                <p className="mt-1 text-xs text-slate-500">
                  Personal Guidance
                </p>
              </div>
            </div>
          </div>

          <div className="lg:pl-6">
            <CalcWidget id="sip" />
          </div>
        </div>
      </section>

      {/* ================= ANIMATED STATS ================= */}
      <StatsCounter />

      {/* ================= TRUST STRIP ================= */}
      <section className="border-b border-slate-200 bg-white">
        <div className="w grid gap-6 py-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="flex gap-3">
            <div className="text-2xl">🛡️</div>

            <div>
              <h3 className="font-semibold text-ink">
                Transparent Guidance
              </h3>

              <p className="mt-1 text-xs text-slate-500">
                Clear and easy-to-understand financial guidance.
              </p>
            </div>
          </div>

          <div className="flex gap-3">
            <div className="text-2xl">🎯</div>

            <div>
              <h3 className="font-semibold text-ink">
                Goal Based Planning
              </h3>

              <p className="mt-1 text-xs text-slate-500">
                Investment decisions aligned with your goals.
              </p>
            </div>
          </div>

          <div className="flex gap-3">
            <div className="text-2xl">📊</div>

            <div>
              <h3 className="font-semibold text-ink">
                Smart Tools
              </h3>

              <p className="mt-1 text-xs text-slate-500">
                Useful calculators and comparison tools.
              </p>
            </div>
          </div>

          <div className="flex gap-3">
            <div className="text-2xl">🤝</div>

            <div>
              <h3 className="font-semibold text-ink">
                Personal Support
              </h3>

              <p className="mt-1 text-xs text-slate-500">
                Assistance whenever you need it.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= FINANCIAL SOLUTIONS ================= */}
      <section className="sec">
        <div className="w">
          <Head
            e="Financial Solutions"
            t="Complete solutions, under one roof"
            s="Explore investment, protection and wealth planning solutions designed around your financial needs."
          />

          <ServiceGrid n={8} />

          <div className="mt-7">
            <Link to="/services" className="btn btn-o">
              View all services →
            </Link>
          </div>
        </div>
      </section>

      {/* ================= FINANCIAL GOALS ================= */}
      <section className="sec bg-slate-50">
        <div className="w">
          <Head
            e="Plan with purpose"
            t="Give shape to your financial goals"
            s="Whether you are planning for retirement, education, a home or your next big milestone, start with a clear plan."
          />

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              ["retire", "🏖️"],
              ["edu", "🎓"],
              ["wed", "💍"],
              ["home", "🏠"],
              ["car", "🚗"],
              ["vac", "✈️"],
              ["goal", "🎯"],
              ["sip", "📈"],
            ].map(([k, icon]) => (
              <Link
                key={k}
                to={"/calculators/" + k}
                className="group rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:border-gold"
              >
                <div className="text-2xl">{icon}</div>

                <h3 className="mt-3 font-semibold text-ink">
                  {C[k].n}
                </h3>

                <p className="mt-1 text-xs text-slate-500">
                  Plan and estimate your requirement.
                </p>

                <span className="mt-4 inline-block text-xs font-bold text-brand">
                  Calculate →
                </span>
              </Link>
            ))}
          </div>

          <div className="mt-7">
            <Link
              to="/calculators/sip"
              className="text-sm font-bold text-brand"
            >
              Explore all 16 financial calculators →
            </Link>
          </div>
        </div>
      </section>

      {/* ================= SMART FINANCIAL TOOLS ================= */}
      <section className="sec">
        <div className="w">
          <Head
            e="Smart Financial Tools"
            t="Make better decisions with the right numbers"
            s="Use our simple tools to understand investments, returns, risk and financial goals."
          />

          <div className="grid gap-5 md:grid-cols-3">
            <div className="card">
              <div className="mb-3 text-3xl">📈</div>

              <h3 className="font-serif text-xl text-ink">
                SIP Calculator
              </h3>

              <p className="my-3 text-sm leading-6 text-slate-500">
                Estimate how your monthly SIP investment can grow over time.
              </p>

              <Link
                to="/calculators/sip"
                className="text-sm font-bold text-brand"
              >
                Calculate SIP →
              </Link>
            </div>

            <div className="card">
              <div className="mb-3 text-3xl">⚖️</div>

              <h3 className="font-serif text-xl text-ink">
                Compare Funds
              </h3>

              <p className="my-3 text-sm leading-6 text-slate-500">
                Compare mutual funds side by side and understand key details.
              </p>

              <Link
                to="/compare"
                className="text-sm font-bold text-brand"
              >
                Compare Funds →
              </Link>
            </div>

            <div className="card">
              <div className="mb-3 text-3xl">🧭</div>

              <h3 className="font-serif text-xl text-ink">
                Risk Profile
              </h3>

              <p className="my-3 text-sm leading-6 text-slate-500">
                Understand your investment risk profile with a quick quiz.
              </p>

              <Link
                to="/risk"
                className="text-sm font-bold text-brand"
              >
                Check Your Risk →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ================= EXPLORE ================= */}
      <section className="sec bg-slate-50">
        <div className="w">
          <Head
            e="Explore"
            t="Useful resources for your financial journey"
          />

          <div className="grid gap-5 md:grid-cols-3">
            <div className="card">
              <span className="ey">IPO Corner</span>

              <h3 className="my-2 font-serif text-xl text-ink">
                Current & upcoming IPOs
              </h3>

              <p className="mb-5 text-sm leading-6 text-slate-500">
                Explore current and upcoming IPO opportunities and learn more
                before making investment decisions.
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

              <p className="mb-5 text-sm leading-6 text-slate-500">
                Take our quick risk profile quiz and understand your investment
                comfort level.
              </p>

              <Link to="/risk" className="btn">
                Take the Quiz
              </Link>
            </div>

            <div className="card">
              <span className="ey">Compare</span>

              <h3 className="my-2 font-serif text-xl text-ink">
                Compare funds & check NAV
              </h3>

              <p className="mb-5 text-sm leading-6 text-slate-500">
                Explore mutual funds side by side and use live NAV search.
              </p>

              <Link to="/compare" className="btn">
                Compare Funds
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ================= WHY CHOOSE US ================= */}
      <section className="sec">
        <div className="w">
          <Head
            e="Why choose us"
            t="Financial planning made simpler"
            s="We focus on making financial decisions easier to understand and easier to act on."
          />

          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="mb-4 text-3xl">01</div>

              <h3 className="font-serif text-2xl text-ink">
                Understand your goals
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-500">
                We start by understanding what you want to achieve instead of
                simply recommending a financial product.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="mb-4 text-3xl">02</div>

              <h3 className="font-serif text-2xl text-ink">
                Build the right strategy
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-500">
                Choose suitable investment and financial solutions based on
                your goals, time horizon and risk comfort.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="mb-4 text-3xl">03</div>

              <h3 className="font-serif text-2xl text-ink">
                Track your progress
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-500">
                Financial planning is not a one-time activity. Review your
                progress and adjust your strategy as your needs change.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="mb-4 text-3xl">04</div>

              <h3 className="font-serif text-2xl text-ink">
                Stay focused
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-500">
                Avoid unnecessary complexity and stay focused on long-term
                financial goals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= HOW IT WORKS ================= */}
      <section className="sec bg-slate-50">
        <div className="w">
          <Head
            e="How it works"
            t="Start your financial journey in 3 simple steps"
          />

          <div className="grid gap-5 md:grid-cols-3">
            <div className="card">
              <span className="ey">Step 01</span>

              <h3 className="my-2 font-serif text-xl text-ink">
                Share your goals
              </h3>

              <p className="text-sm leading-6 text-slate-500">
                Tell us about your financial goals, priorities and investment
                requirements.
              </p>
            </div>

            <div className="card">
              <span className="ey">Step 02</span>

              <h3 className="my-2 font-serif text-xl text-ink">
                Get a plan
              </h3>

              <p className="text-sm leading-6 text-slate-500">
                Explore suitable financial solutions based on your
                requirements.
              </p>
            </div>

            <div className="card">
              <span className="ey">Step 03</span>

              <h3 className="my-2 font-serif text-xl text-ink">
                Take action
              </h3>

              <p className="text-sm leading-6 text-slate-500">
                Start investing and keep tracking your journey towards your
                financial goals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= INSIGHTS ================= */}
      <section className="sec">
        <div className="w">
          <Head
            e="Insights"
            t="Smarter investing"
            s="Simple financial insights to help you understand money and investing better."
          />

          <div className="grid gap-5 md:grid-cols-3">
            {blogs.slice(0, 3).map((b) => (
              <Link
                key={b[1]}
                to="/blogs"
                className="card transition hover:-translate-y-1"
              >
                <span className="text-[10px] font-extrabold text-gold">
                  {b[0]}
                </span>

                <h3 className="my-2 font-serif text-lg text-ink">
                  {b[1]}
                </h3>

                <p className="text-sm leading-6 text-slate-500">
                  {b[2].slice(0, 100)}…
                </p>

                <span className="mt-4 inline-block text-sm font-bold text-brand">
                  Read more →
                </span>
              </Link>
            ))}
          </div>

          <Link
            to="/blogs"
            className="mt-6 inline-block text-sm font-bold text-brand"
          >
            View all insights →
          </Link>
        </div>
      </section>

      {/* ================= FINAL CTA ================= */}
      <section className="border-y border-slate-200 bg-slate-900">
        <div className="w py-14 text-center">
          <span className="text-xs font-bold uppercase tracking-wider text-gold">
            Ready to get started?
          </span>

          <h2 className="mx-auto mt-3 max-w-2xl font-serif text-3xl text-white sm:text-4xl">
            Your financial goals deserve a clear plan.
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-slate-300">
            Start with a free consultation and take the first step towards
            better financial planning.
          </p>

          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <Link to="/contact" className="btn">
              Book a Consultation
            </Link>

            <Link
              to="/calculators/sip"
              className="btn btn-o border-slate-500 text-white"
            >
              Try a Calculator
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
