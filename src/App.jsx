import React from "react"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import Home from "./components/Home"
import NavigationBar from "./components/NavigationBar"
import Services from "./components/Services"
import Value from "./components/Value"

function App() {

  return (
    <div className="font-pop bg-gray-200">
      <NavigationBar />
      <Home />
      <Services />
      <Value />
      <Contact />
      <Footer />
    </div>

  )
}

export default App
