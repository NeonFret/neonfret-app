import { useState, useEffect } from "react";
import { AuthContext } from "./AuthContext";

export default function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const savedUser = localStorage.getItem("neonfret_user");

    if (savedUser) {
      setTimeout(() => {
        setUser(JSON.parse(savedUser));
      }, 0);
    }
  }, []);

  const login = (userData) => {
    localStorage.setItem("neonfret_user", JSON.stringify(userData));
    setUser(userData);
  };

  const logout = () => {
    localStorage.removeItem("neonfret_user");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
