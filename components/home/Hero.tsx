"use client";

import Image from 'next/image';
import Button from '../ui/Button';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-blue-50 to-white py-16 sm:py-24">
      <div className="container">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="animate-fade-in-up">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
              Professional Software Testing Solutions
            </h1>
            <p className="mt-6 text-xl text-gray-600">
              Ensure your software meets the highest standards of quality, security, and performance with our comprehensive testing services.
            </p>
            <div className="mt-8 flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
              <Button href="/services" size="lg">
                Explore Services
              </Button>
              <Button href="/contact" variant="outline" size="lg">
                Contact Us
              </Button>
            </div>
          </div>
          <div className="relative animate-float">
            <div className="relative h-[400px] w-full">
              <Image
                src="/svg/testing-dashboard.svg"
                alt="Testing Dashboard"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </div>
      
      {/* Background Elements */}
      <div className="absolute -top-24 right-0 h-[500px] w-[500px] animate-blob opacity-20 blur-3xl filter">
        <div className="h-full w-full rounded-full bg-blue-200"></div>
      </div>
      <div className="absolute bottom-0 left-0 h-[400px] w-[400px] animate-blob animation-delay-4000 opacity-20 blur-3xl filter">
        <div className="h-full w-full rounded-full bg-purple-200"></div>
      </div>
    </section>
  );
} 