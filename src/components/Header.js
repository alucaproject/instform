import "../styles/header.css";
import {motion, useScroll, useTransform} from 'framer-motion';

var textParent = {
    initial: {
        y: 0,
    },
    animate: {
        y: 0,
        transition: {
            delayChildren: 0.15,
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
    return (
        <header>
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
    )
}

export default Header;