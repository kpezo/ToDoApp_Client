import React, { Fragment, useState } from "react";

function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleNameChange = (value) => {
    setUsername(value);
  };
  const handlePasswordChange = (value) => {
    setPassword(value);
  };

  const registerUser = () => {
    let registerInfo = {
      username: username,
      password: password,
    };

    fetch("https://localhost:7283/api/Authentication/register", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(registerInfo),
    });
  };

  return (
    <Fragment>
      <p>
        <label>Novi korisnik</label>
      </p>
      <input
        type="text"
        id="textUsername"
        placeholder="Unesite korisničko ime"
        onChange={(e) => handleNameChange(e.target.value)}
      ></input>
      <input
        type="password"
        id="textPassword"
        placeholder="Unesite zaporku"
        onChange={(e) => handlePasswordChange(e.target.value)}
      ></input>

      <button onClick={registerUser}>Registriraj</button>
    </Fragment>
  );
}
export default Register;
