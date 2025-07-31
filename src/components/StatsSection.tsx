import { Code2, Database, Smartphone, Globe, Zap, Users } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function StatsSection() {
  const { t } = useTranslation();

  const stats = [
    { icon: <Code2 size={24} />, number: "3+", label: t('stats.yearsExperience'), color: "text-indigo-400" },
    { icon: <Globe size={24} />, number: "10+", label: t('stats.completedProjects'), color: "text-emerald-400" },
    { icon: <Database size={24} />, number: "5+", label: t('stats.technologies'), color: "text-amber-400" },
    { icon: <Users size={24} />, number: "100%", label: t('stats.satisfaction'), color: "text-purple-400" },
  ];

  const skills = [
    { name: "React / Next.js", level: 90, experienceLabel: t('stats.advanced'), years: `2+ ${t('stats.years')}`, color: "bg-blue-500" },
    { name: "TypeScript", level: 85, experienceLabel: t('stats.advanced'), years: `2+ ${t('stats.years')}`, color: "bg-blue-600" },
    { name: "TailwindCSS", level: 80, experienceLabel: t('stats.intermediatePlus'), years: `1 ${t('stats.year')}`, color: "bg-indigo-500" },
    { name: "PostgreSQL", level: 75, experienceLabel: t('stats.advanced'), years: `3+ ${t('stats.years')}`, color: "bg-green-400" },
    { name: "MongoDB", level: 85, experienceLabel: t('stats.advanced'), years: `2 ${t('stats.years')}`, color: "bg-yellow-500" },
    { name: "Python", level: 80, experienceLabel: t('stats.intermediatePlus'), years: `3+ ${t('stats.years')}`, color: "bg-purple-500" },
    { name: "Docker", level: 70, experienceLabel: t('stats.advanced'), years: `3+ ${t('stats.years')}`, color: "bg-blue-700" },
    { name: "Git", level: 80, experienceLabel: t('stats.advanced'), years: `3+ ${t('stats.years')}`, color: "bg-red-600" },
    { name: "Node.js", level: 75, experienceLabel: t('stats.intermediate'), years: `1+ ${t('stats.year')}`, color: "bg-green-600" },
    { name: "Machine Learning", level: 65, experienceLabel: "Iniciante+", years: "1 ano", color: "bg-orange-500" },
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="glass-effect rounded-2xl p-6 text-center card-hover group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-white/10 mb-4 group-hover:scale-110 transition-transform duration-300 ${stat.color}`}>
                {stat.icon}
              </div>
              <div className="text-2xl lg:text-3xl font-bold text-white mb-1">
                {stat.number}
              </div>
              <div className="text-sm text-gray-400 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Skills Section */}
        <div className="glass-effect rounded-3xl p-8 lg:p-12">
          <div className="text-center mb-12">
            <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              {t('stats.technologiesAndSkills')} <span className="gradient-text">{t('stats.skills')}</span>
            </h3>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              {t('stats.skillsDescription')}
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <div key={skill.name} className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-white font-medium">{skill.name}</span>
                  <div className="text-right">
                    <span className="text-sm font-semibold text-indigo-400">{skill.experienceLabel}</span>
                    <div className="text-xs text-gray-500">{skill.years}</div>
                  </div>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
                  <div 
                    className={`h-full ${skill.color} rounded-full transition-all duration-1000 ease-out`}
                    style={{ 
                      width: `${skill.level}%`,
                      animationDelay: `${index * 0.1}s`
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>

          {/* Tech Stack Icons */}
          <div className="mt-12 pt-8 border-t border-white/10">
            <div className="text-center mb-6">
              <span className="text-gray-400 text-sm font-medium">{t('stats.techStack')}</span>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              {['React', 'TypeScript', 'Python', 'Node.js', 'TailwindCSS', 'PostgreSQL', 'Docker', 'Git', 'Express.js', 'Next.js', 'GraphQL', 'Figma', 'MongoDB', 'Prisma', 'Vercel', 'GraphQL', 'Angular', 'Java', 'C', 'C#', 'C++', 'Ionic', 'Angular', 'Flutter', 'MLFlow', 'Bootstrap'].map((tech) => (
                <span 
                  key={tech}
                  className="bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:scale-105"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
