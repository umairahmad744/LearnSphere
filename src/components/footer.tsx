import Link from 'next/link';
import { Youtube, Instagram, Twitter } from 'lucide-react';
import { Logo } from './logo';
import { Button } from './ui/button';
import { Input } from './ui/input';

const socialLinks = [
  { name: 'YouTube', icon: Youtube, url: 'https://youtube.com' },
  { name: 'Instagram', icon: Instagram, url: 'https://instagram.com' },
  { name: 'Twitter', icon: Twitter, url: 'https://twitter.com' },
];

export default function Footer() {
  return (
    <footer className="bg-card text-card-foreground border-t">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Logo />
            <p className="text-muted-foreground text-sm">
              Empowering students with knowledge, one course at a time.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <Link key={social.name} href={social.url} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">
                  <social.icon className="h-6 w-6" />
                  <span className="sr-only">{social.name}</span>
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/courses" className="text-muted-foreground hover:text-primary">Courses</Link></li>
              <li><Link href="/pricing" className="text-muted-foreground hover:text-primary">Pricing</Link></li>
              <li><Link href="/dashboard" className="text-muted-foreground hover:text-primary">Dashboard</Link></li>
              <li><Link href="/faq" className="text-muted-foreground hover:text-primary">FAQ</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Support</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/contact" className="text-muted-foreground hover:text-primary">Contact Us</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-primary">Terms of Service</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-primary">Privacy Policy</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Stay Updated</h3>
            <p className="text-muted-foreground text-sm mb-2">Subscribe to our newsletter for the latest courses and offers.</p>
            <form className="flex gap-2">
              <Input type="email" placeholder="Enter your email" className="bg-background" />
              <Button type="submit" className="bg-accent hover:bg-accent/90 text-accent-foreground">Subscribe</Button>
            </form>
          </div>
        </div>

        <div className="mt-12 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} LearnSphere. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
