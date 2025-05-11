import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Gift, Award, ShoppingCart } from "lucide-react";
import { Material } from "@/types/materials.types";

export function MaterialCard({ material }: { material: Material }) {
  const imageUrl = material?.CoverPhoto
    ? `https://d1wh1xji6f82aw.cloudfront.net/${material?.CoverPhoto}`
    : "/placeholder.svg?height=180&width=320";

  const formatPrice = (price: number, currency: string) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: currency,
    }).format(price);
  };

  const hasDiscount = material.DripPrice > material.SalesPrice;

  return (
    <Card className="overflow-hidden transition-all border-2 relative">
      <div className="absolute top-2 right-2 bg-primary text-white py-1 px-3 z-10 rounded-lg shadow-md font-medium text-sm">
        <div className="flex items-center gap-1 ">
          <Award className="h-4 w-4 text-white" />
          <p className="text-sm font-medium">{material.BrandName}</p>
        </div>
      </div>
      <div className="aspect-[16/9] relative group">
        <Image
          src={imageUrl || "/placeholder.svg"}
          alt={material.Title}
          fill
          className="object-cover transition-all duration-500 ease-in-out group-hover:scale-110"
          sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
        />
      </div>

      <CardContent className="p-4 pt-6 relative">
        <div className="absolute -top-4 left-4 bg-white p-2 rounded-full shadow-md">
          <Gift className="h-4 w-4 text-primary" />
        </div>

        <div className="border-b pb-2">
          <h3 className="font-bold text-lg line-clamp-1">{material.Title}</h3>
          {material.VariantTitle && (
            <p className="text-sm text-muted-foreground line-clamp-1">
              {material.VariantTitle}
            </p>
          )}
        </div>

        <div className="space-y-1">
          {hasDiscount && (
            <div className="flex gap-2 items-baseline justify-between">
              <span className="text-xs text-muted-foreground line-through">
                {formatPrice(material.DripPrice, "BDT")}
              </span>
              <div className="flex gap-2 items-baseline">
                <span className="text-xs text-muted-foreground line-through">
                  {formatPrice(material.DripPriceInUsd, "USD")}
                </span>
              </div>
            </div>
          )}
          <div className="flex items-baseline gap-2 justify-between">
            <p className="font-medium text-lg">
              {formatPrice(material.SalesPrice, "BDT")}
            </p>
            <p className="text-sm">
              {formatPrice(material.SalesPriceInUsd, "USD")}
            </p>
          </div>
          {/* <div className="flex justify-between items-center pt-2 pb-2">
            <button className="mr-4 p-2 border border-primary text-primary rounded-md hover:bg-primary/10 transition">
              <ShoppingCart className="h-5 w-5" />
            </button>
            <button className="flex-1 bg-primary text-white px-4 py-2 rounded-md font-medium hover:bg-primary/90 transition">
              Buy Now
            </button>
          </div> */}
        </div>
      </CardContent>
    </Card>
  );
}
