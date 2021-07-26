import "../BtnGoogle/BtnGoogle.scss";
import React, { useEffect, useState } from "react";
import GoogleLogin from "react-google-login";
import { GoogleLogout } from "react-google-login";

export default function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [url, setUrl] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const responseGoogle = (response) => {
    console.log(JSON.stringify(response));
    setName(response.profileObj.givenName);
    setEmail(response.profileObj.email);
    setUrl(response.profileObj.imageUrl);
    setIsAuthenticated((prevAuth) => !prevAuth);
  };

  const logout = () => {
    setName("");
    setEmail("");
    setUrl("");
    setIsAuthenticated((prevAuth) => !prevAuth);
    alert("Logout!");
  };

  return (
    <div className="App">
      <h1>Login with Google</h1>
      <h1><GoogleLogin
        clientId="1032570624691-r3chb9q4js45vn60mhm0vhifb1mnphvi.apps.googleusercontent.com"
        buttonText="login"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={"single_host_origin"}
      /></h1> 
      <br />
      {isAuthenticated && (
        <GoogleLogout
          //clientId="1032570624691-r3chb9q4js45vn60mhm0vhifb1mnphvi.apps.googleusercontent.com"
          clientId="173330898047-f8igvjb5tvnt52gtloc17tmgmv0ejh14.apps.googleusercontent.com"
          buttonText="Logout"
          onLogoutSuccess={logout}
        ></GoogleLogout>
      )}
    </div>
  );
}
