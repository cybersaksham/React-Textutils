import Navbar from "./components/Navbar";
import Form from "./components/Form";
import React, { useState } from "react";

function App() {
  // Theme states
  const [theme, setTheme] = useState({
    nav: "light",
    bg: "white",
    fg: "black",
  });

  const changeTheme = () => {
    if (theme.bg === "white") {
      setTheme({
        nav: "dark",
        bg: "#080f20",
        fg: "white",
      });
      document.body.style.background = "#080f20";
      document.body.style.color = "white";
    } else {
      setTheme({
        nav: "light",
        bg: "white",
        fg: "black",
      });
      document.body.style.background = "white";
      document.body.style.color = "black";
    }
  };

  return (
    <>
      <Navbar title="TextUtils" theme={theme} toggle={changeTheme} />
      <Form theme={theme} />
    </>
  );
}

export default App;
