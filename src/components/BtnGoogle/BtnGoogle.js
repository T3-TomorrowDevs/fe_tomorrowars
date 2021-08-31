import React, { useEffect, useState } from "react";
import GoogleLogin from "react-google-login";
import { GoogleLogout } from "react-google-login";
import { useHistory } from "react-router";
import axios from "axios";
// import { useDispatch, useSelector } from "react-redux";
// import Button from "../Button/Button";
// import { selectUser } from "../../features/user/userSlice";

export default function App() {
  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  // const [url, setUrl] = useState("");
  // const [isAuthenticated, setIsAuthenticated] = useState(false);

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const history = useHistory();
  //const dispatch = useDispatch();
  //const user = useSelector(selectUser);

  useEffect(() => {
    if (isAuthenticated) {
      history.push("/planetArmy");
    }
  }, [isAuthenticated])

  const responseGoogle = (response) => {

    axios
      .post("https://tomorrowars.herokuapp.com/login/", {
        'access-token': response.accessToken
      })
      .then((res) => {
        localStorage.setItem('access_token', res.data.token);
        //localStorage.setItem('refresh_token', res.data.refresh_token);
        setIsAuthenticated(true);
      });
    
    // if (user.registered) {
    //   history.push("/galaxy");
    // } else {
    //   history.push("/planetArmy");
    // }
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
        //clientId="173330898047-f8igvjb5tvnt52gtloc17tmgmv0ejh14.apps.googleusercontent.com"
        clientId="61323348904-uusnfpeahhklfrmt6150t5kfn4jlk93c.apps.googleusercontent.com"
        buttonText="Login with Google"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={"single_host_origin"}
      /></h1>
      {/* <Button text="Login" type="button" onClick={responseGoogle}/> */}
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
