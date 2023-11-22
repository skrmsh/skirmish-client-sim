import React from "react";

function StatusBar() {
  let connectionState = true;
  return (
    <>
      {connectionState ? <>🟢 Connected!</> : <>🔴 Not Connected!</>}
      <span className="ms-5"></span>
      ... ToDo
    </>
  );
}

export default StatusBar;
