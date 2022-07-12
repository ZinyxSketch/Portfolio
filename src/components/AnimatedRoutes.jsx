import { Routes, Route, useLocation } from "react-router-dom";
import About from '../Route/About';
import Contact from '../Route/Contact';
import Freebies from '../Route/Freebies';
import App from '../App'; 
import Home from "../Route/Home";
import Projects from "../Route/Projects";
import Illustrations from "../Route/Illustrations";

export default function AnimatedRoutes(){
const location = useLocation();

    return(
        

        <Routes location={location} key={location.key}>
            <Route path="/" element={<App />} >
                <Route path="/" element={<Home />} /> 
                <Route path="/illustrations" element={<Illustrations />} /> 
                <Route path="/projects" element={<Projects />} /> 
                <Route path="/about" element={<About />} /> 
                <Route path="/contact" element={<Contact />} />
                <Route path="/freebies" element={<Freebies />} />
            </Route> 
            <Route
            path="*"
            element={
                <main style={{ padding: "1rem", textAlign: "center" }}>
                <h1>Soooorrrrrieeeee! There's nothing here!</h1>
                <p>Lets go back <a href='/'>Home</a></p>
                </main>
            }
            />
      </Routes>

   
    )}