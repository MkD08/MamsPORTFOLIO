export type ProjectCategory =
  | "Tous"
  | "Web"
  | "Mobile"
  | "Backend"
  | "API"
  | "E-commerce"
  | "Autres";

export type ProjectStatus =
  | "En cours"
  | "MVP terminé"
  | "Terminé";

  export interface Project {
    title: string;
    slug: string;
    description: string;
    technologies: string[];
    category: ProjectCategory;
    status: ProjectStatus;
  
    professional?: boolean;
    internship?: boolean;
    featured?: boolean;
  
    image?: string;
    screenshots?: Array<{
      src: string;
      alt: string;
      caption: string;
    }>;
    github?: string;
    demo?: string;
  
    context?: string;
    objective?: string;
    features?: string[];
    role?: string;
  }
