import { useState } from "react";
import resumePDF from "../../other-files/resume.pdf"
import "../../styles/resume.css"
import useWindowDimensions from "../../utils/getDimensions";

function  Resume() {
const {width} = useWindowDimensions();
console.log(width)
let zoom = (width-300)*0.09375+25
if (zoom>100){
  zoom=100
}
if (zoom<25){
  zoom=25
}
console.log(zoom)
zoom=Math.round(zoom)

const {pdf,setPdf} = useState(`${resumePDF}=zoom`)

    return (
      <div>
        <iframe src={resumePDF+`#zoom=${zoom}`}>

        </iframe>
      </div>
    );
  }
  
  export default Resume;