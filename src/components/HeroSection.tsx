import { motion } from "framer-motion";
import heroImage from "@/assets/hero-chai.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="relative h-screen w-full overflow-hidden">
      {/* Background image */}
      <img
        src={heroImage}
        alt="Masala chai in a traditional kulhad with aromatic spices"
        className="absolute inset-0 w-full h-full object-cover"
        width={1920}
        height={1080}
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-chai-charcoal/90 via-chai-charcoal/50 to-chai-charcoal/30" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="font-body text-sm tracking-[0.3em] uppercase text-chai-gold mb-6"
        >
          Welcome to
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-chai-ivory leading-tight max-w-4xl"
        >
          Not Just Chai.
          <br />
          <span className="italic text-chai-gold">It's an Experience.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="font-body text-lg md:text-xl text-chai-ivory/80 mt-6 max-w-2xl leading-relaxed"
        >
          Handcrafted blends, bold flavors, and a vibe that feels like home — right in the heart of Amravati.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
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
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 12, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <svg width="24" height="36" viewBox="0 0 24 36" fill="none" className="text-chai-ivory/60">
          <rect x="1" y="1" width="22" height="34" rx="11" stroke="currentColor" strokeWidth="2" />
          <motion.circle
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            cx="12" cy="10" r="3" fill="currentColor"
          />
        </svg>
      </motion.div>
    </section>
  );
};

export default HeroSection;
