"use client"

import { useProModal } from "@/hooks/use-pro-modal"
import { Dialog,DialogContent } from "../ui/dialog";
import Image from "next/image";
import { Button } from "../ui/button";
import { useAction } from "@/hooks/use-action";
import { stripeRedirect } from "@/actions/stripe-redirect";
import { toast } from "sonner";

export const ProModal=()=>{
    const proModal=useProModal();
    const {execute,isLoading}=useAction(stripeRedirect,{
      onSuccess:(data)=>{
        window.location.href=data;
      },
      onError:(err)=>{
        toast.error(err);
      }
    })

    const onClick=()=>{
      execute({});
    }

    return (
      <Dialog open={proModal.isOpen} onOpenChange={proModal.onClose}>
        <DialogContent className="max-w-md p-0 overflow-hidden">
          <div className="aspect-video relative flex items-center justify-center">
            <Image src={"/hero.svg"} alt="Hero" className="object-cover" fill />
          </div>
          <div className="p-6 space-y-6 mx-auto text-neutral-700">
            <h2 className="font-semibold text-xl">
              Upgrade to Samanvay Pro today
            </h2>
            <p className="text-xs font-semibold text-neutral-600">
              Explore the best of Samanvay
            </p>
            <div className="pl-3">
              <ul className="text-sm list-disc">
                <li>Unlimited boards</li>
                <li>Advance Checklists</li>
                <li>Admin and security features</li>
                <li>And more!</li>
              </ul>
            </div>
            <Button disabled={isLoading} onClick={onClick} className="w-full" variant={"pro"}>Upgrade</Button>
          </div>
        </DialogContent>
      </Dialog>
    );
}