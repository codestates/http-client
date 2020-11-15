import React from "react";

function Welcome(props) {
  // console.log("welcome프롭", props)
  return (
    <>
      <div>{props.userName === null ? "Geust" : props.userName} 님 </div>
      <div>환영합니다 :)</div>
    </>
  );
}

export default Welcome;
