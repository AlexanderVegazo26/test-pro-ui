import { redirect } from 'next/navigation';

export default function Home() {
  // Redirect to the case-studies page
  redirect('/case-studies');
  
  // This part won't be executed due to the redirect
  return null;
}
