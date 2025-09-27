import Link from 'next/link';
import { Check, Gem } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

const freeFeatures = [
  'Access to all introductory courses',
  'First few lessons of premium courses',
  'Community discussion forums',
];

const premiumFeatures = [
  'Access to all free features',
  'Full access to all premium courses',
  'AI-powered interactive quizzes',
  'AI-powered assignment grading',
  'Live online classes with instructors',
  'Course completion certificates',
  'Priority support',
];

export default function PricingPage() {
  return (
    <div className="container mx-auto px-4 md:px-6 py-12 md:py-24">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight font-headline">Choose Your Plan</h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
          Start for free and upgrade to unlock your full learning potential.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <Card className="shadow-lg">
          <CardHeader className="text-center p-8">
            <CardTitle className="text-3xl font-bold">Free</CardTitle>
            <CardDescription className="text-lg">Perfect for getting started</CardDescription>
            <p className="text-5xl font-bold mt-4">$0<span className="text-lg font-normal text-muted-foreground">/month</span></p>
          </CardHeader>
          <CardContent className="p-8 pt-0">
            <ul className="space-y-4">
              {freeFeatures.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <Check className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-muted-foreground">{feature}</span>
                </li>
              ))}
            </ul>
          </CardContent>
          <CardFooter className="p-8 pt-0">
            <Button asChild className="w-full" size="lg" variant="outline">
              <Link href="/register">Get Started</Link>
            </Button>
          </CardFooter>
        </Card>

        <Card className="shadow-2xl border-2 border-primary relative">
           <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold flex items-center gap-2">
            <Gem className="w-4 h-4" /> Most Popular
           </div>
          <CardHeader className="text-center p-8">
            <CardTitle className="text-3xl font-bold">Premium</CardTitle>
            <CardDescription className="text-lg text-primary">Unlock everything</CardDescription>
            <p className="text-5xl font-bold mt-4">$19<span className="text-lg font-normal text-muted-foreground">/month</span></p>
          </CardHeader>
          <CardContent className="p-8 pt-0">
            <ul className="space-y-4">
              {premiumFeatures.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <Check className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </CardContent>
          <CardFooter className="p-8 pt-0">
            <Button asChild className="w-full bg-accent hover:bg-accent/90 text-accent-foreground" size="lg">
              <Link href="/register">Go Premium</Link>
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
