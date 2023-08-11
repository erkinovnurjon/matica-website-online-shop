import { BrowserRouter as Router , Route , Routes } from "react-router-dom"
import Home from "./Pages/Home"
import Login from "./Pages/Login"
import Header from "./Components/Header"


function App() {
  

  return (
    <>
      <div>
        <Router>
          <Header />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />


          </Routes>
        </Router>
      </div>
      
    </>
  )
}

export default App
