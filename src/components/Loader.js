import "../styles/loader.css";
import { useEffect } from "react";
import {motion} from "framer-motion";
import backgroundImage from "../assets/photos_webp/jon-grogan-mB_yu9FBVeo-unsplash1920x1272.webp";


const Loader = ( {setLoading} ) => {
    
    useEffect( () => {
        const timer = setTimeout( () => {

            {/* setLoading(false); */}
        
            fetch( backgroundImage )
                .then( setLoading(false) )
                .then( console.log("background image ... loaded") );
        
            }, 2000);

        return () => clearTimeout(timer);
    });

    return(
        <div className="loader__container">
            <div className="loader__wrapper">


                <div className="loader__logo nav__logo">
                    <motion.p
                    initial={{ y: 0 }}
                    animate={{ y: -50, transition: {delay: 0.5, duration: 1, ease: [0.65, 0, 0.35, 1], } } /*easeInOutCubic*/}
                    >
                        <span>instform</span>
                    </motion.p>
                </div>

                <div className="loader__subheading">
                    <motion.p 
                    initial={{ y: 50 }}
                    animate={{ y: 0, transition: {delay: 0.5, duration: 1, ease: [0.65, 0, 0.35, 1], } } /*easeInOutCubic*/}
                    >
                        SECURITY SOLUTIONS
                    </motion.p>
                </div>


            </div>    
        </div>
    );

};

export default Loader;
