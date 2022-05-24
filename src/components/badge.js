import useImage from "../utils/useImage";


function Badge({tech}) {

    const image = useImage(tech+".png")
    console.log(image)
    return (
      <img className="badge" src={image.image}></img>
    );
  }
  
  export default Badge;