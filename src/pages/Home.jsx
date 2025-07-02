

const Home = () => (
    <div>
        <section class="py-20 lg:py-32 bg-gradient-to-br from-background to-secondary/20">
            <div class="container mx-auto px-4">
                <div class="max-w-4xl mx-auto text-center">
                    <div class="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80 mb-4">Trusted Furniture Solutions</div>
                    <h1 class="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">Welcome to your trusted destination for <span class="text-primary">custom-built furniture</span> solutions</h1>
                    <p class="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">Whether it's sleek wardrobes, secure lockers, or durable storage cabinets, we bring precision, safety, and elegance to every corner of your space.</p>
                    <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <a
                            href="#services"
                            className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 h-11 rounded-md text-lg px-8 py-6"
                        >
                            Explore Our Services
                        </a>
                        <a
                            href="/Solution"
                            className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-11 rounded-md text-lg px-8 py-6"
                        >
                            View Solution
                        </a>

                    </div>
                </div>
            </div>
        </section>



        <section class="py-16 bg-primary text-primary-foreground">
            <div class="container mx-auto px-4">
                <div class="max-w-4xl mx-auto text-center">
                    <h2 class="text-3xl md:text-4xl font-bold mb-6">Crafted for Strength, Designed for Style</h2>
                    <p class="text-xl opacity-90 mb-8">Premium Lockers, Cabinets, and Wardrobes That Last a Lifetime.</p>
                    <div class="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-2xl mx-auto">
                        <div class="flex items-center space-x-2"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check h-5 w-5 text-accent"><path d="M20 6 9 17l-5-5"></path></svg>
                            <span class="text-sm md:text-base">Premium Quality Materials</span></div><div class="flex items-center space-x-2"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check h-5 w-5 text-accent">
                                <path d="M20 6 9 17l-5-5"></path></svg><span class="text-sm md:text-base">Custom Design Solutions</span></div>
                        <div class="flex items-center space-x-2"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check h-5 w-5 text-accent"><path d="M20 6 9 17l-5-5"></path></svg>
                            <span class="text-sm md:text-base">Professional Installation</span></div>
                        <div class="flex items-center space-x-2"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check h-5 w-5 text-accent"><path d="M20 6 9 17l-5-5"></path></svg>
                            <span class="text-sm md:text-base">Lifetime Durability</span></div>
                        <div class="flex items-center space-x-2"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check h-5 w-5 text-accent"><path d="M20 6 9 17l-5-5"></path></svg>
                            <span class="text-sm md:text-base">Security Features</span></div><div class="flex items-center space-x-2"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check h-5 w-5 text-accent"><path d="M20 6 9 17l-5-5"></path></svg><span class="text-sm md:text-base">Space Optimization</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>



        <section id="about" class="py-20 bg-secondary/30">
            <div class="container mx-auto px-4">
                <div class="max-w-4xl mx-auto">
                    <div class="text-center mb-12">
                        <h2 class="text-3xl md:text-4xl font-bold text-foreground mb-6">Why Choose VIXEL?</h2>
                        <p class="text-lg text-muted-foreground max-w-2xl mx-auto">We specialize in crafting high-quality lockers, cabinets, and wardrobes tailored for both residential and commercial needs.</p></div>
                    <div class="grid md:grid-cols-3 gap-8 mb-16"><div class="rounded-lg text-card-foreground text-center border-0 shadow-lg bg-card/50 backdrop-blur"><div class="flex flex-col space-y-1.5 p-6"><div class="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-shield h-8 w-8 text-primary">
                            <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                        </svg>
                    </div>
                        <h3 class="text-2xl font-semibold leading-none tracking-tight">Functionality &amp; Style</h3></div><div class="p-6 pt-0">
                            <p class="text-muted-foreground">Combining functionality with style, our designs are built to optimize space while ensuring durability and security.</p>
                        </div>
                    </div>
                        <div class="rounded-lg text-card-foreground text-center border-0 shadow-lg bg-card/50 backdrop-blur">
                            <div class="flex flex-col space-y-1.5 p-6">
                                <div class="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-wrench h-8 w-8 text-primary">
                                        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path></svg></div><h3 class="text-2xl font-semibold leading-none tracking-tight">Custom Solutions</h3>
                            </div>
                            <div class="p-6 pt-0">
                                <p class="text-muted-foreground">From concept to installation, we deliver customized storage solutions that elevate interiors and simplify organization.</p>
                            </div>
                        </div>
                        <div class="rounded-lg text-card-foreground text-center border-0 shadow-lg bg-card/50 backdrop-blur">
                            <div class="flex flex-col space-y-1.5 p-6">
                                <div class="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-star h-8 w-8 text-primary">
                                        <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                    </svg>
                                </div>
                                <h3 class="text-2xl font-semibold leading-none tracking-tight">Premium Quality</h3>
                            </div>
                            <div class="p-6 pt-0">
                                <p class="text-muted-foreground">Using only the finest materials and craftsmanship techniques to ensure your furniture stands the test of time.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>


    </div>
);

export default Home;
