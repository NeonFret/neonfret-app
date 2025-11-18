import "./Auth.css";
import { useState, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

export default function SignIn() {
  const { login } = useContext(AuthContext);

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const users = JSON.parse(localStorage.getItem("neonfret_users") || "[]");

    const existingUser = users.find(
      (u) => u.email === form.email && u.password === form.password
    );

    if (!existingUser) {
      alert("Invalid email or password!");
      return;
    }

    login(existingUser);
    window.location.href = "/";
  };

  return (
    <div className="auth-container">
      <h2>Sign In</h2>

      <form className="auth-form" onSubmit={handleSubmit}>
        <label>Email</label>
        <input type="email" name="email" value={form.email} onChange={handleChange} />

        <label>Password</label>
        <input type="password" name="password" value={form.password} onChange={handleChange} />

        <button className="auth-btn">Sign In</button>
      </form>

      <p className="switch-auth">
        Don't have an account? <a href="/signup">Sign Up</a>
      </p>
    </div>
  );
}
