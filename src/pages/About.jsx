import { motion } from "framer-motion";

const About = () => (
  <section id="about" className="py-20 bg-secondary/30">
    <div className="container mx-auto px-4 m-[13px]">
      <div className="container mx-auto px-6 text-center">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-primary mb-6"
        >
          Why Choose VIXEL?
        </motion.h2>

        {/* Description (no hover effects here) */}
        <motion.p
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-xl text-primary font-bold max-w-3xl mx-auto leading-relaxed"
        >
          We hear your concept, capture your ideas and deliver your product. <br />
          We specialize in crafting high-quality industrial grade cabinets,
          workbenches, lockers and safety products tailored for multiple
          industries like oil and gas sector, manufacturing sector, hospitality
          and educational sector.
        </motion.p>
      </div>

      <div className="max-w-4xl mx-auto mt-12">
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {/* Card 1 */}
          <motion.div
            whileHover={{ scale: 1.05, y: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="rounded-lg text-card-foreground text-center border-0 shadow-lg bg-card/50 backdrop-blur"
          >
            <div className="flex flex-col space-y-1.5 p-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-shield h-8 w-8 text-primary"
                >
                  <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                </svg>
              </div>
              <h3 className="text-2xl font-semibold leading-none tracking-tight">
                Functionality &amp; Style
              </h3>
            </div>
            <div className="p-6 pt-0">
              <p className="text-muted-foreground">
                Combining functionality with style, our designs are built to
                optimize space while ensuring durability and security.
              </p>
            </div>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            whileHover={{ scale: 1.05, y: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="rounded-lg text-card-foreground text-center border-0 shadow-lg bg-card/50 backdrop-blur"
          >
            <div className="flex flex-col space-y-1.5 p-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-wrench h-8 w-8 text-primary"
                >
                  <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
                </svg>
              </div>
              <h3 className="text-2xl font-semibold leading-none tracking-tight">
                Custom Solutions
              </h3>
            </div>
            <div className="p-6 pt-0">
              <p className="text-muted-foreground">
                From concept to installation, we deliver customized storage
                solutions that elevate interiors and simplify organization.
              </p>
            </div>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            whileHover={{ scale: 1.05, y: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="rounded-lg text-card-foreground text-center border-0 shadow-lg bg-card/50 backdrop-blur"
          >
            <div className="flex flex-col space-y-1.5 p-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-star h-8 w-8 text-primary"
                >
                  <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                </svg>
              </div>
              <h3 className="text-2xl font-semibold leading-none tracking-tight">
                Premium Quality
              </h3>
            </div>
            <div className="p-6 pt-0">
              <p className="text-muted-foreground">
                Using only the finest materials and craftsmanship techniques to
                ensure your furniture stands the test of time.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  </section>
);

export default About;
