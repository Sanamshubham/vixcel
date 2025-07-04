

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
                            href="#solution"
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
                            <span class="text-sm md:text-lg">Premium Quality Materials</span></div><div class="flex items-center space-x-2"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check h-5 w-5 text-accent">
                                <path d="M20 6 9 17l-5-5"></path></svg><span class="text-sm md:text-lg">Custom Design Solutions</span></div>
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





    </div>
);

export default Home;
