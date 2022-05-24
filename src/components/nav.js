import "../styles/dot.css"

function Nav({handleNavAction,section}) {
    console.log(section)
    return (
      <div className="nav-div">
          {/* title for current section should be highlighted about me is the default */}

        <ul>
            <li data-action="about-me"  className={section==="about-me"?"selected":""} onClick={handleNavAction}>
                About Me
            </li>
            <li data-action="projects" className={section==="projects"?"selected":""} onClick={handleNavAction}>
                Projects
            </li>
            <li data-action="contact" className={section==="contact"?"selected":""} onClick={handleNavAction}>
                Contact
            </li>
            <li data-action="resume" className={section==="resume"?"selected":""} onClick={handleNavAction}>
                Resume
            </li>
        </ul>
      </div>
    );
  }
  
  export default Nav;