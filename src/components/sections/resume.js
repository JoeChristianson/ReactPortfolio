import resumePDF from "../../other-files/resume.pdf"
import "../../styles/resume.css"

function  Resume() {
    return (
      <div>
        <iframe src={resumePDF}>

        </iframe>
      </div>
    );
  }
  
  export default Resume;