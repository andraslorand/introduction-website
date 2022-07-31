import ProjectTag from "../design-tags/ProjectTag"
import testimg from "../images/colorpalet.jpg"
import toodo from "../images/todo.PNG"
import calculator from '../images/calculator.PNG'
import counter from '../images/counter.PNG'
function Projects(){
    return <div className="main">
        <h2>Projects</h2>
        <p>Here are a few of my projects what I did recently</p>

        <ProjectTag title="to-Do" img={toodo} description="a to-do list app" link="/Todo"/>
        <ProjectTag title="Calculator" img={calculator} description="a simple calculator" link="/Cal"/>
        <ProjectTag title="Counter" img={counter} link="/Count"/>
        
    </div>
}
//<ProjectTag title="API call" img={testimg} description="Just a simple API call so I can learn hoe it works" link="/API"/>

export default Projects