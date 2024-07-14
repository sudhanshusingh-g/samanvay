"use client";

import { Skeleton } from "@/components/ui/skeleton";
import { CardWithList } from "@/types";
import { AlignLeft } from "lucide-react";

interface DescriptionProps{
    data:CardWithList
}

export const Description=({
    data
}:DescriptionProps)=>{
    return(
        <div className="flex items-start gap-x-3 w-full">
            <AlignLeft className="h-5 w-5 mt-0.5 text-neutral-700"/>
            <div className="w-full">
                <p className="font-semibold text-neutral-700 mb-2">
                    Description
                </p>
            </div>
            {data.description}
        </div>
    )
}

Description.Skeleton = function DescriptionSkeleton() {
  return (
    <div className="flex items-start gap-x-3 mb-6">
      <Skeleton className="h-6 w-6 bg-neutral-200" />
      <div className="w-full">
        <Skeleton className="h-6 w-24 mb-2 bg-neutral-200" />
        <Skeleton className="h-[78px] w-full bg-neutral-200" />
      </div>
    </div>
  );
};