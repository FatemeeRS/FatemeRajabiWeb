import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Proudacts from "../Proudacts/Proudacts";
import Layout from "../Layout/Layout";
import About from "../About/About";
import Contact from "../Contact/Contact";
import Main from "../Main/main";
import Blog from "../Blog/Blog";
import ThemeContext from "../../context/ThemeContext";
import themeConfigs from "../../configs/theme";
import generalConfigs from "../../configs/generalTheme";
import Emoji from "../Emoji/Emoji";

const App = () => {
  const [activeTheme, setActiveTheme] = useState("light");
  return (
    <ThemeContext.Provider
      value={{
        theme: themeConfigs[activeTheme],
        setActiveTheme,
        generalTheme: generalConfigs[activeTheme]
      }}
    >
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Proudacts />} />
            <Route path="/fateme" element={<Main />} />
            <Route path="/blog" element={<Blog />} />

            <Route path="/about" element={<About />} />

            <Route path="/contact" element={<Contact />} />
            <Route path="/emoji" element={<Emoji/>} />
          </Routes>
        </Layout>
      </Router>
    </ThemeContext.Provider>
  );
};

export default App;
