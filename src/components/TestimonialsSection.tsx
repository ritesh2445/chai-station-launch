import { motion } from "framer-motion";

const reviews = [
  {
    text: "This place is literally my daily chai stop. The Masala Chai here hits different — no other place in Amravati comes close!",
    name: "Rahul M.",
    location: "Amravati",
    stars: 5,
  },
  {
    text: "The Double Smash Burger + a cold coffee combo? Absolutely elite. Pocket-friendly and SO worth it.",
    name: "Priya K.",
    location: "Amravati",
    stars: 5,
  },
  {
    text: "The vibes are immaculate. Great playlist, amazing chai, and the staff is super friendly. Must visit!",
    name: "Aryan D.",
    location: "Amravati",
    stars: 5,
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            What Amravati is Saying
          </h2>
          <div className="w-16 h-1 bg-accent mx-auto mt-6 rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {reviews.map((review, i) => (
            <motion.div
              key={review.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              className="bg-card border border-border rounded-2xl p-8 hover-lift relative"
            >
              {/* Quote mark */}
              <span className="font-display text-6xl text-primary/20 absolute top-4 left-6 leading-none">"</span>

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: review.stars }).map((_, j) => (
                  <svg key={j} className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              <p className="font-body text-foreground leading-relaxed relative z-10">
                "{review.text}"
              </p>

              <div className="mt-6 pt-4 border-t border-border">
                <p className="font-body font-semibold text-foreground">{review.name}</p>
                <p className="font-body text-sm text-muted-foreground">{review.location}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
