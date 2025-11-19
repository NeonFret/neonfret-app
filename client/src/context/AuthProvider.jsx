import { useState, useEffect } from "react";
import { AuthContext } from "./AuthContext";

export default function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("neon_token");

    if (!token) return;

    fetch("http://localhost:5000/api/auth/profile", {
      method: "GET",
      headers: {
        Authorization: token,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.username) {
          setUser(data);
        }
      })
      .catch(() => {});
  }, []);

  const login = () => {
    const token = localStorage.getItem("neon_token");

    fetch("http://localhost:5000/api/auth/profile", {
      headers: { Authorization: token },
    })
      .then((res) => res.json())
      .then((data) => setUser(data));
  };

  const logout = () => {
    localStorage.removeItem("neon_token");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
