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
/*  Footer links                                                       */
/* ------------------------------------------------------------------ */

const footerLinks = [
  "Important Links",
  "Disclaimer",
  "Disclosure",
  "Privacy Policy",
  "SID/SAI/KIM",
  "Code of Conduct",
  "SEBI Circulars",
  "AMFI Risk Factors",
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
          Company Profile
        </h1>
      </section>

      {/* ---------- 1. Company Profile ---------- */}

      <section className="mx-auto max-w-[1300px] px-4 pt-6 sm:px-6 lg:px-0">
        <div className="relative lg:pb-[200px]">
          {/* Blue box - left se aayega */}

          <Reveal from="left" className="lg:w-[85%]">
            <div className="rounded-[28px] bg-[#0066ad] px-6 py-8 sm:px-10 lg:min-h-[315px] lg:px-14 lg:py-12">
              <h2 className="text-3xl font-semibold text-white">
                Company Profile
              </h2>

              <p className="mt-4 text-justify text-[15px] leading-7 text-white lg:max-w-[670px]">
                Founded in 1998, Right Investment has proudly
                completed over 25 years of service in the financial
                industry. Today, with the third generation actively
                involved, we carry forward a legacy of trust,
                experience, and client-first thinking. Our
                long-standing presence is a reflection of the strong
                relationships we've built and the consistent value
                we've delivered to families across generations.
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
              We extend a plethora of wealth management products
              and services to cater to diverse financial
              needs—ranging from mutual funds, bonds, NCDs, life and
              health insurance, to PMS (Portfolio Management
              Services), AIF (Alternative Investment Funds), and
              GIFT City-based investment solutions.
            </p>

            <p className="mt-6 text-justify text-[15px] leading-7">
              With a legacy of integrity and a future-focused
              mindset, we remain dedicated to helping you simplify
              decisions and stay confidently on track toward
              financial freedom.
            </p>
          </div>
        </Reveal>
      </section>

      {/* ---------- 2. Mission & Vision ---------- */}

      <section className="mx-auto mt-16 max-w-[1300px] px-4 sm:px-6 lg:px-0">
        <div className="grid gap-6 md:grid-cols-2">
          {/* Mission - left se */}

          <Reveal from="left">
            <div className="h-full rounded-xl bg-[#0066ad] px-6 py-8 text-center text-white shadow-lg sm:px-8">
              <FaBullseye className="mx-auto text-6xl" />

              <h3 className="mt-5 text-3xl font-semibold">
                Our Mission
              </h3>

              <p className="mt-5 text-[15px] leading-7">
                Our mission is to deliver unbiased, research-driven
                financial guidance that helps our clients make
                informed decisions and build long-term wealth. We
                are committed to offering personalized investment
                solutions that align with your life stage, financial
                goals, and risk appetite.
              </p>

              <p className="mt-6 text-[15px] leading-7">
                Through transparent communication, disciplined
                planning, and continuous learning, we strive to be
                your trusted partner in navigating every market
                condition—helping you move confidently toward a
                secure financial future.
              </p>
            </div>
          </Reveal>

          {/* Vision - right se */}

          <Reveal from="right" delay={200}>
            <div className="h-full rounded-xl bg-[#0066ad] px-6 py-8 text-center text-white shadow-lg sm:px-8">
              <FaLightbulb className="mx-auto text-6xl" />

              <h3 className="mt-5 text-3xl font-semibold">
                Our Vision
              </h3>

              <p className="mt-5 text-[15px] leading-7">
                Our vision is to be a reliable and respected
                financial partner, known for helping individuals and
                families achieve financial freedom through informed
                and disciplined investing.
              </p>

              <p className="mt-6 text-[15px] leading-7">
                We aim to simplify complex financial decisions and
                create a future where every investor feels confident,
                empowered, and in control of their wealth
                journey—regardless of market cycles or economic
                changes.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------- 3. Contact cards + footer ---------- */}

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

        {/* Footer */}

        {/* <footer className="bg-black px-4 py-8 text-center text-[13px] leading-6 text-white sm:px-8">
          <p className="mx-auto max-w-[1250px]">
            <strong>Risk Factors</strong> – Investments in Mutual
            Funds are subject to Market Risks. Read all scheme
            related documents carefully before investing. Mutual Fund
            Schemes do not assure or guarantee any returns. Past
            performances of any Mutual Fund Scheme may or may not be
            sustained in future. There is no guarantee that the
            investment objective of any suggested scheme shall be
            achieved. All existing and prospective investors are
            advised to check and evaluate the Exit loads and other
            cost structure (TER) applicable at the time of making the
            investment before finalizing on any investment decision
            for Mutual Funds schemes. We deal in Regular Plans only
            for Mutual Fund Schemes and earn a Trailing Commission
            on client investments. Disclosure For Commission
            earnings is made to clients at the time of investments.
            Option of Direct Plan for every Mutual Fund Scheme is
            available to investors offering advantage of lower
            expense ratio. We are not entitled to earn any
            commission on Direct plans. Hence we do not deal in
            Direct Plans.
          </p>

          <p className="mt-5">
            AMFI Registered Mutual Fund Distributor – ARN-41713 |
            Date of initial registration – 29 MAR 2023 | Current
            validity of ARN – 27 MAR 2029
          </p>

          <p className="mt-4">
            Grievance Officer- Mehul Ramesh Gosalia |{" "}
            {S.email}
          </p>

          <p className="mt-4">
            Copyright 2025. Right Investment.{" "}
            {footerLinks.map((link, i) => (
              <span key={link}>
                <a
                  href="#"
                  className="text-[#ff5a00] transition-colors hover:text-orange-300"
                >
                  {link}
                </a>

                {i < footerLinks.length - 1 && " | "}
              </span>
            ))}
          </p>

          <p className="mt-5 text-xs">
            Image by Freepik | Icon by Flaticon
          </p>
        </footer> */}
      </section>
    </div>
  );
}