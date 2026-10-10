// import Head from '../components/Head';import ServiceGrid from '../components/ServiceGrid';
// export default function Services(){return(<section className="sec"><div className="w"><Head e="Financial Solutions" t="Everything your wealth needs" s="From first SIP to complete protection, planned around your goals."/><ServiceGrid/></div></section>)}


import Head from "../components/Head";
import ServiceGrid from "../components/ServiceGrid";
import { SV } from "../lib/data";

export default function Services() {
  return (
    <section className="sec">
      <div className="w">
        <Head
          e="Financial Solutions"
          t="Everything your wealth needs"
          s="From first SIP to complete protection, planned around your goals."
        />

        <ServiceGrid n={SV.length} detailed />
      </div>
    </section>
  );
}