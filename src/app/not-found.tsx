import Container from "@/components/layout/Container";
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="pt-32 pb-20 text-center">
      <Container>
        <h1 className="text-6xl font-serif font-medium text-text-primary mb-4">404</h1>
        <p className="text-text-secondary text-lg mb-8 max-w-md mx-auto">
          The page you’re looking for doesn’t exist or has been moved.
        </p>
        <Link
          href="/"
          className="inline-flex items-center px-6 py-3 bg-text-primary text-background text-sm font-medium rounded-full hover:bg-text-primary/90 transition-colors"
        >
          Return home
        </Link>
      </Container>
    </main>
  );
}