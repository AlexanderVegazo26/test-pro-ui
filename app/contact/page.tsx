import Image from "next/image"
import Link from "next/link"
import { ArrowRight, CheckCircle, Mail, MapPin, Phone } from "lucide-react"

export default function Contact() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Main Content */}
      <main className="flex-1">
        {/* Hero Section with Gradient Background */}
        <section className="relative w-full bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800 py-20 md:py-32">
          <div className="container relative z-10 mx-auto px-4 text-center md:px-6 lg:text-left">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="space-y-4">
                <h1 className="text-4xl font-bold tracking-tighter text-white sm:text-5xl xl:text-6xl/none">
                  Get in Touch With Our Team
                </h1>
                <p className="max-w-[600px] text-white/90 md:text-xl">
                  Have questions about our testing services? Contact us today and discover how we can help you deliver flawless software.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center lg:justify-start">
                  <a
                    href="#contact-form"
                    className="inline-flex h-10 items-center justify-center rounded-md bg-white px-8 text-sm font-medium text-blue-600 shadow transition-colors hover:bg-gray-100"
                  >
                    Contact Us
                  </a>
                  <Link
                    href="/services"
                    className="inline-flex h-10 items-center justify-center rounded-md border border-white bg-transparent px-8 text-sm font-medium text-white shadow-sm transition-colors hover:bg-white/10"
                  >
                    Our Services
                  </Link>
                </div>
              </div>
              <div className="mx-auto max-w-md lg:ml-auto">
                <Image
                  src="/images/placeholder.svg"
                  alt="Contact Us"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Contact Information Section */}
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Contact Information</h2>
              <p className="mt-2 text-lg text-gray-600">
                Reach out to us through any of these channels
              </p>
            </div>
            <div className="mt-12 grid gap-8 md:grid-cols-3">
              {/* Contact Card 1 */}
              <div className="flex flex-col items-center rounded-lg border bg-white p-6 text-center shadow-sm">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-blue-100">
                  <Phone className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="mb-2 text-xl font-bold">Phone</h3>
                <p className="text-gray-600">
                  Call us directly to speak with a testing expert
                </p>
                <a href="tel:+1234567890" className="mt-4 text-blue-600 hover:text-blue-800">
                  +1 (234) 567-890
                </a>
              </div>

              {/* Contact Card 2 */}
              <div className="flex flex-col items-center rounded-lg border bg-white p-6 text-center shadow-sm">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-blue-100">
                  <Mail className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="mb-2 text-xl font-bold">Email</h3>
                <p className="text-gray-600">
                  Send us an email and we'll respond within 24 hours
                </p>
                <a href="mailto:info@testpro.com" className="mt-4 text-blue-600 hover:text-blue-800">
                  info@testpro.com
                </a>
              </div>

              {/* Contact Card 3 */}
              <div className="flex flex-col items-center rounded-lg border bg-white p-6 text-center shadow-sm">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-blue-100">
                  <MapPin className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="mb-2 text-xl font-bold">Office</h3>
                <p className="text-gray-600">
                  Visit our headquarters for an in-person consultation
                </p>
                <address className="mt-4 not-italic text-blue-600">
                  123 Testing Street<br />
                  San Francisco, CA 94103
                </address>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section id="contact-form" className="bg-gray-50 py-16 md:py-24">
          <div className="container">
            <div className="mx-auto max-w-3xl">
              <div className="rounded-xl bg-white p-8 shadow-sm md:p-12">
                <div className="mb-8 text-center">
                  <h2 className="text-3xl font-bold tracking-tight text-gray-900">Send Us a Message</h2>
                  <p className="mt-2 text-lg text-gray-600">
                    Fill out the form below and we'll get back to you as soon as possible
                  </p>
                </div>
                <form className="space-y-6">
                  <div className="grid gap-6 md:grid-cols-2">
                    <div>
                      <label htmlFor="first-name" className="mb-2 block text-sm font-medium text-gray-900">
                        First Name
                      </label>
                      <input
                        type="text"
                        id="first-name"
                        className="block w-full rounded-md border border-gray-300 px-4 py-2 text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-600"
                        placeholder="John"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="last-name" className="mb-2 block text-sm font-medium text-gray-900">
                        Last Name
                      </label>
                      <input
                        type="text"
                        id="last-name"
                        className="block w-full rounded-md border border-gray-300 px-4 py-2 text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-600"
                        placeholder="Doe"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="email" className="mb-2 block text-sm font-medium text-gray-900">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="block w-full rounded-md border border-gray-300 px-4 py-2 text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-600"
                      placeholder="john.doe@example.com"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="mb-2 block text-sm font-medium text-gray-900">
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      className="block w-full rounded-md border border-gray-300 px-4 py-2 text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-600"
                      placeholder="Your Company"
                    />
                  </div>
                  <div>
                    <label htmlFor="service" className="mb-2 block text-sm font-medium text-gray-900">
                      Service Interested In
                    </label>
                    <select
                      id="service"
                      className="block w-full rounded-md border border-gray-300 px-4 py-2 text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-600"
                    >
                      <option value="">Select a service</option>
                      <option value="functional">Functional Testing</option>
                      <option value="performance">Performance Testing</option>
                      <option value="security">Security Testing</option>
                      <option value="automated">Automated Testing</option>
                      <option value="api">API Testing</option>
                      <option value="consulting">QA Consulting</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="message" className="mb-2 block text-sm font-medium text-gray-900">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      className="block w-full rounded-md border border-gray-300 px-4 py-2 text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-600"
                      placeholder="Tell us about your project and testing needs..."
                      required
                    ></textarea>
                  </div>
                  <div className="flex items-center">
                    <input
                      id="privacy"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-600"
                      required
                    />
                    <label htmlFor="privacy" className="ml-2 block text-sm text-gray-600">
                      I agree to the{" "}
                      <a href="#" className="text-blue-600 hover:text-blue-800">
                        privacy policy
                      </a>
                    </label>
                  </div>
                  <button
                    type="submit"
                    className="inline-flex w-full items-center justify-center rounded-md bg-blue-600 px-6 py-3 text-base font-medium text-white shadow transition-colors hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-700"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Visit Our Office</h2>
              <p className="mt-2 text-lg text-gray-600">
                We're located in the heart of San Francisco
              </p>
            </div>
            <div className="mt-12 overflow-hidden rounded-lg shadow-md">
              <div className="aspect-video w-full">
                <Image
                  src="/placeholder.svg?height=500&width=1000"
                  alt="Office Location Map"
                  width={1000}
                  height={500}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-gray-50 py-16 md:py-24">
          <div className="container">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Frequently Asked Questions</h2>
              <p className="mt-2 text-lg text-gray-600">
                Find answers to common questions about our testing services
              </p>
            </div>
            <div className="mt-12 grid gap-6 md:grid-cols-2">
              {/* FAQ Item 1 */}
              <div className="rounded-lg border bg-white p-6 shadow-sm">
                <h3 className="text-lg font-bold">How quickly can you start testing our application?</h3>
                <p className="mt-2 text-gray-600">
                  We can typically begin testing within 1-2 business days after finalizing project requirements and agreements.
                </p>
              </div>

              {/* FAQ Item 2 */}
              <div className="rounded-lg border bg-white p-6 shadow-sm">
                <h3 className="text-lg font-bold">Do you offer ongoing testing services?</h3>
                <p className="mt-2 text-gray-600">
                  Yes, we offer both project-based testing and ongoing testing services with flexible engagement models to suit your needs.
                </p>
              </div>

              {/* FAQ Item 3 */}
              <div className="rounded-lg border bg-white p-6 shadow-sm">
                <h3 className="text-lg font-bold">What industries do you specialize in?</h3>
                <p className="mt-2 text-gray-600">
                  We have expertise across multiple industries including fintech, healthcare, e-commerce, and enterprise software.
                </p>
              </div>

              {/* FAQ Item 4 */}
              <div className="rounded-lg border bg-white p-6 shadow-sm">
                <h3 className="text-lg font-bold">How do you handle confidential information?</h3>
                <p className="mt-2 text-gray-600">
                  We sign NDAs and follow strict security protocols to ensure all client information remains confidential and secure.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t bg-gray-50 py-12 md:py-16">
        <div className="container">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <div className="flex items-center gap-2">
              <CheckCircle className="h-8 w-8 text-blue-600" />
              <span className="text-xl font-bold">TestPro</span>
            </div>
            <nav className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
              <Link href="/" className="text-sm text-gray-600 hover:text-blue-600">
                Home
              </Link>
              <Link href="/services" className="text-sm text-gray-600 hover:text-blue-600">
                Services
              </Link>
              <Link href="/case-studies" className="text-sm text-gray-600 hover:text-blue-600">
                Case Studies
              </Link>
              <Link href="/contact" className="text-sm text-gray-600 hover:text-blue-600">
                Contact
              </Link>
            </nav>
            <div className="text-sm text-gray-500">© 2023 TestPro. All rights reserved.</div>
          </div>
        </div>
      </footer>
    </div>
  )
} 