import { func } from 'prop-types'
import React from 'react';

function SignOut(props) {
  console.log('signout props', props.logOut)

  // handClickLogout = () => {

  // }

  return (
    <div>
      <button onClick={props.logOut}>로그아웃</button>
    </div>
  );
}

export default SignOut;