import useImage from "../../utils/useImage";
import Tech from "../tech.js"
import ProjectsDropDown from "./project-drop-down";
import useWindowDimensions from "../../utils/getDimensions";
import { Collaborator } from "../collaborator";

function Project({project,setProject,projects}) {

    const {width} = useWindowDimensions()
    console.log(width)
    const image = useImage(project.image)
    return (
      <section>
          <section className="left">

            {width<630?(<ProjectsDropDown setProject={setProject} projects={projects}></ProjectsDropDown>):(            <h2>{project.name}</h2>)}


            <a href={project.live}>
              
          <img className="project-image" src={image.image}></img>
            </a>
          <Tech tech={project.tech}></Tech>
          <div className="links-container">
            <a href={project.live}>Live Site</a>
            <a href={project.code}>Code</a>
          </div>
          </section>
        <section className="right">
          <h3>Summary</h3>
          <p>{project.description}</p>
          <h3>Future Development</h3>
          <p>{project.future}</p>
        {project.collaborators[0]?(<section>
            <h3>Collaborators</h3>
            <p>{project.collaborators.map((c)=>{
              return(<Collaborator c={c}/>)
            })}</p>
        </section>):null}
        </section>
        
      </section>
    );
  }
  
  export default Project;