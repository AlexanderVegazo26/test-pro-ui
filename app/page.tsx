import { redirect } from 'next/navigation';
import Hero from '@/components/home/Hero';
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, CheckCircle, Code, Database, LineChart, Server, Shield, Zap } from "lucide-react"

export default function Home() {
  // Redirect to case-studies page
  redirect('/case-studies');
  
  // This won't be executed due to the redirect
  return (
    <>
      <Hero />
      {/* Other home page sections would go here */}
    </>
  );
}
