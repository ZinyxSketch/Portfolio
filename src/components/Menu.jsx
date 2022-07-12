import React, { useEffect, useState } from 'react';
import { NavLink } from "react-router-dom";
import Music from '../Music Disc.png';
import Logo from "./Logo";

export default function Menu(){
    const audioTune = new Audio("assets/music/(Daystar)-Sugar Cookie.mp3")
    const [isPlaying, setIsPlaying] = useState(false);

    useEffect(() => {
 
    }, [isPlaying])

    const handleMusic = (event) => {
        event.preventDefault()
        setIsPlaying(!isPlaying)
        if(isPlaying){
            audioTune.pause()
            console.log(isPlaying,"unplay")
        }
        else{
            audioTune.play()
            console.log(isPlaying,"play")
        }
        console.log("changed",isPlaying)
    }
    return(
        <> 
            <nav className="Header">
                <ul className="Menu">
                    <li>ZinyxSketch</li>
                    <li><NavLink  className={({ isActive }) => isActive ? "HotBlue" : "blue"} to="/">Home</NavLink></li>
                    <li><NavLink  className={({ isActive }) => isActive ? "HotBlue" : "blue"} to="/illustrations">Illustrations</NavLink></li>
                    <li><NavLink  className={({ isActive }) => isActive ? "HotBlue" : "blue"} to="/projects">Projects</NavLink></li>
                    <li><NavLink  className={({ isActive }) => isActive ? "HotBlue" : "blue"} to="/about">About</NavLink></li>
                    <li><NavLink  className={({ isActive }) => isActive ? "HotBlue" : "blue"} to="/contact">Contact</NavLink></li>
                    <li><NavLink  className={({ isActive }) => isActive ? "HotBlue" : "blue"} to="/freebies">Freebies</NavLink></li>
                    <ul className="Menu-Social">
                    <li> <a href="https://www.behance.net/zinyxsketch" target="_blank" rel="noopener noreferrer"><img src="assets/images/behance.png" alt="be"/></a>
                       </li><li> <a href="https://www.instagram.com/zinyxsketch/" target="_blank" rel="noopener noreferrer"><img src="assets/images/insta.png" alt="insta"/></a>
                       </li><li><a href="https://twitter.com/_Zinyx_" target="_blank" rel="noopener noreferrer"><img src="assets/images/twitter.png" alt="twi"/></a>
                    </li>
                    </ul>
                </ul>


            </nav>
        </>
    )
}