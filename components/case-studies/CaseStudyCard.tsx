"use client";

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

type CaseStudyCardProps = {
  title: string;
  description: string;
  imageSrc: string;
  category: string;
  href: string;
};

export default function CaseStudyCard({
  title,
  description,
  imageSrc,
  category,
  href,
}: CaseStudyCardProps) {
  return (
    <div className="group overflow-hidden rounded-lg border bg-white shadow-sm transition-all hover:shadow-md">
      <div className="relative h-48 w-full overflow-hidden bg-blue-50">
        <Image
          src={imageSrc}
          alt={title}
          fill
          className="object-cover transition-transform group-hover:scale-105"
        />
      </div>
      <div className="p-6">
        <div className="mb-2 text-sm font-medium text-blue-600">{category}</div>
        <h3 className="mb-2 text-xl font-bold text-gray-900">{title}</h3>
        <p className="mb-4 text-gray-600">{description}</p>
        <Link
          href={href}
          className="inline-flex items-center gap-2 text-blue-600 transition-all hover:gap-3 hover:text-blue-800"
        >
          Read Case Study
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  );
} 