import { motion } from "framer-motion";

const MenuCTABanner = () => {
  return (
    <section className="relative py-20 md:py-24 bg-secondary overflow-hidden">
      {/* Subtle leaf pattern */}
      <div className="absolute inset-0 opacity-[0.06]">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="leaf-pattern" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M30 10c-5 5-10 15-5 25s15 10 20 5 5-15 0-25-10-10-15-5z" fill="currentColor" className="text-chai-ivory" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#leaf-pattern)" />
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-secondary-foreground">
            Explore Our Full Menu
          </h2>
          <p className="font-body text-lg text-chai-ivory/80 mt-4 max-w-xl mx-auto">
            Chai, bites, and everything in between — there's always something new brewing.
          </p>
          <a
            href="#menu"
            className="inline-block mt-8 px-10 py-4 bg-accent text-accent-foreground font-body font-semibold rounded-full transition-all duration-300 hover:shadow-xl hover:shadow-accent/30 hover:scale-105"
          >
            See Full Menu
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default MenuCTABanner;
