import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
  { number: 10, suffix: "+", label: "Unique Chai Varieties" },
  { number: 500, suffix: "+", label: "Happy Customers Daily" },
  { number: 2022, suffix: "", label: "Established" },
  { number: 100, suffix: "%", label: "Fresh Ingredients" },
];

const AnimatedCounter = ({ target, suffix }: { target: number; suffix: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    const duration = 2000;
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [inView, target]);

  return (
    <span ref={ref} className="font-display text-4xl md:text-5xl font-bold text-chai-ivory">
      {count}{suffix}
    </span>
  );
};

const StatsBar = () => {
  return (
    <section className="bg-primary py-10 md:py-14">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="text-center"
            >
              <AnimatedCounter target={stat.number} suffix={stat.suffix} />
              <p className="font-body text-sm text-chai-gold mt-2 tracking-wide">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsBar;
