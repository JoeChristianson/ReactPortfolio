function Project({project}) {
    return (
      <section>
          <h3>{project.name}</h3>
          <p>{project.description}</p>
      </section>
    );
  }
  
  export default Project;