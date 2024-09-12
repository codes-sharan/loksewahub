import React from "react";
import AuthPopup from "../components/AuthPopup";

const Login = () => {
  return (
    <>
      <br />
      <div class="text-center">
        <h1> Please Login to continue </h1>

        <div>
          <AuthPopup />
        </div>
      </div>
      <br /> <br />
    </>
  );
};

export default Login;
