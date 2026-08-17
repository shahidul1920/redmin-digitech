import Button from "@/components/Button";
import { AlertTriangle, ArrowLeft } from "@/components/Icons";

export const metadata = {
  title: "404 - Page Not Found | Redmun Digitech",
  description: "The page you are looking for does not exist or has been moved.",
};

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center py-20 px-4">
      <div className="max-w-xl w-full text-center">
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-primary/10 text-primary mb-6">
          <AlertTriangle className="w-10 h-10" />
        </div>
        <h1 className="text-6xl font-black text-dark tracking-tight mb-3">404</h1>
        <h2 className="text-2xl font-bold text-dark mb-4">Page Not Found</h2>
        <p className="text-text-secondary leading-relaxed mb-8 max-w-md mx-auto">
          The page or solution route you are looking for doesn't exist, may have moved, or is currently under construction.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <Button href="/" variant="primary" size="md">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
          <Button href="/products" variant="secondary" size="md">
            View Products
          </Button>
        </div>
      </div>
    </div>
  );
}
