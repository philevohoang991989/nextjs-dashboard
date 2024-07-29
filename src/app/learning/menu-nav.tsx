"use client";

import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

export default function MenuNav() {
  const path = usePathname();
  const router = useRouter();

  return (
    <div className="hidden  gap-4 items-center md:flex">
      <Button
        onClick={() => router.push("/learning/seminar/list")}
        className={cn(
          buttonVariants({ variant: "ghost" }),
          "px-4 py-2 rounded-lg text-white",
          path === "/learning/seminar/list" && "bg-[#0F7BB2]"
        )}
      >
        Seminars
      </Button>
      <Button
        onClick={() => router.push("#")}
        className={cn(
          buttonVariants({ variant: "ghost" }),
          "px-4 py-2 rounded-lg text-white"
        )}
      >
        My Learning
      </Button>
    </div>
  );
}
