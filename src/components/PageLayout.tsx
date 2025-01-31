"use client"
import { ReactNode } from "react";
import ArrowLeft from "@/assets/icons/arrow-left.svg";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Button } from "./ui/button";

type Props = {
  children?: ReactNode;
  title: ReactNode;
  btnBack?: boolean;
  link?: string;
};

export default function PageLayout({
  children,
  title,
  btnBack,
  link
}: Props) {
const router = useRouter()
  return (
    <div className="relative flex flex-col bg-slate-850">
      <div className="flex justify-start gap-5 items-center w-[100%] h-[88px] bg-white p-[32px] font-semibold text-[1.5rem] text-[#101828]">
        {btnBack && (
          <Button variant="link"
          className="p-0"
          onClick={()=> router.push(`${link}`)}
        >
          <Image src={ArrowLeft} alt="ArrowLeft" />
        </Button>
        )}{" "}
        {title}
      </div>
      <div className="p-[2rem]">{children}</div>
    </div>
  );
}
