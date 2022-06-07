import useImage from "../utils/useImage";
const {useState} = require("react")

function Badge({tech}) {

    const image = useImage(tech+".png")
    const [tooltip,setTooltip] = useState({on:false,x:null,y:null,width:null,text:""})

    const showInfo = (e)=>{
      const text = e.target.dataset.tech;
      const {x,y,width} = e.target;
      setTooltip({on:true,x,y,width,text})
      console.log(tooltip)
    }

    const hideInfo = ()=>{
      setTooltip({on:false,x:null,y:null,width:null,text:""})
    }

    let tooltipStyle = {}
    if(tooltip.on){
      tooltipStyle = {position:"absolute",
    top:"-50px",
    left:"-50px",
    backgroundColor:"black",
    color:"white"
    }
    }

    console.log(tooltipStyle)

    return (
      <>
      {tooltip.on?<div style={{postiion:"fixed",backgroundColor:'black',top:"50px",left:"40px"}} className="tooltip">{tooltip.text}</div>:null}
      <img 
      // onMouseOut={hideInfo} onMouseOver={showInfo} 
      alt={tech} title={tech} data-tech={tech} className="badge" src={image.image}></img>
      </>
    );
  }
  
  export default Badge;