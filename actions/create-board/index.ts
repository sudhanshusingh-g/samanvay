"use server";

import { auth } from "@clerk/nextjs/server";
import { InputType, ReturnType } from "./types";
import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";
import { createSafeAction } from "@/lib/create-safe-action";
import { CreateBoard } from "./schema";

const handler=async(data:InputType):Promise<ReturnType> =>{
    const {userId}=auth();

    if(!userId){
        return {
            error:"Unauthorised",
        }
    }

    const {title}=data;
    let board;

    try {
        throw new Error("bala")
        board=await db.board.create({
            data:{
                title,
            }
        })
    } catch (error) {
        return{
            error:"Failed to create.",
        }
    }

    revalidatePath(`/board/${board.id}`);
    return {data:board};
}

export const createBoard=createSafeAction(CreateBoard,handler);