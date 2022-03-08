import React from "react";
function Header() {
  return (
    <>
      <header>
        <img
          src="https://avatars.githubusercontent.com/u/73788665?v=4"
          alt="Erik"
        />
        <div className="header__wrap">
          <div className="header__bio">
            <h1>Erik Egliens</h1>
            <span>Frontend Developer</span>
            <small>
              <a href="https://github.com/ErikEgl/">
                https://github.com/ErikEgl/
              </a>
            </small>
          </div>
          <div className="header__links">
            <a
              href="mailto:mr.erik.egliens@gmail.com"
              class="btn btn-secondary btn-mail"
            >
              Email
            </a>
            <a
              href="https://www.linkedin.com/in/erikegl/"
              class="btn btn-primary btn-social"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </header>
    </>
  );
}
export default Header;
