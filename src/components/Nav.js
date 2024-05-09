import "../styles/nav.css";
import {Link} from "react-router-dom";
import {useState, useEffect} from 'react';
import {motion, AnimatePresence} from 'framer-motion';

const Nav = () => {

    // Framer-motion variants 
    const menuVars = {
       initial: {
        scaleY: 0,
       },
       animate: {
        scaleY: 1,
        transition: {
            duration: 1,
            ease: [0.33, 1, 0.68, 1], 
        },
       },
       exit: {
        scaleY: 0,
        transition: {
            delay: 0.4,
            duration: 1,
            ease: [0.33, 1, 0.68, 1],
        },
       }, 
    }
    const containerVars = {
        initial: {
            transition: {
                staggerChildren: 0.04,
                staggerDirection: -1,
            }
        },
        open: {
            transition: {
                delayChildren: 0.4,
                staggerChildren: 0.04,
                staggerDirection: 1,
            }
        },

    }

    // Highlight navbar sections
    const highlightSectionsHandler = (e) => {
        const appLinks = document.getElementsByClassName("app__link");
        const sections = document.getElementsByClassName("section__container");       
        let activeSection; 

        if(window.innerWidth >= 768 ){
            /* since "sections" and "appLinks" is an 
            HTMLcollection, not an array, use 
            Array.prototype to call forEach() function */
            Array.prototype.forEach.call( sections, (section) => {
                if( window.scrollY >= (section.offsetTop - section.clientHeight / 1) ){
                    activeSection = section.id;
                }
            });

            Array.prototype.forEach.call( appLinks, (appLink) => {                
                if(appLink.href.includes(activeSection)){   
                    document.querySelector(".app__link__active").classList.remove("app__link__active");         
                    appLink.classList.add("app__link__active");
                }
            });

        }
    }
    useEffect( () => {
        window.addEventListener('scroll', highlightSectionsHandler);
        return () => window.removeEventListener('scroll', highlightSectionsHandler);
    }, [highlightSectionsHandler]);

    //nav text color after scroll
    const [color, setColor] = useState("var(--white)");
    // nav text color after scroll handler
    const backgroundColorHandler = (e) => {
        if(window.scrollY > 400){
            setColor("var(--text-light)");
        }else{
            setColor("var(--white)");
        }
    }
    // nav text color scroll event listener
    useEffect( () => {
        window.addEventListener('scroll', backgroundColorHandler);
        return () => window.removeEventListener('scroll', backgroundColorHandler);
    }, [backgroundColorHandler]);


    const [open, setOpen] = useState(false);
    // open/close nav__links
    const toggleMenuHandler = (e) => {
        if(window.innerWidth < 768){
            setOpen( !open );
        }
    };
    // screen resize handler function
    const screenResizeHandler = (e) => {
        if(window.innerWidth > 768){
            setOpen(false); // true if used in desktop view
        }else{
            setOpen(false);
        }
    };
    // add event listener for screen resize
    useEffect( () => {
        window.addEventListener('resize', screenResizeHandler);
        return () => window.removeEventListener('resize', screenResizeHandler);
    }, [screenResizeHandler]);
    // check viewport screen size
    useEffect( () => {
        if(window.innerWidth > 768){
            setOpen(false); // true if used in desktop view
        }else{
            setOpen(false);
        }
    }, []);

    return (

        <nav style={{color: color}}>

            <div className="nav__header">
                <div className="nav__logo">
                    <Link className="" to="/"><span>instform</span></Link>
                </div>
                <div 
                    className="nav__menu__btn" 
                    id="nav-btn"
                    onClick={toggleMenuHandler}    
                >
                    { 
                        !open ? <span>menu</span>  
                        : <span>close</span>}
                </div>
            </div>

            <AnimatePresence>
            {  
                /* mobile viewport */
                open&&
                <motion.div 
                variants={menuVars}
                initial="initial"
                animate="animate"
                exit="exit"
                style={{transformOrigin: "top"}}
                className="nav__links__wrapper">
                    <motion.ul 
                    variants={containerVars}
                    initial="initial"
                    animate="open"
                    exit="initial"
                    className="nav__links__mobile" id="nav-links">
                        <li style={{overflow: "hidden"}}>
                            <MobileNavLink eventOnClick={toggleMenuHandler} href="#home" title="Home"/>
                        </li>
                        <li style={{overflow: "hidden"}}>
                            <MobileNavLink eventOnClick={toggleMenuHandler} href="#about" title="About"/>
                        </li>
                        <li style={{overflow: "hidden"}}>
                            <MobileNavLink eventOnClick={toggleMenuHandler} href="#services" title="Services"/>
                        </li>
                        <li style={{overflow: "hidden"}}>
                            <MobileNavLink eventOnClick={toggleMenuHandler} href="#contact" title="Contact"/>
                        </li>
                    </motion.ul>

                    <ul className="nav__links__mobile nav__links__mobile__secondary">
                        <li>
                            <a className="app__link" href="https://www.instagram.com/instformsecuritysolution">Instagram</a>
                        </li>
                        <li>
                            <a className="app__link" href="https://x.com/instform">X - Twitter</a>
                        </li>
                    </ul>
                </motion.div>
            }
            </AnimatePresence>

            {/* desktop viewport */}
            <ul className="nav__links__desktop" id="nav-links">
                <li>
                    <a className="app__link app__link__active" href="#home">Home</a>
                </li>
                <li>
                    <a className="app__link" href="#about">About</a>
                </li>
                <li>
                    <a className="app__link" href="#services">Services</a>
                </li>
                <li>
                    <a className="app__link" href="#contact">Contact</a>
                </li>
            </ul>


            <div className="nav__btns">
                <a href="mailto:instform@outlook.com"> <button className="btn">Email Us For Quote</button> </a>
            </div>

        </nav>

    )
}

export default Nav;

const MobileNavLink = (props) => {
     
    // Framer-motion variants 
     const mobileLinkVars = {
        initial: {
            y: "30vh",
            transition: {
                duration: 0.5,
                ease: [0.32, 0, 0.67, 0], // easeInCubic easings.net
            }
        },
        open: {
            y: 0,
            transition: {
                duration: 0.7,
                ease: [0.33, 1, 0.68, 1], // easeOutCubic easings.net
            }
        },
        exit: {}
     }

    return (
        <motion.div
        variants={mobileLinkVars}
        style={{display: "inline-block"}}>
            <a className="app__link" onClick={props.eventOnClick} href={props.href}>{props.title}</a>
        </motion.div>
    )
}