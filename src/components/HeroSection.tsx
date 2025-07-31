import { useTranslation } from 'react-i18next';
import { ArrowDown, Github, Linkedin, Mail, Download } from 'lucide-react';
import WavingHand from "@/animations/WavingHand";
import { useState } from 'react';
import CVDownloadModal from '@/components/CVDownloadModal';

export default function HeroSection() {
  const { t } = useTranslation();
  const [isCVModalOpen, setIsCVModalOpen] = useState(false);

  return (
    <section className="min-h-screen flex flex-col justify-center items-center relative px-4">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-indigo-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 right-1/3 w-48 h-48 bg-amber-500/20 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto space-y-8">
        {/* Greeting */}
        <div className="space-y-4 animate-fade-in animate-delay-100">
          <div className="flex items-center justify-center gap-2 text-lg text-gray-400 animate-slide-in-down animate-delay-200">
            <span>👋</span>
            <span className="font-mono">{t('home.welcome')}</span>
          </div>
          
          {/* Main Title */}
          <h1 className="text-5xl md:text-5xl font-bold leading-tight animate-slide-in-up animate-delay-300">
            <span className="block text-white">Diogo</span>
            <span className="block gradient-text">Gaspar</span>
          </h1>
          
          {/* Subtitle */}
          <div className="text-xl md:text-2xl text-gray-300 font-light max-w-2xl mx-auto animate-fade-in animate-delay-400">
            <span className="font-mono text-indigo-400">const</span>
            <span className="text-white"> developer = </span>
            <span className="text-amber-400">"{t('home.developer')}"</span>
          </div>
        </div>

        {/* Description */}
        <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed animate-fade-in animate-delay-500">
          {t('home.intro')}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8 animate-scale-in animate-delay-600">
          <button 
            onClick={() => setIsCVModalOpen(true)}
            className="group bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl flex items-center gap-3"
          >
            <Download size={20} />
            {t('home.downloadCV')}
            <div className="w-0 group-hover:w-4 transition-all duration-300 overflow-hidden">
              <ArrowDown size={16} className="transform group-hover:animate-bounce" />
            </div>
          </button>
          
          <div className="flex gap-4">
            <a 
              href="https://github.com/DiogoGaspar6" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-xl bg-white/10 text-gray-300 hover:text-white hover:bg-white/20 transition-all duration-300 hover:scale-110"
            >
              <Github size={24} />
            </a>
            <a 
              href="https://www.linkedin.com/in/diogoogaspar/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-xl bg-white/10 text-gray-300 hover:text-white hover:bg-white/20 transition-all duration-300 hover:scale-110"
            >
              <Linkedin size={24} />
            </a>
            <a 
              href="mailto:diogo.gaspar228@gmail.com"
              className="p-3 rounded-xl bg-white/10 text-gray-300 hover:text-white hover:bg-white/20 transition-all duration-300 hover:scale-110"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>

        {/* Last Update */}
        <div className="text-sm text-gray-500 font-mono pt-8 animate-fade-in animate-delay-700">
          {t('home.updateDate')}31/07/2025
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce animate-delay-800">
        <ArrowDown size={24} className="text-gray-400" />
      </div>

      <CVDownloadModal 
        isOpen={isCVModalOpen} 
        onClose={() => setIsCVModalOpen(false)} 
      />
    </section>
  );
}
