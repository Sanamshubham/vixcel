import { motion } from "framer-motion";
import { useState } from "react";




// Import your images
import img1 from "../assets/Model 011.jpg";
import img2 from "../assets/Model 012.jpg";
import img3 from "../assets/Model 013.jpg";
import img4 from "../assets/Model 014.jpg";
import img5 from "../assets/images16.jpeg";
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
        href="#"
        className="bg-primary text-primary-foreground px-8 py-4 sm:px-10 sm:py-5 rounded-lg font-bold text-base sm:text-lg md:text-xl shadow-lg hover:bg-primary/90"
      >
        Explore Our Services
      </motion.a>
      <motion.a
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        href="/services"
        className="border border-input px-8 py-4 sm:px-10 sm:py-5 rounded-lg font-bold text-base sm:text-lg md:text-xl hover:bg-accent hover:text-accent-foreground"
      >
        View Solutions
      </motion.a>
    </motion.div>
  </div>
</section>


    <section id="about" className="py-16 sm:py-20 bg-primary">
  <div className="container mx-auto px-4 sm:px-6">
    {/* Title + Description */}
    <div className="text-center max-w-4xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6"
      >
        Why Choose VIXEL?
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
        viewport={{ once: true }}
        className="text-base sm:text-lg md:text-xl text-white/90 font-medium sm:font-bold max-w-3xl mx-auto leading-relaxed px-2"
      >
        We hear your concept, capture your ideas and deliver your product. <br />
        We specialize in crafting high-quality industrial grade cabinets,
        workbenches, lockers and safety products tailored for multiple
        industries like oil and gas, manufacturing, hospitality and education.
      </motion.p>
    </div>

    {/* Cards Section */}
    <div className="max-w-6xl mx-auto mt-10 sm:mt-12 px-2">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
        {/* Card 1 */}
        <motion.div
          whileHover={{ scale: 1.05, y: -5 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="rounded-lg text-center shadow-lg bg-white/90 backdrop-blur border-0 p-6 flex flex-col items-center"
        >
          <div className="w-14 h-14 sm:w-16 sm:h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
            <svg xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7 sm:h-8 sm:w-8 text-primary"
              fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
            </svg>
          </div>
          <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2 text-primary">
            Functionality & Style
          </h3>
          <p className="text-sm sm:text-base text-muted-foreground">
            Combining functionality with style, our designs optimize space while ensuring durability and security.
          </p>
        </motion.div>

        {/* Card 2 */}
        <motion.div
          whileHover={{ scale: 1.05, y: -5 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="rounded-lg text-center shadow-lg bg-white/90 backdrop-blur border-0 p-6 flex flex-col items-center"
        >
          <div className="w-14 h-14 sm:w-16 sm:h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
            <svg xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7 sm:h-8 sm:w-8 text-primary"
              fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
            </svg>
          </div>
          <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2 text-primary">
            Custom Solutions
          </h3>
          <p className="text-sm sm:text-base text-muted-foreground">
            From concept to installation, we deliver tailored storage solutions that elevate interiors and simplify organization.
          </p>
        </motion.div>

        {/* Card 3 */}
        <motion.div
          whileHover={{ scale: 1.05, y: -5 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="rounded-lg text-center shadow-lg bg-white/90 backdrop-blur border-0 p-6 flex flex-col items-center"
        >
          <div className="w-14 h-14 sm:w-16 sm:h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
            <svg xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7 sm:h-8 sm:w-8 text-primary"
              fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" />
            </svg>
          </div>
          <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2 text-primary">
            Premium Quality
          </h3>
          <p className="text-sm sm:text-base text-muted-foreground">
            We use only the finest materials and craftsmanship to ensure your furniture stands the test of time.
          </p>
        </motion.div>
      </div>
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
  {/* <div className="bg-white p-4 sm:p-5 rounded-lg shadow-md hover:shadow-xl border border-gray-200 transition cursor-pointer"> */}
    <p className="text-sm sm:text-base md:text-lg text-primary font-semibold leading-relaxed tracking-wide">
      Welcome to your trusted destination for custom built storage solutions
    </p>
  {/* </div> */}

  {/* <div className="bg-white p-4 sm:p-5 rounded-lg shadow-md hover:shadow-xl border border-gray-200 transition cursor-pointer"> */}
    <p className="text-sm sm:text-base md:text-lg text-primary font-semibold leading-relaxed tracking-wide">
      Whether it’s tool carts, industrial workstations, safety cabinets, secured lockers, or heavy-duty cabinets
    </p>
  {/* </div> */}

  {/* <div className="bg-white p-4 sm:p-5 rounded-lg shadow-md hover:shadow-xl border border-gray-200 transition cursor-pointer"> */}
    <p className="text-sm sm:text-base md:text-lg text-primary font-semibold leading-relaxed tracking-wide">
      We bring precision, safety, and elegance to every corner of your space
    </p>
  {/* </div> */}

  {/* <div className="bg-white p-4 sm:p-5 rounded-lg shadow-md hover:shadow-xl border border-gray-200 transition cursor-pointer"> */}
    <p className="text-sm sm:text-base md:text-lg text-primary font-semibold leading-relaxed tracking-wide">
      Crafted for Strength, Designed for Style
    </p>
  {/* </div> */}

  {/* <div className="bg-white p-4 sm:p-5 rounded-lg shadow-md hover:shadow-xl border border-gray-200 transition cursor-pointer"> */}
    <p className="text-sm sm:text-base md:text-lg text-primary font-semibold leading-relaxed tracking-wide">
      Premium lockers, cabinets, and industrial workstations that last a lifetime
    </p>
  {/* </div> */}
</div>

  </div>
</section>


   </div>

        );
    
};

        export default Home;
