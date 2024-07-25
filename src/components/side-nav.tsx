"use client";
import Link from "next/link";

import { Button } from "@/components/ui/button";

import { useState } from "react";
import Image from "next/image";
import Logo from "@/assets/icons/logo.svg";
import { ChevronsUpDown } from "lucide-react";
import { NavItem } from "@/types";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "./ui/collapsible";

interface SideNavProps {
  items: NavItem[];
  setOpen?: (open: boolean) => void;
  className?: string;
}

export function SideNav({ items, setOpen, className }: SideNavProps) {
  // const path = usePathname();
  // const { isOpen } = useSidebar();
  // const [openItem, setOpenItem] = useState("");
  // const [lastOpenItem, setLastOpenItem] = useState("");

  // useEffect(() => {
  //   if (isOpen) {
  //     setOpenItem(lastOpenItem);
  //   } else {
  //     setLastOpenItem(openItem);
  //     setOpenItem("");
  //   }
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [isOpen]);
  const [isOpenBrowse, setIsOpenBrowse] = useState(false);
  const [isOpenAdministration, setIsOpenAdministration] = useState(false);
  return (
    <div className="md:flex flex-col bg-[#0A4F73] h-[100vh] relative px-5 py-6">
      <div className="pb-[2rem]">
        {" "}
        <Image src={Logo} priority={true} alt="Logo" />
      </div>
      <Link
        href="#"
        className="rounded-md px-0 py-3 font-mono text-[0.875rem] w-full text-[#B4D1DF] hover:text-white font-semibold"
      >
        Create
      </Link>
      <Link
        href="#"
        className="rounded-md px-0 py-3 font-mono text-[0.875rem] w-full text-[#B4D1DF] hover:text-white font-semibold"
      >
        Upload
      </Link>
      <Collapsible
        open={isOpenBrowse}
        onOpenChange={setIsOpenBrowse}
        className=" space-y-2"
      >
        <div className="flex items-center justify-between space-x-4">
          <CollapsibleTrigger asChild>
            <Button
              variant="ghost"
              size="sm"
              className="w-[100%] h-[2.5rem] text-[#B4D1DF] hover:text-white flex justify-between p-0 hover:bg-transparent"
            >
              <h4 className="text-[0.875rem] font-semibold">Browse</h4>
              <ChevronsUpDown className="h-4 w-4" />
              <span className="sr-only">Toggle</span>
            </Button>
          </CollapsibleTrigger>
        </div>

        <CollapsibleContent className="space-y-2 flex flex-col h-[100%]">
          <Link
            href="#"
            className="rounded-md px-4 py-3 font-mono text-[0.875rem] w-full text-[#B4D1DF] hover:text-white font-semibold"
          >
            Course
          </Link>
          <Link
            href="#"
            className="rounded-md px-4 py-3 font-mono text-[0.875rem] w-full text-[#B4D1DF] hover:text-white font-semibold"
          >
            Seminar
          </Link>
          <Link
            href="#"
            className="rounded-md px-4 py-3 font-mono text-[0.875rem] w-full text-[#B4D1DF] hover:text-white font-semibold"
          >
            Video
          </Link>
        </CollapsibleContent>
      </Collapsible>
      <Collapsible
        open={isOpenAdministration}
        onOpenChange={setIsOpenAdministration}
        className="space-y-2"
      >
        <div className="flex items-center justify-between space-x-4">
          <CollapsibleTrigger asChild>
            <Button
              variant="ghost"
              size="sm"
              className="w-[100%] h-[2.5rem] text-[#B4D1DF] hover:text-white flex justify-between p-0 hover:bg-transparent"
            >
              <h4 className="text-[0.875rem] font-semibold">Administration</h4>
              <ChevronsUpDown className="h-4 w-4" />
              <span className="sr-only">Toggle</span>
            </Button>
          </CollapsibleTrigger>
        </div>

        <CollapsibleContent className="space-y-2 flex flex-col h-[100%]">
          <Link
            href="#"
            className="rounded-md  px-4 py-3 font-mono text-[0.875rem] w-full text-[#B4D1DF] hover:text-white font-semibold"
          >
            Users Permission
          </Link>
          <Link
            href="#"
            className="rounded-md  px-4 py-3 font-mono text-[0.875rem] w-full text-[#B4D1DF] hover:text-white font-semibold"
          >
            Resolution Control
          </Link>
          <Link
            href="#"
            className="rounded-md  px-4 py-3 font-mono text-[0.875rem] w-full text-[#B4D1DF] hover:text-white font-semibold"
          >
            Division
          </Link>
          <Link
            href="#"
            className="rounded-md  px-4 py-3 font-mono text-[0.875rem] w-full text-[#B4D1DF] hover:text-white font-semibold"
          >
            Audit Log
          </Link>
        </CollapsibleContent>
      </Collapsible>
      <Link
        href="#"
        className="rounded-md px-0 py-3 font-mono text-[0.875rem] w-full text-[#B4D1DF] hover:text-white font-semibold"
      >
        Report
      </Link>
    </div>
  );
}
