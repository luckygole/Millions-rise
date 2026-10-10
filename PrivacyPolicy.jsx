import { Link } from "react-router-dom";

/* --------------------------------------------------
   Yahan apni company ki details ek baar badal do,
   poore page me automatically update ho jayengi.
-------------------------------------------------- */

const COMPANY = "Right Investment";
const SUPPORT_EMAIL = "mehul2221@yahoo.co.in";
const EFFECTIVE_DATE = "June 1, 2018"; // <-- apni asli effective date daalo

/* --------------------------------------------------
   Small helpers
-------------------------------------------------- */

// Company ka naam bold me
const Co = () => (
  <strong className="font-bold text-[#071A33]">{COMPANY}</strong>
);

// Section heading (serif, bold - screenshot jaisa)
const Heading = ({ children }) => (
  <h2 className="mt-9 font-serif text-[22px] font-bold leading-snug text-[#071A33] sm:text-2xl">
    {children}
  </h2>
);

// Section ki lines (har line alag, thodi tight spacing)
const Lines = ({ items }) => (
  <div className="mt-4 space-y-1 text-[14px] leading-[1.7] text-slate-600 sm:text-[15px]">
    {items.map((line) => (
      <p key={line}>{line}</p>
    ))}
  </div>
);

/* --------------------------------------------------
   Page
-------------------------------------------------- */

