import { useTranslation } from 'react-i18next';
import { ExternalLink, Github, Calendar, Tag } from 'lucide-react';
import Image from 'next/image';
import { toast } from '@/lib/use-toast';

export default function FeaturedProject() {
  const { t } = useTranslation();
  
  const handleLinkClick = (url: string, type: 'demo' | 'github') => {
    if (url === "#") {
      toast({
        variant: "default",
        title: "🚧 " + t(type === 'demo' ? 'projects.demoNotAvailable' : 'projects.codeNotAvailable'),
        description: t('projects.contactForMoreInfo'),
      });
    } else {
      window.open(url, "_blank");
    }
  };

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-500/20 to-purple-600/20 rounded-full px-4 py-2 mb-4">
            <Tag size={16} className="text-indigo-400" />
            <span className="text-sm font-medium text-indigo-300">{t('featured.featuredWork')}</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">{t('featured.lastProject')}</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            {t('featured.exploring')}
          </p>
        </div>

        {/* Project Card */}
        <div className="glass-effect rounded-3xl overflow-hidden card-hover group">
          <div className="grid lg:grid-cols-2 gap-0">
            {/* Project Image */}
            <div className="relative overflow-hidden">
              <div className="aspect-video lg:aspect-square bg-gradient-to-br from-indigo-500/20 to-purple-600/20 flex items-center justify-center">
                <div className="relative w-full h-full">
                  <Image 
                    src="/images/PluginPage.png" 
                    alt="Plugin Project Screenshot"
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                </div>
              </div>
              
              {/* Tech Stack Badges */}
              <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                {['MidiaPipe', 'TensorFlow', 'FingerPose', 'JavaScript'].map((tech) => (
                  <span key={tech} className="bg-black/70 backdrop-blur-sm text-white text-xs px-3 py-1 rounded-full font-medium">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Project Details */}
            <div className="p-8 lg:p-12 flex flex-col justify-center">
              <div className="space-y-6">
                {/* Project Meta */}
                <div className="flex items-center gap-4 text-sm text-gray-400">
                  <div className="flex items-center gap-2">
                    <Calendar size={16} />
                    <span>{t('home.lastProjectDate')}</span>
                  </div>
                  <div className="w-1 h-1 bg-gray-600 rounded-full"></div>
                  <span>{t('home.lastProjectType')}</span>
                </div>

                {/* Project Title */}
                <h3 className="text-2xl lg:text-3xl font-bold text-white">
                  {t('home.lastProjectTitle')}
                </h3>

                {/* Project Description */}
                <div className="space-y-4">
                  <p className="text-gray-300 leading-relaxed">
                    {t('home.lastProjectDescription')}
                  </p>
                  
                  <div className="space-y-2">
                    <h4 className="text-lg font-semibold text-white">Principais Features:</h4>
                    <ul className="space-y-1 text-gray-300">
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-indigo-400 rounded-full"></div>
                        { t('home.featureCursorControl') }
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-indigo-400 rounded-full"></div>
                        { t('home.featureGestureRecognition') }
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <button className="flex items-center justify-center gap-3 bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl" onClick={() => handleLinkClick('#', 'demo')}>
                    <ExternalLink size={18} />
                    {t('home.viewProject')}
                  </button>
                  <button className="flex items-center justify-center gap-3 bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105" onClick={() => handleLinkClick('https://github.com/P4-Gestures-2425/GesturePlugin', 'github')}>
                    <Github size={18} />
                    {t('home.viewCode')}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
