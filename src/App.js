import React from "react"
import Nav from "./components/Nav"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./pages/Home.js"




import './App.css';


function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes>

          {/* <Route path="about" component={<About />}/> */}
          <Route exact path="/" component={<Home/>} />
         

        </Routes>

      </div>
    </Router>

  );
}

export default App;
