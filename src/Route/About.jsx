import { motion } from "framer-motion";

export default function About(){
    return(
        <>
            <div 
                className="About">
                <section className="Hi-Me">
                    <img src="assets/images/r square.png" alt="yours zinyx" loading="lazy" />
                </section>
                <section className="Hi-About">
                    <motion.h1 className="Hi"
                        whileHover={{ scale: 1.2 }}
                        transition={{ type: "spring", stiffness: 100 }}
                        >
                        Namaste n heyaaa! <br />
                    Aditi here aka ZinyxSketch :)</motion.h1>
                    <p>i’m an frontend dev and illustarator Telling the stories with some magical colors.</p>

                    <p>Living in the the beautiful Bastar, India from the most known planet Earth.
                    watching animation and random musicals for fun
                    Collector of lil cute stuff hehe</p>
                    
                    <p>Glad you found me here</p>
                    <ul className="Socials">
                        <li> <a href="https://www.behance.net/zinyxsketch" target="_blank" rel="noopener noreferrer"><img src="assets/images/behance.png" alt="be"/></a> - For the illustrations</li>
                        <li> <a href="https://www.instagram.com/zinyxsketch/" target="_blank" rel="noopener noreferrer"><img src="assets/images/insta.png" alt="insta"/></a> - For my Behind the scenes</li>
                        <li> <a href="https://twitter.com/_Zinyx_" target="_blank" rel="noopener noreferrer"><img src="assets/images/twitter.png" alt="twi"/></a> - For me</li>
                    </ul>
                </section>
            </div>
            
        </>
    )
}