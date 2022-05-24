import useImage from "../../utils/useImage";
import Tech from "../tech.js"

function Project({project}) {

    const image = useImage(project.image)
    return (
      <section>
          <section className="left">
            <h2>{project.name}</h2>
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