import { useState } from "react";

import logo1 from "../assets/logos/sliderlogo1.webp";
import logo2 from "../assets/logos/sliderlogo2.webp";
import logo3 from "../assets/logos/sliderlogo3.webp";
import logo4 from "../assets/logos/sliderlogo4.webp";
import logo5 from "../assets/logos/sliderlogo5.webp";
import logo6 from "../assets/logos/sliderlogo6.webp";
import logo7 from "../assets/logos/sliderlogo7.webp";
import logo8 from "../assets/logos/sliderlogo8.webp";
import logo9 from "../assets/logos/sliderlogo9.webp";
import logo10 from "../assets/logos/sliderlogo10.webp";
import logo11 from "../assets/logos/sliderlogo11.webp";
import logo12 from "../assets/logos/sliderlogo12.webp";
// 13th logo aaye to: import logo13 from "../assets/logos/sliderlogo13.webp";
// aur neeche list me { name: "...", src: logo13 } add kar do.

const LOGOS = [
  { name: "Baroda BNP Paribas Mutual Fund", src: logo1 },
  { name: "Canara Robeco Mutual Fund", src: logo2 },
  { name: "DSP Mutual Fund", src: logo3 },
  { name: "Edelweiss Mutual Fund", src: logo4 },
  { name: "Franklin Templeton", src: logo5 },
  { name: "Groww", src: logo6 },
  { name: "HDFC Mutual Fund", src: logo7 },
  { name: "ICICI Prudential Mutual Fund", src: logo8 },
  { name: "SBI Mutual Fund", src: logo9 },
  { name: "Axis Mutual Fund", src: logo10 },
  { name: "Kotak Mutual Fund", src: logo11 },
  { name: "Nippon India Mutual Fund", src: logo12 },
];

function LogoCell({ logo }) {
  const [failed, setFailed] = useState(false);

  return (
    <div className="logo-cell flex h-[130px] w-[220px] shrink-0 items-center justify-center border-r border-[#E3E6F0] bg-gradient-to-br from-white via-white to-[#EEF0FB] px-6 sm:h-[150px] sm:w-[260px] lg:w-[310px]">
      {failed ? (
        <span className="text-center font-serif text-lg font-bold text-[#0B2345]">
          {logo.name}
        </span>
      ) : (
        <img
          src={logo.src}
          alt={logo.name}
          loading="lazy"
          draggable={false}
          onError={() => setFailed(true)}
          className="max-h-[70px] w-full max-w-[200px] object-contain sm:max-h-[80px]"
        />
      )}
    </div>
  );
}

export default function LogoSlider() {
  // Seamless loop ke liye list 2 baar
  const track = [...LOGOS, ...LOGOS];

  return (
    <section className="relative z-10 pt-5">
      <style>{`
        @keyframes logo-marquee {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        .logo-track {
          animation: logo-marquee 40s linear infinite;
          width: max-content;
        }
        .logo-wrap:hover .logo-track { animation-play-state: paused; }
        @media (prefers-reduced-motion: reduce) {
          .logo-track { animation: none; }
        }
      `}</style>

      <div className="logo-wrap w-full overflow-hidden border-y border-[#E3E6F0] bg-white">
        <div className="logo-track flex">
          {track.map((logo, i) => (
            <LogoCell key={`${logo.name}-${i}`} logo={logo} />
          ))}
        </div>
      </div>
    </section>
  );
}
