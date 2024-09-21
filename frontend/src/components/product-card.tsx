import { Product } from "@/lib/data";
import { Heart } from "lucide-react";
import Image from "next/image";
import React from "react";

export const ProductCard = ({ name, price, image }: Product) => {
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
				<h3>{name}</h3>
				<p className="font-bold mt-1">{price}₮</p>
			</div>
		</div>
	);
};

export const FeaturedProductCard = ({ name, price, image }: Product) => {
	return (
		<div className="relative col-span-2 row-span-12">
			<Image
				src={image}
				alt="image1"
				// width={244}
				// height={331}
				fill={true}
				className="rounded-lg -z-10"
			/>
			<Heart size={22} strokeWidth={1} className="absolute top-4 right-4" />
			
			<div className="mt-2">
				<h3>{name}</h3>
				<p className="font-bold mt-1">{price}₮</p>
			</div>
		</div>
	);
};
