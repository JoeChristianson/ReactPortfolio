function Nav() {
    return (
      <div className="logo-div">
        <ul>
            <li data-action="home"  onClick={handleNavAction}>
                Home
            </li>
            <li data-action="projects" onClick={handleNavAction}>
                Projects
            </li>
            <li data-action="contact" onClick={handleNavAction}>
                Contact
            </li>
        </ul>
      </div>
    );
  }
  
  export default Nav;