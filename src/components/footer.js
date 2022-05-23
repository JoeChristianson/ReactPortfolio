import "../styles/footer.css"
import githubLogo from "../images/git-hub-logo.png"
import linkedInLogo from "../images/linked-in-logo.png"

function Footer() {
    return (
      <footer className="header">
<div id="social-links">
        <ul id="social-links-list">
          {/* <!-- These do not link to my profiles at the moment, any other ones to add? --> */}

          <li>
            <a href="https://www.linkedin.com/in/joseph-christianson-b627a113/"
              ><img src={linkedInLogo}
            /></a>
          </li>
          <li>
            <a href="https://github.com/JoeChristianson"
              ><img src={githubLogo}
            /></a>
          </li>
        </ul>
      </div>
      </footer>
    );
  }
  
  export default Footer;