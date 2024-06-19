"use client";

import { AccordionTrigger, AccordionItem, AccordionContent } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Activity, CreditCard, Layout, Settings } from "lucide-react";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";

export type Organization = {
  id: string;
  slug: string;
  imageUrl: string;
  name: string;
};

interface NavItemProp {
  isExpanded: boolean;
  isActive: boolean;
  organization: any;
  onExpand: (id: string) => void;
}
function NavItem({
  isExpanded,
  isActive,
  organization,
  onExpand,
}: NavItemProp) {
    const router=useRouter();
    const pathname=usePathname();

    const routes = [
      {
        icon: <Layout className="h-4 w-4 mr-2" />,
        label: "Boards",
        href: `/organization/${organization.id}`,
      },
      {
        icon: <Activity className="h-4 w-4 mr-2" />,
        label: "Activity",
        href: `/organization/${organization.id}/activity`,
      },
      {
        icon: <Settings className="h-4 w-4 mr-2" />,
        label: "Settings",
        href: `/organization/${organization.id}/settings`,
      },
      {
        icon: <CreditCard className="h-4 w-4 mr-2" />,
        label: "Billing",
        href: `/organization/${organization.id}/billing`,
      },
    ];

    const onClick=(href:string)=>{
        router.push(href);
    }
  return (
    <AccordionItem value={organization.id} className="border-none">
      <AccordionTrigger
        onClick={() => onExpand(organization.id)}
        className={cn(
          "flex items-center gap-x-2 p-1.5 text-neutral-700 rounded-md hover:bg-neutral-500/10 transition text-start no-underline hover:no-underline",
          isActive && !isExpanded && "bg-sky-500/10 text-sky-700"
        )}
      >
        <div className="flex items-center gap-x-2">
          <div className="h-7 w-7 relative">
            <Image
              fill
              src={organization.imageUrl}
              alt="Organization"
              className="rounded-sm object-cover"
            />
          </div>
          <span className="font-medium text-sm">{organization.name}</span>
        </div>
      </AccordionTrigger>
      <AccordionContent className="pt-1 text-neutral-700">
        {routes.map((route) => (
          <Button
            key={route.href}
            size={"sm"}
            onClick={() => onClick(route.href)}
            className={cn(
              "w-full font-normal justify-start pl-10 mb-1",
              pathname === route.href && "bg-sky-500/10 text-sky-700"
            )}
            variant={"ghost"}
          >
            {route.icon}
            {route.label}
          </Button>
        ))}
      </AccordionContent>
    </AccordionItem>
  );
}

export default NavItem;
