import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    const response = await fetch("https://api.example.com/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();
    if (response.ok) {
      // Save the token to localStorage or cookies
      localStorage.setItem("token", data.token);
      alert("Login successful!");
    } else {
      alert(data.message || "Login failed!");
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-lg font-bold mb-4">Login</h1>
      <div className="mb-2">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="p-2 border rounded w-full"
        />
      </div>
      <div className="mb-4">
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="p-2 border rounded w-full"
        />
      </div>
      <button
        onClick={handleLogin}
        className="bg-blue-500 text-white p-2 rounded w-full"
      >
        Login
      </button>
    </div>
  );
};

export default Login;
