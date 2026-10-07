import { createContext, useContext, useEffect, useState } from "react";
import { api } from "../lib/api";
const Ctx = createContext(null);
export const useAuth = () => useContext(Ctx);
export function AuthProvider({ children }) {
  const [user, setUser] = useState(null),
    [loading, setLoading] = useState(!!localStorage.getItem("mr_token"));
  useEffect(() => {
    if (!localStorage.getItem("mr_token")) return;
    api("/auth/me")
      .then((r) => setUser(r.user))
      .catch((e) => {
        if (e.message === "Unauthorized") localStorage.removeItem("mr_token");
      })
      .finally(() => setLoading(false));
  }, []);
  const done = (r) => {
    localStorage.setItem("mr_token", r.token);
    setUser(r.user);
    return r.user;
  };
  const login = async (email, password) =>
    done(await api("/auth/login", "POST", { email, password }));
  const register = async (d) => done(await api("/auth/register", "POST", d));
  const logout = () => {
    localStorage.removeItem("mr_token");
    setUser(null);
  };
  return (
    <Ctx.Provider value={{ user, loading, login, register, logout }}>
      {children}
    </Ctx.Provider>
  );
}
