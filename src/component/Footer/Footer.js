import { useContext } from "react";
import Button from "../Button/Button";
import "./Footer.css";
import ThemeContext from "../../context/ThemeContext";


const Footer = () => {
  const themeValues = useContext(ThemeContext)
  return (
    <div className="footer">
      <h5>Developed By Fateme</h5>
      <div>
        <Button onClick={() => themeValues.setActiveTheme("light")}  className={"light"}>Light</Button>
        <Button onClick={() => themeValues.setActiveTheme("dark")} className={"dark"}>Dark</Button>
      </div>
    </div>
  );
};
export default Footer;
