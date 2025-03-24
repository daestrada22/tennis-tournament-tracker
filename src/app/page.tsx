import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function RootPage() {
  return (
    <div className="container max-w-7xl px-4 py-8 text-center">
      <h1 className="text-4xl font-bold mb-6">Hello, tennis world</h1>
      <p className="mb-6">
        Welcome to the tennis world.
      </p>
      <Button variant="default" asChild>
        <Link href="/home">Get Started</Link>
      </Button>
    </div>
  );
}