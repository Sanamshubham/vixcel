import { motion } from "framer-motion";

const Home = () => {
  return (
    <div>
      {/* HERO SECTION */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-background to-secondary/20">
        <div className="container mx-auto px-4 text-center">
         
          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight"
          >
            Welcome to your trusted destination for{" "}
            <motion.span
              whileHover={{ scale: 1.1, color: "#8B4513" }}
              className="text-primary cursor-pointer inline-block"
            >
              custom-built storage
            </motion.span>{" "}
            solutions
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="text-xl text-muted-foreground mt-6 max-w-3xl mx-auto leading-relaxed"
          >
           Whether it's tools cart, industrial workstations, safety cabinets, secured lockers or heavy duty cabinets, we bring
           precision, safety, and elegance to every corner of your space
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mt-10"
          >
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#services"
              className="bg-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold text-lg shadow hover:bg-primary/90"
            >
              Explore Our Services
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#solution"
              className="border border-input px-8 py-4 rounded-lg font-semibold text-lg hover:bg-accent hover:text-accent-foreground"
            >
              View Solutions
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            Crafted for Strength, Designed for Style
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            viewport={{ once: true }}
            className="text-lg opacity-90 mb-12"
          >
            Premium Lockers, Cabinets, and Industrial workstations That Last a Lifetime.
          </motion.p>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            {[
              "Premium Quality Materials",
              "Custom Design Solutions",
              "Professional Installation",
              "Lifetime Durability",
              "Security Features",
              "Space Optimization",
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.10 }}
                viewport={{ once: true }}
                whileHover={{
                  scale: 1.1,
                  rotate: -1,
                  backgroundColor: "rgba(255,255,255,0.1)",
                }}
                className="flex items-center justify-center gap-2 bg-white/10 p-4 rounded-lg shadow-md cursor-pointer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-accent"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M20 6 9 17l-5-5" />
                </svg>
                <span className="text-sm md:text-lg">{feature}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


{/* INTERACTIVE LINES SECTION */}
<section className="py-20 lg:py-32 bg-gradient-to-br from-white to-gray-50">
  <div className="container mx-auto px-4 text-center">
    {[
      "Welcome to your trusted destination for custom built storage solutions",
      "Whether it’s tool carts, industrial workstations, safety cabinets, secured lockers, or heavy-duty cabinets",
      "We bring precision, safety, and elegance to every corner of your space",
      "Crafted for Strength, Designed for Style",
      "Premium lockers, cabinets, and industrial workstations that last a lifetime",
    ].map((line, i) => (
      <motion.p
        key={i}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: i * 0.4 }}
        viewport={{ once: true, amount: 0.4 }}
        className="text-lg md:text-xl text-primary font-semibold mb-6 max-w-3xl mx-auto leading-relaxed tracking-wide"
      >
        {line}
      </motion.p>
    ))}
  </div>
</section>

    </div>
  );
};

export default Home;
