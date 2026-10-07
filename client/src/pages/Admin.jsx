// import { useEffect, useState } from "react";
// import { api } from "../lib/api";
// import { useAuth } from "../context/AuthContext";
// const FD = {
//   ipos: [
//     "name",
//     "status",
//     "open",
//     "close",
//     "priceBand",
//     "lot",
//     "issueSize",
//     "listing",
//     "subscription",
//     "gmp",
//   ],
//   posts: ["title", "tag", "body"],
// };
// const COLS = {
//   leads: ["name", "phone", "interest", "createdAt"],
//   users: ["name", "email", "phone", "role", "createdAt"],
//   ...FD,
// };
// export default function Admin() {
//   const { user } = useAuth();
//   const [tab, setTab] = useState("leads"),
//     [rows, setRows] = useState([]),
//     [form, setForm] = useState({ status: "cur" });
//   const cols = COLS[tab];
//   const load = () =>
//     api("/" + tab)
//       .then(setRows)
//       .catch((e) => alert(e.message));
//   useEffect(() => {
//     load();
//   }, [tab]);
//   const add = async (e) => {
//     e.preventDefault();
//     try {
//       await api("/" + tab, "POST", form);
//       setForm({ status: "cur" });
//       load();
//     } catch (x) {
//       alert(x.message);
//     }
//   };
//   const del = async (id) => {
//     if (confirm("Delete this item?")) {
//       await api("/" + tab + "/" + id, "DELETE");
//       load();
//     }
//   };
//   const set = (k) => (e) => setForm({ ...form, [k]: e.target.value });
//   return (
//     <section className="sec">
//       <div className="w">
//         <div className="mb-4 flex flex-wrap items-center gap-2">
//           <div className="mr-4">
//             <span className="ey">Admin Panel</span>
//             <h1 className="font-serif text-2xl text-ink">
//               Welcome, {user.name}
//             </h1>
//           </div>
//           {["leads", "users", "ipos", "posts"].map((k) => (
//             <button
//               key={k}
//               onClick={() => setTab(k)}
//               className={`btn px-4 py-1.5 text-xs capitalize ${tab === k ? "" : "btn-o"}`}
//             >
//               {k}
//             </button>
//           ))}
//         </div>
//         {FD[tab] && (
//           <form
//             onSubmit={add}
//             className="mb-4 grid gap-2 sm:grid-cols-2 lg:grid-cols-4"
//           >
//             {cols.map((k) =>
//               k === "status" ? (
//                 <select
//                   key={k}
//                   className="inp"
//                   value={form.status}
//                   onChange={set(k)}
//                 >
//                   <option value="cur">Current</option>
//                   <option value="up">Upcoming</option>
//                   <option value="lst">Listed</option>
//                 </select>
//               ) : k === "body" ? (
//                 <textarea
//                   key={k}
//                   className="inp sm:col-span-2"
//                   placeholder={k}
//                   value={form[k] || ""}
//                   onChange={set(k)}
//                 />
//               ) : (
//                 <input
//                   key={k}
//                   className="inp"
//                   placeholder={k}
//                   value={form[k] || ""}
//                   onChange={set(k)}
//                 />
//               ),
//             )}
//             <button className="btn">Add</button>
//           </form>
//         )}
//         {tab === "users" && (
//           <p className="mb-3 text-xs text-slate-500">
//             To make someone admin, change their <b>role</b> to "admin" in
//             MongoDB (or run <code>npm run make-admin -- email</code> in
//             /server).
//           </p>
//         )}
//         <div className="overflow-x-auto">
//           <table className="w-full text-left text-sm">
//             <thead>
//               <tr>
//                 {cols.map((k) => (
//                   <th key={k} className="p-2">
//                     {k}
//                   </th>
//                 ))}
//                 <th />
//               </tr>
//             </thead>
//             <tbody>
//               {rows.map((r) => (
//                 <tr key={r._id} className="border-t border-slate-100">
//                   {cols.map((k) => (
//                     <td key={k} className="p-2">
//                       {k === "createdAt"
//                         ? String(r[k]).slice(0, 10)
//                         : String(r[k] ?? "").slice(0, 60)}
//                     </td>
//                   ))}
//                   <td>
//                     {FD[tab] && (
//                       <button
//                         onClick={() => del(r._id)}
//                         className="text-red-600"
//                       >
//                         Delete
//                       </button>
//                     )}
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//           {!rows.length && (
//             <p className="p-3 text-sm text-slate-500">No records yet.</p>
//           )}
//         </div>
//       </div>
//     </section>
//   );
// }

