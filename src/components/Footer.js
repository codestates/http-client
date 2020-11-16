import React from "react";

const linkStyle = {
  color: `white`,
  textDecoration: `none`,
};

const wordStyle = {
  color: `hotpink`,
  fontSize: `large`,
  textDecoration: `none`,
};

function Footer() {
  return (
    <div style={wordStyle}>
      Built with {` `}
      <a
        style={linkStyle}
        href="https://www.codestates.com/"
        target="_blank"
        rel="noreferrer"
      >
        codestates
      </a>
      , {` `} Posted by {` `} Fin.K.L © {new Date().getFullYear()}
    </div>
  );
}

export default Footer;
