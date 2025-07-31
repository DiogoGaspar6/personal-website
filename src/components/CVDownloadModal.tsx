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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm animate-modal-backdrop"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative glass-effect rounded-3xl p-8 w-full max-w-lg mx-auto animate-scale-in">
        {/* Header */}
        <div className="flex justify-between items-center mb-8 animate-slide-in-down">
          <div>
            <h2 className="text-3xl font-bold text-white mb-2 flex items-center gap-3">
              <Download size={28} className="text-indigo-400" />
              {t('cv.downloadCV')}
            </h2>
            <p className="text-gray-400">
              {t('cv.chooseLanguage')}
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-white/10 rounded-xl transition-colors"
          >
            <X size={24} className="text-gray-400 hover:text-white" />
          </button>
        </div>

        {/* CV Options */}
        <div className="space-y-4 mb-6">
          {cvOptions.map((option, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden rounded-2xl p-6 bg-white/5 hover:bg-white/10 transition-all duration-300 cursor-pointer border border-white/10 hover:border-white/20 animate-slide-in-up animate-delay-${(index + 1) * 100}`}
              onClick={option.action}
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-r ${option.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
              
              <div className="relative flex items-center gap-4">
                <div className={`p-4 rounded-xl bg-gradient-to-r ${option.color} text-white flex-shrink-0`}>
                  {option.icon}
                </div>
                
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="text-lg font-semibold text-white">
                      {option.title}
                    </h3>
                    <span className="text-2xl">{option.flag}</span>
                  </div>
                  <p className="text-gray-400 text-sm">
                    {option.subtitle}
                  </p>
                </div>
                
                <div className="flex-shrink-0">
                  <Download size={20} className="text-gray-400 group-hover:text-white transition-colors" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="text-center pt-6 border-t border-white/10 animate-fade-in animate-delay-300">
          <div className="flex items-center justify-center gap-2 text-gray-400 text-sm">
            <Languages size={16} />
            <span>{t('cv.bothVersionsAvailable')}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
