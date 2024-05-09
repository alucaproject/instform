import "../styles/faq2.css";
import image from "../assets/photos_webp/jon-grogan-mB_yu9FBVeo-unsplash1920x1272.webp";
import { useRef } from "react";
import { motion, useScroll, useTransform} from "framer-motion";

import Accordion from "./Accordion";


const Faq2 = () => {

    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({target: targetRef});
    const scaleImage = useTransform(scrollYProgress, [1, 0], ["100%", "120%"]); 

    // FAQ data
    const data = [
        {
            id: 0,
            label: "For what area do you provide security services?",
            renderContent: () => (
                <p>
                    Tulsa and surrounding areas.
                </p>
            ),
        },
        {
            id: 1,
            label: "Do you provide security solutions that include armed personnel?",
            renderContent: () => (
                <p>
                    Yes, we are fully trained and licensed to provide both armed and 
                    unarmed security solutions.
                </p>
            ),
        },
        {
            id: 2,
            label: "What kinds of security services are offered by your company?",
            renderContent: () => (
                <p>
                    Our expertise covers a wide range, including 
                    securing warehouses, commercial spaces, neighborhoods, construction 
                    sites, industrial facilities, buildings (occupied or vacant), 
                    retail establishments, and corporate environments.<br/>
                    Feel free to reach out via phone or email to discuss your unique 
                    security needs. 
                </p>
            ),
        },
    ]

    return (
        <section className="section__container faq__container" id="faq">
           
            <div className="faq__image">
                <motion.img 
                style={{ scale: scaleImage}}
                transition={{ ease: [0.43, 0.13, 0.23, 0.96] }} 
                ref={targetRef}
                src={image} alt="faq"/>
            </div>
           
            <div className="faq__content">
                <h2 className="section__subheader">Ask By Client</h2>
                <h3 className="section__header">Freaquently Asked Questions</h3>
                <p className="section__description">
                    Got questions? We've got answers! Check out our handy guide below for quick 
                    info to common queries. If you don't find what you're looking for, just 
                    drop us a line - we're here to help!
                </p>
                <Accordion items={data} keepOthersOpen={false}/>
            </div>
        </section>
    );  
}

export default Faq2;