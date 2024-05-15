import "../styles/header.css";
import {useState, useEffect} from 'react';
import {motion, AnimatePresence} from 'framer-motion';
import backgroundImage from "../assets/photos_webp/jon-grogan-mB_yu9FBVeo-unsplash1920x1272.webp";

var backgroundImageStyle = {
    backgroundImage: `linear-gradient(0.05turn, rgba( 0, 0, 0, .99), rgba( 17, 23, 43, .40), rgba( 17, 23, 43, .70)),
    url(${backgroundImage})`,
}

var textParent = {
    initial: {
        y: 0,
    },
    animate: {
        y: 0,
        transition: {
            delayChildren: 1,
            staggerChildren: 0.2,
            staggerDirection: 1,
        }
    },
    exit: {}
}
var textChild = {
    initial: {
        y: 100,
    },
    animate: {
        y: 0,
        transition: {
            duration: 1,
            ease: [0.33, 1, 0.68, 1], // easeOutCubic easings.net
        }
    },
    exit: {}
}

const Header = () => {

    const [showPreLoader, setShowPreLoader] = useState(true);

    useEffect( () => {

        // showPreLoader = true - preloader is visible.
        // showPreLoader = false - preloader not visible.
        // timer =  1000 - 1 second. 
        const timer = setTimeout( () => {
            /* setShowPreLoader(false); */

            /* 
            we will try and load backgroundImage 
            before lifting pre loader with fetch. 
            */
            fetch( backgroundImage )
                .then( console.log("background image loaded") )
                .then( setShowPreLoader(false) );
        }, 0);

        return () => clearTimeout(timer);

    },[])


    return (
        <>
            <header style={backgroundImageStyle}>
                <div className="section__container header__container" id="home">

                    <motion.div 
                    variants={textParent}
                    initial="initial"
                    animate="animate">
                        <div style={{overflow:"hidden"}}>
                            <motion.p
                            variants={textChild}
                            >SECURITY SOLUTIONS</motion.p>
                        </div>
                        <div style={{overflow:"hidden"}}>
                            <motion.h1
                            variants={textChild}
                            >Experience</motion.h1>
                        </div>
                        <div style={{overflow:"hidden"}}>
                            <motion.h1
                            variants={textChild}
                            >Security Made</motion.h1>
                        </div>
                        <div style={{overflow:"hidden"}}>
                            <motion.h1
                            variants={textChild}
                            >Simple</motion.h1>
                        </div>

                    </motion.div>


                </div>
            </header>

            {/* This is the pre-loader that loader.js transitions to */}
            <AnimatePresence>
            { showPreLoader && 
            
                <motion.div 
                        className="pre_loader_container"
                        initial={{ scaleY: 1 }}
                        animate={{ scaleY: 1 }}
                        exit={{scaleY: 0 }}
                        transition={{ delay: 0.8, duration: 1.5, ease:[0.33, 1, 0.68, 1] }} // easeOutCubic easings.net
                >
                    <div className="pre_loader_wrapper">

                        <div className="pre_loader_subheading">
                            <motion.p
                            initial={{y: 0}}
                            animate={{y: 0}}
                            exit={{y: -50}}
                            transition={{delay: 0.2, duration: 1, ease: [0.65, 0, 0.35, 1], }}>
                                SECURITY SOLUTIONS
                            </motion.p>
                        </div>

                    </div>
                </motion.div>

            }
            </AnimatePresence>
        </>
    )
}

export default Header;