import { useEffect, useState } from "react";
import { api } from "../lib/api";
import { useAuth } from "../context/AuthContext";
import { useSettings } from "../context/SettingsContext";
const FD = {
  ipos: [
    "name",
    "status",
    "open",
    "close",
    "priceBand",
    "lot",
    "issueSize",
    "listing",
    "subscription",
    "gmp",
  ],
  posts: ["title", "tag", "body"],
};
const COLS = {
  leads: ["createdAt", "name", "phone", "email", "interest", "message"],
  users: ["name", "email", "phone", "role", "createdAt"],
  ...FD,
};
const DEL = ["leads", "ipos", "posts"],
  dt = (v) =>
    new Date(v).toLocaleString("en-IN", {
      dateStyle: "medium",
      timeStyle: "short",
    });
function SiteSettings() {
  const { raw, refresh } = useSettings();
  const [f, setF] = useState({
      phone: "",
      whatsapp: "",
      email: "",
      address: "",
    }),
    [msg, setMsg] = useState("");
  useEffect(
    () =>
      setF({
        phone: raw.phone || "",
        whatsapp: raw.whatsapp || "",
        email: raw.email || "",
        address: raw.address || "",
      }),
    [raw],
  );
  const on = (k) => (e) => setF({ ...f, [k]: e.target.value });
  const save = async (e) => {
    e.preventDefault();
    setMsg("");
    try {
      await api("/settings", "PUT", f);
      await refresh();
      setMsg("✅ Saved. Website updated.");
    } catch (x) {
      setMsg("❌ " + x.message);
    }
  };
  return (
    <form onSubmit={save} className="card max-w-xl space-y-3">
      <h2 className="font-serif text-lg text-ink">Website contact details</h2>
      <p className="text-xs text-slate-500">
        These appear in the header, footer, contact page and the WhatsApp
        buttons. Leave blank to use defaults.
      </p>
      <label className="block text-xs font-semibold">
        Phone number (shown on site)
        <input
          className="inp mt-1"
          placeholder="+91 93014 89004"
          value={f.phone}
          onChange={on("phone")}
        />
      </label>
      <label className="block text-xs font-semibold">
        WhatsApp number (with country code)
        <input
          className="inp mt-1"
          placeholder="919301489004"
          value={f.whatsapp}
          onChange={on("whatsapp")}
        />
      </label>
      <label className="block text-xs font-semibold">
        Email
        <input
          className="inp mt-1"
          placeholder="info@millionsrise.com"
          value={f.email}
          onChange={on("email")}
        />
      </label>
      <label className="block text-xs font-semibold">
        Address
        <textarea
          className="inp mt-1"
          rows="2"
          value={f.address}
          onChange={on("address")}
        />
      </label>
      <button className="btn">Save changes</button>
      {msg && <p className="text-sm">{msg}</p>}
    </form>
  );
}
export default function Admin() {
  const { user } = useAuth();
  const [tab, setTab] = useState("leads"),
    [rows, setRows] = useState([]),
    [form, setForm] = useState({ status: "cur" });
  const cols = COLS[tab] || [];
  const load = () =>
    COLS[tab] &&
    api("/" + tab)
      .then(setRows)
      .catch((e) => alert(e.message));
  useEffect(() => {
    load();
    if (tab !== "leads") return;
    const t = setInterval(load, 30000);
    return () => clearInterval(t);
  }, [tab]); // leads auto-refresh every 30s
  const add = async (e) => {
    e.preventDefault();
    try {
      await api("/" + tab, "POST", form);
      setForm({ status: "cur" });
      load();
    } catch (x) {
      alert(x.message);
    }
  };
  const del = async (id) => {
    if (confirm("Delete this item?")) {
      await api("/" + tab + "/" + id, "DELETE");
      load();
    }
  };
  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value });
  return (
    <section className="sec">
      <div className="w">
        <div className="mb-5 flex flex-wrap items-center gap-2">
          <div className="mr-4">
            <span className="ey">Admin Panel</span>
            <h1 className="font-serif text-2xl text-ink">
              Welcome, {user.name}
            </h1>
          </div>
          {["leads", "users", "ipos", "posts", "settings"].map((k) => (
            <button
              key={k}
              onClick={() => setTab(k)}
              className={`btn px-4 py-1.5 text-xs capitalize ${tab === k ? "" : "btn-o"}`}
            >
              {k}
            </button>
          ))}
        </div>
        {tab === "settings" ? (
          <SiteSettings />
        ) : (
          <>
            {FD[tab] && (
              <form
                onSubmit={add}
                className="mb-4 grid gap-2 sm:grid-cols-2 lg:grid-cols-4"
              >
                {cols.map((k) =>
                  k === "status" ? (
                    <select
                      key={k}
                      className="inp"
                      value={form.status}
                      onChange={set(k)}
                    >
                      <option value="cur">Current</option>
                      <option value="up">Upcoming</option>
                      <option value="lst">Listed</option>
                    </select>
                  ) : k === "body" ? (
                    <textarea
                      key={k}
                      className="inp sm:col-span-2"
                      placeholder={k}
                      value={form[k] || ""}
                      onChange={set(k)}
                    />
                  ) : (
                    <input
                      key={k}
                      className="inp"
                      placeholder={k}
                      value={form[k] || ""}
                      onChange={set(k)}
                    />
                  ),
                )}
                <button className="btn">Add</button>
              </form>
            )}
            {tab === "leads" && (
              <p className="mb-3 text-xs text-slate-500">
                Contact-form enquiries appear here automatically (newest first,
                refreshes every 30 seconds). Total: <b>{rows.length}</b>
              </p>
            )}
            {tab === "users" && (
              <p className="mb-3 text-xs text-slate-500">
                To make someone admin, change their <b>role</b> to "admin" in
                MongoDB, or run <code>npm run make-admin -- email</code> in
                /server.
              </p>
            )}
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr>
                    {cols.map((k) => (
                      <th key={k} className="whitespace-nowrap p-2">
                        {k}
                      </th>
                    ))}
                    <th />
                  </tr>
                </thead>
                <tbody>
                  {rows.map((r) => (
                    <tr
                      key={r._id}
                      className="border-t border-slate-100 align-top"
                    >
                      {cols.map((k) => (
                        <td key={k} className="p-2">
                          {k === "createdAt" ? (
                            <span className="whitespace-nowrap">
                              {dt(r[k])}
                            </span>
                          ) : k === "phone" && r[k] ? (
                            <a href={"tel:" + r[k]} className="text-brand">
                              {r[k]}
                            </a>
                          ) : (
                            String(r[k] ?? "").slice(0, 200)
                          )}
                        </td>
                      ))}
                      <td className="p-2">
                        {DEL.includes(tab) && (
                          <button
                            onClick={() => del(r._id)}
                            className="text-red-600"
                          >
                            Delete
                          </button>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              {!rows.length && (
                <p className="p-3 text-sm text-slate-500">No records yet.</p>
              )}
            </div>
          </>
        )}
      </div>
    </section>
  );
}

