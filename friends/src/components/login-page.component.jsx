import React from "react";
//import axios from "axios;";

class Login extends React.Component {
  render() {
    return (
      <div>
        <form>
          <h2>Please Log In </h2>
          <input type="text" name="username" />
          <input type="password" name="password" />
          <button>Sign In</button>
        </form>
      </div>
    );
  }
}
export default Login;
