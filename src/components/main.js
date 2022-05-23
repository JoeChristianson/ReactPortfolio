import "../styles/main.css"
import AboutMe from "./sections/about-me";
import Contact from "./sections/contact";
import Projects from "./sections/projects";
import Resume from "./sections/resume";

function Main({section,projects}) {
  const showSection = (section)=>{
    switch (section){
      case "about-me":
        return <AboutMe></AboutMe>
      case "contact":
        return <Contact></Contact>
      case "projects":
        return <Projects projects={projects}></Projects>
      case "resume":
        return <Resume></Resume>
    }
  }

    return (
      <div className="main-div">
          <h2>{section}</h2>
      {showSection(section)}
      </div>
    );
  }
  
  export default Main;