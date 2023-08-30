"use client";


import React from 'react'



const webDeveloperSkills: string[] = [
    "HTML5",
    "CSS3",
    "JavaScript",
    "TypeScript",
    "React.js",
    "Angular",
    "Vue.js",
    "Responsive Web Design",
    "Bootstrap",
    "SASS/SCSS",
    "Webpack",
    "Node.js",
    "Express.js",
    "RESTful APIs",
    "GraphQL",
    "Version Control (e.g., Git)",
    "Front-end Frameworks",
    "Back-end Frameworks",
    "Database Management (e.g., SQL, MongoDB)",
    "Web Security",
    "Performance Optimization",
    "Cross-browser Compatibility",
    "Debugging",
    "User Experience (UX) Design",
    "User Interface (UI) Design",
    "Progressive Web Apps (PWAs)",
    "Web Accessibility (WCAG)",
    "SEO (Search Engine Optimization)",
    "Testing and Debugging Tools",
    "Continuous Integration/Continuous Deployment (CI/CD)",
    "Agile/Scrum Methodologies",
    "Problem Solving",
    "Communication Skills",
    "Collaboration",
  ];
  

  
  
  
  
  
  


import { motion, useScroll } from 'framer-motion';

const Stagger = () => {
  return (
    <div className=' mx-auto  flex  justify-center p-5 w-full   overflow-scroll  '>
          <motion.div
    className=' bg-black flex justify-center  mt-20 flex-col items-start     text-white text-2xl text start first:mt-10 overflow-ellipsis'
    >

        {
            webDeveloperSkills.map((skill, index) => (
                <motion.div
                className=' text-start hover:underline'
                    key={index}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: index * 0.2 }}
                >
                    {skill}
                </motion.div>
            ))
        }
        
      
    </motion.div>

    </div>

  )
}

export default Stagger
