// Home Page Queries
export const homePageQuery = `
  *[_type == "homePage"][0] {
    title,
    description,
    heroImage,
    "services": services[] {
      title,
      description,
      icon,
      features[]
    },
    "stats": stats[] {
      value,
      label
    },
    "testimonials": *[_type == "testimonial"] {
      quote,
      author,
      role,
      company,
      image
    }[0...3]
  }
`;

// Services Queries
export const servicesQuery = `
  *[_type == "service"] {
    _id,
    title,
    description,
    slug,
    icon,
    features[],
    benefits[]
  }
`;

export const serviceBySlugQuery = `
  *[_type == "service" && slug.current == $slug][0] {
    _id,
    title,
    description,
    slug,
    icon,
    content,
    features[],
    benefits[],
    "relatedCaseStudies": *[_type == "caseStudy" && references(^._id)] {
      _id,
      title,
      description,
      slug,
      category,
      mainImage
    }
  }
`;

// Case Studies Queries
export const caseStudiesQuery = `
  *[_type == "caseStudy"] {
    _id,
    title,
    description,
    slug,
    category,
    mainImage,
    "service": service->title
  }
`;

export const caseStudyBySlugQuery = `
  *[_type == "caseStudy" && slug.current == $slug][0] {
    _id,
    title,
    description,
    slug,
    category,
    mainImage,
    content,
    results[],
    "service": service->{
      _id,
      title,
      slug
    }
  }
`;
