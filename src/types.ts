export type ProjectCategory = 'todos' | 'fullstack' | 'backend' | 'frontend' | 'mobile';

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: 'fullstack' | 'backend' | 'frontend' | 'mobile';
  description: string;
  longDescription: string;
  image: string;
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
  featured: boolean;
  highlights: string[];
}

export interface Technology {
  name: string;
  category: 'backend' | 'frontend' | 'database';
  icon: string;
  description: string;
  experienceLevel?: string;
}

export interface SocialLink {
  name: string;
  username: string;
  url: string;
  icon: string;
  type: 'github' | 'linkedin' | 'email' | 'whatsapp';
}
