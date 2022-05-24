import useImage from "../../utils/useImage";
import Tech from "../tech.js"

function Project({project}) {

    const image = useImage(project.image)
    return (
      <section>
          <section className="left">
          <img className="project-image" src={image.image}></img>
          <Tech tech={project.tech}></Tech>
          </section>
        <section className="right">
          <p>{project.description}</p>
        </section>

      </section>
    );
  }
  
  export default Project;