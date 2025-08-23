import { motion } from "framer-motion";
import { useState } from "react";




// Import your images
import img1 from "../assets/image5.jpeg";
import img2 from "../assets/image8.jpg";
import img3 from "../assets/Model 077.jpg";
import img4 from "../assets/Model 071.jpg";
import img5 from "../assets/Model 031.jpg";
// import img6 from "../assets/Model 033.jpg";
// import img7 from "../assets/Model 029.jpg";

const Home = () => {


  const images = [img1, img2, img3, img4, img5];
  const [selectedImage, setSelectedImage] = useState(images[0]);

  return (
    <div>
      {/* HERO SECTION */}
<section className="py-20 lg:py-32 bg-gradient-to-br from-background to-secondary/20">
  <div className="container mx-auto px-5 text-center">

    {/* Title */}
    <motion.h1
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="font-bold text-4xl sm:text-4xl md:text-6xl lg:text-7xl text-foreground leading-tight mb-6"
    >
      Welcome to your trusted destination for{" "}
      <motion.span
        whileHover={{ scale: 1.1, color: "#8B4513" }}
        className="text-primary"
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
      className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground font-semibold max-w-3xl mx-auto leading-relaxed mb-10"
    >
      Whether it's tool carts, industrial workstations, safety cabinets, 
      secured lockers, or heavy-duty cabinets, we bring precision, safety, 
      and elegance to every corner of your space.
    </motion.p>

    {/* Buttons */}
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1, duration: 0.6 }}
      className="flex flex-col sm:flex-row gap-4 justify-center  m-19"
    >
      <motion.a
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        href="/services"
        className="bg-primary text-primary-foreground px-8 py-4 sm:px-10 sm:py-5 rounded-lg font-bold text-base sm:text-lg md:text-xl shadow-lg hover:bg-primary/90"
      >
        Explore Our Services
      </motion.a>
      <motion.a
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        href="#solution"
        className="border border-input px-8 py-4 sm:px-10 sm:py-5 rounded-lg font-bold text-base sm:text-lg md:text-xl hover:bg-accent hover:text-accent-foreground"
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

<section className="py-20 lg:py-32 bg-gradient-to-br from-white to-gray-50">
  <div className="container mx-auto px-4 lg:px-12 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

    {/* LEFT SIDE - IMAGE GALLERY */}
    <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-center sm:items-start w-full">

      {/* Thumbnails */}
      <div className="flex flex-row sm:flex-col gap-3 sm:gap-4 order-2 sm:order-1 flex-wrap justify-center sm:justify-start">
        {images.map((img, i) => (
          <motion.div
            key={i}
            className={`w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-md cursor-pointer border-2 overflow-hidden ${
              selectedImage === img ? "border-primary" : "border-gray-200"
            }`}
            onClick={() => setSelectedImage(img)}
            whileHover={{ scale: 1.05 }}
          >
            <img
              src={img}
              alt={`thumb-${i}`}
              className="w-full h-full object-cover"
            />
          </motion.div>
        ))}
      </div>

      {/* Main Image */}
      <motion.div
        key={selectedImage}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full sm:flex-1 rounded-xl shadow-lg overflow-hidden order-1 sm:order-2"
      >
        <img
          src={selectedImage}
          alt="Selected"
          className="w-full h-auto max-h-[500px] sm:max-h-[600px] object-contain mx-auto"
        />
      </motion.div>
    </div>

    {/* RIGHT SIDE - TEXT CARDS */}
    <div className="space-y-4 sm:space-y-5 text-center md:text-left">
      {[
        "Welcome to your trusted destination for custom built storage solutions",
        "Whether it’s tool carts, industrial workstations, safety cabinets, secured lockers, or heavy-duty cabinets",
        "We bring precision, safety, and elegance to every corner of your space",
        "Crafted for Strength, Designed for Style",
        "Premium lockers, cabinets, and industrial workstations that last a lifetime",
      ].map((line, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: i * 0.2 }}
          viewport={{ once: true, amount: 0.3 }}
          whileHover={{ scale: 1.05, backgroundColor: "#f9fafb" }}
          className="bg-white p-4 sm:p-5 rounded-lg shadow-md hover:shadow-xl cursor-pointer border border-gray-200"
        >
          <motion.p className="text-sm sm:text-base md:text-lg text-primary font-semibold leading-relaxed tracking-wide">
            {line}
          </motion.p>
        </motion.div>
      ))}
    </div>
  </div>
</section>


   </div>

        );
    
};

        export default Home;