export default function PrivacyPolicy() {
  return (
    <main className="w-full overflow-x-clip bg-white">

      {/* ==================================================
          BANNER
      ================================================== */}

      <section
        className="
          relative
          overflow-hidden
          bg-gradient-to-r
          from-[#DDE3F3]
          via-[#7F8DAF]
          to-[#071A33]
        "
      >
        {/* Decorative blur circles */}
        <span className="pointer-events-none absolute left-6 top-6 h-14 w-14 rounded-full bg-slate-500/40 blur-md sm:left-8 sm:top-8" />
        <span className="pointer-events-none absolute bottom-[26%] left-[25%] h-3 w-3 rounded-full bg-white/70" />
        <span className="pointer-events-none absolute right-[34%] top-[14%] hidden h-14 w-14 rounded-full border border-white/20 sm:block" />

        <div className="mx-auto flex min-h-[190px] w-full max-w-[1280px] flex-col items-end justify-center px-5 py-12 text-right sm:min-h-[256px] sm:px-8 lg:px-0">

          <h1
            className="
              font-serif
              text-4xl
              font-bold
              text-white
              [text-shadow:0_4px_10px_rgba(0,0,0,0.30)]
              sm:text-5xl
              lg:text-[56px]
            "
          >
            Privacy Policy
          </h1>

          {/* Breadcrumb */}
          <nav
            aria-label="Breadcrumb"
            className="mt-6 flex items-center gap-2 text-[13px] text-white/85 sm:mt-8 sm:text-sm"
          >
            <Link to="/" className="transition-colors hover:text-[#E7B65A]">
              Home
            </Link>
            <span aria-hidden="true">/</span>
            <span className="font-semibold text-white">Privacy Policy</span>
          </nav>

        </div>
      </section>


      {/* ==================================================
          CONTENT
      ================================================== */}

      <section className="mx-auto w-full max-w-[1280px] px-5 pb-16 pt-8 sm:px-8 sm:pb-20 sm:pt-10 lg:px-0">

        {/* ---------- Intro ---------- */}
        <p className="text-justify text-[14px] leading-[1.85] text-slate-600 sm:text-[15px]">
          This privacy policy sets out how <Co /> uses and protects any information that you
          share when you use this website. <Co /> is committed to ensuring that your privacy is
          protected at all times. Should we ask you to provide certain information by which you
          can be identified when using this website, you can be assured that it will only be
          used in accordance with this privacy statement. <Co /> may change this policy from
          time to time by updating this page. This policy is effective from {EFFECTIVE_DATE}.{" "}
          <Co /> understands that our relationship is strongly built on trust and faith. In
          Course of using information on this website or availing the services, <Co /> may
          become privy to the personal information of its customer including information that
          is of confidential nature. <Co /> is strictly committed to protecting the privacy of
          its Customer and has taken reasonable measures to protect the confidentiality of the
          customer information and its transmission through World Wide Web. However it shall not
          be liable in any manner for disclosure of the confidential information in accordance
          with this Privacy Commitment or in terms of the agreement if any with the Customer or
          by reasons beyond its control. We may however be required to disclose your personal
          information to Government, Judicial bodies, and our Regulators or to any person to
          whom the Firm is under an obligation to make disclosure under the requirements of any
          law binding on the Firm or any of its branches, if required. Hyperlink Policy for user
          Any hyperlink to other Internet sites is at customers own risk. The contents of which
          and the accuracy of opinions expressed are not verified, monitored or endorsed by{" "}
          <Co />, in any way or manner. <Co /> is not responsible for the setup of any
          hyperlink from a third party website to <Co />
        </p>


        {/* ---------- What we collect ---------- */}
        <Heading>What we collect</Heading>
        <p className="mt-4 text-[14px] leading-[1.7] text-slate-600 sm:text-[15px]">
          We may collect the following information:
        </p>


        {/* ---------- Name and contact details ---------- */}
        <Heading>Name and contact details</Heading>
        <Lines
          items={[
            "We may collect personal information directly from you, such as your name, email address, contact details, or other identifiers, when you register an account, make a purchase, or interact with certain features of the application.",
            "Your personal information is used to provide you with access to the application's features and functionalities, personalize your experience, and communicate with you about your account or transactions.",
            "We implement industry-standard security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction.",
            "You have the right to control and manage your personal information within the application. You can update your account details, manage your communication preferences, or exercise your rights under applicable data protection laws.",
            "You can also choose to delete your account or request the deletion of certain personal information by contacting us through the provided channels or there is an option in app settings page.",
          ]}
        />


        {/* ---------- Image data ---------- */}
        <Heading>Collection/Use of image data</Heading>
        <Lines
          items={[
            "When you grant permission, our application may access your device's camera or photo gallery to enable features that involve capturing, uploading.",
            "The images you upload or capture within our application may be used for document verification in Video KYC by the application.",
            "We do not share your image data with third parties unless required by law or necessary to provide the services you have requested.",
          ]}
        />


        {/* ---------- Location data ---------- */}
        <Heading>Use of location data</Heading>
        <Lines
          items={[
            "We access your location to verifying your identity and granting access to the application's features and functionalities.",
          ]}
        />


        {/* ---------- Security ---------- */}
        <Heading>Security</Heading>
        <Lines
          items={[
            "We are committed to ensuring that your information is secure. In order to prevent unauthorized access or disclosure, we have put in place suitable physical, electronic and managerial procedures to safeguard and secure the information we collect online.",
          ]}
        />


        {/* ---------- Links to other websites ---------- */}
        <Heading>Links to other websites</Heading>
        <Lines
          items={[
            "Our website may contain links to other websites of interest. However, once you have used these links to leave our site, you should note that we do not have any control over such third-party websites. Therefore, we cannot be responsible for the protection and privacy of any information which you provide whilst visiting such sites. You should exercise caution and look at the privacy statement applicable to the website in question.",
          ]}
        />


        {/* ---------- Controlling your personal information ---------- */}
        <Heading>Controlling your personal information</Heading>
        <p className="mt-4 text-[14px] leading-[1.7] text-slate-600 sm:text-[15px]">
          If you believe that any of your information with us is incorrect or incomplete, please
          email us as soon as possible at{" "}
          <a
            href={`mailto:${SUPPORT_EMAIL}`}
            className="break-all font-medium text-[#29466D] underline decoration-[#E7B65A] underline-offset-4 transition-colors hover:text-[#E7B65A]"
          >
            {SUPPORT_EMAIL}
          </a>{" "}
          We will promptly correct any information found to be incorrect.
        </p>


        {/* ---------- Security certificates ---------- */}
        <Heading>Security certificates</Heading>
        <Lines
          items={[
            "We fully recognize and understand the security implications of being a service provider with whom people trust their money. There are many safeguards we adopt in this regard some of these are technical, and some are structural.",
            "When it comes to data security, our goal is to ensure that: Your data is stored safely and securely passwords are one-way encrypted before being stored in the database for high security.",
            "All communication with you, or with mutual fund companies and other service providers are encrypted using the highest standards.",
            "Your data is not shared with anyone, unless you have explicitly requested us to do so to fulfil a transaction request.",
            "To ensure that we achieve these goals, we have a variety of certifications/trust verifications in place for our firm, both from technical and legal/operational perspectives. All our communications are encrypted by 256-bit encryption, and our data is hosted with top-tier hosting service providers. Also, our data is continuously backed up to ensure continuity of operations.",
          ]}
        />

      </section>

    </main>
  );
}