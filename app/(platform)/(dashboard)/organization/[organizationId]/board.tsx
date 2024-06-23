import { deleteBoard } from "@/actions/delete-board";
import { Button } from "@/components/ui/button";
import { FormDeleteButton } from "./form-button";

interface BoardProps{
    id:string;
    title:string;
}

export const Board=({id,title}:BoardProps)=>{
    const deleteBoardById=deleteBoard.bind(null,id);
    return (
      <form action={deleteBoardById} className="flex items-center gap-x-2">
        {" "}
        <p> Board Title : {title}</p>
        <FormDeleteButton/>
      </form>
    );
}