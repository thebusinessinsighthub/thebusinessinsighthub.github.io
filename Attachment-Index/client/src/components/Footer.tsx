import { Link } from "wouter";
import { Briefcase, Twitter, Linkedin, Facebook } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-200 py-12 border-t border-slate-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="bg-blue-600/20 p-2 rounded-lg">
                <Briefcase className="h-6 w-6 text-blue-500" />
              </div>
              <span className="font-heading font-bold text-xl text-white">
                Business Insight Hub
              </span>
            </Link>
            <p className="text-sm text-slate-400 leading-relaxed">
              Empowering businesses with actionable strategies and data-driven insights for sustainable growth.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="hover:text-blue-400 transition-colors">Home</Link></li>
              <li><Link href="/about" className="hover:text-blue-400 transition-colors">About Us</Link></li>
              <li><Link href="/services" className="hover:text-blue-400 transition-colors">Services</Link></li>
              <li><Link href="/contact" className="hover:text-blue-400 transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              <li>Strategic Planning</li>
              <li>Operational Excellence</li>
              <li>Digital Transformation</li>
              <li>Market Analysis</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">Connect</h3>
            <div className="flex gap-4 mb-4">
              <a href="#" className="hover:text-blue-400 transition-colors"><Twitter className="h-5 w-5" /></a>
              <a href="#" className="hover:text-blue-400 transition-colors"><Linkedin className="h-5 w-5" /></a>
              <a href="#" className="hover:text-blue-400 transition-colors"><Facebook className="h-5 w-5" /></a>
            </div>
            <p className="text-sm text-slate-400">
              123 Business Avenue<br />
              New York, NY 10001<br />
              info@businessinsighthub.com
            </p>
          </div>
        </div>
        
        <div className="border-t border-slate-800 mt-12 pt-8 text-center text-xs text-slate-500">
          © {new Date().getFullYear()} Business Insight Hub. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
