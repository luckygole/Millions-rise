import { Link } from "react-router-dom";

/* --------------------------------------------------
   Yahan apni company ki details ek baar badal do,
   poore page me automatically update ho jayengi.
-------------------------------------------------- */

const COMPANY = "Millions Rise";
const SUPPORT_EMAIL = "info@millionsrise.com";

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

// Sub heading (2.1, 2.2, 5.1 ...)
const SubHeading = ({ children }) => (
  <h3 className="mt-6 font-serif text-lg font-bold leading-snug text-[#071A33] sm:text-xl">
    {children}
  </h3>
);

// Section ki lines (har line alag, thodi tight spacing)
const Lines = ({ items }) => (
  <div className="mt-4 space-y-1 text-[14px] leading-[1.7] text-slate-600 sm:text-[15px]">
    {items.map((line) => (
      <p key={line}>{line}</p>
    ))}
  </div>
);

// Bullet list
const Bullets = ({ items }) => (
  <ul className="mt-3 list-disc space-y-1 pl-6 text-[14px] leading-[1.7] text-slate-600 sm:text-[15px]">
    {items.map((item) => (
      <li key={item}>{item}</li>
    ))}
  </ul>
);

// Numbered list
const Numbered = ({ items }) => (
  <ol className="mt-3 list-decimal space-y-1 pl-6 text-[14px] leading-[1.7] text-slate-600 sm:text-[15px]">
    {items.map((item) => (
      <li key={item}>{item}</li>
    ))}
  </ol>
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

        {/* Title + breadcrumb ab center me */}
        <div className="mx-auto flex min-h-[190px] w-full max-w-[1280px] flex-col items-center justify-center px-5 py-12 text-center sm:min-h-[256px] sm:px-8 lg:px-16">

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
            className="mt-6 flex items-center justify-center gap-2 text-[13px] text-white/85 sm:mt-8 sm:text-sm"
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

      {/* Left/right padding: mobile 20px, tablet 32px, desktop 64px */}
      <section className="mx-auto w-full max-w-[1280px] px-5 pb-16 pt-8 sm:px-8 sm:pb-20 sm:pt-10 lg:px-16">

        {/* ---------- 1. Introduction ---------- */}
        <Heading>1. Introduction</Heading>
        <Lines
          items={[
            "Welcome to Millions Rise – Wealth & Investment Solutions (“Millions Rise”, “we”, “our” or “us”).",
            "We are committed to respecting your privacy and protecting the personal information you share with us through our website, enquiry forms, communication channels and related services.",
            "This Privacy Policy explains how we collect, use, store, disclose and protect personal information when you visit our website or contact us regarding our financial services.",
            "By using our website, you acknowledge this Privacy Policy. Where consent is required by applicable law, we will seek the appropriate consent before processing your personal information.",
          ]}
        />


        {/* ---------- 2. Information We Collect ---------- */}
        <Heading>2. Information We Collect</Heading>
        <p className="mt-4 text-[14px] leading-[1.7] text-slate-600 sm:text-[15px]">
          We may collect the following categories of information, depending on how you interact
          with our website and services.
        </p>

        <SubHeading>2.1 Personal and Contact Information</SubHeading>
        <Bullets
          items={[
            "Full name",
            "Mobile number",
            "Email address",
            "City, address or location details voluntarily provided",
            "Information submitted through contact forms, callback requests or other enquiries",
          ]}
        />

        <SubHeading>2.2 Financial and Service-Related Information</SubHeading>
        <p className="mt-3 text-[14px] leading-[1.7] text-slate-600 sm:text-[15px]">
          When you request assistance with our services, we may collect relevant information such as:
        </p>
        <Bullets
          items={[
            "Investment objectives and financial preferences",
            "Mutual Fund and SIP-related requirements",
            "Demat account and IPO-related service requests",
            "Insurance requirements",
            "Tax filing and documentation details",
            "Information required to coordinate a service with an authorised financial institution or service provider",
          ]}
        />
        <Lines
          items={[
            "We will request only the information reasonably necessary for the relevant purpose. Confidential information such as PAN, bank account details, KYC documents and financial records should be shared through appropriate authorised channels when required.",
            "We do not ask you to share passwords, PINs or OTPs through our website enquiry forms.",
          ]}
        />

        <SubHeading>2.3 Technical and Usage Information</SubHeading>
        <p className="mt-3 text-[14px] leading-[1.7] text-slate-600 sm:text-[15px]">
          Depending on the website hosting platform and tools enabled, technical information may
          be collected, including:
        </p>
        <Bullets
          items={[
            "IP address",
            "Browser and device information",
            "Pages visited and approximate visit duration",
            "Referring website or source",
            "Website usage, diagnostic and security information",
          ]}
        />
        <Lines
          items={[
            "Such information may be collected through hosting services, server logs, cookies or analytics tools, where enabled.",
          ]}
        />


        {/* ---------- 3. How We Use ---------- */}
        <Heading>3. How We Use Your Information</Heading>
        <p className="mt-4 text-[14px] leading-[1.7] text-slate-600 sm:text-[15px]">
          We may use your information for the following purposes:
        </p>
        <Numbered
          items={[
            "To respond to enquiries and callback requests.",
            "To explain our services and assist with customer requirements.",
            "To communicate about Mutual Funds, SIPs, Demat accounts, IPOs, bonds, NCDs, insurance and other services offered by us.",
            "To coordinate service requests with relevant authorised financial institutions, intermediaries, insurers or other service providers.",
            "To process requests and maintain service-related records.",
            "To improve website functionality, customer experience and service quality.",
            "To send relevant service communications and promotional information where permitted by applicable law.",
            "To prevent fraud, misuse, unauthorised access and security incidents.",
            "To comply with applicable legal, regulatory, tax and record-retention requirements.",
            "To establish, exercise or defend legal claims where necessary and permitted by law.",
          ]}
        />
        <Lines
          items={[
            "We will process personal information for specified and lawful purposes, subject to applicable legal requirements.",
          ]}
        />


        {/* ---------- 4. Legal Basis and Consent ---------- */}
        <Heading>4. Legal Basis and Consent</Heading>
        <Lines
          items={[
            "Where required by applicable law, we will obtain your consent before collecting or processing personal information.",
            "You may be asked to provide information directly through our website or through an authorised communication channel.",
            "Where processing is based on consent, you may withdraw that consent by contacting us at the email address provided in this policy. Withdrawal will not affect the lawfulness of processing carried out before withdrawal.",
            "We may continue to retain or process certain information where permitted or required by applicable law, including for regulatory compliance and record-keeping.",
          ]}
        />


        {/* ---------- 5. Sharing and Disclosure ---------- */}
        <Heading>5. Sharing and Disclosure of Information</Heading>
        <Lines
          items={[
            "We do not sell your personal information to third parties.",
            "We may disclose relevant information, where necessary and legally permitted, to the following categories of recipients:",
          ]}
        />

        <SubHeading>5.1 Financial Institutions and Service Providers</SubHeading>
        <p className="mt-3 text-[14px] leading-[1.7] text-slate-600 sm:text-[15px]">
          Depending on the service requested, this may include:
        </p>
        <Bullets
          items={[
            "Mutual fund houses and asset management companies",
            "Registrars and transfer agents",
            "Authorised stockbrokers and depository participants",
            "Insurance companies and authorised intermediaries",
            "Financial product providers",
            "Tax filing, compliance and professional service providers",
          ]}
        />

        <SubHeading>5.2 Technology and Communication Providers</SubHeading>
        <Lines
          items={[
            "We may use website hosting providers, email providers, technical support providers and communication platforms to operate our website and respond to enquiries.",
          ]}
        />

        <SubHeading>5.3 Legal and Regulatory Authorities</SubHeading>
        <Lines
          items={[
            "We may disclose information when required by applicable law, a valid legal process, a regulatory requirement or a lawful request from a competent authority.",
            "Any sharing of information will be limited to what is reasonably necessary for the relevant purpose, subject to applicable legal obligations.",
          ]}
        />


        {/* ---------- 6. Cookies ---------- */}
        <Heading>6. Cookies and Similar Technologies</Heading>
        <Lines
          items={[
            "Our website or its service providers may use cookies and similar technologies to support website functionality, security, performance and usage analysis, depending on the tools enabled.",
            "Cookies may help remember preferences or understand how visitors interact with the website.",
            "You may be able to manage cookies through your browser settings. Disabling certain cookies may affect some website features.",
            "Where required by applicable law, we will provide appropriate information and obtain consent for non-essential cookies or related technologies.",
          ]}
        />


        {/* ---------- 7. Third-Party Websites ---------- */}
        <Heading>7. Third-Party Websites and Services</Heading>
        <Lines
          items={[
            "Our website may contain links or integrations for third-party services, including WhatsApp, Google Maps, financial institutions, insurance providers and other external platforms.",
            "When you interact with a third-party website or service, that provider may collect and process your information under its own privacy policy and terms.",
            "Millions Rise does not control the independent privacy practices of third parties. We encourage you to review their applicable privacy policies before sharing information or using their services.",
          ]}
        />


        {/* ---------- 8. WhatsApp, Phone and Email ---------- */}
        <Heading>8. WhatsApp, Phone and Email Communication</Heading>
        <Lines
          items={[
            "If you contact us through WhatsApp, phone, email or another communication channel, we may use the information you provide to respond to your enquiry and manage your service request.",
            "Communications may be handled through third-party platforms, which may process information according to their own policies.",
            "We may send service-related messages where necessary. Promotional communications will be sent subject to applicable law and your preferences.",
          ]}
        />
        <p className="mt-1 text-[14px] leading-[1.7] text-slate-600 sm:text-[15px]">
          You may request to stop receiving promotional communications by contacting us at{" "}
          <a
            href={`mailto:${SUPPORT_EMAIL}`}
            className="break-all font-medium text-[#29466D] underline decoration-[#E7B65A] underline-offset-4 transition-colors hover:text-[#E7B65A]"
          >
            {SUPPORT_EMAIL}
          </a>
          .
        </p>


        {/* ---------- 9. Data Security ---------- */}
        <Heading>9. Data Security</Heading>
        <Lines
          items={[
            "We take reasonable technical and organisational measures appropriate to our operations to protect personal information against unauthorised access, disclosure, alteration, loss or misuse.",
            "Access to personal information should be restricted to individuals and service providers who need it for authorised purposes.",
            "However, no website, electronic communication channel or internet transmission can be guaranteed to be completely secure.",
            "Please avoid sending confidential financial information through unsecured channels and notify us if you believe your information has been misused in connection with our website or services.",
            "Where required by applicable law, we will take appropriate steps in response to a personal data breach, including applicable notifications.",
          ]}
        />


        {/* ---------- 10. Data Retention ---------- */}
        <Heading>10. Data Retention and Deletion</Heading>
        <Lines
          items={[
            "We retain personal information only for as long as reasonably necessary for the purpose for which it was collected, unless a longer retention period is required or permitted by applicable law.",
            "Retention periods may depend on:",
          ]}
        />
        <Bullets
          items={[
            "The nature of the service requested",
            "The duration of our business relationship",
            "Applicable financial, tax and regulatory requirements",
            "The need to resolve disputes or maintain legal records",
            "Security, fraud prevention and compliance obligations",
          ]}
        />
        <Lines
          items={[
            "When personal information is no longer required, we will take appropriate steps to delete it or otherwise handle it in accordance with applicable law.",
            "A request for deletion may be subject to legal or regulatory record-retention requirements.",
          ]}
        />


        {/* ---------- 11. Your Privacy Rights ---------- */}
        <Heading>11. Your Privacy Rights</Heading>
        <p className="mt-4 text-[14px] leading-[1.7] text-slate-600 sm:text-[15px]">
          Subject to applicable law, you may contact us to:
        </p>
        <Bullets
          items={[
            "Request information about personal information processed by us.",
            "Request correction or updating of inaccurate or incomplete information.",
            "Request deletion of personal information where applicable.",
            "Withdraw consent where processing is based on consent.",
            "Raise a grievance or privacy-related concern.",
            "Opt out of promotional communications.",
          ]}
        />
        <Lines
          items={[
            "We may need to verify your identity before responding to a request involving personal information.",
            "We will review and respond to requests in accordance with applicable law. Certain requests may be limited where information must be retained for legal, regulatory or compliance purposes.",
          ]}
        />
        <p className="mt-1 text-[14px] leading-[1.7] text-slate-600 sm:text-[15px]">
          To exercise your rights, email{" "}
          <a
            href={`mailto:${SUPPORT_EMAIL}`}
            className="break-all font-medium text-[#29466D] underline decoration-[#E7B65A] underline-offset-4 transition-colors hover:text-[#E7B65A]"
          >
            {SUPPORT_EMAIL}
          </a>
          .
        </p>


        {/* ---------- 12. Children's Privacy ---------- */}
        <Heading>{"12. Children's Privacy"}</Heading>
        <Lines
          items={[
            "Our website is not intended to encourage children to submit personal information independently.",
            "Where personal information of a child is processed, we will comply with applicable legal requirements, including any applicable parental consent and verification requirements, subject to relevant statutory exceptions.",
            "If you believe that personal information has been collected inappropriately, please contact us for review.",
          ]}
        />


        {/* ---------- 13. Financial Services ---------- */}
        <Heading>13. Financial Services and Regulatory Information</Heading>
        <Lines
          items={[
            "Millions Rise – Wealth & Investment Solutions provides information and assistance relating to financial products and services, subject to the applicable authorisations, registrations and arrangements for each service.",
            "Information on our website is intended for general informational purposes and should not be interpreted as a guarantee of investment performance or returns.",
            "Mutual fund investments are subject to market risks. Please read all scheme-related documents carefully before investing. Insurance products are subject to the terms, conditions, exclusions and eligibility requirements of the respective insurer.",
            "Where a service involves an authorised financial institution, broker, mutual fund distributor, insurer or other regulated entity, additional terms, disclosures, privacy notices and consent requirements may apply.",
            "Personal information required for KYC, investment transactions, insurance applications or tax filing may be processed by the relevant institution or service provider under its applicable policies and legal obligations.",
          ]}
        />


        {/* ---------- 14. No Guarantee ---------- */}
        <Heading>14. No Guarantee of Internet Security</Heading>
        <Lines
          items={[
            "Although we take reasonable precautions to protect information, we cannot guarantee that the website, electronic communications or third-party platforms will always remain free from security risks, interruptions or unauthorised activity.",
            "You are responsible for taking reasonable precautions when accessing websites and sharing information online.",
          ]}
        />


        {/* ---------- 15. Changes ---------- */}
        <Heading>15. Changes to This Privacy Policy</Heading>
        <Lines
          items={[
            "We may update this Privacy Policy from time to time to reflect changes in our services, website functionality, technology, business practices or applicable laws.",
            "Any revised version will be published on this page with an updated “Last Updated” date.",
            "We encourage visitors to review this page periodically to remain informed about our privacy practices.",
          ]}
        />


        {/* ---------- 16. Contact ---------- */}
        <Heading>16. Contact Information and Grievances</Heading>
        <Lines
          items={[
            "For questions, requests or complaints relating to this Privacy Policy or the processing of your personal information, please contact us using the details below.",
          ]}
        />
        <div className="mt-4 space-y-1 text-[14px] leading-[1.7] text-slate-600 sm:text-[15px]">
          <p>
            <strong className="font-semibold text-[#071A33]">Business Name:</strong>{" "}
            <Co /> – Wealth &amp; Investment Solutions
          </p>
          <p>
            <strong className="font-semibold text-[#071A33]">Email:</strong>{" "}
            <a
              href={`mailto:${SUPPORT_EMAIL}`}
              className="break-all font-medium text-[#29466D] underline decoration-[#E7B65A] underline-offset-4 transition-colors hover:text-[#E7B65A]"
            >
              {SUPPORT_EMAIL}
            </a>
          </p>
          <p>
            <strong className="font-semibold text-[#071A33]">Office Address:</strong> Shop No.2,
            Opp. Bagla Eye Hospital Street, Colony Road, Mandi Dabwali, Distt.Sirsa -125104,
            Haryana, India.
          </p>
          <p>
            <strong className="font-semibold text-[#071A33]">Subject Line:</strong> Privacy Policy
            / Personal Data Request
          </p>
        </div>
        <Lines
          items={[
            "Please provide sufficient details about your request so that we can identify and review the matter. We may contact you for additional information or identity verification where necessary.",
            "We will handle privacy-related enquiries and grievances in accordance with applicable law.",
          ]}
        />

        <p className="mt-10 border-t border-slate-200 pt-6 text-center text-[13px] text-slate-500 sm:text-sm">
          © 2026 Millions Rise – Wealth &amp; Investment Solutions. All rights reserved.
        </p>

      </section>

    </main>
  );
}
