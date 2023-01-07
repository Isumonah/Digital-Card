import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import Info from "./components/Info"
import About from "./components/About"
import Interests from "./components/Interests"
import Footer from "./components/Footer"
import Projects from "./components/Projects"

export default function App(props){
    console.log(props)
    return (
        <Router>
        <div className="card">
            <Routes>
                <Route exact path='/' element = {
                    <>
                        <Info />
                        <About />
                        <Interests />
                        <Projects />
                        <Footer />
                    </>
                }
            >
                </Route>
            </Routes>
            
        </div>
        </Router>
    )
}