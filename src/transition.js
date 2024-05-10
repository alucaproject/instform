import {motion} from "framer-motion";

const transition = (OgComponent) => {
    return () => (
        <>
            <OgComponent />
            
            <motion.div 
                className="slide-in"
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 0 }}
                exit={{ scaleY: 1 }}
                transition={{ duration: 1.5, ease:[0.33, 1, 0.68, 1] }} // easeOutCubic easings.net
            />
            
            <motion.div 
                className="slide-out"
                initial={{ scaleY: 1 }}
                animate={{ scaleY: 0 }}
                exit={{scaleY: 0 }}
                // added delay 0.3 to hide the image rendering 
                transition={{ delay: 0.3, duration: 1.5, ease:[0.33, 1, 0.68, 1] }} // easeOutCubic easings.net
            />
         </>
    )
}

export default transition;