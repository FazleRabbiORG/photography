import React, { useContext, useState } from "react";
import firebase from "firebase/app";
import "firebase/auth";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import firebaseConfig from "./FirebaseConfig";
import { UserContext } from "../../App";
import { useHistory, useLocation } from "react-router-dom";
import Navbar from "../Home/Navbar/Navbar";
import { set, useForm } from "react-hook-form";

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const setUserToken = () => {
  firebase
    .auth()
    .currentUser.getIdToken(/* forceRefresh */ true)
    .then(function (idToken) {
      sessionStorage.setItem("token", idToken);
    })
    .catch(function (error) {});
};

const Login = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [submitEmail, setSubmitEmail] = useState({})
  const [logFail, setLogFail] = useState('')

  let history = useHistory();
  let location = useLocation();

  let { from } = location.state || { from: { pathname: "/" } };

  const provider = new firebase.auth.GoogleAuthProvider();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => setSubmitEmail(data);

  const handleGoogleLogin = () => {
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        const user = result.user;
        setLoggedInUser(user);
        history.replace(from);
        setUserToken();
      })
      .catch((error) => {setLogFail(error.message)});
  };

  const handleEmailLogin =()=> {
    firebase
      .auth()
      .signInWithEmailAndPassword(submitEmail.email,submitEmail.password)
      .then((result) => {
        const user = result.user;
        setLoggedInUser(user);
        history.replace(from);
        setUserToken();
      })
      .catch((error) => {setLogFail(error.message)});
  }

  return (
    <div style={{ backgroundColor: "#1e292f", height: "100vh" }}>
      <Navbar></Navbar>
      <div className="d-flex align-items-center">
        <div className="w-100 p-5">
          <h2 className="text-light text-center mb-5">Login</h2>
            <h6 className='text-danger'>{logFail} </h6>
          <div className=" bg-light col-md-4  rounded border m-auto ml-3 mr-3 p-5">
            <div>
              <form onSubmit={handleSubmit(onSubmit)}>
                <input
                  className="form-control mb-2"
                  placeholder="email address"
                  {...register("email")}
                />

                <input
                  className="form-control"
                  placeholder="password"
                  {...register("password", { required: true })}
                />
                {errors.password && <span>This field is required</span>}

                <input
                  style={{ borderRadius: "20px" }}
                  className="btn btn-outline-danger  w-100 mt-2 mb-2 "
                  type="submit"
                  onClick={handleEmailLogin}
                />
              </form>
            </div>
            <h3
              onClick={handleGoogleLogin}
              style={{ borderRadius: "20px" }}
              className="btn btn-outline-danger  w-100 "
            >
              <FontAwesomeIcon icon={faGoogle}></FontAwesomeIcon>
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
