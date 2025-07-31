import Navbar from "@/components/Navbar";
import { User, Heart, Coffee, Lightbulb, Target, Rocket } from "lucide-react";
import { useTranslation } from 'react-i18next';
import { useState } from "react";
import ContactModal from "@/components/ContactModal";

export default function About() {
  const { t } = useTranslation();
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const values = [
    {
      icon: <Lightbulb size={24} />,
      title: t('about.innovation'),
      description: t('about.innovationDescription')
    },
    {
      icon: <Target size={24} />,
      title: t('about.precision'),
      description: t('about.precisionDescription')
    },
    {
      icon: <Heart size={24} />,
      title: t('about.passion'),
      description: t('about.passionDescription')
    },
    {
      icon: <Rocket size={24} />,
      title: t('about.performance'),
      description: t('about.performanceDescription')
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900 text-white relative overflow-hidden">
      {/* Background Patterns */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(99,102,241,0.1),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

      <header className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
        <Navbar />
      </header>

      <main className="pt-32 pb-20 relative z-10">
        <div className="max-w-6xl mx-auto px-4">
          {/* Hero Section */}
          <div className="text-center mb-20 animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-500/20 to-purple-600/20 rounded-full px-4 py-2 mb-6 animate-slide-in-down animate-delay-100">
              <User size={16} className="text-indigo-400" />
              <span className="text-sm font-medium text-indigo-300">
                {t('about.aboutMe')}
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-slide-in-up animate-delay-200">
              {t('about.hello')} <span className="gradient-text">Diogo</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed animate-fade-in animate-delay-300">
              {t('about.aboutDescription')}
            </p>
          </div>

          {/* About Content */}
          <div className="grid lg:grid-cols-2 gap-12 mb-20">
            {/* Story */}
            <div className="glass-effect rounded-3xl p-8 lg:p-12 animate-slide-in-left animate-delay-400">
              <h2 className="text-3xl font-bold mb-6 text-white">
                {t('about.myJourney')}
              </h2>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  {t('about.journeyDescription1')}
                </p>
                <p>
                  {t('about.journeyDescription2')}
                </p>
                <p>
                  {t('about.journeyDescription3')}
                </p>
              </div>
            </div>

            {/* Fun Facts */}
            <div className="space-y-6 animate-slide-in-right animate-delay-500">
              <div className="glass-effect rounded-2xl p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <Coffee className="text-amber-400" size={20} />
                  {t('about.funFacts')}
                </h3>
                <div className="space-y-3 text-gray-300">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-indigo-400 rounded-full"></div>
                    <span>{t('about.facts.sport')}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                    <span>{t('about.facts.firstProject')}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                    <span>{t('about.facts.favoriteLanguage')}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
                    <span>{t('about.facts.preferredEditor')}</span>
                  </div>
                </div>
              </div>

              <div className="glass-effect rounded-2xl p-6">
                <h3 className="text-xl font-bold mb-4">{t('about.education')}</h3>
                <div className="space-y-2">
                  <h4 className="font-semibold text-white">
                    {t('about.secondaryEducation')}
                  </h4>
                  <p className="text-gray-400">{t('about.schoolName')}</p>
                  <p className="text-sm text-gray-500">2018 - 2021</p>
                </div>
                <div className="space-y-2 mt-4">
                  <h4 className="font-semibold text-white">
                    {t('about.computerEngineering')}
                  </h4>
                  <p className="text-gray-400">
                    {t('about.instituteName')}
                  </p>
                  <p className="text-sm text-gray-500">2021 - 2025</p>
                </div>
              </div>
            </div>
          </div>

          {/* Values */}
          <div className="mb-20 animate-fade-in animate-delay-600">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4 animate-slide-in-up animate-delay-700">
                {t('about.myValues')}
              </h2>
              <p className="text-lg text-gray-400 max-w-2xl mx-auto animate-fade-in animate-delay-800">
                {t('about.valuesDescription')}
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <div
                  key={index}
                  className={`glass-effect rounded-2xl p-6 text-center card-hover group animate-slide-in-up animate-delay-${900 + index * 100}`}
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 text-white mb-4 group-hover:scale-110 transition-transform duration-300">
                    {value.icon}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">
                    {value.title}
                  </h3>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      <ContactModal 
        isOpen={isContactModalOpen} 
        onClose={() => setIsContactModalOpen(false)} 
      />
    </div>
  );
}
