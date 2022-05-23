import avatar from "../../images/Profile.png"
import "../../styles/about-me.css"
function AboutMe() {
    return (
      <div id="about-me-section">
      <p className="h-spacer">I'm Joe. Nice to meet you.

      I am a multi-talented individual who is just beginning his coding journey. I have a history in both the business world and in academia that complement each other well for the creation of commercial web projects. I understand what businesses are typically looking for and speak their language well. Also, I have experience in very precise thinking that came with years of philosophy writing and argumentation.
      
      I find joy in coding and the problem solving that comes along with it. I am voracious when it comes to learning new tools, but also learning old tools in depth.</p>
      <img className="h-spacer" id="avatar" src={avatar}></img>
      </div>
    );
  }
  
  export default AboutMe;