import Image from "../Image/Image";
import "./ExperienceItem.css"

const ExperienceItem = ({data}) =>{
    return(
        <li className="work-experience" key={data.id}>
            <Image imgSrc={data.logo} imgAlt={data.name} className={"logo"} />
            <div>
                <h3>{data.jobTitle}</h3>
                <h4>{data.CompanyName}</h4>
            </div>
            <p>{`${data.startDate} - ${data.endDate}`}</p>
        </li>
        

    )

}
export default ExperienceItem