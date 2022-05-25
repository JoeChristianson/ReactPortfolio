// need six applications descriptions, link to github, live site, screenshots
import Project from "./project";
import React, {useState} from "react";
import "../../styles/projects.css"
import ProjectsDropDown from "./project-drop-down";

function Projects({projects}) {
  const [project,setProject] = useState(projects[0])
  
  const handleProjectChange = (e)=>{
    const index = e.target.dataset.index;
    setProject(projects[index])
  }
  
  const listItems = projects.map((item,i) =>
  <li data-index={i} className={project.name===item.name?"selected":""} onClick={handleProjectChange}>{item.name}</li>
  );

    return (
      <div id="projects-main">
          <Project projects={projects} setProject={setProject} project={project}></Project>
          <aside>
              <ul>
            {listItems}
                </ul>
          </aside>
      </div>
    );
  }
  
  export default Projects;