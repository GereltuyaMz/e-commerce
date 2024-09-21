import { Product } from "@/lib/data";
import { Heart } from "lucide-react";
import Image from "next/image";
import React from "react";
import { formattedPrice } from "@/lib/utils";

export const ProductCard = ({
	name,
	price,
	image,
	originalPrice = 0,
	discount,
}: Product) => {
	return (
		<div className="relative w-[244px]">
			<Image
				src={image}
				alt="image1"
				width={244}
				height={331}
				className="rounded-lg"
			/>
			<Heart size={22} strokeWidth={1} className="absolute top-4 right-4" />
			<div className="mt-2">
				<h3 className="font-light">{name}</h3>
				<div className="flex items-center gap-4 mt-1">
					<p className="font-bold">{formattedPrice(price)}₮</p>
					{discount && (
						<>
							<span className="text-muted-foreground text-xs line-through">
								{`${formattedPrice(originalPrice)}₮`}
							</span>
							<span className="font-bold text-destructive">{discount}</span>
						</>
					)}
				</div>
			</div>
		</div>
	);
};

export const FeaturedProductCard = ({
	name,
	price,
	image,
	originalPrice = 0,
	discount,
}: Product) => {
	return (
		<div className="relative col-span-2 row-span-10 mb-14">
			<div className="relative w-full h-full">
				<Image
					src={image}
					alt="image1"
					fill={true}
					className="rounded-lg -z-10"
				/>
				<Heart size={22} strokeWidth={1} className="absolute top-4 right-4" />
			</div>
			<div className="mt-2">
				<h3 className="font-light">{name}</h3>
				<div className="flex items-center gap-4 mt-1">
					<p className="font-bold">{formattedPrice(price)}₮</p>
					{discount && (
						<>
							<span className="text-muted-foreground text-xs line-through">
								{`${formattedPrice(originalPrice)}₮`}
							</span>
							<span className="font-bold text-destructive">{discount}</span>
						</>
					)}
				</div>
			</div>
		</div>
	);
};
