import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 md:px-6 py-12 md:py-24">
       <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight font-headline">Contact Us</h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
          We're here to help. Send us a message and we'll get back to you as soon as possible.
        </p>
      </div>
      <div className="max-w-2xl mx-auto">
        <Card>
          <CardHeader>
            <CardTitle>Send a Message</CardTitle>
            <CardDescription>Fill out the form below and we will get back to you.</CardDescription>
          </CardHeader>
          <CardContent>
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" placeholder="Enter your name" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="Enter your email" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="subject">Subject</Label>
                <Input id="subject" placeholder="What is your message about?" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" placeholder="Type your message here." rows={5} />
              </div>
              <Button type="submit" className="w-full bg-accent hover:bg-accent/90">Send Message</Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
