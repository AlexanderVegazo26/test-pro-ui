"use client";

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, CheckCircle } from 'lucide-react';

type ServiceCardProps = {
  title: string;
  description: string;
  imageSrc: string;
  features: string[];
  animationClass?: string;
};

export default function ServiceCard({
  title,
  description,
  imageSrc,
  features,
  animationClass = '',
}: ServiceCardProps) {
  return (
    <div className={`group relative overflow-hidden rounded-lg border bg-white p-6 shadow-sm transition-all hover:shadow-md ${animationClass}`}>
      <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100">
        <Image
          src={imageSrc}
          alt={title}
          width={48}
          height={48}
          className="h-8 w-8 text-blue-600"
        />
      </div>
      <h3 className="mb-2 text-xl font-bold">{title}</h3>
      <p className="text-gray-600">{description}</p>
      <ul className="mt-4 space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center gap-2">
            <CheckCircle className="h-5 w-5 text-green-500" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <Link
        href="/contact"
        className="mt-6 inline-flex items-center gap-2 text-blue-600 hover:text-blue-800"
      >
        Learn More
        <ArrowRight className="h-4 w-4" />
      </Link>
    </div>
  );
} 