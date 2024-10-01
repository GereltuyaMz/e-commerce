/* eslint-disable @next/next/no-img-element */
import axios from "axios";
import { Product } from "@/lib/data";
import { apiUrl, formattedPrice } from "@/lib/utils";

interface ProductResponse {
	product: Product;
}

const ProductDetail = async ({ params }: { params: { id: string } }) => {
	const { id } = params;
	const getProductDataById = async () => {
		try {
			const response = await axios.get<ProductResponse>(
				`${apiUrl}/product/${id}`
			);
			return response.data.product;
		} catch (error) {
			console.error("Error fetching data:", error);
			throw new Error("Failed to fetch data");
		}
	};
	const product = await getProductDataById();

	return (
		<div className="h-screen max-w-[1300px] mx-auto mt-14 mb-24">
			<div className="flex items-center gap-4">
				<div>
					{product.images.map((img, index) => (
						<img
							src={img}
							alt="images"
							key={index}
							className="w-[422px] h-[521px] rounded-2xl"
						/>
					))}
				</div>
				<div className="flex flex-col gap-4">
					<h1 className="text-2xl font-bold">{product.name}</h1>
					<p className="text-base">{product.description}</p>
					<p className="text-xl font-bold">{formattedPrice(product.price)}₮</p>
				</div>
			</div>
		</div>
	);
};

export default ProductDetail;
