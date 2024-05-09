import "../styles/faq.css";
import image from "../assets/photos_webp/jon-grogan-mB_yu9FBVeo-unsplash4899x3245.webp";
import { useRef } from "react";
import { motion, useScroll, useTransform} from "framer-motion";



const Faq = () => {

    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({target: targetRef});
    const scaleImage = useTransform(scrollYProgress, [1, 0], ["100%", "120%"]); 

    // FAQ description handler
    const toggleDescriptionHandler = (e) => {
        const target = e.target;
        const faqCard = target.closest(".faq__card");
        if(target.classList.contains("ri-arrow-down-s-line")){
            if(faqCard.classList.contains("active")){
                faqCard.classList.remove("active");
            }else{
                Array.from(target.children).forEach( (item) => {
                    item.classList.remove("active");
                });
                faqCard.classList.add("active");
            }
        }
    }

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
                <div 
                className="faq__grid"
                onClick={toggleDescriptionHandler}
                >
                    <div className="faq__card">
                        <div className="faq__header">
                            <h4>For what area do you provide security services?</h4>
                            <span><i className="ri-arrow-down-s-line"></i></span>
                        </div>
                        <div className="faq__description">
                            Tulsa and surrounding areas.
                        </div>
                    </div>
                    <div className="faq__card">
                        <div className="faq__header">
                            <h4>Do you provide security solutions that include armed personnel?</h4>
                            <span><i className="ri-arrow-down-s-line"></i></span>
                        </div>
                        <div className="faq__description">
                            Yes, we are fully trained and licensed to provide both armed and 
                            unarmed security solutions.
                        </div>
                    </div>
                    <div className="faq__card">
                        <div className="faq__header">
                            <h4>What kinds of security services are offered by your company?</h4>
                            <span><i className="ri-arrow-down-s-line"></i></span>
                        </div>
                        <div className="faq__description">
                            Our expertise covers a wide range, including 
                            securing warehouses, commercial spaces, neighborhoods, construction 
                            sites, industrial facilities, buildings (occupied or vacant), 
                            retail establishments, and corporate environments.<br/>
                            Feel free to reach out via phone or email to discuss your unique 
                            security needs. 
                        </div>
                    </div>
                </div>    
            </div>
        </section>
    );  
}

export default Faq;