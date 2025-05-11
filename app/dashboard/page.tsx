import { MaterialList } from "@/app/dashboard/_components/MaterialList";
import FadeInWrapper from "@/components/common/FadeInWrapper";

export default function DashboardPage() {
  return (
    <FadeInWrapper>
      <div className="container py-6 md:py-8 lg:py-12">
        <div className="mb-6 md:mb-8">
          <h1 className="text-3xl font-bold tracking-tight">
            Materials Dashboard
          </h1>
          <p className="mt-2 text-muted-foreground">
            Browse through our collection of materials
          </p>
        </div>

        <MaterialList />
      </div>
    </FadeInWrapper>
  );
}
