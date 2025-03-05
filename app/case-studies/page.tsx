import CaseStudyCard from '@/components/case-studies/CaseStudyCard';
import Button from '@/components/ui/Button';
import Image from 'next/image';

// This would normally come from a CMS like Sanity
const caseStudies = [
  {
    title: 'E-Commerce Platform Performance Optimization',
    description: 'How we improved load times by 40% and increased conversion rates for a major online retailer.',
    imageSrc: '/images/placeholder.svg',
    category: 'E-Commerce',
    href: '/case-studies/ecommerce-optimization',
  },
  {
    title: 'Banking App Security Testing',
    description: 'Comprehensive security testing that identified and resolved critical vulnerabilities before launch.',
    imageSrc: '/images/placeholder.svg',
    category: 'FinTech',
    href: '/case-studies/banking-security',
  },
  {
    title: 'Healthcare Platform Reliability Testing',
    description: 'How our testing approach ensured 99.99% uptime for a critical healthcare application.',
    imageSrc: '/images/placeholder.svg',
    category: 'Healthcare',
    href: '/case-studies/healthcare-reliability',
  },
  {
    title: 'SaaS Application Automated Testing',
    description: 'Implementing a CI/CD pipeline with automated testing that reduced QA time by 60%.',
    imageSrc: '/images/placeholder.svg',
    category: 'SaaS',
    href: '/case-studies/saas-automation',
  },
  {
    title: 'Mobile App Performance Testing',
    description: 'Optimizing a mobile application to perform flawlessly across multiple devices and network conditions.',
    imageSrc: '/images/placeholder.svg',
    category: 'Mobile',
    href: '/case-studies/mobile-performance',
  },
  {
    title: 'Enterprise Software Integration Testing',
    description: 'Ensuring seamless integration between multiple enterprise systems during a major migration.',
    imageSrc: '/images/placeholder.svg',
    category: 'Enterprise',
    href: '/case-studies/enterprise-integration',
  },
];

export default function CaseStudiesPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-16 sm:py-24">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
              Our Case Studies
            </h1>
            <p className="mt-6 text-xl text-gray-600">
              Explore how we've helped companies across industries deliver high-quality software through comprehensive testing solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Case Study */}
      <section className="py-16">
        <div className="container">
          <div className="overflow-hidden rounded-xl bg-blue-600 shadow-xl">
            <div className="grid items-center gap-8 md:grid-cols-2">
              <div className="p-8 md:p-12">
                <div className="mb-4 inline-block rounded-full bg-blue-500 px-4 py-1 text-sm font-medium text-white">
                  Featured Case Study
                </div>
                <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
                  E-Commerce Platform Performance Optimization
                </h2>
                <p className="mb-6 text-blue-100">
                  Learn how we helped a major online retailer improve their website performance, resulting in 40% faster load times and a significant increase in conversion rates.
                </p>
                <Button href="/case-studies/ecommerce-optimization" variant="secondary" size="lg">
                  Read Case Study
                </Button>
              </div>
              <div className="bg-blue-500 p-8">
                <div className="relative aspect-video overflow-hidden rounded-lg">
                  <Image
                    src="/images/placeholder.svg"
                    alt="E-Commerce Platform"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-16">
        <div className="container">
          <h2 className="mb-12 text-3xl font-bold text-gray-900">All Case Studies</h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {caseStudies.map((caseStudy, index) => (
              <CaseStudyCard
                key={index}
                title={caseStudy.title}
                description={caseStudy.description}
                imageSrc={caseStudy.imageSrc}
                category={caseStudy.category}
                href={caseStudy.href}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="bg-gray-50 py-16">
        <div className="container">
          <div className="mx-auto max-w-4xl rounded-xl bg-white p-8 shadow-lg md:p-12">
            <div className="text-center">
              <h2 className="mb-6 text-3xl font-bold text-gray-900">What Our Clients Say</h2>
              <blockquote className="mb-8">
                <p className="text-xl font-medium text-gray-700">
                  "TestPro's comprehensive testing approach transformed our development process. Their team identified
                  critical issues before launch, saving us from potential customer dissatisfaction and revenue loss."
                </p>
              </blockquote>
              <div className="flex items-center justify-center">
                <div className="h-12 w-12 overflow-hidden rounded-full bg-blue-100">
                  <Image
                    src="/images/placeholder.svg"
                    alt="Sarah Johnson"
                    width={48}
                    height={48}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="ml-4 text-left">
                  <p className="font-semibold">Sarah Johnson</p>
                  <p className="text-sm text-gray-600">CTO, ShopStream</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container">
          <div className="mx-auto max-w-4xl rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 p-8 text-center shadow-lg md:p-12">
            <h2 className="mb-4 text-3xl font-bold text-white">Ready to elevate your software quality?</h2>
            <p className="mb-8 text-lg text-white/90">
              Contact us today to discuss how our testing services can help you deliver flawless software.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button href="/contact" variant="secondary" size="lg">
                Contact Us
              </Button>
              <Button href="/services" variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                View Services
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 