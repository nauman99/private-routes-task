import React from "react";

const Account = ({ history }) => {
  const redirectLogin = () => {
    localStorage.removeItem("token");
    history.push("/");
  };
  return (
    <div>
      <div>Account page</div>
      <hr />
      <button onClick={redirectLogin}> Sign Out and Remove token</button>
    </div>
  );
};

export default Account;
