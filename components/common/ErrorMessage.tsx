import { AlertTriangle } from "lucide-react";
import { ReactNode } from "react";

const ErrorMessage = ({ children }: { children?: ReactNode }) => {
  return (
    <div className="flex flex-col items-center justify-center py-12 text-muted-foreground text-xl">
      <AlertTriangle className="text-primary w-16 h-16 mb-4" />
      {children ? children : "Something went wrong!"}
      <button
        onClick={() => window.location.reload()}
        className="px-4 py-2 bg-primary text-muted rounded-md mt-6"
      >
        Retry
      </button>
    </div>
  );
};

export default ErrorMessage;
