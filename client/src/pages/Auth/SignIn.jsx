import "./Auth.css";
import { useState, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { GoogleLogin } from "@react-oauth/google";

export default function SignIn() {
  const { login } = useContext(AuthContext);

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch("http://localhost:5000/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    const data = await res.json();

    if (!res.ok) {
      alert(data.message);
      return;
    }

    localStorage.setItem("neon_token", data.token);

    login({ token: data.token });
    window.location.href = "/";
  };

  const handleGoogleLogin = async (response) => {
    const token = response.credential;

    const res = await fetch("http://localhost:5000/api/auth/google", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ token }),
    });

    const data = await res.json();

    if (!res.ok) {
      alert(data.message);
      return;
    }

    localStorage.setItem("neon_token", data.token);
    login({ token: data.token });

    window.location.href = "/";
  };

  return (
    <div className="auth-container">
      <h2>Sign In</h2>

      <form className="auth-form" onSubmit={handleSubmit}>
        <label>Email</label>
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
        />

        <label>Password</label>
        <input
          type="password"
          name="password"
          value={form.password}
          onChange={handleChange}
        />

        <button className="auth-btn">Sign In</button>
      </form>

      <div className="google-btn-area">
        <GoogleLogin
          onSuccess={handleGoogleLogin}
          onError={() => alert("Google login failed")}
          theme="outline"
          size="large"
          text="continue_with"
        />
      </div>

      <p className="switch-auth">
        Don't have an account? <a href="/signup">Sign Up</a>
      </p>
    </div>
  );
}
