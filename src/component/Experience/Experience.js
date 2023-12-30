import ExperienceItem from "../ExperienceItem/ExperienceItem";
import "./Experience.css"

const Experience = ({ data }) => {
  return (
    <ul >
      {data.map((item) => {
        return <ExperienceItem data={item} key={item.id} />;
      })}
    </ul>
  );
};
export default Experience;
