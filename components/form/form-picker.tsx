"use client";
import { useEffect,useState } from "react";
import { unsplash } from "@/lib/unsplash";
import { Loader2 } from "lucide-react";
import { useFormStatus } from "react-dom";
import { cn } from "@/lib/utils";

interface FormPickerProps{
    id:string;
    errors?:Record<string,string[] | undefined>;
};
export const FormPicker=({
    id,
    errors
}:FormPickerProps)=>{
    const {pending}=useFormStatus();
    const [images,setImages]=useState<Array<Record<string,any>>>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [selectedImageId, setSelectedImageId] = useState(null)
    useEffect(() => {
      
        const fetchImages=async()=>{
            try {
                const result=await unsplash.photos.getRandom({
                    collectionIds:["317099"],
                    count:9
                })
                if(result && result.response){
                    const newImages=(result.response as Array<Record<string,any>>);
                    setImages(newImages);
                }
                else{
                    console.log("Failed to get response from Unsplash");
                    
                }
            } catch (error) {
                console.log(error);
                setImages([]);
                
            }
            finally{
                setIsLoading(false);
            }
        }

        fetchImages();
    }, [])
    
    if(isLoading){
        return(
            <div className="p-6 flex items-center justify-center">
                <Loader2 className="h-6 w-6 text-sky-700 animate-spin"/>
            </div>
        )
    }
    
    return(
        <div className="relative">
            <div className="grid grid-cols-3 gap-2 mb-2">
                {
                    images.map((image)=>(
                        <div className={cn(
                            "cursor-pointer relative aspect-video group hover:opacity-75 transition bg-muted"
                        )}></div>
                    ))
                }
            </div>
        </div>
    )
}