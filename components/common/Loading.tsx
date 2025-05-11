import { Gift } from "lucide-react";
import { ReactNode } from "react";

const Loading = ({ children }: { children?: ReactNode }) => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="flex flex-col items-center">
        <Gift className="animate-spin text-primary w-16 h-16 duration-3000 ease-in-out" />
        <span className="mt-4 text-primary text-2xl animate-bounce">
          {children ? children : ""}
        </span>
      </div>
    </div>
  );
};

export default Loading;
