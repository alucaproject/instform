import "../styles/services.css";
import { motion } from "framer-motion";

const servicesParent = {
    initial: { opacity: 1},
    animate: { 
        opacity: 1,
        transition: {
            
        }
    },
    whileInView: {
        opacity: 1,
        transition: {

        }
    },
    exit: {},
}

const servicesChild = {
    initial: {
        opacity: 1,
        y: 100,
    },
    whileInView: {
        opacity: 1,
        y: 0,
        transition: {
            delay: 0.1,
            duration: 1,
            ease: [0.65, 0, 0.35, 1],
        }
    },
    exit: {},
}


const Services = () => {

    return (

        <section className="section__container services__container" id="services">
            
            <h2 className="section__subheader">Services</h2>
            <h3 className="section__header">Available day and night,<br/> 24 hours a day,<br/> 7 days a week.</h3> 
            
            <div className="services__grid">

                <motion.div 
                style={{overflow: "hidden"}}
                variants={servicesParent}
                initial="initial"
                whileInView="whileInView"
                viewport={{once: true}}
                >
                    <motion.div 
                    variants={servicesChild}
                    className="services__card">
                        <img src={require("../assets/photos_webp/toll-road.webp")} alt="services" />
                        <h4>Access Patrol</h4>          
                        <div>
                            { /*
                            <p>description</p> 
                            <a href="#">link</a>
                        */ }
                        </div>
                    </motion.div>
                </motion.div>

                <motion.div 
                style={{overflow: "hidden"}}
                variants={servicesParent}
                initial="initial"
                whileInView="whileInView"
                viewport={{once: true}}
                >
                    <motion.div 
                    variants={servicesChild}
                    className="services__card">
                        <img src={require("../assets/photos_webp/police-car.webp")} alt="services" />
                        <h4>Vehicle Patrol</h4>          
                        <div>
                            { /*
                            <p>description</p> 
                            <a href="#">link</a>
                        */ }
                        </div>
                    </motion.div>
                </motion.div>

                <motion.div 
                style={{overflow: "hidden"}}
                variants={servicesParent}
                initial="initial"
                whileInView="whileInView"
                viewport={{once: true}}
                >
                    <motion.div 
                    variants={servicesChild}
                    className="services__card">
                        <img src={require("../assets/photos_webp/security.webp")} alt="services" />
                        <h4>Perimeter Patrol</h4>          
                        <div>
                            { /*
                            <p>description</p>
                            <a href="#">link</a>
                            */ }
                        </div>
                    </motion.div>
                </motion.div>

                <motion.div 
                style={{overflow: "hidden"}}
                variants={servicesParent}
                initial="initial"
                whileInView="whileInView"
                viewport={{once: true}}
                >
                    <motion.div 
                    className="services__card"
                    variants={servicesChild}
                    >
                        <img src={require("../assets/photos_webp/house.webp")} alt="services" />
                        <h4>Neighborhood Patrol</h4>          
                        <div>
                            { /*
                            <p>description</p>
                            <a href="#">link</a>
                            */ }
                        </div>
                    </motion.div>
                </motion.div>

                <motion.div 
                style={{overflow: "hidden"}}
                variants={servicesParent}
                initial="initial"
                whileInView="whileInView"
                viewport={{once: true}}
                >
                    <motion.div 
                    className="services__card"
                    variants={servicesChild}
                    >
                        <img src={require("../assets/photos_webp/event.webp")} alt="services" />
                        <h4>Event Security</h4>          
                        <div>
                            { /*
                            <p>description</p>
                            <a href="#">link</a>
                            */ }
                        </div>
                    </motion.div>
                </motion.div>

                <motion.div 
                style={{overflow: "hidden"}}
                variants={servicesParent}
                initial="initial"
                whileInView="whileInView"
                viewport={{once: true}}
                >
                    <motion.div 
                    className="services__card"
                    variants={servicesChild}
                    >
                        <img src={require("../assets/photos_webp/shipped.webp")} alt="services" />
                        <h4>Secure Deliveries</h4>          
                        <div>
                            { /*
                            <p>description</p> 
                            <a href="#">link</a>
                            */ }
                        </div>
                    </motion.div>
                </motion.div>
            
            </div>
        
        </section>

    );
}

export default Services;