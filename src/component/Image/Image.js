import "./Image.css";

const Image = ({ imgSrc, imgAlt, className }) => (
  <img
    className={className ? className : "image-style"}
    src={imgSrc}
    alt={imgAlt}
  />
);

export default Image;
