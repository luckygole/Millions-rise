import { useEffect, useRef, useState } from "react";
import {
  FaBullseye,
  FaLightbulb,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { useSite } from "../context/SettingsContext";

/* ------------------------------------------------------------------ */
/*  Scroll animation helper (IntersectionObserver, no extra library)  */
/* ------------------------------------------------------------------ */

const hiddenState = {
  left: "opacity-0 -translate-x-24",
  right: "opacity-0 translate-x-24",
  bottom: "opacity-0 translate-y-24",
};

function Reveal({
  from = "bottom",
  delay = 0,
  className = "",
  children,
}) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;

    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-1000 ease-out motion-reduce:transition-none ${
        visible
          ? "opacity-100 translate-x-0 translate-y-0"
          : hiddenState[from]
      } ${className}`}
    >
      {children}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Content data                                                       */
/* ------------------------------------------------------------------ */

const services = [
  {
    title: "Mutual Funds & SIPs",
    text: "Investment solutions for different financial goals and time horizons.",
  },
  {
    title: "Portfolio Review & Goal Planning",
    text: "Review of existing investments and goal-oriented financial planning support.",
  },
  {
    title: "Demat & Share Market Services",
    text: "Demat account opening assistance and share market services through our authorised partner arrangements.",
  },
  {
    title: "IPO & NFO Assistance",
    text: "Information and application assistance for eligible public issues and new fund offers.",
  },
  {
    title: "Bonds, NCDs & Fixed Deposits",
    text: "Information and access assistance for available fixed-income investment products.",
  },
  {
    title: "Insurance Solutions",
    text: "Health, life, term and motor insurance options.",
  },
  {
    title: "Tax Services",
    text: "Income Tax Return (ITR) and TDS return filing assistance.",
  },
];

const approach = [
  {
    title: "Understanding Your Goals",
    text: "We begin by understanding your financial priorities and what you want to achieve.",
  },
  {
    title: "Transparent Guidance",
    text: "We explain relevant products, their features, costs and risks so you can make informed decisions.",
  },
  {
    title: "Solutions Around Your Needs",
    text: "We help you explore suitable financial products based on your goals, investment horizon and risk comfort.",
  },
  {
    title: "Long-Term Perspective",
    text: "We encourage informed decisions, financial discipline and periodic reviews as your needs evolve.",
  },
];

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */

export default function About() {
  // Same settings logic jo Contact.jsx mein use ho raha hai
  const S = useSite();

  return (
    <div className="font-['Poppins',sans-serif] overflow-x-hidden bg-white text-black">
      {/* ---------- Top banner ---------- */}

      <section className="bg-gradient-to-r from-[#1b1b1b] via-[#3a2f22] to-[#1b1b1b] py-4 text-center">
        <h1 className="text-lg font-semibold text-white">
          About Millions Rise
        </h1>
      </section>

      {/* ---------- 1. About Millions Rise ---------- */}

      <section className="mx-auto max-w-[1300px] px-4 pt-6 sm:px-6 lg:px-0">
        <div className="relative lg:pb-[200px]">
          {/* Blue box - left se aayega */}

          <Reveal from="left" className="lg:w-[85%]">
            <div className="rounded-[28px] bg-[#0066ad] px-6 py-8 sm:px-10 lg:min-h-[315px] lg:px-14 lg:py-12">
              <h2 className="text-3xl font-semibold text-white">
                Building Financial Confidence. Growing Wealth with
                Purpose.
              </h2>

              <p className="mt-4 text-justify text-[15px] leading-7 text-white lg:max-w-[670px]">
                Millions Rise – Wealth &amp; Investment Solutions is
                a financial services business based in Mandi
                Dabwali, Haryana, dedicated to helping individuals,
                families and businesses make informed financial
                decisions.
              </p>
            </div>
          </Reveal>

          {/* Image - bottom se aayegi */}

          <Reveal
            from="bottom"
            delay={300}
            className="mx-auto mt-6 w-full max-w-[420px] sm:max-w-[450px] lg:absolute lg:right-0 lg:top-[115px] lg:mt-0 lg:w-[450px]"
          >
            <div className="relative overflow-hidden rounded-[28px] shadow-xl">
              <img
                src="https://rightinvestment.co.in/Content/rightinvestment.co.in/UploadedImage/RealImage/432com2.jpg"
                alt="Financial advisor discussing plans with a client"
                className="h-[260px] w-full object-cover sm:h-[300px]"
              />

              {/* white inner border */}

              <div className="pointer-events-none absolute inset-3 rounded-[22px] border-2 border-white/80" />
            </div>
          </Reveal>
        </div>

        {/* Left-border paragraph block */}

        <Reveal from="bottom" className="mt-10 lg:mt-0">
          <div className="border-l-[5px] border-[#254880] pl-5 sm:pl-12">
            <p className="text-justify text-[15px] leading-7">
              We believe that every financial journey is different.
              Whether your goal is to build long-term wealth, invest
              for your family's future, protect your loved ones or
              plan for important life milestones, we aim to make
              financial solutions easier to understand and access.
            </p>

            <p className="mt-6 text-justify text-[15px] leading-7">
              Our approach focuses on understanding your needs,
              explaining available options transparently and helping
              you make decisions aligned with your financial goals,
              time horizon and risk profile.
            </p>
          </div>
        </Reveal>
      </section>

      {/* ---------- 2. What We Do ---------- */}

      <section className="mx-auto mt-16 max-w-[1300px] px-4 sm:px-6 lg:px-0">
        <Reveal from="bottom">
          <div className="text-center">
            <h2 className="text-3xl font-semibold text-[#0066ad]">
              What We Do
            </h2>

            <p className="mx-auto mt-3 max-w-[700px] text-[15px] leading-7">
              We offer a range of financial products and services to
              support different needs under one roof:
            </p>
          </div>
        </Reveal>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((item, i) => (
            <Reveal
              key={item.title}
              from="bottom"
              delay={(i % 3) * 150}
            >
              <div className="h-full rounded-xl border-t-[5px] border-[#254880] bg-white px-6 py-6 shadow-lg">
                <h3 className="text-xl font-semibold text-[#0066ad]">
                  {item.title}
                </h3>

                <p className="mt-3 text-[15px] leading-7">
                  {item.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ---------- 3. Our Approach & Our Commitment ---------- */}

      <section className="mx-auto mt-16 max-w-[1300px] px-4 sm:px-6 lg:px-0">
        <div className="grid gap-6 md:grid-cols-2">
          {/* Approach - left se */}

          <Reveal from="left">
            <div className="h-full rounded-xl bg-[#0066ad] px-6 py-8 text-center text-white shadow-lg sm:px-8">
              <FaBullseye className="mx-auto text-6xl" />

              <h3 className="mt-5 text-3xl font-semibold">
                Our Approach
              </h3>

              {approach.map((item) => (
                <div key={item.title} className="mt-5">
                  <h4 className="text-lg font-semibold">
                    {item.title}
                  </h4>

                  <p className="mt-1 text-[15px] leading-7">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>

          {/* Commitment - right se */}

          <Reveal from="right" delay={200}>
            <div className="h-full rounded-xl bg-[#0066ad] px-6 py-8 text-center text-white shadow-lg sm:px-8">
              <FaLightbulb className="mx-auto text-6xl" />

              <h3 className="mt-5 text-3xl font-semibold">
                Our Commitment
              </h3>

              <p className="mt-5 text-[15px] leading-7">
                At Millions Rise, our aim is to make financial
                services more accessible, understandable and
                convenient. We value transparency, responsible
                communication and lasting client relationships.
              </p>

              <p className="mt-6 text-[15px] leading-7">
                We believe that financial progress begins with the
                right information, thoughtful decisions and a clear
                plan.
              </p>

              <p className="mt-8 text-lg font-semibold">
                Millions Rise – Wealth &amp; Investment Solutions
              </p>

              <p className="mt-1 text-[15px] italic">
                Your Wealth. Your Future.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------- 4. Contact cards ---------- */}

      <section className="mt-16">
        {/* Contact cards - teeno bottom se */}

        <div className="bg-[#254880] px-4 pb-12 pt-14 sm:px-6">
          <div className="mx-auto grid max-w-[1300px] gap-14 md:grid-cols-3 md:gap-6">
            {/* -------------------------------------------------
                CALL US
                Admin Settings se S.phone automatically update hoga
            ------------------------------------------------- */}

            <Reveal from="bottom" delay={0}>
              <div className="relative rounded-xl bg-white px-6 pb-8 pt-12 text-center shadow-lg">
                <div className="absolute -top-8 left-1/2 flex h-[60px] w-[60px] -translate-x-1/2 items-center justify-center rounded-full bg-[#0066ad] text-2xl text-white shadow-md">
                  <FaPhoneAlt />
                </div>

                <h3 className="text-3xl font-semibold text-[#0066ad]">
                  Call Us
                </h3>

                <div className="mt-3 text-[15px] leading-6">
                  <p>{S.phone}</p>
                </div>
              </div>
            </Reveal>

            {/* -------------------------------------------------
                MAIL US
                Admin Settings se S.email automatically update hoga
            ------------------------------------------------- */}

            <Reveal from="bottom" delay={200}>
              <div className="relative rounded-xl bg-white px-6 pb-8 pt-12 text-center shadow-lg">
                <div className="absolute -top-8 left-1/2 flex h-[60px] w-[60px] -translate-x-1/2 items-center justify-center rounded-full bg-[#0066ad] text-2xl text-white shadow-md">
                  <FaEnvelope />
                </div>

                <h3 className="text-3xl font-semibold text-[#0066ad]">
                  Mail Us
                </h3>

                <div className="mt-3 text-[15px] leading-6">
                  <p>{S.email}</p>
                </div>
              </div>
            </Reveal>

            {/* -------------------------------------------------
                FIND US
                Admin Settings se S.address automatically update hoga
            ------------------------------------------------- */}

            <Reveal from="bottom" delay={400}>
              <div className="relative rounded-xl bg-white px-6 pb-8 pt-12 text-center shadow-lg">
                <div className="absolute -top-8 left-1/2 flex h-[60px] w-[60px] -translate-x-1/2 items-center justify-center rounded-full bg-[#0066ad] text-2xl text-white shadow-md">
                  <FaMapMarkerAlt />
                </div>

                <h3 className="text-3xl font-semibold text-[#0066ad]">
                  Find Us
                </h3>

                <div className="mt-3 text-[15px] leading-6">
                  <p>{S.address}</p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  );
}
