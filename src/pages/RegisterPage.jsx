import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const API = "https://mern-login-backend-gm9m.onrender.com/api/users";

const RegisterPage = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    password: ""
  });
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    setMsg("Loading...");
    try {
      const res = await fetch(`${API}/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (res.ok) {
        setMsg("Registration successful! 🎉 Redirecting...");
        setTimeout(() => navigate("/dashboard"), 1300);
      } else {
        setMsg(data.msg || "Registration failed");
      }
    } catch {
      setMsg("Server error");
    }
  };

  return (
    <div className="hero">
      <h1>Register</h1>
      <form onSubmit={handleSubmit} style={{ maxWidth: 350, margin: "auto" }}>
        <input
          name="name"
          placeholder="Name"
          value={form.name}
          onChange={handleChange}
          required
          style={{ width: "100%", padding: 10, marginBottom: 14, borderRadius: 7, border: "1px solid #ddd" }}
        />
        <input
          name="email"
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          required
          style={{ width: "100%", padding: 10, marginBottom: 14, borderRadius: 7, border: "1px solid #ddd" }}
        />
        <input
          name="phone"
          placeholder="Phone"
          value={form.phone}
          onChange={handleChange}
          required
          style={{ width: "100%", padding: 10, marginBottom: 14, borderRadius: 7, border: "1px solid #ddd" }}
        />
        <input
          name="address"
          placeholder="Address"
          value={form.address}
          onChange={handleChange}
          required
          style={{ width: "100%", padding: 10, marginBottom: 14, borderRadius: 7, border: "1px solid #ddd" }}
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          required
          style={{ width: "100%", padding: 10, marginBottom: 20, borderRadius: 7, border: "1px solid #ddd" }}
        />
        <button className="get-started-btn" type="submit" style={{ width: "100%" }}>
          Register
        </button>
      </form>
      <div style={{ marginTop: 18 }}>
        <a href="/login">Already have an account? Login</a>
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
      {msg && <div style={{ marginTop: 20, color: "#2576cc", fontWeight: 500 }}>{msg}</div>}
    </div>
  );
};

export default RegisterPage;
