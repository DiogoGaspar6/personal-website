import React from 'react';
import { X, Mail, MessageCircle, Linkedin, Calendar, Copy } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useToast } from '@/lib/use-toast';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const { t } = useTranslation();
  const { toast } = useToast();

  if (!isOpen) return null;

  const contactMethods = [
    {
      icon: <Mail size={24} />,
      title: 'Email',
      subtitle: 'diogo.gaspar228@gmail.com',
      color: 'from-red-500 to-orange-500',
      action: () => window.open('mailto:diogo.gaspar228@gmail.com'),
      copyText: 'diogo.gaspar228@gmail.com'
    },
    {
      icon: <MessageCircle size={24} />,
      title: 'WhatsApp',
      subtitle: t('contact.quickMessage'),
      color: 'from-green-500 to-emerald-500',
      action: () => window.open('https://wa.me/351962750868?text=Olá! Vi o seu portfólio e gostaria de conversar.'),
      copyText: '+351 962 750 868'
    },
    {
      icon: <Linkedin size={24} />,
      title: 'LinkedIn',
      subtitle: t('contact.professionalNetwork'),
      color: 'from-blue-500 to-blue-600',
      action: () => window.open('https://linkedin.com/in/diogoogaspar'),
      copyText: 'linkedin.com/in/diogoogaspar'
    },
    {
      icon: <Calendar size={24} />,
      title: 'Cal',
      subtitle: t('contact.scheduleCall'),
      color: 'from-purple-500 to-indigo-500',
      action: () => window.open('https://cal.com/diogoogaspar'),
      copyText: 'https://cal.com/diogoogaspar'
    }
  ];

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      toast({
        variant: "success",
        title: `${t('contact.copySuccess')}`,
        description: `${text} ${t('contact.copySuccessDescription')}`,
      });
    } catch (err) {
      console.error('Erro ao copiar:', err);
      toast({
        variant: "destructive",
        title: `${t('contact.copyError')}`,
        description: t('contact.copyErrorDescription'),
      });
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm animate-modal-backdrop"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative glass-effect rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 w-full max-w-sm sm:max-w-md md:max-w-2xl mx-auto animate-scale-in max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex justify-between items-start mb-6 sm:mb-8 animate-slide-in-down">
          <div className="flex-1 pr-4">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-2">
              {t('contact.letsTalk')}
            </h2>
            <p className="text-gray-400 text-sm sm:text-base">
              {t('contact.chooseMethod')}
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-white/10 rounded-xl transition-colors flex-shrink-0"
          >
            <X size={20} className="text-gray-400 hover:text-white sm:w-6 sm:h-6" />
          </button>
        </div>

        {/* Contact Methods Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-4 sm:mb-6">
          {contactMethods.map((method, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden rounded-xl sm:rounded-2xl p-4 sm:p-6 bg-white/5 hover:bg-white/10 transition-all duration-300 cursor-pointer border border-white/10 hover:border-white/20 animate-slide-in-up animate-delay-${(index + 1) * 100}`}
              onClick={method.action}
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-r ${method.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
              
              <div className="relative">
                <div className="flex items-center justify-between mb-3 sm:mb-4">
                  <div className={`p-2 sm:p-3 rounded-lg sm:rounded-xl bg-gradient-to-r ${method.color} text-white flex-shrink-0`}>
                    <div className="w-5 h-5 sm:w-6 sm:h-6">
                      {method.icon}
                    </div>
                  </div>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      copyToClipboard(method.copyText);
                    }}
                    className="p-2 hover:bg-white/10 rounded-lg transition-colors opacity-0 group-hover:opacity-100 flex-shrink-0"
                    title="Copiar"
                  >
                    <Copy size={14} className="text-gray-400 hover:text-white sm:w-4 sm:h-4" />
                  </button>
                </div>
                
                <h3 className="text-base sm:text-lg font-semibold text-white mb-1">
                  {method.title}
                </h3>
                <p className="text-gray-400 text-xs sm:text-sm break-all">
                  {method.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="text-center pt-4 sm:pt-6 border-t border-white/10">
          <p className="text-gray-400 text-xs sm:text-sm">
            {t('contact.responseTime')} <span className="text-indigo-400 font-medium">24 horas</span>
          </p>
        </div>
      </div>
    </div>
  );
}
