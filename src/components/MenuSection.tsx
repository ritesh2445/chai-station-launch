import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import masalaChai from "@/assets/menu-masala-chai.jpg";
import chocolateChai from "@/assets/menu-chocolate-chai.jpg";
import roseChai from "@/assets/menu-rose-chai.jpg";
import adrakChai from "@/assets/menu-adrak-chai.jpg";
import cheeseSandwich from "@/assets/menu-cheese-sandwich.jpg";
import smashBurger from "@/assets/menu-smash-burger.jpg";
import masalaFries from "@/assets/menu-masala-fries.jpg";
import paneerTikka from "@/assets/menu-paneer-tikka.jpg";

const menuItems = [
  { name: "The Amravati Special Masala Chai", desc: "Our crown jewel — 7 secret spices, slow-brewed for 12 minutes", price: "₹30", image: masalaChai, category: "Chai" },
  { name: "Chocolate Chai", desc: "A rich cocoa twist on a classic — indulgence in every sip", price: "₹35", image: chocolateChai, category: "Chai" },
  { name: "Rose Cardamom Chai", desc: "Delicate, floral, and impossible to forget", price: "₹35", image: roseChai, category: "Chai" },
  { name: "Adrak Tulsi Chai", desc: "Bold ginger heat balanced by fresh holy basil", price: "₹25", image: adrakChai, category: "Chai" },
  { name: "Veg Cheese Sandwich", desc: "Perfectly grilled, oozing cheese, Amravati-style", price: "₹80", image: cheeseSandwich, category: "Bites" },
  { name: "Double Smash Burger", desc: "Two thin patties, house sauce, melted cheese, fresh bun", price: "₹120", image: smashBurger, category: "Bites" },
  { name: "Masala French Fries", desc: "Crispy fries tossed in our secret masala blend", price: "₹70", image: masalaFries, category: "Bites" },
  { name: "Paneer Tikka Sandwich", desc: "Marinated paneer, tangy chutney, smoky char", price: "₹90", image: paneerTikka, category: "Bites" },
];

const MenuCard = ({ item, index }: { item: typeof menuItems[0]; index: number }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [40, -40]);

  return (
    <motion.div
      ref={ref}
      style={{ y }}
      initial={{ opacity: 0, rotateX: 8, scale: 0.95 }}
      whileInView={{ opacity: 1, rotateX: 0, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: index * 0.06, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="group bg-card rounded-2xl overflow-hidden border border-border hover:border-accent/50 cursor-pointer transition-shadow duration-500 hover:shadow-2xl hover:shadow-primary/10"
      style={{ perspective: "800px" }}
    >
      <div className="relative overflow-hidden aspect-square">
        <img
          src={item.image}
          alt={item.name}
          loading="lazy"
          width={640}
          height={640}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="absolute top-3 left-3">
          <span className="px-3 py-1 bg-secondary text-secondary-foreground text-xs font-body font-semibold rounded-full">
            {item.category}
          </span>
        </div>
      </div>
      <div className="p-5">
        <h3 className="font-display text-lg font-semibold text-foreground leading-tight">{item.name}</h3>
        <p className="font-body text-sm text-muted-foreground italic mt-2 leading-relaxed">{item.desc}</p>
        <p className="font-display text-xl font-bold text-accent mt-3">{item.price}</p>
      </div>
    </motion.div>
  );
};

const MenuSection = () => {
  return (
    <section id="menu" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center mb-16"
        >
          <p className="font-body text-sm tracking-[0.3em] uppercase text-accent mb-3">Crafted with Love</p>
          <div className="overflow-hidden">
            <motion.h2
              initial={{ y: "100%" }}
              whileInView={{ y: "0%" }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground"
            >
              Our Signatures
            </motion.h2>
          </div>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="w-16 h-1 bg-primary mx-auto mt-6 rounded-full origin-left"
          />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {menuItems.map((item, i) => (
            <MenuCard key={item.name} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
