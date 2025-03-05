// Sanity Types
export type SanityImage = {
  _type: 'image';
  asset: {
    _ref: string;
    _type: 'reference';
  };
  alt?: string;
};

export type Slug = {
  _type: 'slug';
  current: string;
};

// Service Types
export type Service = {
  _id: string;
  title: string;
  description: string;
  slug: Slug;
  icon: string;
  features: string[];
  benefits: string[];
};

export type ServiceDetail = Service & {
  content: any; // Rich text content
  relatedCaseStudies: CaseStudy[];
};

// Case Study Types
export type CaseStudy = {
  _id: string;
  title: string;
  description: string;
  slug: Slug;
  category: string;
  mainImage: SanityImage;
  service?: string;
};

export type CaseStudyDetail = Omit<CaseStudy, 'service'> & {
  content: any; // Rich text content
  results: {
    label: string;
    value: string;
  }[];
  service: {
    _id: string;
    title: string;
    slug: Slug;
  };
};

// Home Page Types
export type HomePageData = {
  title: string;
  description: string;
  heroImage: SanityImage;
  services: {
    title: string;
    description: string;
    icon: string;
    features: string[];
  }[];
  stats: {
    value: string;
    label: string;
  }[];
  testimonials: Testimonial[];
};

// Testimonial Types
export type Testimonial = {
  quote: string;
  author: string;
  role: string;
  company: string;
  image: SanityImage;
};
