import { useRouter } from "next/router";
import { useRef, useState } from "react";
import Head from "next/head";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeaturedProject from "@/components/FeaturedProject";
import StatsSection from "@/components/StatsSection";
import ContactModal from "@/components/ContactModal";
import { useTranslation } from 'react-i18next';

export default function HomePage() {
  const router = useRouter();
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const refs = {
    home: useRef<HTMLDivElement>(null),
  };
  const { t } = useTranslation();

  return (
    <>
      <Head>
        <title>Diogo Gaspar - Computer Engineer</title>
        <meta name="description" content="Portfolio pessoal de Diogo Gaspar - Desenvolvedor de Software especializado em desenvolvimento web, aplicações full-stack e projetos acadêmicos." />
        <meta name="keywords" content="Diogo Gaspar, desenvolvedor, software developer, portfolio, web development, full-stack, React, Next.js, TypeScript" />
        <meta name="author" content="Diogo Gaspar" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://personal-website-diogogaspar6s-projects.vercel.app" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://personal-website-diogogaspar6s-projects.vercel.app" />
        <meta property="og:title" content="Diogo Gaspar - Computer Engineer & Software Developer" />
        <meta property="og:description" content="Portfolio pessoal de Diogo Gaspar - Desenvolvedor de Software especializado em desenvolvimento web, aplicações full-stack e projetos acadêmicos." />
        <meta property="og:image" content="https://personal-website-diogogaspar6s-projects.vercel.app/images/personalWallet.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="Diogo Gaspar Portfolio" />
        <meta property="og:locale" content="pt_PT" />
        
        {/* LinkedIn specific */}
        <meta property="og:image:alt" content="Diogo Gaspar - Computer Engineer & Software Developer Portfolio" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://personal-website-diogogaspar6s-projects.vercel.app" />
        <meta name="twitter:title" content="Diogo Gaspar - Computer Engineer & Software Developer" />
        <meta name="twitter:description" content="Portfolio pessoal de Diogo Gaspar - Desenvolvedor de Software especializado em desenvolvimento web, aplicações full-stack e projetos acadêmicos." />
        <meta name="twitter:image" content="https://personal-website-diogogaspar6s-projects.vercel.app/images/personalWallet.png" />
        
        {/* Additional SEO */}
        <meta name="robots" content="index, follow" />
        <meta name="language" content="Portuguese" />
        <meta name="revisit-after" content="7 days" />
        
        {/* Viewport */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900 text-white relative overflow-hidden">
      {/* Background Patterns */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(99,102,241,0.1),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      
      {/* Navigation */}
      <header className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50">
        <Navbar />
      </header>

      {/* Main Content */}
      <main className="relative z-10">
        {/* Hero Section */}
        <div ref={refs.home}>
          <HeroSection />
        </div>

        {/* Stats Section */}
        <div className="animate-slide-in-up animate-delay-600">
          <StatsSection />
        </div>

        {/* Featured Project Section */}
        <div className="animate-fade-in animate-delay-800">
          <FeaturedProject />
        </div>

        {/* Call to Action Section */}
        <section className="py-20 px-4 animate-slide-in-up animate-delay-1000">
          <div className="max-w-4xl mx-auto text-center">
            <div className="glass-effect rounded-3xl p-12 lg:p-16">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6 animate-slide-in-down animate-delay-1100">
                {t('home.readyToCreate')} <span className="gradient-text">{t('home.incredible')}</span>?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto animate-fade-in animate-delay-1200">
                {t('home.readyDescription')}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center animate-scale-in animate-delay-1300">
                <button 
                  onClick={() => setIsContactModalOpen(true)}
                  className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                >
                  {t('home.contact')}
                </button>
                <button 
                  onClick={() => router.push('/projects')}
                  className="bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105"
                >
                  {t('home.viewAllProjects')}
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="relative z-10 py-12 px-4 border-t border-white/10 animate-fade-in animate-delay-1400">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-6">
            <h3 className="text-2xl font-bold gradient-text mb-2">Diogo Gaspar</h3>
            <p className="text-gray-400">{t('home.developer')}</p>
          </div>
          <div className="text-sm text-gray-500 font-mono">
            © 2025 Diogo Gaspar. {t('home.allRightsReserved')}.
          </div>
        </div>
      </footer>

      {/* Contact Modal */}
      <ContactModal 
        isOpen={isContactModalOpen} 
        onClose={() => setIsContactModalOpen(false)} 
      />
      </div>
    </>
  );
}
