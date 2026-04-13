import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import heroImage from "@/assets/hero-chai.jpg";

const HeroSection = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "60%"]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 1], [0.5, 0.9]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);

  return (
    <section ref={ref} id="home" className="relative h-screen w-full overflow-hidden">
      {/* Parallax background */}
      <motion.div style={{ y: bgY, scale }} className="absolute inset-0 will-change-transform">
        <img
          src={heroImage}
          alt="Masala chai in a traditional kulhad with aromatic spices"
          className="w-full h-[120%] object-cover"
          width={1920}
          height={1080}
        />
      </motion.div>

      {/* Dynamic overlay */}
      <motion.div
        style={{ opacity: overlayOpacity }}
        className="absolute inset-0 bg-gradient-to-t from-chai-charcoal via-chai-charcoal/60 to-chai-charcoal/20"
      />

      {/* Parallax content */}
      <motion.div
        style={{ y: textY }}
        className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-center"
      >
        <motion.p
          initial={{ opacity: 0, clipPath: "inset(0 100% 0 0)" }}
          animate={{ opacity: 1, clipPath: "inset(0 0% 0 0)" }}
          transition={{ delay: 0.3, duration: 1, ease: "easeOut" }}
          className="font-body text-sm tracking-[0.3em] uppercase text-chai-gold mb-6"
        >
          WELCOME TO THE CHAI STATION
        </motion.p>

        <div className="overflow-hidden">
          <motion.h1
            initial={{ y: "100%" }}
            animate={{ y: "0%" }}
            transition={{ delay: 0.5, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-chai-ivory leading-tight max-w-4xl"
          >
            Not Just Chai.
          </motion.h1>
        </div>
        <div className="overflow-hidden">
          <motion.h1
            initial={{ y: "100%" }}
            animate={{ y: "0%" }}
            transition={{ delay: 0.7, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-tight max-w-4xl text-chai-gold drop-shadow-2xl brightness-110 tracking-widest"
          >
            It's an Experience.
          </motion.h1>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="font-body text-lg md:text-xl text-chai-ivory/80 mt-6 max-w-2xl leading-relaxed"
        >
          Handcrafted blends, bold flavors, and a vibe that feels like home — right in the heart of Amravati.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6, duration: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 mt-10"
        >
          <a
            href="#menu"
            className="px-8 py-4 bg-accent text-accent-foreground font-body font-semibold rounded-full transition-all duration-300 hover:shadow-xl hover:shadow-accent/30 hover:scale-105"
          >
            View Our Menu
          </a>
          <a
            href="#about"
            className="px-8 py-4 border-2 border-chai-ivory/40 text-chai-ivory font-body font-semibold rounded-full transition-all duration-300 hover:bg-chai-ivory/10 hover:border-chai-ivory"
          >
            Our Story
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
