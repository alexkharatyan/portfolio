import { Project } from "@/types";

export const projects: Project[] = [
  {
    title: "EditMentor",
    summary:
      "An interactive platform for learning photo and video editing techniques through guided tutorials and hands-on practice.",
    technologies: ["React", "TypeScript", "MUI", 'Sass'],
    link: "https://editmentor.com/",
    badge: "Public",
  },
  {
    title: "Slog",
    summary:
      "A modern media platform delivering curated content, news, and stories with a clean reading experience.",
    technologies: ["React", "TypeScript", 'Storybook', 'Sass'],
    link: "https://slog.media/",
    badge: "Public",
  },
  {
    title: "AuroraForum",
    summary:
      "A modern community discussion platform with real-time messaging, rich text editing, and advanced moderation tools.",
    technologies: ["React", "TypeScript", "WebSocket", "CSS Modules"],
    link: "https://auroraforum.com/en",
    badge: "Public",
  },
  {
    title: "AraratChallenge",
    summary:
      "A gamified challenge platform encouraging goal tracking, community participation, and achievement milestones.",
    technologies: ["React", "JavaScript", "Sass", "REST API"],
    link: "https://araratchallenge.com/am",
    badge: "Public",
  },
  {
    title: "ATAIX",
    summary:
      "A cryptocurrency exchange platform with real-time trading, portfolio management, and market analytics.",
    technologies: ["React", "TypeScript", "WebSocket", 'MUI', "REST API"],
    link: "https://ataix.com/",
    badge: "Public",
  },
  {
    title: "CSIAM",
    summary:
      "A scientific and academic web portal for the Computer Science Institute of Armenia, featuring publications and research resources.",
    technologies: ["JavaScript", "HTML5", "CSS3", "Responsive Design"],
    link: "http://csiam.sci.am/am",
    badge: "Public",
  },
  {
    title: "Tufenkian Carpets",
    summary:
      "E-commerce web experience for a premium carpet brand, featuring product galleries, filtering, and a polished design.",
    technologies: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
    link: "https://tufenkiancarpets.am/en",
    badge: "Public",
  },
  {
    title: "MLRI",
    summary:
      "Web platform for the Media Literacy Research Institute, promoting media education, research, and public awareness.",
    technologies: ["React", "JavaScript", "CSS3", "REST API"],
    link: "https://mlri.org.am/en",
    badge: "Public",
  },
  // {
  //   title: "HAFO",
  //   summary:
  //     "Web presence for the Armenian Foundation organization, showcasing programs, events, and community initiatives.",
  //   technologies: ["JavaScript", "HTML5", "CSS3", "Responsive Design"],
  //   link: "https://hafo.am/",
  //   badge: "Public",
  // },
  {
    title: "Picsart Design System",
    summary:
      "A comprehensive, scalable design system and component library powering Picsart's product suite — covering tokens, theming, accessibility patterns, and a rich set of reusable UI components used across multiple teams and platforms.",
    technologies: ["React", "TypeScript", "Storybook", "Design Tokens", "JSS", "Vanilla Extract", "Vite"],
    link: "https://picsart.com",
    badge: "Internal",
    featured: true,
    company: "Picsart",
  },
  // {
  //   title: "Product UI Platforms",
  //   summary:
  //     "Large-scale UI platform development for enterprise products, including complex dashboards, data visualizations, and workflow tools.",
  //   technologies: ["React", "TypeScript", "Webpack", "JSS"],
  //   badge: "Internal",
  // },
];
