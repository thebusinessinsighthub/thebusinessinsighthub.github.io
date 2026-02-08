import { Link } from "wouter";
import { ArrowRight, BarChart3, Target, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import ServiceCard from "@/components/ServiceCard";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 lg:py-40 bg-gradient-to-br from-slate-50 to-blue-50/50 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            <div className="lg:w-1/2 text-center lg:text-left z-10">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="inline-flex items-center rounded-full px-3 py-1 text-sm font-medium text-primary bg-primary/10 mb-6">
                  <span>New Insights Available</span>
                  <ArrowRight className="ml-2 h-4 w-4" />
                </div>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-slate-900 leading-[1.1] mb-6">
                  Real Solutions. <br />
                  <span className="text-primary">Real Results.</span>
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed max-w-xl mx-auto lg:mx-0">
                  We help ambitious businesses unlock their potential through strategic consulting and data-driven insights.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <Link href="/contact">
                    <Button size="lg" className="w-full sm:w-auto h-12 px-8 text-base">
                      Start Transformation
                    </Button>
                  </Link>
                  <Link href="/services">
                    <Button variant="outline" size="lg" className="w-full sm:w-auto h-12 px-8 text-base bg-white/50 backdrop-blur-sm">
                      Explore Services
                    </Button>
                  </Link>
                </div>
              </motion.div>
            </div>
            
            <div className="lg:w-1/2 w-full z-10">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative"
              >
                {/* Decorative blob */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-200/20 rounded-full blur-3xl -z-10" />
                
                {/* Main hero image */}
                {/* Office meeting modern glass conference room */}
                <img 
                  src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&auto=format&fit=crop&q=80" 
                  alt="Team collaboration" 
                  className="rounded-2xl shadow-2xl border border-white/20 w-full object-cover aspect-[4/3]"
                />

                {/* Floating stat card */}
                <motion.div 
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.8 }}
                  className="absolute -bottom-8 -left-8 md:bottom-8 md:-left-8 bg-white p-6 rounded-xl shadow-xl border border-border/50 max-w-[200px] hidden md:block"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 bg-green-100 rounded-lg">
                      <BarChart3 className="h-5 w-5 text-green-600" />
                    </div>
                    <span className="text-sm font-semibold text-slate-600">Growth</span>
                  </div>
                  <div className="text-3xl font-bold text-slate-900">+127%</div>
                  <p className="text-xs text-muted-foreground mt-1">Year over year revenue</p>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 mb-4">
              Comprehensive Consulting Services
            </h2>
            <p className="text-lg text-muted-foreground">
              Our multidisciplinary team delivers tailored strategies to solve your most complex business challenges.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ServiceCard 
              title="Strategic Planning" 
              description="Develop a roadmap for long-term success with our comprehensive market analysis and competitive positioning frameworks."
              icon={Target}
              delay={0.1}
            />
            <ServiceCard 
              title="Operations Optimization" 
              description="Streamline workflows, reduce inefficiencies, and improve productivity across your entire organizational structure."
              icon={BarChart3}
              delay={0.2}
            />
            <ServiceCard 
              title="Digital Transformation" 
              description="Leverage cutting-edge technology to modernize your systems, enhance customer experiences, and drive innovation."
              icon={Zap}
              delay={0.3}
            />
          </div>

          <div className="mt-16 text-center">
            <Link href="/services">
              <Button variant="outline" size="lg">View All Services</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
        {/* Background texture */}
        <div className="absolute inset-0 opacity-10" 
             style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }}>
        </div>
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">
            Ready to Accelerate Your Growth?
          </h2>
          <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
            Schedule a free consultation today and discover how we can help your business thrive in a competitive landscape.
          </p>
          <Link href="/contact">
            <Button size="lg" className="h-14 px-10 text-lg bg-white text-slate-900 hover:bg-white/90 font-semibold">
              Get in Touch
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
