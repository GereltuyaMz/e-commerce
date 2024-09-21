import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";

const SignUp = () => {
	return (
		<div className="h-[700px] flex flex-col justify-center items-center bg-layer">
			<div className="w-[320px]">
				<h1 className="text-2xl font-semibold mb-8 text-center">Бүртгүүлэх</h1>
				<div className="flex flex-col gap-4 text-sm">
					<Input
						type="text"
						placeholder="Нэр"
						className="rounded-large bg-white shadow-sm"
					/>
					<Input
						type="email"
						placeholder="Имэйл хаяг"
						className="rounded-large bg-white shadow-sm"
					/>
					<Input
						type="password"
						placeholder="Нууц үг"
						className="rounded-large bg-white shadow-sm"
					/>
					<Input
						type="password"
						placeholder="Нууц үг давтах"
						className="rounded-large bg-white shadow-sm"
					/>
					<ul className="list-disc pl-5 mb-4 text-muted-foreground text-xs font-light leading-5 flex flex-col gap-0.5">
						<li>Том үсэг орсон байх</li>
						<li>Жижиг үсэг орсон байх</li>
						<li>Тоо орсон байх</li>
						<li>Тэмдэгт орсон байх</li>
					</ul>
				</div>
				<div className="flex flex-col gap-12">
					<Button className="bg-blue-primary rounded-large">Үүсгэх</Button>
					<Link href="/login">
						<Button
							variant="outline"
							className="border-blue-primary text-blue-primary rounded-large w-full bg-white"
						>
							Нэвтрэх
						</Button>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default SignUp;
