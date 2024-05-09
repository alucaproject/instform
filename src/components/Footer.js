import "../styles/footer.css";


const Footer = () => {
    return (
        <footer id="contact">
            <div className="section__container footer__container">
                <div className="footer__col">
                    <h4>Contact Us</h4>
                    <p><i className="ri-map-pin-fill"></i> Tulsa, Oklahoma</p>
                    <a href="tel:713-705-1544"> <p><i className="ri-phone-line"></i> 713-705-1544</p> </a>
                    <a href="mailto:instform@outlook.com"> <p><i className="ri-mail-line"></i> instform@outlook.com</p> </a>
                    <a href="mailto:instform@outlook.com"> <button className="btn">Contact Us</button> </a>
                </div>
                <div className="footer__col">
                    <h4>Quick Links</h4>
                    <ul className="footer__links">
                        <li><a href="#home">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#services">Services</a></li>
                        <li><a href="#contact">Contact</a></li> 
                    </ul>
                </div>
                <div className="footer__col">
                    <h4>Social Media</h4>
                    <div className="footer__socials">
                        <a href="https://www.instagram.com/instformsecuritysolution" alt="instagram"><i className="ri-instagram-line"></i></a>
                        <a href="https://x.com/instform" alt="x"><i className="ri-twitter-x-fill" alt="x"></i></a>
                    </div>
                </div>
            </div>
            <div className="footer__bar">
                &copy; Instform Security Solution LLC. All rights reserved.<br/>
                Designed and developed by <a href="https://www.alucaproject.com">aLucaProject.com</a>
            </div>
        </footer>
    )
}

export default Footer;