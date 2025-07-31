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
    <nav className="glass-effect rounded-2xl p-1 shadow-xl">
      <div className="flex items-center gap-1">
        {sections.map((section) => {
          const isActive = router.pathname === section.href;
          return (
            <Link
              key={section.id}
              href={section.href!}
              className={`
                relative flex items-center gap-3 px-4 py-3 rounded-xl 
                transition-all duration-300 ease-out group
                ${isActive 
                  ? "bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-lg" 
                  : "text-gray-300 hover:text-white hover:bg-white/10"
                }
              `}
            >
              <div className={`transition-transform duration-300 ${isActive ? 'scale-110' : 'group-hover:scale-105'}`}>
                {section.icon}
              </div>
              {section.id !== "home" && (
                <span className="text-sm font-medium whitespace-nowrap">
                  {section.label}
                </span>
              )}
              {isActive && (
                <div className="absolute inset-0 rounded-xl animate-pulse-glow"></div>
              )}
            </Link>
          );
        })}
        <div className="ml-2 pl-2 border-l border-white/20">
          <LanguageSwitcher />
        </div>
      </div>
    </nav>
  );
}