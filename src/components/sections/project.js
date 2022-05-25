import useImage from "../../utils/useImage";
import Tech from "../tech.js"
import ProjectsDropDown from "./project-drop-down";
import useWindowDimensions from "../../utils/getDimensions";

function Project({project,setProject,projects}) {

    const {width} = useWindowDimensions()
    console.log(width)
    const image = useImage(project.image)
    return (
      <section>
          <section className="left">

            {width<630?(<ProjectsDropDown setProject={setProject} projects={projects}></ProjectsDropDown>):(            <h2>{project.name}</h2>)}



          <img className="project-image" src={image.image}></img>
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
        </section>

      </section>
    );
  }
  
  export default Project;