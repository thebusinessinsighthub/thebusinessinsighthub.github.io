import PageHeader from "@/components/PageHeader";
import ServiceCard from "@/components/ServiceCard";
import { Target, BarChart3, Zap, Globe, Users, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function Services() {
  const services = [
    {
      title: "Strategic Planning",
      description: "Develop a roadmap for long-term success with our comprehensive market analysis and competitive positioning frameworks.",
      icon: Target
    },
    {
      title: "Operations Optimization",
      description: "Streamline workflows, reduce inefficiencies, and improve productivity across your entire organizational structure.",
      icon: BarChart3
    },
    {
      title: "Digital Transformation",
      description: "Leverage cutting-edge technology to modernize your systems, enhance customer experiences, and drive innovation.",
      icon: Zap
    },
    {
      title: "Global Expansion",
      description: "Navigate complex international markets with our regulatory guidance and localized entry strategies.",
      icon: Globe
    },
    {
      title: "Talent Management",
      description: "Build high-performing teams with our recruitment strategies, leadership training, and cultural alignment programs.",
      icon: Users
    },
    {
      title: "Risk & Compliance",
      description: "Protect your organization with robust risk management frameworks and comprehensive compliance audits.",
      icon: ShieldCheck
    }
  ];

  return (
    <div>
      {/* Abstract business architecture */}
      <PageHeader 
        title="Our Services" 
        subtitle="Holistic solutions tailored to your unique business challenges."
        backgroundImage="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&auto=format&fit=crop&q=80"
      />

      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                {...service}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
            Not sure where to start?
          </h2>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto mb-10">
            Our experts can help assess your needs and recommend the right strategic approach for your organization.
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-white text-slate-900 hover:bg-white/90">
              Schedule a Discovery Call
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
