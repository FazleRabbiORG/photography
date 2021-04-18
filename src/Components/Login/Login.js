import React, { useContext } from "react";
import firebase from "firebase/app";
import "firebase/auth";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import firebaseConfig from "./FirebaseConfig";
import { UserContext } from "../../App";
import {
  Link,
  useHistory,
  useLocation,
} from "react-router-dom";

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const setUserToken = ()=>{
    firebase.auth().currentUser.getIdToken(/* forceRefresh */ true)
    .then(function(idToken) {
        sessionStorage.setItem('token',idToken)
      }).catch(function(error) {
        console.log(error)
      });
}

const Login = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);

  let history = useHistory();
  let location = useLocation();

  let { from } = location.state || { from: { pathname: "/" } };

  const provider = new firebase.auth.GoogleAuthProvider();
  const handleGoogleLogin = () => {
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        const user = result.user;
        setLoggedInUser(user);
        console.log(user);
        history.replace(from);
        setUserToken();
      })
      .catch((error) => {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
      });
  };

  return (
    <div className="mt-5">
      <div className=" bg-light w-25 rounded border mt-5 m-auto p-5">
        <h3 className=" text-primary text-center mb-3">Login</h3>
        <h3
          onClick={handleGoogleLogin}
          style={{ borderRadius: "20px" }}
          className="btn btn-outline-danger  w-100 "
        >
          <FontAwesomeIcon icon={faGoogle}></FontAwesomeIcon>
        </h3>
      </div>
    </div>
  );
};

export default Login;
