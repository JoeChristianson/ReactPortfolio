import Logo from "./logo"
import Nav from "./nav"
import Name from "./name"
import "../styles/header.css"

function Header({handleNavAction,section}) {
    return (
      <header className="header">
          <Nav handleNavAction={handleNavAction} section={section}></Nav>
          <Name/>
      </header>
    );
  }
  
  export default Header;