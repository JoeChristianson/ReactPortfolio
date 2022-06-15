export const Collaborator = ({c})=>{
    return(<div className="collaborator">
        <span>{`${c.first} ${c.last}`}</span>
        {c.portfolio?<a href={c.portfolio}>Portfolio</a>:null}
        <a href={c.github}>Github</a>
    </div>)
}