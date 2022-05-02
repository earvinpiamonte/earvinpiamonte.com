interface PostTypeProperties {
  type: string;
  title: string;
  slug: string;
  categories?: string[];
  thumbnail?: boolean;
  featuredImage?: boolean;
  readingTime?: any;
  summary?: string;
}

interface PostType extends PostTypeProperties {
  date: Date;
}

interface ProjectType extends PostTypeProperties {
  year?: number;
  url?: string;
  demoURL?: string;
}

interface CraftType extends PostTypeProperties {
  repoURL?: string;
  downloadURL?: string;
  demoURL?: string;
  viewURL?: string;
}

interface PageType {
  title?: string;
  slug?: string;
  summary?: string;
  children?: React.ReactNode;
}

interface ExperienceType extends PostTypeProperties {
  yearStart: number;
  yearEnd?: number;
  company: string;
  location: string;
  tools?: string[];
}

interface TimelineType {
  title?: string;
  summary?: string;
}

interface WtfType {
  title?: string;
  type: string;
  slug?: string;
  summary?: string;
  categories?: string[];
}

enum Colors {
  purple,
  gray,
  red,
  yellow,
  green,
  blue,
  indigo,
  pink,
}

type ColorsString = keyof typeof Colors;

export type {
  PostType,
  ProjectType,
  CraftType,
  PageType,
  ExperienceType,
  TimelineType,
  ColorsString,
  WtfType,
};
