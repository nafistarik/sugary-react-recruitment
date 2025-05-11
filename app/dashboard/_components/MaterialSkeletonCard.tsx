import { Card, CardContent } from "@/components/ui/card";

export function MaterialSkeletonCard() {
  return (
    <Card className="overflow-hidden border-2 relative">
      {/* Brand badge */}
      <div className="absolute top-2 right-2 bg-muted text-white py-1 px-3 z-10 rounded-lg shadow-md animate-pulse w-20 h-6" />

      {/* Image placeholder */}
      <div className="aspect-[16/9] bg-muted animate-pulse" />

      <CardContent className="p-4 pt-6 relative space-y-3">
        {/* Floating Icon (Gift) */}
        <div className="absolute -top-4 left-4 bg-white p-2 rounded-full shadow-md animate-pulse w-8 h-8" />

        {/* Title + Variant */}
        <div className="space-y-1 border-b pb-2">
          <div className="h-5 bg-muted rounded animate-pulse w-3/4" />
          <div className="h-4 bg-muted rounded animate-pulse w-1/2" />
        </div>

        {/* Price Info */}
        <div className="space-y-2">
          {/* Discounted line price */}
          <div className="flex justify-between items-center">
            <div className="h-4 w-1/4 bg-muted rounded animate-pulse" />
            <div className="h-4 w-1/4 bg-muted rounded animate-pulse" />
          </div>

          {/* Sales price */}
          <div className="flex justify-between items-center">
            <div className="h-5 w-1/3 bg-muted rounded animate-pulse" />
            <div className="h-4 w-1/4 bg-muted rounded animate-pulse" />
          </div>

          {/* <div className="flex justify-between items-center pt-2 pb-2">
            <div className="h-10 w-10 border border-muted rounded-md animate-pulse" />
            <div className="flex-1 h-10 bg-muted rounded-md animate-pulse ml-4" />
          </div> */}
        </div>
      </CardContent>
    </Card>
  );
}
