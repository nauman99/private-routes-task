import React from "react";

const Login = ({ history }) => {
  const loginIn = () => {
    history.push("/orders");
    localStorage.setItem("token", "batman");
  };
  return (
    <div>
      <div>Login screen</div>
      <button onClick={loginIn}>Click to Login</button>
    </div>
  );
};

export default Login;
