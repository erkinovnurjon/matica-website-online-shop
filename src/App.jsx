import { BrowserRouter as Router , Route , Routes } from "react-router-dom"
import Home from "./Pages/Home"
import Login from "./Pages/Login"
import Header from "./Components/Header"
import About from "./Components/About"


function App() {
  

  return (
    <>
      <div>
        <Router>
          <Header />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/about" element={<About />} />


          </Routes>
        </Router>
      </div>
      
    </>
  )
}

export default App
