const Footer = () => {
  return (
    <footer className="bg-chai-charcoal py-16">
      <div className="container mx-auto px-4 text-center">
        {/* Logo */}
        <h3 className="font-display text-2xl md:text-3xl font-bold text-chai-ivory">
          The Chai Station
        </h3>
        <p className="font-body text-chai-ivory/60 italic mt-2">
          "Where Every Sip Has a Story"
        </p>

        {/* Nav links */}
        <div className="flex flex-wrap justify-center gap-6 mt-8">
          {["Home", "Our Menu", "About Us", "Find Us"].map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase().replace(/\s+/g, "")}`}
              className="font-body text-sm text-chai-ivory/50 hover:text-chai-gold transition-colors duration-300"
            >
              {link}
            </a>
          ))}
        </div>

        <div className="w-16 h-px bg-chai-ivory/20 mx-auto my-8" />

        <p className="font-body text-sm text-chai-ivory/40">
          © 2025 The Chai Station, Amravati. Founded by Om Tiwalkar. All rights reserved.
        </p>
        <p className="font-body text-xs text-chai-ivory/30 mt-2">
          Designed with ☕ and love in Maharashtra
        </p>
      </div>
    </footer>
  );
};

export default Footer;
