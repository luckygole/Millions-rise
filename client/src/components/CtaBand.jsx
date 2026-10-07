import { Link } from "react-router-dom";
export default function CtaBand() {
  return (
    <div className="bg-[radial-gradient(700px_300px_at_90%_0,#16407a,#08182f)] py-10 text-white">
      <div className="w flex flex-wrap items-center justify-between gap-5">
        <div>
          <span className="ey">Your wealth. Your future.</span>
          <h2 className="mt-1 font-serif text-2xl sm:text-3xl">
            Let's build your <i className="text-[#e6cf9a]">financial future.</i>
          </h2>
          <p className="mt-1 text-sm text-slate-300">
            Personalised guidance around your goals, risk profile and long-term
            journey.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Link
            to="/calculators/goal"
            className="btn border-white bg-white text-ink"
          >
            Start Goal Planning →
          </Link>
          <Link to="/contact" className="btn border-white/40 bg-transparent">
            Talk to an Expert
          </Link>
        </div>
      </div>
    </div>
  );
}
