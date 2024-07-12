"use client";

import { ListWithCards } from "@/types";
import { ListForm } from "./list-form";
import { useEffect, useState } from "react";
import { ListItem } from "./list-item";
import {DragDropContext,Droppable} from "@hello-pangea/dnd"
interface ListContainerProps{
    data:ListWithCards[];
    boardId:string;
}

function reorder<T>(list:T[],startIndex:number,endIndex:number){
    const result=Array.from(list);
    const [removed]=result.splice(startIndex,1);
    result.splice(endIndex,0,removed);
    return result;
}

export const ListContainer=({data,boardId}:ListContainerProps)=>{
    const [orderedData,setOrderedData]=useState(data);
    useEffect(()=>{
        setOrderedData(data);
    },[data])

    const onDragEnd=(result:any)=>{
        const {destination,source,type}=result;
        if(!destination){
            return;
        }

        // If dropped in same postion
        if(
            destination.droppableId === source.droppableId && destination.index=== source.index
        ){
            return;
        }

        // User moves a list
        if(type === "list"){
            const items=reorder(
                orderedData,
                source.index,
                destination.index
            ).map((item,index)=>({...item,order:index}));

            setOrderedData(items);
        }

        if(type === "card"){
            let newOrderedData=[...orderedData];
            const sourceList=newOrderedData.find(list=>list.id === source.droppableId);
            const destList = newOrderedData.find(
              (list) => list.id === destination.droppableId
            );
            if(!sourceList || !destList){
                return;
            }

            // Check if cards exist on sourceList
            if(!sourceList.cards){
                sourceList.cards=[];
            }
        }
    }

    return (
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="list" type="list" direction="horizontal">
          {(provided) => (
            <ol
            {...provided.droppableProps}
            ref={provided.innerRef}
            className="mt-4 flex gap-x-3 h-full">
              {orderedData.map((list, index) => (
                <ListItem key={list.id} index={index} data={list} />
              ))}
              {provided.placeholder}
              <ListForm />
              <div className="flex-shrink-0 w-1" />
            </ol>
          )}
        </Droppable>
      </DragDropContext>
    );
}