import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const API = "https://mern-login-backend-gm9m.onrender.com/api/users";

const LoginPage = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    setMsg("Loading...");
    try {
      const res = await fetch(`${API}/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (res.ok) {
        setMsg("Login successful! 🎉 Redirecting...");
        setTimeout(() => navigate("/dashboard"), 1300);
      } else {
        setMsg(data.msg || "Login failed");
      }
    } catch {
      setMsg("Server error");
    }
  };

  return (
    <div className="hero">
      <h1>Login</h1>
      <form onSubmit={handleSubmit} style={{ maxWidth: 330, margin: "auto" }}>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          required
          style={{ width: "100%", padding: 10, marginBottom: 16, borderRadius: 7, border: "1px solid #ddd" }}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          required
          style={{ width: "100%", padding: 10, marginBottom: 20, borderRadius: 7, border: "1px solid #ddd" }}
        />
        <button className="get-started-btn" type="submit" style={{ width: "100%" }}>
          Login
        </button>
      </form>
      <div style={{ marginTop: 18 }}>
        <a href="/register">Don't have an account? Register</a>
      </div>
      {/* Back to Landing Page button */}
      <div style={{ marginTop: 10 }}>
        <button
          className="get-started-btn"
          style={{ background: "#eee", color: "#2576cc", width: "100%" }}
          type="button"
          onClick={() => navigate("/")}
        >
          ⬅ Back to Landing Page
        </button>
      </div>
      {msg && <div style={{ marginTop: 20, color: "#c03", fontWeight: 500 }}>{msg}</div>}
    </div>
  );
};

export default LoginPage;
