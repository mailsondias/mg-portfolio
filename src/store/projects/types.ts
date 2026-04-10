export type ProjectLink = {
  url: string;
  name: string;
};

export type ProjectCategory = {
  name: string;
  slug: string;
};

export type ProjectImages = {
  thumbnail: string;
  project: string;
};

export type Project = {
  id: number;
  slug: string;
  title: string;
  description?: string;
  category: ProjectCategory;
  images: ProjectImages;
  stack: string[];
  featured: boolean;
  links: ProjectLink[];
  reactions: {
    liked: number;
  };
};