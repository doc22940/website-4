import React, { useEffect, useState } from "react";

import "./style.css";

const Download = () => {
  const [macURL, setMacURL] = useState(null);
  const [windowsURL, setWindowsURL] = useState(null);
  const [linuxURL, setLinuxURL] = useState(null);

  useEffect(() => {
    (async () => {
      const res = JSON.parse(
        await fetch(
          "https://api.github.com/repos/manojVivek/responsively-app/releases/latest"
        ).then((res) => res.text())
      );
      const tagName = res.tag_name;
      var versionName = tagName.substring(1);
      setMacURL(
        `https://github.com/responsively-org/responsively-app/releases/download/${tagName}/ResponsivelyApp-${versionName}.dmg`
      );
      setLinuxURL(
        `https://github.com/responsively-org/responsively-app/releases/download/${tagName}/ResponsivelyApp-${versionName}.AppImage`
      );
      setWindowsURL(
        `https://github.com/responsively-org/responsively-app/releases/download/${tagName}/ResponsivelyApp-Setup-${versionName}.exe`
      );
    })();
  }, []);

  return (
    <>
      <section
        id="auto"
        className="bg-primary-3 text-light text-center has-divider"
      >
        <div className="container">
          <div className="row text-center">
            <div className="col pb-5">
              <h1>Download Responsively App</h1>
              <div className="lead mb-4">
                You are one step away from improving your web development speed!
              </div>
            </div>
          </div>
          <div className="row mb-4">
            <div className="col">
              <h2>Available for all major operating systems</h2>
            </div>
          </div>
          <div className="row text-center mb-4" id="manual">
            <div
              className="col-md-4 mb-2"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="bg-light rounded p-3">
                <div className="icon-round bg-primary mx-auto mb-4">
                  <img
                    className="icon"
                    src="assets/img/logos/brand/apple.svg"
                    alt="icon"
                  />
                </div>
                <a
                  id="macOs"
                  className="m-1 btn btn-outline-primary mx-2"
                  href={
                    macURL ||
                    "https://github.com/responsively-org/responsively-app/releases"
                  }
                >
                  <span className="m-1">Download for Mac</span>
                </a>
              </div>
            </div>
            <div
              className="col-md-4 mb-2"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="bg-light rounded p-3">
                <div className="icon-round bg-primary mx-auto mb-4">
                  <img
                    className="icon"
                    src="assets/img/icons/custom/windows-icon.svg"
                    alt="icon"
                  />
                </div>
                <a
                  id="windowsOs"
                  className="m-1 btn btn-outline-primary mx-2"
                  href={
                    windowsURL ||
                    "https://github.com/responsively-org/responsively-app/releases"
                  }
                >
                  <span className="m-1">Download for Windows</span>
                </a>
              </div>
            </div>
            <div
              className="col-md-4 mb-2"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="bg-light rounded p-3">
                <div className="icon-round bg-primary mx-auto mb-4">
                  <img
                    className="icon"
                    src="assets/img/icons/custom/linux-icon.svg"
                    alt="icon"
                  />
                </div>
                <a
                  id="linuxOs"
                  className="m-1 btn btn-outline-primary mx-2"
                  href={
                    linuxURL ||
                    "https://github.com/responsively-org/responsively-app/releases"
                  }
                >
                  <span className="m-1">Download for Linux</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="has-divider">
        <div className="divider flip-x bg-primary-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            width="100%"
            height="96px"
            viewBox="0 0 100 100"
            version="1.1"
            preserveAspectRatio="none"
            className="injected-svg"
            data-src="assets/img/dividers/divider-3.svg"
          >
            <path d="M0,0 C6.83050094,50 15.1638343,75 25,75 C41.4957514,75 62.4956597,0 81.2456597,0 C93.7456597,0 99.9971065,0 100,0 L100,100 L0,100"></path>
          </svg>
        </div>
        <div className="container text-center mt-1" id="instructions">
          <p>
            <em>
              If you are a linux user, please follow the{" "}
              <a
                href="https://docs.appimage.org/introduction/quickstart.html#ref-how-to-run-appimage"
                target="_blank"
                rel="noreferrer"
              >
                instructions here
              </a>{" "}
              after downloading the <code>.AppImage</code> file.
            </em>
          </p>
          <p>
            <em>
              Please feel free to contact us on{" "}
              <a
                href="https://github.com/responsively-org/responsively-app/issues"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
              , if you need any help.
            </em>
          </p>
        </div>
        <div className="divider">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            width="100%"
            height="96px"
            viewBox="0 0 100 100"
            version="1.1"
            preserveAspectRatio="none"
            className="injected-svg"
            data-src="assets/img/dividers/divider-2.svg"
          >
            <path d="M0,0 C16.6666667,66 33.3333333,99 50,99 C66.6666667,99 83.3333333,66 100,0 L100,100 L0,100 L0,0 Z"></path>
          </svg>
        </div>
      </div>
    </>
  );
};

export default Download;