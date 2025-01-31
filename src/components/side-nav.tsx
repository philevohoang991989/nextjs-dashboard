import Link from "next/link";

import { Button } from "@/components/ui/button";

import { useState } from "react";
import Image from "next/image";
import Logo from "@/assets/icons/logo.svg";
import {
  ArrowRight,
  ArrowRightCircle,
  ChevronsLeft,
  ChevronsRight,
  ChevronsUpDown,
  MoveRight,
} from "lucide-react";
import { NavItem } from "@/types";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "./ui/collapsible";
import { usePathname, useRouter } from "next/navigation";
import { cn } from "@/lib/utils";

interface SideNavProps {
  items: NavItem[];
  setOpen?: (open: boolean) => void;
  className?: string;
}

export function SideNav({ items, setOpen, className }: SideNavProps) {
  const path = usePathname();
  const [isOpenBrowse, setIsOpenBrowse] = useState(false);
  const [isOpenAdministration, setIsOpenAdministration] = useState(false);
  const router = useRouter();

  return (
    <nav className="md:flex flex-col bg-[#0A4F73] h-[100vh] relative px-5 py-6">
      <div className="pb-[2rem]">
        {" "}
        <Image src={Logo} priority={true} alt="Logo" />
      </div>
      <Button
        variant="link"
        className={cn(
          "p-0 flex justify-start py-2 px-3 h-[2.5rem] text-[#B4D1DF] hover:text-white font-semibold hover:no-underline",
          path.includes("create") && "bg-[#083F5C] font-bold  text-white"
        )}
        onClick={() => router.push("/create")}
      >
        Create
      </Button>
      <Button
        variant="link"
        className={cn(
          "p-0 flex justify-start py-2 px-3 h-[2.5rem] text-[#B4D1DF] hover:text-white font-semibold hover:no-underline",
          path.includes("upload") && "bg-[#083F5C] font-bold  text-white"
        )}
        onClick={() => router.push("/upload")}
      >
        Upload
      </Button>

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
              className={cn(
                "w-[100%] h-[2.5rem] text-[#B4D1DF] hover:text-white flex justify-between py-2 px-3 hover:bg-[#083F5C]",
                (path.includes("video") ||
                  path.includes("course") ||
                  path.includes("seminar")) &&
                  "bg-[#083F5C] font-bold  text-white"
              )}
            >
              <h4 className="text-[0.875rem] font-semibold">Browse</h4>
              <ArrowRight
                className={cn(
                  "h-4 w-4",
                  isOpenBrowse ? "rotate-90 duration-200" : "duration-200"
                )}
              />
              <span className="sr-only">Toggle</span>
            </Button>
          </CollapsibleTrigger>
        </div>

        <CollapsibleContent className="pl-4 flex flex-col h-[100%]">
          <Button
            variant="link"
            className={cn(
              "p-0 flex justify-start py-2 px-3 h-[2.5rem] text-[#B4D1DF] hover:text-white font-semibold hover:no-underline",
              path.includes("course") && "bg-[#083F5C] font-bold  text-white"
            )}
            onClick={() => router.push("/course/list")}
          >
            Course
          </Button>
          <Button
            variant="link"
            className={cn(
              "p-0 flex justify-start py-2 px-3 h-[2.5rem] text-[#B4D1DF] hover:text-white font-semibold hover:no-underline",
              path.includes("seminar") && "bg-[#083F5C] font-bold  text-white"
            )}
            onClick={() => router.push("/seminar/list")}
          >
            Seminar
          </Button>
          <Button
            variant="link"
            className={cn(
              "p-0 flex justify-start py-2 px-3 h-[2.5rem] text-[#B4D1DF] hover:text-white font-semibold hover:no-underline",
              path.includes("video") && "bg-[#083F5C] font-bold  text-white"
            )}
            onClick={() => router.push("/video/list")}
          >
            Video
          </Button>
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
              className={cn(
                "w-[100%] h-[2.5rem] text-[#B4D1DF] hover:text-white flex justify-between py-2 px-3 hover:bg-[#083F5C]",
                (path.includes("user-permission") ||
                  path.includes("resolution") ||
                  path.includes("division") || 
                  path.includes("audit-log")) &&
                  "bg-[#083F5C] font-bold  text-white"
              )}
            >
              <h4 className="text-[0.875rem] font-semibold">Administration</h4>
              <ArrowRight
                className={cn(
                  "h-4 w-4",
                  isOpenAdministration
                    ? "rotate-90 duration-200"
                    : "duration-200"
                )}
              />
              <span className="sr-only">Toggle</span>
            </Button>
          </CollapsibleTrigger>
        </div>

        <CollapsibleContent className="pl-4 flex flex-col h-[100%]">
          <Button
            variant="link"
            className={cn(
              "p-0 flex justify-start py-2 px-3 h-[2.5rem] text-[#B4D1DF] hover:text-white font-semibold hover:no-underline",
              path.includes("user-permission/list") && "bg-[#083F5C] font-bold  text-white"
            )}
            onClick={() => router.push("/user-permission/list")}
          >
            Users Permission
          </Button>
          <Button
            variant="link"
            className={cn(
              "p-0 flex justify-start py-2 px-3 h-[2.5rem] text-[#B4D1DF] hover:text-white font-semibold hover:no-underline",
              path.includes("resolution/list") && "bg-[#083F5C] font-bold  text-white"
            )}
            onClick={() => router.push("/resolution/list")}
          >
            Resolution Control
          </Button>
          <Button
            variant="link"
            className={cn(
              "p-0 flex justify-start py-2 px-3 h-[2.5rem] text-[#B4D1DF] hover:text-white font-semibold hover:no-underline",
              path.includes("/division/list") && "bg-[#083F5C] font-bold  text-white"
            )}
            onClick={() => router.push("/division/list")}
          >
            Division
          </Button>
          <Button
            variant="link"
            className={cn(
              "p-0 flex justify-start py-2 px-3 h-[2.5rem] text-[#B4D1DF] hover:text-white font-semibold hover:no-underline",
              path.includes("audit-log/list") && "bg-[#083F5C] font-bold  text-white"
            )}
            onClick={() => router.push("/audit-log/list")}
          >
            Audit Log
          </Button>
        </CollapsibleContent>
      </Collapsible>
      <Button
        variant="link"
        className={cn(
          "p-0 flex justify-start py-2 px-3 h-[2.5rem] text-[#B4D1DF] hover:text-white font-semibold hover:no-underline",
          path.includes("report") && "bg-[#083F5C] font-bold  text-white"
        )}
        onClick={() => router.push("/report")}
      >
        Report
      </Button>
    </nav>
  );
}
