import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { api } from "../lib/api";
import { CFG } from "../config";
const Ctx = createContext(null);
export const useSettings = () => useContext(Ctx);
export const useSite = () => useContext(Ctx).site; // phone, tel, wa, waLink, email, address (admin-editable, falls back to config.js)
const build = (s) => {
  const phone = s.phone || CFG.phone,
    wa = String(s.whatsapp || CFG.wa).replace(/\D/g, ""),
    d = phone.replace(/\D/g, "");
  return {
    ...CFG,
    phone,
    email: s.email || CFG.email,
    address: s.address || CFG.address,
    wa,
    tel:
      (phone.trim().startsWith("+") ? "+" : d.length === 10 ? "+91" : "+") + d,
    waLink:
      "https://wa.me/" +
      wa +
      "?text=" +
      encodeURIComponent("Hello Millions Rise, I need financial guidance."),
  };
};
export function SettingsProvider({ children }) {
  const [raw, setRaw] = useState({});
  const refresh = useCallback(
    () =>
      api("/settings")
        .then(setRaw)
        .catch(() => {}),
    [],
  );
  useEffect(() => {
    refresh();
  }, [refresh]);
  return (
    <Ctx.Provider value={{ site: build(raw), raw, refresh }}>
      {children}
    </Ctx.Provider>
  );
}
