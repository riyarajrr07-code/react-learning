import React, { useState, useContext } from 'react'
import UserContext from "../UserContext";

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const { setUser } = useContext(UserContext);

  const handleSumbit = (e) => {
    e.preventDefault();
    setUser({ username, password });
  };

  return (
    <div className="flex flex-col items-center mt-20 gap-3">
      <h2 className="text-2xl font-semibold">Login</h2>

      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="username"
        className="border px-3 py-2 rounded w-64"
      />

      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="password"
        className="border px-3 py-2 rounded w-64"
      />

      <button
        onClick={handleSumbit}
        className="bg-black text-white px-4 py-2 rounded w-64"
      >
        submit
      </button>
    </div>
  );
}

export default Login;
