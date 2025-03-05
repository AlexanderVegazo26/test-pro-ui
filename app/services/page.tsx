import Image from "next/image"
import Link from "next/link"
import { ArrowRight, CheckCircle, Code, Database, LineChart, Server, Shield, Zap } from "lucide-react"

export default function Services() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative w-full bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800 py-20 md:py-32">
          <div className="container relative z-10 mx-auto px-4 text-center md:px-6 lg:text-left">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="space-y-4">
                <h1 className="text-4xl font-bold tracking-tighter text-white sm:text-5xl xl:text-6xl/none">
                  Our Testing Services
                </h1>
                <p className="max-w-[600px] text-white/90 md:text-xl">
                  Comprehensive software testing solutions to ensure your applications meet the highest standards of quality.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center lg:justify-start">
                  <Link
                    href="#services"
                    className="inline-flex h-10 items-center justify-center rounded-md bg-white px-8 text-sm font-medium text-blue-600 shadow transition-colors hover:bg-gray-100"
                  >
                    View Services
                  </Link>
                  <Link
                    href="/contact"
                    className="inline-flex h-10 items-center justify-center rounded-md border border-white bg-transparent px-8 text-sm font-medium text-white shadow-sm transition-colors hover:bg-white/10"
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
              <div className="mx-auto max-w-md lg:ml-auto">
                <Image
                  src="/images/placeholder.svg"
                  alt="Testing Services"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Main Services Section */}
        <section id="services" className="py-16 md:py-24">
          <div className="container">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our Testing Services</h2>
              <p className="mt-2 text-lg text-gray-600">
                Comprehensive solutions to ensure your software meets the highest quality standards
              </p>
            </div>
            <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {/* Service Card 1 */}
              <div className="group relative overflow-hidden rounded-lg border bg-white p-6 shadow-sm transition-all hover:shadow-md">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100">
                  <Code className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="mb-2 text-xl font-bold">Functional Testing</h3>
                <p className="text-gray-600">
                  Ensure your software works as expected with our comprehensive functional testing services.
                </p>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span>User acceptance testing</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span>Integration testing</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span>Regression testing</span>
                  </li>
                </ul>
                <Link
                  href="/contact"
                  className="mt-6 inline-flex items-center gap-2 text-blue-600 hover:text-blue-800"
                >
                  Learn More
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>

              {/* Service Card 2 */}
              <div className="group relative overflow-hidden rounded-lg border bg-white p-6 shadow-sm transition-all hover:shadow-md">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100">
                  <Zap className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="mb-2 text-xl font-bold">Performance Testing</h3>
                <p className="text-gray-600">
                  Optimize your application's speed, responsiveness, and stability under various load conditions.
                </p>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span>Load testing</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span>Stress testing</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span>Scalability testing</span>
                  </li>
                </ul>
                <Link
                  href="/contact"
                  className="mt-6 inline-flex items-center gap-2 text-blue-600 hover:text-blue-800"
                >
                  Learn More
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>

              {/* Service Card 3 */}
              <div className="group relative overflow-hidden rounded-lg border bg-white p-6 shadow-sm transition-all hover:shadow-md">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100">
                  <Shield className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="mb-2 text-xl font-bold">Security Testing</h3>
                <p className="text-gray-600">
                  Protect your application and user data with our comprehensive security testing services.
                </p>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span>Penetration testing</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span>Vulnerability assessment</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span>Compliance testing</span>
                  </li>
                </ul>
                <Link
                  href="/contact"
                  className="mt-6 inline-flex items-center gap-2 text-blue-600 hover:text-blue-800"
                >
                  Learn More
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="bg-gray-50 py-16 md:py-24">
          <div className="container">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our Testing Process</h2>
              <p className="mt-2 text-lg text-gray-600">
                A systematic approach to ensure comprehensive quality assurance
              </p>
            </div>
            <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {/* Process steps would go here */}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="rounded-xl bg-blue-600 p-8 md:p-12">
              <div className="mx-auto max-w-3xl text-center">
                <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Ready to elevate your software quality?</h2>
                <p className="mt-4 text-lg text-white/90">
                  Contact us today to discuss how our testing services can help you deliver flawless software.
                </p>
                <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                  <Link
                    href="/contact"
                    className="inline-flex h-10 items-center justify-center rounded-md bg-white px-8 text-sm font-medium text-blue-600 shadow transition-colors hover:bg-gray-100"
                  >
                    Contact Us
                  </Link>
                  <Link
                    href="/case-studies"
                    className="inline-flex h-10 items-center justify-center rounded-md border border-white bg-transparent px-8 text-sm font-medium text-white shadow-sm transition-colors hover:bg-white/10"
                  >
                    View Case Studies
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
