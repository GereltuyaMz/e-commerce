import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { HeartFullIcon } from "@/icons";
import { WishListProduct } from "@/lib/data";
import { formattedPrice } from "@/lib/utils";

export const SavedCard = ({ name, image, price }: WishListProduct) => {
  return (
    <Card className="p-4 rounded-2xl">
      <CardContent className="flex justify-between p-0">
        <div className="flex gap-6">
          <img src={image} alt="wishlists" className="w-32 h-28 rounded-2xl" />
          <div>
            <p className="font-normal text-base">{name}</p>
            <p className="mt-1 mb-2 text-sm font-bold">
              {formattedPrice(price)}₮
            </p>
            <Button className="button-primary">Сагслах</Button>
          </div>
        </div>
        <HeartFullIcon />
      </CardContent>
    </Card>
  );
};
