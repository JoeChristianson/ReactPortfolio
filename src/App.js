import logo from './logo.svg';
import './App.css';
import Header from "./components/header.js"
import Main from "./components/main.js"
import Footer from "./components/footer.js"

function App() {

  const handleNavAction = ()=>{
    console.log("hey")
  }

  return (
    <div className="App">
      <Header {handleNavAction}></Header>
      <Main></Main>
      <Footer></Footer>
    </div>
  );
}

export default App;
