import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import aboutImage from "@/assets/about-cafe.jpg";

const features = [
  { icon: LeafIcon, label: "Fresh Daily" },
  { icon: CupIcon, label: "10+ Chai Blends" },
  { icon: HomeIcon, label: "Cozy Seating" },
];

const AboutSection = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const imgY = useTransform(scrollYProgress, [0, 1], [60, -60]);

  return (
    <section id="about" ref={ref} className="py-20 md:py-28 bg-muted/30 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Parallax Image */}
          <motion.div
            style={{ y: imgY }}
            className="relative will-change-transform"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="rounded-2xl overflow-hidden shadow-2xl"
            >
              <img
                src={aboutImage}
                alt="The Chai Station cozy café interior"
                loading="lazy"
                width={800}
                height={1024}
                className="w-full h-[400px] md:h-[550px] object-cover"
              />
            </motion.div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-accent rounded-2xl -z-10 opacity-40" />
            <div className="absolute -top-4 -left-4 w-16 h-16 bg-primary rounded-xl -z-10 opacity-30" />
          </motion.div>

          {/* Text */}
          <div>
            <motion.p
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="font-body text-sm tracking-[0.3em] uppercase text-accent mb-3"
            >
              Our Story
            </motion.p>
            <div className="overflow-hidden">
              <motion.h2
                initial={{ y: "100%" }}
                whileInView={{ y: "0%" }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight"
              >
                Born in Amravati,
                <br />
                <span className="italic text-primary">Brewed with Love</span>
              </motion.h2>
            </div>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="font-body text-base md:text-lg text-muted-foreground mt-6 leading-relaxed"
            >
              The Chai Station isn't just a café — it's a feeling. Nestled in the heart of Amravati, we started with one mission: to give this city a chai experience it deserves. Every blend we serve is crafted from hand-picked ingredients, slow-brewed to perfection, and served with the warmth of a desi home.
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="font-body text-base md:text-lg text-muted-foreground mt-4 leading-relaxed"
            >
              Whether you're here for your morning ritual, a late-night chat, or just a quick bite — we'll always have your cup ready.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="font-script text-2xl text-primary mt-6"
            >
              — Om Tiwalkar, Founder
            </motion.p>

            <div className="flex flex-wrap gap-4 mt-8">
              {features.map((f, i) => (
                <motion.div
                  key={f.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.8 + i * 0.1, type: "spring", stiffness: 200 }}
                  className="flex items-center gap-2 px-4 py-2.5 bg-background rounded-full border border-border shadow-sm"
                >
                  <f.icon className="w-5 h-5 text-secondary" />
                  <span className="font-body text-sm font-medium text-foreground">{f.label}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

function LeafIcon({ className }: { className?: string }) {
  return (<svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 20A7 7 0 019.8 6.9C15.5 4.9 20 4 20 4s0 4.5-2 10.2A7 7 0 0111 20z" /><path d="M5.7 18.3L20 4" /></svg>);
}
function CupIcon({ className }: { className?: string }) {
  return (<svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 8h1a4 4 0 110 8h-1" /><path d="M3 8h14v9a4 4 0 01-4 4H7a4 4 0 01-4-4V8z" /><line x1="6" y1="2" x2="6" y2="4" /><line x1="10" y1="2" x2="10" y2="4" /><line x1="14" y1="2" x2="14" y2="4" /></svg>);
}
function HomeIcon({ className }: { className?: string }) {
  return (<svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" /><polyline points="9 22 9 12 15 12 15 22" /></svg>);
}

export default AboutSection;
