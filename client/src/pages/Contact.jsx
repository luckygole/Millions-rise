// import {useState} from 'react';import {api} from '../lib/api';import {CFG} from '../config';import Head from '../components/Head';
// const OPT=['Mutual Funds & SIP','IPO / Demat','Insurance','Bonds / FD','Tax / ITR','PMS / AIF'];
// export default function Contact(){const[f,setF]=useState({name:'',phone:'',interest:OPT[0]}),[m,setM]=useState('');const on=k=>e=>setF({...f,[k]:e.target.value});
// const submit=async e=>{e.preventDefault();try{await api('/leads','POST',f);setM('Thank you! We will call you shortly.');setF({name:'',phone:'',interest:OPT[0]})}catch(x){setM(x.message==='Request failed'?'Backend not connected. Please use WhatsApp.':x.message)}};
// return(<section className="sec"><div className="w grid items-start gap-8 md:grid-cols-2"><div><Head e="Contact" t="Book a free consultation" s="Share your details and we'll call you back. Or message us directly."/>
// <p className="mb-4 text-slate-600">📞 {CFG.phone}<br/>✉ {CFG.email}<br/>📍 {CFG.address}</p><a href={CFG.waLink} target="_blank" rel="noreferrer" className="btn border-[#25d366] bg-[#25d366]">💬 Chat on WhatsApp</a></div>
// <form onSubmit={submit} className="card space-y-3"><input className="inp" placeholder="Name" required value={f.name} onChange={on('name')}/><input className="inp" placeholder="10-digit mobile" required pattern="[0-9]{10}" value={f.phone} onChange={on('phone')}/>
// <select className="inp" value={f.interest} onChange={on('interest')}>{OPT.map(o=><option key={o}>{o}</option>)}</select><button className="btn w-full">Request Call Back</button>{m&&<p className="text-sm text-slate-600">{m}</p>}</form></div></section>)}


import { useState } from "react";
import { api } from "../lib/api";
import { useSite } from "../context/SettingsContext";
import Head from "../components/Head";
const OPT = [
  "Mutual Funds & SIP",
  "IPO / Demat",
  "Insurance",
  "Bonds / FD",
  "Tax / ITR",
  "PMS / AIF",
];
const EMPTY = { name: "", phone: "", email: "", interest: OPT[0], message: "" };
export default function Contact() {
  const S = useSite();
  const [f, setF] = useState(EMPTY),
    [m, setM] = useState(""),
    [busy, setBusy] = useState(false);
  const on = (k) => (e) => setF({ ...f, [k]: e.target.value });
  const submit = async (e) => {
    e.preventDefault();
    setBusy(true);
    setM("");
    try {
      await api("/leads", "POST", f);
      setM("✅ Thank you! Our team will call you shortly.");
      setF(EMPTY);
    } catch (x) {
      setM(
        x.message === "Request failed" || x.message === "Failed to fetch"
          ? "Server not reachable. Please use WhatsApp."
          : x.message,
      );
    }
    setBusy(false);
  };
  return (
    <section className="sec">
      <div className="w grid items-start gap-8 md:grid-cols-2">
        <div>
          <Head
            e="Contact"
            t="Book a free consultation"
            s="Share your details and we'll call you back. Or message us directly."
          />
          <p className="mb-4 leading-8 text-slate-600">
            📞 <a href={"tel:" + S.tel}>{S.phone}</a>
            <br />✉ {S.email}
            <br />
            📍 {S.address}
          </p>
          <a
            href={S.waLink}
            target="_blank"
            rel="noreferrer"
            className="btn border-[#25d366] bg-[#25d366]"
          >
            💬 Chat on WhatsApp
          </a>
        </div>
        <form onSubmit={submit} className="card space-y-3">
          <input
            className="inp"
            placeholder="Your name"
            required
            value={f.name}
            onChange={on("name")}
          />
          <input
            className="inp"
            type="tel"
            inputMode="numeric"
            placeholder="10-digit mobile number"
            required
            pattern="[0-9]{10}"
            value={f.phone}
            onChange={on("phone")}
          />
          <input
            className="inp"
            type="email"
            placeholder="Email (optional)"
            value={f.email}
            onChange={on("email")}
          />
          <select className="inp" value={f.interest} onChange={on("interest")}>
            {OPT.map((o) => (
              <option key={o}>{o}</option>
            ))}
          </select>
          <textarea
            className="inp"
            rows="3"
            maxLength="1000"
            placeholder="Message (optional)"
            value={f.message}
            onChange={on("message")}
          />
          <button disabled={busy} className="btn w-full disabled:opacity-60">
            {busy ? "Sending…" : "Request Call Back"}
          </button>
          {m && <p className="text-sm text-slate-600">{m}</p>}
        </form>
      </div>
    </section>
  );
}
