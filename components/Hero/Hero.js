import React from 'react';
import './Hero.css';
import { motion } from "framer-motion";

const Hero = () => {
    return (
        <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }} 
            className="hero">
            <div className="hero-content">
                <motion.h3
                    initial={{ y: -250 }}
                    animate={{ y: -10 }}
                    transition={{ type: 'spring', stiffness: 120 }}
                    className="hero-title">
                    Welcome to Our Consulting Business
                </motion.h3>
                <motion.p
                    initial={{ y: -250 }}
                    animate={{ y: -10 }}
                    transition={{ type: 'spring', stiffness: 120, delay: 0.2 }}
                    className="hero-description">
                    We help businesses navigate their digital transformation.
                </motion.p>
                <motion.button
                    whileHover={{ scale: 1.1, backgroundColor: "#a100ff", transition: { duration: 0.3 } }}
                    whileTap={{ scale: 0.9 }}
                    className="rad-button hero-button">
                    Learn More
                </motion.button>
            </div>
        </motion.div>
    );
};

export default Hero;

