import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-slate-100">
      <div className="container max-w-7xl px-4 py-8 text-center">
        <h1 className="text-4xl font-bold text-slate-900 mb-6">Hello, tennis world</h1>
        <Button variant="default">Get Started</Button>
      </div>
    </main>
  );
}