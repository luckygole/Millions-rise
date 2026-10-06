import { useEffect, useRef, useState } from "react";

const STATS = [
  {
    value: 20,
    suffix: "+",
    label: "YEARS OF EXPERIENCE",
  },
  {
    value: 1200,
    suffix: "+",
    label: "HAPPY INVESTOR FAMILIES",
  },
  {
    value: 200,
    prefix: "₹",
    suffix: "+ Cr",
    label: "ASSETS UNDER CARE · MF + BROKING (AS ON AUG 2026)",
  },
  {
    value: 12,
    suffix: "",
    label: "AWARDS WON",
  },
];

function Counter({ value, duration = 1800 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const element = ref.current;

    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || started.current) return;

        started.current = true;

        const startTime = performance.now();

        const animate = (currentTime) => {
          const progress = Math.min(
            (currentTime - startTime) / duration,
            1
          );

          const easedProgress = 1 - Math.pow(1 - progress, 3);

          const currentValue = Math.floor(
            easedProgress * value
          );

          setCount(currentValue);

          if (progress < 1) {
            requestAnimationFrame(animate);
          } else {
            setCount(value);
          }
        };

        requestAnimationFrame(animate);
      },
      {
        threshold: 0.4,
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [value, duration]);

  return (
    <span ref={ref}>
      {count.toLocaleString("en-IN")}
    </span>
  );
}

export default function StatsCounter() {
  return (
    // <section className="relative z-10 px-1 sm:px-4">
    //   <div className="mx-auto grid max-w-7xl overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_12px_35px_rgba(15,23,42,0.12)] md:grid-cols-4">
    //     {STATS.map((stat, index) => (
    //       <div
    //         key={stat.label}
    //         className={`flex min-h-[145px] flex-col items-center justify-center px-5 py-7 text-center ${
    //           index !== STATS.length - 1
    //             ? "border-b border-slate-200 md:border-b-0 md:border-r"
    //             : ""
    //         }`}
    //       >
    //         <div className="font-serif text-4xl font-bold leading-none text-[#302d7c] sm:text-5xl">
    //           {stat.prefix}
    //           <Counter value={stat.value} />
    //           <span className="text-gold">{stat.suffix}</span>
    //         </div>

    //         <p className="mt-3 max-w-[220px] text-xs font-bold leading-5 tracking-wide text-slate-500">
    //           {stat.label}
    //         </p>
    //       </div>
    //     ))}
    //   </div>
    // </section>

    <section className="relative z-10 px-1 sm:px-4">
  <div className="mx-auto grid max-w-7xl overflow-hidden rounded-2xl border border-[#29466D] bg-[#0B2345] shadow-[0_12px_35px_rgba(0,0,0,0.25)] md:grid-cols-4">
    {STATS.map((stat, index) => (
      <div
        key={stat.label}
        className={`flex min-h-[145px] flex-col items-center justify-center px-5 py-7 text-center ${
          index !== STATS.length - 1
            ? "border-b border-[#29466D] md:border-b-0 md:border-r"
            : ""
        }`}
      >
        <div className="font-serif text-4xl font-bold leading-none text-white sm:text-5xl">
          {stat.prefix}
          <Counter value={stat.value} />
          <span className="text-[#E7B65A]">{stat.suffix}</span>
        </div>

        <p className="mt-3 max-w-[220px] text-xs font-bold leading-5 tracking-wide text-[#D7E0ED]">
          {stat.label}
        </p>
      </div>
    ))}
  </div>
</section>
  );
}