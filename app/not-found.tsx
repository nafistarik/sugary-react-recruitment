import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Gift } from "lucide-react";

export default function NotFoundPage() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center space-y-6 px-4">
      <div className="flex items-center justify-center bg-muted p-4 rounded-full shadow-sm">
        <Gift className="h-12 w-12 text-muted-foreground" />
      </div>

      <div className="space-y-2">
        <h1 className="text-2xl font-semibold">404 – Page Not Found</h1>
        <p className="text-muted-foreground">
          Sorry, the page you are looking for doesn’t exist or has been moved.
        </p>
      </div>

      <Link href="/">
        <Button variant="default" className="px-6 py-2 text-base">
          Back to Home
        </Button>
      </Link>
    </div>
  );
}
