
function ProjectsDropDown({projects,setProject}) {
    const dropDownHandler = (e)=>{
        console.log(e.target.value)
        setProject(projects[e.target.value])
    }
    const options = projects.map((project,i)=>{
        return (
            <option value={i}>{project.name}</option>
        )
    })

    return (
      <section onChange={dropDownHandler}>
          <select>
              {options}
          </select>
      </section>
    );
  }
  
  export default ProjectsDropDown;