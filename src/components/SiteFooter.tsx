import { Link } from "react-router-dom";

const SiteFooter = () => {
  return (
    <footer className="border-t border-border bg-primary text-primary-foreground">
      <div className="container py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div>
            <h3 className="font-display text-lg font-semibold mb-3">Scottish Mammal Observations</h3>
            <p className="text-sm opacity-80 leading-relaxed">
              Monitoring and recording Scotland's diverse mammal species to support conservation and biodiversity research.
            </p>
          </div>
          <div>
            <h4 className="font-display text-sm font-semibold mb-3 uppercase tracking-wider opacity-70">Quick Links</h4>
            <nav className="flex flex-col gap-2">
              <Link to="/" className="text-sm opacity-80 hover:opacity-100 transition-opacity">Home</Link>
              <Link to="/species" className="text-sm opacity-80 hover:opacity-100 transition-opacity">Species Directory</Link>
              <Link to="/about" className="text-sm opacity-80 hover:opacity-100 transition-opacity">About the Project</Link>
            </nav>
          </div>
          <div>
            <h4 className="font-display text-sm font-semibold mb-3 uppercase tracking-wider opacity-70">Resources</h4>
            <nav className="flex flex-col gap-2">
              <span className="text-sm opacity-80">NatureScot</span>
              <span className="text-sm opacity-80">Scottish Wildlife Trust</span>
              <span className="text-sm opacity-80">Edinburgh Napier University</span>
            </nav>
          </div>
        </div>
        <div className="mt-10 pt-6 border-t border-primary-foreground/20 text-center">
          <p className="text-xs opacity-60">
            © 2026 Scottish Mammal Observations — SET11112 Web Technologies Assessment
          </p>
        </div>
      </div>
    </footer>
  );
};

export default SiteFooter;
