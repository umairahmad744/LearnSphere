import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Logo } from "@/components/logo";

export default function RegisterPage() {
  return (
    <div className="flex items-center justify-center min-h-screen py-12 bg-background">
      <Card className="w-full max-w-sm mx-4">
        <CardHeader className="text-center">
          <Link href="/" className="inline-block mb-4">
            <Logo />
          </Link>
          <CardTitle className="text-2xl font-bold">Create an Account</CardTitle>
          <CardDescription>
            Enter your information to create an account
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="full-name">Full Name</Label>
            <Input id="full-name" placeholder="John Doe" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="m@example.com" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" required />
          </div>
          <Button type="submit" className="w-full">
            Create Account
          </Button>
          <Button variant="outline" className="w-full">
            Sign Up with Google
          </Button>
        </CardContent>
        <CardFooter className="text-center text-sm">
          Already have an account?&nbsp;
          <Link href="/login" className="underline">
            Log in
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
}
