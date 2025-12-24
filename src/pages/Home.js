import React from "react";
import { motion } from "framer-motion";
import Hyperspeed from "../components/Hyperspeed";
import SplitText from "../components/SplitText";
import AnimatedContent from "../components/AnimatedContent";

const handleAnimationComplete = () => {
  console.log("All letters have animated!");
};

export default function Home() {
  const iconVariants = {
    hidden: { opacity: 0, x: 80 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.5 + i * 0.3, // 👈 décalage progressif (0.3s entre chaque icône)
        duration: 0.8,
        ease: "easeOut",
        type: "spring",
        stiffness: 150,
        damping: 15,
      },
    }),
    hover: {
      scale: 1.25,
      rotate: 8,
      transition: { type: "spring", stiffness: 300, damping: 10 },
    },
  };

  return (
    <div className="home-container">
      <Hyperspeed />

      <div className="home-content">
        <SplitText
          text="ITConceptor"
          className="text-2xl text-center text-home"
          delay={100}
          duration={0.6}
          ease="power3.out"
          splitType="chars"
          from={{ opacity: 0, y: 40 }}
          to={{ opacity: 1, y: 0 }}
          threshold={0.1}
          rootMargin="-100px"
          textAlign="center"
          onLetterAnimationComplete={handleAnimationComplete}
        />

        <motion.p
          className="paragraph-home"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 1,
            duration: 0.8,
            ease: "easeOut",
          }}
        >
          lorem ipsum dolor sit amet, consectetur adipiscing <br /> elit. Sed
          do eiusmod tempor incididunt ut labore et
          <br /> dolore magna aliqua.
        </motion.p>
      </div>

      {/* ✅ Icônes contact animées depuis la droite */}
      <motion.div
        className="contact-section-home fixed right-6 top-1/2 transform -translate-y-1/2 flex flex-col gap-5"
        initial="hidden"
        animate="visible"
      >
        {/* Facebook */}
        <AnimatedContent
          distance={120}
          direction="horizontal"
          reverse={false}
          duration={1}
          ease="easeOut"
          initialOpacity={0}
          animateOpacity
          scale={1.05}
          threshold={0.2}
          delay={0.2}
        >
          <motion.a
            href="https://www.facebook.com/itconceptor"
            target="_blank"
            rel="noopener noreferrer"
            variants={iconVariants}
            custom={0}
            whileHover="hover"
          >
            <i className="fa-brands fa-facebook text-3xl text-blue-500"></i>
          </motion.a>
        </AnimatedContent>

        {/* WhatsApp */}
        <AnimatedContent
          distance={120}
          direction="horizontal"
          reverse={false}
          duration={1}
          ease="easeOut"
          initialOpacity={0}
          animateOpacity
          scale={1.1}
          threshold={0.2}
          delay={0.5} // 👈 apparaît après Facebook
        >
          <motion.a
            href="https://wa.me/261XXXXXXXXX"
            target="_blank"
            rel="noopener noreferrer"
            variants={iconVariants}
            custom={1}
            whileHover="hover"
          >
            <i className="fa-brands fa-whatsapp text-3xl text-green-500"></i>
          </motion.a>
        </AnimatedContent>

        {/* Email */}
        <AnimatedContent
          distance={120}
          direction="horizontal"
          reverse={false}
          duration={1}
          ease="easeOut"
          initialOpacity={0}
          animateOpacity
          scale={1.15}
          threshold={0.2}
          delay={0.8} // 👈 apparaît après WhatsApp
        >
          <motion.a
            href="mailto:contact@itconceptor.com"
            variants={iconVariants}
            custom={2}
            whileHover="hover"
          >
            <i className="fa-solid fa-envelope text-3xl text-gray-600"></i>
          </motion.a>
        </AnimatedContent>

        {/* LinkedIn */}
        <AnimatedContent
          distance={120}
          direction="horizontal"
          reverse={false}
          duration={1}
          ease="easeOut"
          initialOpacity={0}
          animateOpacity
          scale={1.1}
          threshold={0.2}
          delay={1.1} // 👈 apparaît après Email
        >
          <motion.a
            href="https://www.linkedin.com/company/itconceptor"
            target="_blank"
            rel="noopener noreferrer"
            variants={iconVariants}
            custom={3}
            whileHover="hover"
          >
            <i className="fa-brands fa-linkedin text-3xl text-blue-700"></i>
          </motion.a>
        </AnimatedContent>
      </motion.div>
    </div>
  );
}
