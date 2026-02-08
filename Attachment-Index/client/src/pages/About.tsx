import PageHeader from "@/components/PageHeader";
import { CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

export default function About() {
  const values = [
    { title: "Integrity First", desc: "We build trust through transparency and honest guidance." },
    { title: "Data-Driven", desc: "Decisions backed by rigorous analysis, not guesswork." },
    { title: "Client Centric", desc: "Your success is the only metric that truly matters to us." },
    { title: "Innovation", desc: "We constantly explore new methodologies and technologies." },
  ];

  return (
    <div>
      {/* Modern office building architecture */}
      <PageHeader 
        title="About Us" 
        subtitle="We are a team of strategists, analysts, and innovators dedicated to your success."
        backgroundImage="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1600&auto=format&fit=crop&q=80"
      />

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 mb-6">
                  Our Mission
                </h2>
                <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                  <p>
                    Founded in 2010, Business Insight Hub emerged from a simple belief: that every business, regardless of size, deserves access to world-class strategic consulting.
                  </p>
                  <p>
                    We partner with leaders who are ready to challenge the status quo. Our approach combines deep industry expertise with analytical rigor to help you make better decisions, faster.
                  </p>
                  <p>
                    Today, we're proud to have helped over 500 organizations across the globe transform their operations and achieve sustainable growth.
                  </p>
                </div>
              </motion.div>
            </div>
            
            <div className="lg:w-1/2">
               {/* Team working together */}
               <img 
                 src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&auto=format&fit=crop&q=80" 
                 alt="Our Team" 
                 className="rounded-2xl shadow-xl w-full"
               />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-heading font-bold text-slate-900 mb-4">Our Core Values</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              These principles guide every interaction and every project we undertake.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-8 rounded-xl shadow-sm border border-border/50 hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-6 text-primary">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-slate-900">{value.title}</h3>
                <p className="text-muted-foreground">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
