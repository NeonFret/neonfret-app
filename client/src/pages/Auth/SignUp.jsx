import "./Auth.css";
import { useState } from "react";

export default function SignUp() {
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const users = JSON.parse(localStorage.getItem("neonfret_users") || "[]");

    const emailExists = users.some((u) => u.email === form.email);

    if (emailExists) {
      alert("Email already exists!");
      return;
    }

    const newUser = {
      username: form.username,
      email: form.email,
      password: form.password,
      createdAt: new Date().toLocaleDateString(),
    };

    users.push(newUser);
    localStorage.setItem("neonfret_users", JSON.stringify(users));

    alert("Account created!");
    window.location.href = "/signin";
  };

  return (
    <div className="auth-container">
      <h2>Create Account</h2>

      <form className="auth-form" onSubmit={handleSubmit}>
        <label>Username</label>
        <input name="username" value={form.username} onChange={handleChange} />

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

        <button className="auth-btn">Sign Up</button>
      </form>

      <p className="switch-auth">
        Already have an account? <a href="/signin">Sign In</a>
      </p>
    </div>
  );
}
