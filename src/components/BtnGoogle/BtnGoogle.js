import React, { useEffect, useState } from "react";
import GoogleLogin from "react-google-login";
import { GoogleLogout } from "react-google-login";
import { useHistory } from "react-router";

export default function App() {
  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  // const [url, setUrl] = useState("");
  // const [isAuthenticated, setIsAuthenticated] = useState(false);

  const history = useHistory();

  const responseGoogle = (response) => {
    // console.log(JSON.stringify(response));
    // setName(response.profileObj.givenName);
    // setEmail(response.profileObj.email);
    // setUrl(response.profileObj.imageUrl);
    // setIsAuthenticated((prevAuth) => !prevAuth);

    history.push("/planetArmy");
  };

  // const logout = () => {
  //   setName("");
  //   setEmail("");
  //   setUrl("");
  //   setIsAuthenticated((prevAuth) => !prevAuth);
  //   alert("Logout!");
  // };

  return (
    <div className="App">
      <h1><GoogleLogin
        //clientId="1032570624691-r3chb9q4js45vn60mhm0vhifb1mnphvi.apps.googleusercontent.com"
        clientId="173330898047-f8igvjb5tvnt52gtloc17tmgmv0ejh14.apps.googleusercontent.com"
        buttonText="Login with Google"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={"single_host_origin"}
      /></h1> 
      <br />
      {/* {isAuthenticated && (
        <h1><GoogleLogout
          //clientId="1032570624691-r3chb9q4js45vn60mhm0vhifb1mnphvi.apps.googleusercontent.com"
          clientId="173330898047-f8igvjb5tvnt52gtloc17tmgmv0ejh14.apps.googleusercontent.com"
          buttonText="Logout"
          onLogoutSuccess={logout}
        ></GoogleLogout></h1>
      )} */}
    </div>
  );
}
