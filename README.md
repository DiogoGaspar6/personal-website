# 🚀 Diogo Gaspar - Portfolio Pessoal

<div align="center">

![Portfolio Preview](https://img.shields.io/badge/Portfolio-Live-brightgreen?style=for-the-badge&logo=vercel)
![Next.js](https://img.shields.io/badge/Next.js-15.4.2-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)
![TailwindCSS](https://img.shields.io/badge/Tailwind-4.0-38B2AC?style=for-the-badge&logo=tailwind-css)

**Um portfolio moderno e responsivo construído com Next.js, TypeScript e TailwindCSS**

[🌐 Ver Site](https://personal-website-diogogaspar6s-projects.vercel.app) • [🛠️ Tecnologias](#tech-stack)

</div>

---

## ✨ Características

### 🎨 **Design Moderno**
- Interface elegante com efeitos glass morphism
- Animações suaves e profissionais
- Design system consistente com gradientes personalizados
- Modo escuro nativo

### 🌍 **Multilíngue**
- Suporte completo para **Português** e **Inglês**
- Troca de idioma em tempo real
- Conteúdo totalmente localizado

### 📱 **Totalmente Responsivo**
- Design mobile-first
- Otimizado para todos os dispositivos
- Modais e componentes adaptáveis
- Touch-friendly interface

### ⚡ **Performance**
- Carregamento ultrarrápido
- Lazy loading de imagens
- Otimizações de SEO
- Core Web Vitals otimizados

### 🎭 **Interatividade**
- Modais animados para contatos e CV
- Sistema de notificações toast
- Filtros de projetos dinâmicos
- Animações escalonadas

---

## 🛠️ Tech Stack

<div align="center" id="tech-stack">

| Frontend | Styling | Tools | Deployment |
|----------|---------|-------|------------|
| ![Next.js](https://img.shields.io/badge/Next.js-black?logo=next.js) | ![TailwindCSS](https://img.shields.io/badge/Tailwind-38B2AC?logo=tailwind-css) | ![TypeScript](https://img.shields.io/badge/TypeScript-blue?logo=typescript) | ![Vercel](https://img.shields.io/badge/Vercel-black?logo=vercel) |
| ![React](https://img.shields.io/badge/React-61DAFB?logo=react) | ![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3) | ![ESLint](https://img.shields.io/badge/ESLint-4B32C3?logo=eslint) | ![Git](https://img.shields.io/badge/Git-F05032?logo=git) |
| ![React i18next](https://img.shields.io/badge/i18next-green?logo=i18next) | ![Framer Motion](https://img.shields.io/badge/Framer-black?logo=framer) | ![VS Code](https://img.shields.io/badge/VS%20Code-007ACC?logo=visual-studio-code) | ![GitHub](https://img.shields.io/badge/GitHub-181717?logo=github) |

</div>

### 📦 **Principais Dependências**

```json
{
  "next": "15.4.2",
  "react": "19.1.0",
  "typescript": "^5.0.0",
  "@tailwindcss/postcss": "^4",
  "react-i18next": "^15.6.0",
  "framer-motion": "^12.23.6",
  "lucide-react": "^0.525.0",
  "@radix-ui/react-toast": "^1.2.14"
}
```

---

## 🚀 Instalação e Uso

### Pré-requisitos
- Node.js 18+ 
- npm ou yarn

### 1️⃣ **Clone o repositório**
```bash
git clone https://github.com/DiogoGaspar6/personal-website.git
cd personal-website
```

### 2️⃣ **Instale as dependências**
```bash
npm install
# ou
yarn install
```

### 3️⃣ **Execute o projeto**
```bash
npm run dev
# ou
yarn dev
```

### 4️⃣ **Acesse o site**
Abra [http://localhost:3000](http://localhost:3000) no seu navegador

---

## 📁 Estrutura do Projeto

```
personal-website/
├── 📁 public/              # Assets estáticos
│   ├── 📁 images/          # Imagens dos projetos
│   ├── 📁 cv/              # CVs em PT/EN
│   ├── favicon.svg         # Favicon personalizado
│   └── ...
├── 📁 src/
│   ├── 📁 components/      # Componentes React
│   │   ├── ContactModal.tsx
│   │   ├── CVDownloadModal.tsx
│   │   ├── HeroSection.tsx
│   │   ├── Navbar.tsx
│   │   └── ...
│   ├── 📁 pages/           # Páginas Next.js
│   │   ├── index.tsx       # Homepage
│   │   ├── about.tsx       # Sobre mim
│   │   ├── projects.tsx    # Projetos
│   │   └── _document.tsx   # SEO & Meta tags
│   ├── 📁 styles/          # Estilos globais
│   ├── 📁 locales/         # Traduções PT/EN
│   └── 📁 lib/             # Utilitários
├── 📁 locales/             # Arquivos de tradução
└── package.json
```

---

## 🎯 Funcionalidades

### 🏠 **Homepage**
- Hero section com animações
- Seção de estatísticas
- Projeto em destaque
- Call-to-action personalizado

### 👨‍💻 **Sobre**
- História pessoal
- Valores e princípios
- Formação acadêmica
- Curiosidades

### 💼 **Projetos**
- Grid de projetos responsivo
- Filtros por categoria
- Links para demos e código
- Projeto destacado

### 📞 **Contatos**
- Modal interativo
- Múltiplos métodos de contato
- Copy-to-clipboard
- Integração com Cal.com

### 📄 **CV Download**
- Versões em PT e EN
- Preview antes do download
- Download tracking
- Notificações de sucesso/erro

---

## 🎨 Design System

### 🎨 **Cores Principais**
```css
/* Gradientes */
--gradient-primary: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
--gradient-secondary: linear-gradient(135deg, #f59e0b 0%, #ef4444 100%);

/* Glass Effect */
--glass: rgba(255, 255, 255, 0.1);
--glass-border: rgba(255, 255, 255, 0.2);
```

### ✨ **Animações**
- **Fade In**: Aparições suaves
- **Slide In**: Entradas direcionais
- **Scale In**: Zoom suave
- **Stagger**: Animações escalonadas

---

## 🌐 Internacionalização

O site suporta dois idiomas com troca em tempo real:

- 🇵🇹 **Português** (padrão)
- 🇬🇧 **Inglês**

### Estrutura das traduções:
```
locales/
├── en/
│   └── translation.json
└── pt/
    └── translation.json
```

---

## 📊 Performance

### Core Web Vitals
- ⚡ **LCP**: < 1.5s
- 🎯 **FID**: < 100ms
- 📏 **CLS**: < 0.1

### Otimizações
- ✅ Lazy loading de imagens
- ✅ Code splitting automático
- ✅ Compressão de assets
- ✅ Caching estratégico

---

## 🚀 Deploy

### Vercel (Recomendado)
1. Conecte seu repositório GitHub
2. Configure as variáveis de ambiente
3. Deploy automático em cada push

```bash
npm run build
npm run start
```

### Outras plataformas
- **Netlify**: `npm run build && npm run export`
- **GitHub Pages**: Configuração adicional necessária
- **Docker**: Dockerfile incluído

---

## 🤝 Contribuição

Contribuições são bem-vindas! Siga estes passos:

1. **Fork** o projeto
2. **Crie** sua feature branch (`git checkout -b feature/AmazingFeature`)
3. **Commit** suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. **Push** para a branch (`git push origin feature/AmazingFeature`)
5. **Abra** um Pull Request

---

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

## 📞 Contato

<div align="center">

**Diogo Gaspar** - Desenvolvedor de Software

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/diogoogaspar)
[![Email](https://img.shields.io/badge/Email-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:diogo.gaspar228@gmail.com)
[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/DiogoGaspar6)
[![Website](https://img.shields.io/badge/Website-4285F4?style=for-the-badge&logo=google-chrome&logoColor=white)](https://personal-website-diogogaspar6s-projects.vercel.app)

</div>

---

<div align="center">

**⭐ Se gostaste do projeto, deixa uma estrela!**

*Feito com ❤️ por [Diogo Gaspar](https://github.com/DiogoGaspar6)*

</div>
