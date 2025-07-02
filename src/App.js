import React, { useState } from "react";

const API = "https://mern-login-backend-gm9m.onrender.com/api/users";

function App() {
  const [isRegister, setIsRegister] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", address: "", password: "" });
  const [msg, setMsg] = useState("");

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    const url = isRegister ? `${API}/register` : `${API}/login`;
    const method = "POST";
    const body = JSON.stringify(form);
    try {
      const res = await fetch(url, { method, headers: { "Content-Type": "application/json" }, body });
      const data = await res.json();
      setMsg(data.msg || "Success");
    } catch (err) {
      setMsg("Error");
    }
  };

  return (
    <div style={{ maxWidth: 400, margin: "auto", padding: 20 }}>
      <h2>{isRegister ? "Register" : "Login"}</h2>
      <form onSubmit={handleSubmit}>
        {isRegister && (
          <>
            <input name="name" placeholder="Name" value={form.name} onChange={handleChange} required /><br />
            <input name="phone" placeholder="Phone" value={form.phone} onChange={handleChange} required /><br />
            <input name="address" placeholder="Address" value={form.address} onChange={handleChange} required /><br />
          </>
        )}
        <input name="email" placeholder="Email" value={form.email} onChange={handleChange} required /><br />
        <input name="password" type="password" placeholder="Password" value={form.password}  onChange={handleChange} required /><br />
        <button type="submit">{isRegister ? "Register" : "Login"}</button>
      </form>
      <button onClick={() => setIsRegister(!isRegister)} style={{ marginTop: 10 }}>
        {isRegister ? "Already have an account? Login" : "Don't have an account? Register"}
      </button>
      {msg && <p>{msg}</p>}
    </div>
  );
}

export default App;
