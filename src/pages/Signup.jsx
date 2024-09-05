import { useState } from "react";

import axios from "axios";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [username, setUsername] = useState("");

  // state de gestion d'erreur
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("submit");

    if (!email || !password || !confirmPassword || !username) {
      setErrorMessage("Veuillez remplir tout les champs");
      return;
    }

    if (password !== confirmPassword) {
      setErrorMessage("Vos mdp doivent être identiques");
      return;
    }

    try {
      // console.log("1");
      const response = await axios.post(
        "https://site--petit-projet-orion24--fhx5w78hhgzd.code.run/user/signup",
        {
          email: email,
          username: username,
          password: password,
        }
      );
      // console.log("2");
      console.log(response.data);
    } catch (error) {
      // console.log("3");
      console.log(error.response.data.message);
      if (error.response.data.message === "email already in DB") {
        setErrorMessage("Ce compte existe déjà");
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        value={email}
        placeholder="email"
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <input
        type="text"
        value={username}
        placeholder="usrname"
        onChange={(e) => {
          setUsername(e.target.value);
        }}
      />
      <input
        type="password"
        value={password}
        placeholder="password"
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <input
        type="password"
        placeholder="confirm password"
        value={confirmPassword}
        onChange={(e) => {
          setConfirmPassword(e.target.value);
        }}
      />
      {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
      <button>S'inscrire</button>
    </form>
  );
}
