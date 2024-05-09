import transition from "../transition";

// components 
import Header from "./Header";
import About from "./About";
import Faq from "./Faq";
import Faq2 from "./Faq2";
import Services from "./Services";
import Contact from './Contact';
import Footer from './Footer';

const Home = () => {
    return (
        <>
            <Header />

            <About />

            <Faq2 />

            <Services />

            <Contact />

            <Footer />
        </>
    )
}

export default transition(Home);