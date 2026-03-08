export interface Project {
  title: string;
  summary: string;
  technologies: string[];
  link?: string;
  badge?: "Confidential" | "Internal" | "Public" | "Open Source";
  featured?: boolean;
  company?: string;
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  description: string;
}

export interface Specialization {
  title: string;
  description: string;
  icon: string;
}

export interface AIWorkflowItem {
  title: string;
  description: string;
  icon: string;
}

export interface NavItem {
  label: string;
  href: string;
}
