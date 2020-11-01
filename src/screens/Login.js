import React from "react";

const Login = ({ history }) => {
  
  const loginIn = () => {
    localStorage.setItem("token", "batman");
    history.push("/orders");
    window.location.reload();
  };
  
  return (
    <div>
      <div>Login screen</div>
      <button onClick={loginIn}>Click to Login</button>
    </div>
  );
};

export default Login;
