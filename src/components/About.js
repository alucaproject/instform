import "../styles/about.css";

const About = () => {

    return (
        <section className="section__container about__container" id="about">
           
            <div className="about__header">
                <div>
                    <h2 className="section__subheader">About Us</h2>
                    <h3 className="section__header">
                        Security services for Tulsa and surrounding areas.
                    </h3>
                </div>
                <p className="section__description">
                    Protecting your assets shouldn’t be complicated! At Instform, 
                    we understand the importance of simplicity and effectiveness 
                    when it comes to security. Our vigilant security team ensures 
                    the safety and integrity of our environment. From proactive 
                    monitoring to swift action, count on us to safeguard what 
                    matters most. Contact us today to experience security made simple! 
                </p>
            </div>
            
            <div className="about__grid">
                <div className="about__card">
                    <h4>MONITORING</h4>
                    <p>Monitoring surveillance equipment and access points</p>
                </div>
                <div className="about__card">
                    <h4>SECURE PREMISES</h4>
                    <p>Investigating suspicious behaviour, security breaches and incidents</p>
                </div>
                <div className="about__card">
                    <h4>REPORTING</h4>
                    <p>Recording observations, information and occurrences</p>
                </div>
            </div>

        </section>
    )
}

export default About;
