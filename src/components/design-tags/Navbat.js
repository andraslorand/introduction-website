import home from"../images/home4.png"
import skills from "../images/light-bulb.png"
import contact from "../images/contact.png"
import project from "../images/project2.png"
import settings from "../images/settings.png"
import { Link } from "react-router-dom";
function Navbar(){
    return (<nav className="navbar">
    <ul className="navbar-nav">
      <li className="nav-item">
        <Link to="/Mainpage" className="nav-link">
          <img src={home}></img>
          <span className="link-text">Menu</span>
        </Link>
      </li>
      <li className="nav-item">
        <Link to='/Projects' className="nav-link">
          <img src={project}></img>
          <span className="link-text">project</span>
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/Contact" className="nav-link">
          <img src={contact}></img>
          <span className="link-text">Contact me</span>
        </Link>
      </li>
      
      <li className="nav-item">
        <Link to='/Settings' className="nav-link">
          <img src={settings}></img>
          <span className="link-text">settings</span>
        </Link> 
      </li>
    </ul>
  </nav>)
}

export default Navbar