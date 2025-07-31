import React from 'react';
import { X, Download, FileText, Languages } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useToast } from '@/lib/use-toast';

interface CVDownloadModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CVDownloadModal({ isOpen, onClose }: CVDownloadModalProps) {
  const { t } = useTranslation();
  const { toast } = useToast();

  if (!isOpen) return null;

  const downloadCV = async (language: 'PT' | 'EN') => {
    const fileName = `CV-DiogoGaspar-${language}.pdf`;
    const filePath = `/cv/${fileName}`;
    
    try {
      const response = await fetch(filePath, { method: 'HEAD' });
      if (response.ok) {
        window.open(filePath, '_blank');
        
        //* Toast de sucesso
        toast({
          variant: "success",
          title: `${t('cv.downloadStarted')}`,
          description: `CV ${t('cv.' + (language === 'PT' ? 'portuguese' : 'english'))} ${t('cv.downloadStartedDescription')}`,
        });
        
        //* Fechar modal após download
        setTimeout(() => onClose(), 1000);
      } else {
        console.error(`CV em ${language} não encontrado`);
        
        //* Toast de erro
        toast({
          variant: "destructive",
          title: `${t('cv.downloadError')}`,
          description: `CV ${t('cv.' + (language === 'PT' ? 'portuguese' : 'english'))} ${t('cv.downloadErrorDescription')}`,
        });
      }
    } catch (error) {
      console.error(`Erro ao verificar CV em ${language}:`, error);
      
      //* Toast de erro
      toast({
        variant: "destructive",
        title: `${t('cv.downloadError')}`,
        description: t('cv.downloadUnexpectedError'),
      });
      
      window.open(filePath, '_blank');
    }
  };

  const cvOptions = [
    {
      icon: <FileText size={32} />,
      title: 'CV - Português',
      subtitle: t('cv.portugueseDescription'),
      color: 'from-green-500 to-emerald-600',
      flag: '🇵🇹',
      action: () => downloadCV('PT')
    },
    {
      icon: <FileText size={32} />,
      title: 'CV - English',
      subtitle: t('cv.englishDescription'),
      color: 'from-blue-500 to-indigo-600',
      flag: '🇬🇧',
      action: () => downloadCV('EN')
    }
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm animate-modal-backdrop"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative glass-effect rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 w-full max-w-sm sm:max-w-md md:max-w-lg mx-auto animate-scale-in max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex justify-between items-start mb-6 sm:mb-8 animate-slide-in-down">
          <div className="flex-1 pr-4">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-2 flex items-center gap-2 sm:gap-3">
              <Download size={20} className="text-indigo-400 sm:w-6 sm:h-6 md:w-7 md:h-7" />
              <span className="text-base sm:text-xl md:text-3xl">{t('cv.downloadCV')}</span>
            </h2>
            <p className="text-gray-400 text-sm sm:text-base">
              {t('cv.chooseLanguage')}
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-white/10 rounded-xl transition-colors flex-shrink-0"
          >
            <X size={20} className="text-gray-400 hover:text-white sm:w-6 sm:h-6" />
          </button>
        </div>

        {/* CV Options */}
        <div className="space-y-3 sm:space-y-4 mb-4 sm:mb-6">
          {cvOptions.map((option, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden rounded-xl sm:rounded-2xl p-4 sm:p-6 bg-white/5 hover:bg-white/10 transition-all duration-300 cursor-pointer border border-white/10 hover:border-white/20 animate-slide-in-up animate-delay-${(index + 1) * 100}`}
              onClick={option.action}
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-r ${option.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
              
              <div className="relative flex items-center gap-3 sm:gap-4">
                <div className={`p-3 sm:p-4 rounded-lg sm:rounded-xl bg-gradient-to-r ${option.color} text-white flex-shrink-0`}>
                  <div className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8">
                    {option.icon}
                  </div>
                </div>
                
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1 sm:mb-2">
                    <h3 className="text-base sm:text-lg font-semibold text-white truncate">
                      {option.title}
                    </h3>
                    <span className="text-lg sm:text-xl md:text-2xl flex-shrink-0">{option.flag}</span>
                  </div>
                  <p className="text-gray-400 text-xs sm:text-sm">
                    {option.subtitle}
                  </p>
                </div>
                
                <div className="flex-shrink-0">
                  <Download size={16} className="text-gray-400 group-hover:text-white transition-colors sm:w-5 sm:h-5" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="text-center pt-4 sm:pt-6 border-t border-white/10 animate-fade-in animate-delay-300">
          <div className="flex items-center justify-center gap-2 text-gray-400 text-xs sm:text-sm">
            <Languages size={14} className="sm:w-4 sm:h-4" />
            <span>{t('cv.bothVersionsAvailable')}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
