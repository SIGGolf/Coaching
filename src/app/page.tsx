import SpinningCube from '@/components/SpinningCube';
import Navigation from '@/components/Navigation';
import { ArrowRight, Zap, Target, Globe } from 'lucide-react';

export default function Home() {
  return (
    <>
      <Navigation />
      <div className="min-h-screen pt-16 bg-cover bg-center" style={{ backgroundImage: "url(/golf-bg.jpg)" }}>

        {/* Hero Section */}
        <section className="relative min-h-screen flex flex-col items-center justify-center px-4">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-transparent to-purple-900/20" />

          <div className="relative z-10 text-center max-w-6xl mx-auto">
            <div className="flex justify-center items-center mb-8">
              <img src="/SIG_Logo.png" alt="SIG Logo" className="h-24 md:h-32 w-auto mx-auto" />
            </div>
            <h1 className="text-4xl font-bold mb-4 text-center">Welcome to Substantia Intelligence</h1>
            <p className="text-lg mb-8 text-center">Unlock your potential with data-driven insights and expert coaching.</p>

            {/* Spinning Cube */}
            <div className="my-16">
              <SpinningCube />
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a href="/intelligence-brief" className="gradient-border px-8 py-4 rounded-lg font-semibold hover:bg-blue-600/20 transition-all duration-300 flex items-center gap-2" role="button" tabIndex={0}>
                Start Intelligence Brief
                <ArrowRight size={20} />
              </a>
              <a href="/case-studies" className="px-8 py-4 rounded-lg border border-blue-500/30 hover:border-blue-500 hover:bg-blue-500/10 transition-all duration-300 flex items-center justify-center" role="button" tabIndex={0}>
                View Case Studies
              </a>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <h3 className="text-3xl font-bold text-center mb-12 glow-text">
              Outmaneuver Competitors. Stay Three Moves Ahead.
            </h3>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-6 rounded-lg border border-blue-500/20 bg-slate-900/50 backdrop-blur-sm hover:border-blue-500/40 transition-all duration-300">
                <Zap className="text-blue-400 mb-4" size={32} />
                <h4 className="text-xl font-semibold mb-3">Rapid Crisis Alerts</h4>
                <p className="text-muted-foreground">
                  Real-time threat detection and immediate actionable intelligence
                  to protect your organization before risks impact your balance sheet.
                </p>
              </div>

              <div className="p-6 rounded-lg border border-purple-500/20 bg-slate-900/50 backdrop-blur-sm hover:border-purple-500/40 transition-all duration-300">
                <Target className="text-purple-400 mb-4" size={32} />
                <h4 className="text-xl font-semibold mb-3">Strategic Advantage</h4>
                <p className="text-muted-foreground">
                  Map threats, uncover hidden opportunities, and gain the strategic
                  intelligence needed to make decisions with confidence.
                </p>
              </div>

              <div className="p-6 rounded-lg border border-blue-500/20 bg-slate-900/50 backdrop-blur-sm hover:border-blue-500/40 transition-all duration-300">
                <Globe className="text-blue-400 mb-4" size={32} />
                <h4 className="text-xl font-semibold mb-3">Verified Insights</h4>
                <p className="text-muted-foreground">
                  Defence-grade analysis delivering verified intelligence you can
                  act on today. Profit, comply, and stay ahead of the curve.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-gradient-to-r from-blue-900/20 to-purple-900/20">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-3xl font-bold mb-6 glow-text">
              Ready to Gain the Intelligence Advantage?
            </h3>
            <p className="text-lg text-muted-foreground mb-8">
              Join industry leaders who trust Substantia Intelligence Group
              for their most critical intelligence and risk assessment needs.
            </p>
            <button className="gradient-border px-12 py-4 rounded-lg font-semibold text-lg hover:bg-blue-600/20 transition-all duration-300">
              Schedule Consultation
            </button>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-blue-500/20 bg-black/20 backdrop-blur-sm">
          <div className="max-w-6xl mx-auto px-4 py-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="mb-4 md:mb-0">
                <p className="text-sm text-muted-foreground">
                  © 2025 Substantia Intelligence Group. Elite intelligence and risk advisory.
                </p>
              </div>
              <div className="flex space-x-6 text-sm text-muted-foreground">
                <a href="#privacy" className="hover:text-blue-400 transition-colors">Privacy</a>
                <a href="#terms" className="hover:text-blue-400 transition-colors">Terms</a>
                <a href="#contact" className="hover:text-blue-400 transition-colors">Contact</a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
