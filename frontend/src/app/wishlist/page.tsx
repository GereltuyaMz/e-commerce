import { SavedCard } from "@/components/wishlist";
import { wishlistProducts } from "@/lib/data";

const WishList = () => {
  return (
    <section className="flex justify-center pt-14">
      <div className="h-screen w-[590px]">
        <h1 className="text-xl font-medium text-left pb-4">
          Хадгалсан бараа <span className="text-text-helper">(3)</span>
        </h1>
        <div className="flex flex-col gap-4">
          {wishlistProducts.map((product, index) => (
            <SavedCard {...product} key={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WishList;
