import { useTranslation } from 'react-i18next';
import { ArrowDown, Github, Linkedin, Mail, Download } from 'lucide-react';
import WavingHand from "@/animations/WavingHand";
import { useState } from 'react';
import CVDownloadModal from '@/components/CVDownloadModal';

export default function HeroSection() {
  const { t } = useTranslation();
  const [isCVModalOpen, setIsCVModalOpen] = useState(false);

  return (
    <section className="min-h-screen flex flex-col justify-center items-center relative px-3 sm:px-4 md:px-6">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-48 sm:w-72 h-48 sm:h-72 bg-indigo-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 right-1/3 w-32 sm:w-48 h-32 sm:h-48 bg-amber-500/20 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto space-y-6 sm:space-y-8">
        {/* Greeting */}
        <div className="space-y-3 sm:space-y-4 animate-fade-in animate-delay-100">
          <div className="flex items-center justify-center gap-2 text-base sm:text-lg text-gray-400 animate-slide-in-down animate-delay-200">
            <span>👋</span>
            <span className="font-mono">{t('home.welcome')}</span>
          </div>
          
          {/* Main Title */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-slide-in-up animate-delay-300">
            <span className="block text-white">Diogo</span>
            <span className="block gradient-text">Gaspar</span>
          </h1>
          
          {/* Subtitle */}
          <div className="text-lg sm:text-xl md:text-2xl text-gray-300 font-light max-w-2xl mx-auto animate-fade-in animate-delay-400 px-2">
            <span className="font-mono text-indigo-400">const</span>
            <span className="text-white"> developer = </span>
            <span className="text-amber-400">"{t('home.developer')}"</span>
          </div>
        </div>

        {/* Description */}
        <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed animate-fade-in animate-delay-500 px-2">
          {t('home.intro')}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center pt-6 sm:pt-8 animate-scale-in animate-delay-600">
          <button 
            onClick={() => setIsCVModalOpen(true)}
            className="group bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold text-base sm:text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl flex items-center gap-3 w-full sm:w-auto justify-center"
          >
            <Download size={18} className="sm:w-5 sm:h-5" />
            {t('home.downloadCV')}
            <div className="w-0 group-hover:w-4 transition-all duration-300 overflow-hidden">
              <ArrowDown size={14} className="transform group-hover:animate-bounce sm:w-4 sm:h-4" />
            </div>
          </button>
          
          <div className="flex gap-3 sm:gap-4">
            <a 
              href="https://github.com/DiogoGaspar6" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 sm:p-3 rounded-xl bg-white/10 text-gray-300 hover:text-white hover:bg-white/20 transition-all duration-300 hover:scale-110"
            >
              <Github size={20} className="sm:w-6 sm:h-6" />
            </a>
            <a 
              href="https://www.linkedin.com/in/diogoogaspar/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 sm:p-3 rounded-xl bg-white/10 text-gray-300 hover:text-white hover:bg-white/20 transition-all duration-300 hover:scale-110"
            >
              <Linkedin size={20} className="sm:w-6 sm:h-6" />
            </a>
            <a 
              href="mailto:diogo.gaspar228@gmail.com"
              className="p-2 sm:p-3 rounded-xl bg-white/10 text-gray-300 hover:text-white hover:bg-white/20 transition-all duration-300 hover:scale-110"
            >
              <Mail size={20} className="sm:w-6 sm:h-6" />
            </a>
          </div>
        </div>

        {/* Last Update */}
        <div className="text-xs sm:text-sm text-gray-500 font-mono pt-6 sm:pt-8 animate-fade-in animate-delay-700">
          {t('home.updateDate')}31/07/2025
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce animate-delay-800">
        <ArrowDown size={20} className="text-gray-400 sm:w-6 sm:h-6" />
      </div>

      <CVDownloadModal 
        isOpen={isCVModalOpen} 
        onClose={() => setIsCVModalOpen(false)} 
      />
    </section>
  );
}
