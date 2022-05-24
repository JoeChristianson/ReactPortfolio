import useImage from "../utils/useImage";
import Badge from "./badge";

function Tech({tech}) {
    const badges = tech.map((t)=>{
        return <Badge tech={t}/>
    })


    return (
      <div className="tech-div">
          {badges}
      </div>
    );
  }
  
  export default Tech;