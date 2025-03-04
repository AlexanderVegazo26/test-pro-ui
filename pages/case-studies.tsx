import { GetStaticProps } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, CheckCircle, Code, Database, LineChart } from 'lucide-react';
import { client, urlFor } from '../lib/sanity';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';

// Define the Case Study type
interface CaseStudy {
  title: string;
  description: string;
  image?: SanityImageSource; // Sanity image asset
  category: string;
  link?: string;
}

// Props for the component
interface CaseStudiesProps {
  caseStudies: CaseStudy[];
}

// Add a fallback image URL for when image is undefined
const fallbackImageUrl = '/images/placeholder.jpg';

// Fetch data with ISR
export const getStaticProps: GetStaticProps<CaseStudiesProps> = async () => {
  const query = `*[_type == "caseStudy"]{title, description, image, category, link}`;
  const caseStudies: CaseStudy[] = await client.fetch(query);
  return {
    props: { caseStudies },
    revalidate: 10, // Regenerate every 10 seconds if new data
  };
};

export default function CaseStudies({ caseStudies }: CaseStudiesProps) {
  const featuredCaseStudy = caseStudies[0]; // First as featured
  const otherCaseStudies = caseStudies.slice(1);

  if (!caseStudies || caseStudies.length === 0)
  {return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <CheckCircle className="h-8 w-8 text-blue-600" />
            <span className="text-xl font-bold">TestPro</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="#" className="text-sm font-medium hover:text-blue-600 transition-colors">
              Home
            </Link>
            <Link href="#" className="text-sm font-medium hover:text-blue-600 transition-colors">
              Services
            </Link>
            <Link href="#" className="text-sm font-medium text-blue-600 border-b-2 border-blue-600">
              Case Studies
            </Link>
            <Link href="#" className="text-sm font-medium hover:text-blue-600 transition-colors">
              Contact
            </Link>
          </nav>
          <Link
            href="#contact"
            className="hidden md:inline-flex h-9 items-center justify-center rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow transition-colors hover:bg-blue-700"
          >
            Get in Touch
          </Link>
          <button className="md:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6"
            >
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative w-full bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800 py-20 md:py-32">
        <div className="container relative z-10 mx-auto px-4 text-center md:px-6 lg:text-left">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tighter text-white sm:text-5xl xl:text-6xl/none">
                Software Testing Case Studies
              </h1>
              <p className="max-w-[600px] text-white/90 md:text-xl">
                Real-world success stories from our quality assurance and testing expertise.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center lg:justify-start">
                <Link href="#featured" className="inline-flex h-10 items-center justify-center rounded-md bg-white px-8 text-sm font-medium text-blue-600">
                  Explore Cases
                </Link>
                <Link href="#contact" className="inline-flex h-10 items-center justify-center rounded-md border border-white bg-transparent px-8 text-sm font-medium text-white">
                  Contact Us
                </Link>
              </div>
            </div>
            <div className="mx-auto max-w-md lg:ml-auto">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Software Testing Dashboard"
                width={600}
                height={400}
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Case Study */}
      <section id="featured" className="py-16 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Featured Case Study</h2>
            <p className="mt-2 text-lg text-gray-600">Our most impactful software testing success story</p>
          </div>
          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            <div className="overflow-hidden rounded-lg bg-gray-100">
              <Image
                src={featuredCaseStudy.image ? urlFor(featuredCaseStudy.image).url() : fallbackImageUrl}
                alt={featuredCaseStudy.title}
                width={800}
                height={500}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="flex flex-col justify-center space-y-4">
              <div className="inline-flex items-center rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-800">
                {featuredCaseStudy.category}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 md:text-3xl">{featuredCaseStudy.title}</h3>
              <p className="text-gray-600">{featuredCaseStudy.description}</p>
              <div className="pt-4">
                <Link href={featuredCaseStudy.link || '#'} className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800">
                  Read Full Case Study
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study Grid */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">More Success Stories</h2>
            <p className="mt-2 text-lg text-gray-600">Explore how our testing expertise has helped companies</p>
          </div>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {otherCaseStudies.map((study) => (
              <div key={study.title} className="group relative overflow-hidden rounded-lg border bg-white shadow-sm transition-all hover:shadow-md">
                <div className="aspect-video overflow-hidden bg-gray-100">
                  <Image
                    src={study.image ? urlFor(study.image).url() : fallbackImageUrl}
                    alt={study.title}
                    width={500}
                    height={300}
                    className="h-full w-full object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2">
                    {study.category === 'e-commerce' && <Database className="h-4 w-4 text-blue-600" />}
                    {study.category === 'fintech' && <LineChart className="h-4 w-4 text-blue-600" />}
                    {study.category === 'healthcare' && <Code className="h-4 w-4 text-blue-600" />}
                    <span className="text-sm text-blue-600">{study.category}</span>
                  </div>
                  <h3 className="mt-3 text-xl font-bold">{study.title}</h3>
                  <p className="mt-2 text-gray-600">{study.description}</p>
                  <Link href={study.link || '#'} className="mt-4 inline-flex items-center gap-2 text-blue-600 hover:text-blue-800">
                    View Case Study
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial, CTA, Footer remain static for simplicity */}
      <section className="py-16 md:py-24">...</section>
      <section id="contact" className="bg-blue-600 py-16 md:py-24">...</section>
      <footer className="border-t bg-white py-12">...</footer>
    </div>
  );}
}