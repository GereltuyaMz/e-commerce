import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import React from "react";

const LogIn = () => {
  return (
    <div className="h-[700px] flex flex-col justify-center items-center">
      <div className="w-[320px]">
        <h1 className="text-2xl font-semibold mb-8 text-center">Нэвтрэх</h1>
        <div className="flex flex-col gap-4 text-sm">
          <Input
            type="email"
            placeholder="Имэйл хаяг"
            className="rounded-[18px] bg-white shadow-sm"
          />
          <Input
            type="password"
            placeholder="Нууц үг"
            className="rounded-[18px] bg-white shadow-sm"
          />
          <Button className="bg-blue-primary rounded-[18px]">Нэвтрэх</Button>
        </div>
        <div className="flex flex-col gap-12 mt-4">
          <Link href="/forgetpass/email" className="text-center text-sm">
            <Button
              className="underline text-muted-foreground font-normal"
              variant="link"
            >
              Нууц үг мартсан
            </Button>
          </Link>
          <Link href="/signup">
            <Button
              variant="outline"
              className="border-blue-primary text-blue-primary rounded-[18px] w-full bg-white"
            >
              Бүртгүүлэх
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LogIn;