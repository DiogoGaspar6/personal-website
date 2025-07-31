import Link from "next/link";
import { useRouter } from "next/router";
import { Home, User, LayoutGrid, Sparkles } from "lucide-react";
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';

export default function Navbar() {
  const router = useRouter();
  const { t } = useTranslation();

  const sections = [
    { id: "home", label: "", icon: <Home size={18} />, type: "link", href: "/" },
    { id: "about", label: t('navbar.about'), icon: <User size={18} />, type: "link", href: "/about" },
    { id: "projects", label: t('navbar.projects'), icon: <LayoutGrid size={18} />, type: "link", href: "/projects" },
  ];

  return (
    <nav className="glass-effect rounded-xl sm:rounded-2xl p-1 shadow-xl">
      <div className="flex items-center gap-1">
        {sections.map((section) => {
          const isActive = router.pathname === section.href;
          return (
            <Link
              key={section.id}
              href={section.href!}
              className={`
                relative flex items-center gap-2 sm:gap-3 px-2 sm:px-4 py-2 sm:py-3 rounded-lg sm:rounded-xl 
                transition-all duration-300 ease-out group
                ${isActive 
                  ? "bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-lg" 
                  : "text-gray-300 hover:text-white hover:bg-white/10"
                }
              `}
            >
              <div className={`transition-transform duration-300 ${isActive ? 'scale-110' : 'group-hover:scale-105'}`}>
                <div className="w-4 h-4 sm:w-[18px] sm:h-[18px]">
                  {section.icon}
                </div>
              </div>
              {section.id !== "home" && (
                <span className="text-xs sm:text-sm font-medium whitespace-nowrap hidden xs:inline">
                  {section.label}
                </span>
              )}
              {isActive && (
                <div className="absolute inset-0 rounded-lg sm:rounded-xl animate-pulse-glow"></div>
              )}
            </Link>
          );
        })}
        <div className="ml-1 sm:ml-2 pl-1 sm:pl-2 border-l border-white/20">
          <LanguageSwitcher />
        </div>
      </div>
    </nav>
  );
}