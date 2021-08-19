import Navbar from "./components/Navbar";
import Form from "./components/Form";
import React, { useState } from "react";
import Alert from "./components/Alert";

function App() {
  // Theme states
  const [theme, setTheme] = useState({
    nav: "#eef3f3",
    nav_fg: "light",
    bg: "white",
    fg: "black",
  });

  // Alert states
  const [alert, setAlert] = useState(null);

  // Function to show alerts
  const showAlert = (type, msg) => {
    setAlert({ type: type, msg: msg });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  // Function to append style
  const appendStyle = (themeObj) => {
    var styleElement = document.getElementById("styles_js");
    if (!styleElement) {
      styleElement = document.createElement("style");
      styleElement.type = "text/css";
      styleElement.id = "styles_js";
      document.getElementsByTagName("head")[0].appendChild(styleElement);
    }
    styleElement.appendChild(
      document.createTextNode(
        `body {background-color: ${themeObj.bg} !important;}`
      )
    );
    styleElement.appendChild(
      document.createTextNode(`body {color: ${themeObj.fg} !important;}`)
    );
    styleElement.appendChild(
      document.createTextNode(
        `#navbar {background-color: ${themeObj.nav} !important;}`
      )
    );
  };
  appendStyle(theme);

  // Function to change theme
  const changeTheme = () => {
    let themeObj = null;

    if (theme.bg === "white")
      themeObj = {
        nav: "#1a23389e",
        nav_fg: "dark",
        bg: "#080f20",
        fg: "white",
      };
    else
      themeObj = {
        nav: "#eef3f3",
        nav_fg: "light",
        bg: "white",
        fg: "black",
      };

    setTheme(themeObj);
    appendStyle(themeObj);
  };

  return (
    <>
      <Navbar title="TextUtils" theme={theme} toggle={changeTheme} />
      <Alert alert={alert} />
      <Form theme={theme} showAlert={showAlert} />
    </>
  );
}

export default App;
