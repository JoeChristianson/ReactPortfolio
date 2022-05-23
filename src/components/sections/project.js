import useImage from "../../utils/useImage";


function Project({project}) {

    const image = useImage(project.image)
    console.log(image)
    return (
      <section>
          <h3>{project.name}</h3>
          <p>{project.description}</p>
          <img className="project-image" src={image.image}></img>
      </section>
    );
  }
  
  export default Project;