import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./components/header.js"
import Main from "./components/main.js"
import Footer from "./components/footer.js"
import projects from "./data/projects"
import background from "./images/background.jpg"

function App() {
  console.log(projects)
  const [section,setSection]=useState('about-me')

  const handleNavAction = (e)=>{
    const action = e.target.dataset.action
    setSection(action)
  }

  

  return (
    <div style={{ backgroundImage: "url(/images/background.jpg)" }} className="App">
      <Header handleNavAction={handleNavAction} section={section}></Header>
      <Main section={section} projects={projects}></Main>
      <Footer></Footer>
    </div>
  );
}

export default App;
