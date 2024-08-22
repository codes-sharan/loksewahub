import React from 'react'
import logo from "../logo.png";

function Subba() {
  return (
    <div>
      <h3> Welcome to Subba Loksewa preparation. </h3>

      <h3>Logo from frontend </h3>

      <img src={logo} alt="Logo" className="logo" /> <br/> <br/>

<h3> Testing logo from Server</h3>
      {/* To hosted path */}
      <img src="https://loksewahub.com/assets/logo.png" alt="Logo" />

     </div>
  )
}

export default Subba
