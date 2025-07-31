import Navbar from "@/components/Navbar";
import { ExternalLink, Github, Calendar, Tag, Code2, Zap } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useState, useEffect } from "react";
import ContactModal from "@/components/ContactModal";
import { useToast } from "@/lib/use-toast";

export default function Projects() {
  const { t } = useTranslation();
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState("all");
  const { toast } = useToast();

  // Resetar filtro quando o idioma muda
  useEffect(() => {
    setActiveFilter("all");
  }, [t]);

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

  const projects = [
    {
      title: t("projects.gesturePlugin.title"),
      description: t("projects.gesturePlugin.description"),
      image: "/images/PluginPage.png",
      technologies: ["MidiaPipe", "TensorFlow", "FingerPose", "JavaScript"],
      category: "academic",
      year: "2024",
      featured: true,
      links: {
        demo: "https://drive.google.com/file/d/1wE-butQn79Wj0t8LZTckzQ1s7S0yvPRG/view?usp=sharing",
        github: "#",
      },
    },
    {
      title: t("projects.walletTracker.title"),
      description: t("projects.walletTracker.description"),
      image: "/images/personalWallet.png",
      technologies: ["TypeScript", "React", "Docker", "Prisma"],
      category: "webDevelopment",
      year: "2024",
      featured: false,
      links: {
        demo: "#",
        github: "https://github.com/TedcryptoOrg/personal-wallet-tracker",
      },
    },
    {
      title: t("projects.cineWorld.title"),
      description: t("projects.cineWorld.description"),
      image: "/images/cineWorld.png",
      technologies: ["MongoDB", "Express.js", "Google Gemini", "JavaScript"],
      category: "academic",
      year: "2025",
      featured: false,
      links: {
        demo: "https://cineworld-aoop.netlify.app",
        github: "https://github.com/DiogoGaspar6/NOSQL-AOOP",
      },
    },
    {
      title: t("projects.silentWar.title"),
      description: t("projects.silentWar.description"),
      image: "/images/silentWar.png",
      technologies: ["Vue.js", "Node.js", "Socket.IO", "MongoDB"],
      category: "fullStack",
      year: "2025",
      featured: false,
      links: {
        demo: "https://project-assignment-2-29083-29165.onrender.com",
        github: "https://github.com/SIR2425/project-assignment-2-29083_29165",
      },
    },
    {
      title: t("projects.licenPlateRecognition.title"),
      description: t("projects.licenPlateRecognition.description"),
      image: "/images/licensePlateRecognition.png",
      technologies: ["YOLO", "OpenCV", "Python"],
      category: "academic",
      year: "2025",
      featured: false,
      links: {
        demo: "https://drive.google.com/file/d/1sxqBuo7RIqWo7X1xiL98U6UJOylUwT93/view?usp=sharing",
        github: "https://github.com/DiogoGaspar6/license-plate-recognition",
      },
    },
  ];

  const categories = [
    { key: "all", label: t("projects.all") },
    { key: "academic", label: t("projects.academic") },
    { key: "webDevelopment", label: t("projects.webDevelopment") },
    { key: "fullStack", label: t("projects.fullStack") },
    { key: "frontend", label: t("projects.frontend") },
  ];

  const filteredProjects = projects.filter(project => {
    if (activeFilter === "all") return true;
    return project.category === activeFilter;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900 text-white relative overflow-hidden">
      {/* Background Patterns */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(99,102,241,0.1),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

      <header className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
        <Navbar />
      </header>

      <main className="pt-32 pb-20 relative z-10">
        <div className="max-w-7xl mx-auto px-4">
          {/* Hero Section */}
          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-500/20 to-purple-600/20 rounded-full px-4 py-2 mb-6 animate-slide-in-down animate-delay-100">
              <Code2 size={16} className="text-indigo-400" />
              <span className="text-sm font-medium text-indigo-300">
                {t("projects.portfolio")}
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-slide-in-up animate-delay-200">
              {t("projects.myProjects")}{" "}
              <span className="gradient-text">
                {t("projects.projectsTitle")}
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed animate-fade-in animate-delay-300">
              {t("projects.projectsDescription")}
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-12 animate-slide-in-up animate-delay-400">
            {categories.map((category, index) => (
              <button
                key={category.key}
                onClick={() => setActiveFilter(category.key)}
                className={`px-6 py-2 rounded-full transition-all duration-300 text-sm font-medium animate-fade-in animate-delay-${500 + index * 50} ${
                  activeFilter === category.key
                    ? 'bg-gradient-to-r from-indigo-500 to-purple-600 text-white'
                    : 'bg-white/10 hover:bg-white/20 text-gray-300 hover:text-white'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>

          {/* Featured Project */}
          <div className="mb-16 animate-slide-in-up animate-delay-900">
            <div className="flex items-center gap-2 mb-6">
              <Zap size={20} className="text-amber-400" />
              <span className="text-lg font-semibold text-amber-400">
                {t("projects.featuredProject")}
              </span>
            </div>

            <div className="glass-effect rounded-3xl overflow-hidden card-hover">
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="relative overflow-hidden">
                  <img
                    src={projects[0].image}
                    alt="Featured Project Screenshot"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-amber-500 text-black text-xs px-3 py-1 rounded-full font-bold">
                      FEATURED
                    </span>
                  </div>
                </div>

                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="space-y-6">
                    <div className="flex items-center gap-4 text-sm text-gray-400">
                      <div className="flex items-center gap-2">
                        <Calendar size={16} /> <span>2025</span>
                      </div>
                      <div className="w-1 h-1 bg-gray-600 rounded-full"></div>
                      <span>{t(`projects.${projects[0].category}`)}</span>
                    </div>

                    <h3 className="text-3xl font-bold text-white">
                      {projects[0].title}
                    </h3>

                    <p className="text-gray-300 leading-relaxed">
                      {projects[0].description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {[...projects[0].technologies].map((tech) => (
                        <span
                          key={tech}
                          className="bg-white/10 text-gray-300 text-xs px-3 py-1 rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-4">
                      <button 
                        className="flex items-center gap-2 bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105 hover:cursor-pointer"
                        onClick={() => handleLinkClick(projects[0].links.demo, 'demo')}
                      >
                        <ExternalLink size={18} />
                        {t("projects.viewDemo")}
                      </button>
                      <button 
                        className="flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:cursor-pointer hover:scale-105"
                        onClick={() => handleLinkClick(projects[0].links.github, 'github')}
                      >
                        <Github size={18} />
                        {t("projects.viewCode")}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.slice(1).map((project, index) => (
              <div
                key={index}
                className={`glass-effect rounded-2xl overflow-hidden card-hover group h-[480px] flex flex-col animate-slide-in-up animate-delay-${700 + index * 100}`}
              >
                <div className="aspect-video bg-gradient-to-br from-indigo-500/20 to-purple-600/20 flex items-center justify-center relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute top-3 left-3">
                    <span className="bg-black/70 text-white text-xs px-2 py-1 rounded-full">
                      {t(`projects.${project.category}`)}
                    </span>
                  </div>
                </div>

                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-2 text-xs text-gray-400 mb-3">
                    <Calendar size={12} />
                    <span>{project.year}</span>
                  </div>

                  <h3 className="text-xl font-bold text-white group-hover:text-indigo-400 transition-colors mb-3">
                    {project.title}
                  </h3>

                  <p className="text-gray-400 text-sm leading-relaxed mb-4 flex-1">
                    {project.description}
                  </p>

                  <div className="space-y-3 mt-auto">
                    <div className="flex flex-wrap gap-1">
                      {project.technologies.slice(0, 4).map((tech) => (
                        <span
                          key={tech}
                          className="bg-white/5 text-gray-400 text-xs px-2 py-1 rounded"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 4 && (
                        <span className="text-xs text-gray-500">
                          +{project.technologies.length - 4}
                        </span>
                      )}
                    </div>

                    <div className="flex gap-3 pt-2">
                      <button 
                        className="flex items-center gap-2 text-indigo-400 hover:text-indigo-300 text-sm font-medium transition-colors hover:cursor-pointer"
                        onClick={() => handleLinkClick(project.links.demo, 'demo')}
                      >
                        <ExternalLink size={14} />
                        {t("projects.demo")}
                      </button>
                      <button
                        className="flex items-center gap-2 text-gray-400 hover:text-white text-sm font-medium transition-colors hover:cursor-pointer"
                        onClick={() => handleLinkClick(project.links.github, 'github')}
                      >
                        <Github size={14} />
                        {t("projects.code")}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center mt-20 animate-fade-in animate-delay-1000">
            <div className="glass-effect rounded-3xl p-12 lg:p-16 max-w-4xl mx-auto">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6 animate-slide-in-up animate-delay-1100">
                {t("projects.haveProjectInMind")}{" "}
                <span className="gradient-text">{t("projects.mind")}</span>?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto animate-fade-in animate-delay-1200">
                {t("projects.collaborationDescription")}
              </p>
              <button 
                onClick={() => setIsContactModalOpen(true)}
                className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl animate-scale-in animate-delay-1300"
              >
                {t("home.contact")}
              </button>
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
