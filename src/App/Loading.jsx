import React from 'react';
import {motion} from 'framer-motion'


 function Loading() {
    return (
        <motion.div style={{ display:'flex'}}
            variants={container}
            initial="hidden"
            animate="show"
        >   
            <motion.div style={{ ...dot }} variants={Bounce} />
            <motion.div style={{ ...dot }} variants={Bounce} />
            <motion.div style={{ ...dot }} variants={Bounce} />
        </motion.div>
        
    );
}

export default Loading

const dot = {
    width: 15,
    height: 15,
    borderRadius: 75,
    margin:"2px",
    backgroundColor: "white",
};

const container = {
    show: {
        transition: {
            staggerChildren: 0.3
        }
    }
}; 

const Bounce = {
    hidden: { opacity: 0 , y: 5 },
    show: { 
        opacity: 1 , y: 0 ,
        transition: {
            repeat: Infinity,
            repeatType: "reverse",
            repeatDelay: 0.7,
        } 
    }
};
