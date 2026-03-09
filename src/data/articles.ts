export interface Article {
  title: string;
  summary: string;
  url: string;
  date: string;
  tags: string[];
}

export const articles: Article[] = [
  {
    title: "Cascade Layers (CSS @layer)",
    summary:
      "Exploring CSS cascade layers — a feature that solves specificity conflicts by providing a guaranteed way to write CSS without worrying about specificity and source order.",
    url: "https://medium.com/@alexandria.kharatyan/cascade-layers-css-layer-3979564e7fd9",
    date: "Jun 2023",
    tags: ["CSS", "Web Development", "Frontend"],
  },
  {
    title: "What is Accessibility and How to Make Your Website More Accessible?",
    summary:
      "A comprehensive guide to web accessibility — covering visual, motor, auditory, and cognitive considerations, semantic HTML, keyboard navigation, and practical best practices.",
    url: "https://medium.com/@alexandria.kharatyan/what-is-accessibility-and-how-to-make-your-website-more-accessible-bfec21f4911d",
    date: "Nov 2022",
    tags: ["Accessibility", "UX/UI", "Best Practices"],
  },
];
