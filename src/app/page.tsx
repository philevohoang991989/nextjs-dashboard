"use client"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { LayoutDashboard, User2Icon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function Hone() {
  const router = useRouter()
  return (
    <div className="lg:p-8 h-full flex flex-col items-center justify-center">
      <Card className="mx-auto flex w-full h-[15rem] shadow-lg border-none bg-white flex-col justify-center space-y-6 sm:w-[350px]">
        <CardHeader>
          <CardTitle>Portal Selection</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-6">
          <RadioGroup defaultValue="card" className="grid grid-cols-2 gap-4">
            <div onClick={()=>router.push('/upload')}>
              <RadioGroupItem value="card" id="card" className="peer sr-only" />
              <Label
                htmlFor="card"
                className="flex flex-col hover:cursor-pointer items-center justify-between rounded-md bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
              >
                <LayoutDashboard className="mb-2" />
                Admin
              </Label>
            </div>
            <div onClick={()=>router.push('/create')
            }>
              <RadioGroupItem
                value="paypal"
                id="paypal"
                className="peer sr-only"
              />
              <Label
                htmlFor="paypal"
                className="flex flex-col items-center justify-between hover:cursor-pointer rounded-md bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
              >
                <User2Icon className="mb-2" />
                User
              </Label>
            </div>
          </RadioGroup>
        </CardContent>
      </Card>
    </div>
  );
}
