import Button from "../Button/Button";
import Experience from "../Experience/Experience";
import EXPERIENCES from "./EXPERIENCES.json";
import Image from "../Image/Image";
import "./Main.css";
import MyImage from "./photo_2023-12-23_10-39-29.jpg";

const Main = () => {
  return (
    <div className="main-style">
      <div className="slef-informetion">
        <Image imgSrc={MyImage} imgAlt="FatemeRs" className={"main-image"} />
        <h1 className="title">I'm Fateme Rajabi </h1>
        <p className="paragraph">FrontEnd Developer based in Tehran, Iran</p>
      </div>
      <div>
        <div className="conect">
          <h2>Passionate creating great experiences for Front End Developer</h2>
          <div>
            <Button className={"black-btn"}> Talk with me</Button>
            <Button> See my work</Button>
          </div>
        </div>
        <div className="experince">
          <h4>Working experience</h4>
          <Experience  data={EXPERIENCES}/>
        </div>
      </div>
    </div>
  );
};
export default Main;
