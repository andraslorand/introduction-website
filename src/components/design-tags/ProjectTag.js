import { Link } from "react-router-dom";

function ProjectTag(props) {
  return (
    <Link to={props.link}>
    <div className="projecttag">
      <h2>{props.title}</h2>
        <img src={props.img} className="bigimg"></img>
        <p>{props.description}</p>
      
    </div>
    </Link>
  );
}

export default ProjectTag;
