"use client"

import { Button } from "@/components/ui/button"
import { useFormStatus } from "react-dom";

export const FormButton=()=>{
    const {pending}=useFormStatus();
    return <Button type="submit" disabled={pending}>Submit</Button>
}

export const FormDeleteButton=()=>{
    const { pending } = useFormStatus();
    return (
      <Button
        type="submit"
        variant={"destructive"}
        size={"sm"}
        disabled={pending}
      >
        Delete
      </Button>
    );
}