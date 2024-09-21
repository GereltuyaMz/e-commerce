export type Product = {
	name: string;
	price: number;
	image: string;
	originalPrice?: number | undefined;
	discount?: string;
	featured?: boolean;
};

export const products: Product[] = [
	{
		name: "The Prompt Magazine",
		price: 35000,
		image: "/products/image1.png",
	},
	{
		name: "Chunky Glyph Tee",
		price: 120000,
		image: "/products/image2.png",
	},
	{
		name: "All Smiles Nalgene",
		price: 120000,
		image: "/products/image3.png",
	},
	{
		name: "Wildflower Hoodie",
		price: 108000,
		originalPrice: 120000,
		discount: "10%",
		image: "/products/image4.png",
	},
	{
		name: "Inkblot Tee",
		price: 120000,
		image: "/products/image5.png",
	},
	{
		name: "Gestures Longsleeve",
		price: 120000,
		image: "/products/image6.png",
	},
	{
		name: "Chunky Glyph Cap",
		price: 120000,
		image: "/products/image7.png",
		featured: true,
	},
	{
		name: "Local Styles Crewneck",
		price: 120000,
		image: "/products/image8.png",
		featured: true,
	},
	{
		name: "Inkblot Tee",
		price: 120000,
		image: "/products/image5.png",
	},
	{
		name: "Gestures Longsleeve",
		price: 120000,
		image: "/products/image6.png",
	},
	{
		name: "Inkblot Tee",
		price: 120000,
		image: "/products/image5.png",
	},
	{
		name: "Gestures Longsleeve",
		price: 120000,
		image: "/products/image6.png",
	},
	{
		name: "Inkblot Tee",
		price: 120000,
		image: "/products/image5.png",
	},
	{
		name: "Gestures Longsleeve",
		price: 120000,
		image: "/products/image6.png",
	},
];
