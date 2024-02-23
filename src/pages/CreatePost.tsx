import Navbar from '@/components/common/Navbar'
import { format } from "date-fns"
import { Calendar as CalendarIcon } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { useState } from 'react'
import { createUserData } from '@/appwrite/appwrite'


const CreatePost = () => {
    const [date, setDate] = useState<Date>()
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");

    const onSubmit = () => {
        const response = createUserData(title, desc);
        console.log(response);
        
    }
 
    return (
        <div className=''>
            <Navbar />

            <div className='flex flex-col items-center'>
                <div className='w-3/4 h-screen  border border-black border-y-0 flex flex-col items-center'>
                    <h2 className='mx-5 my-3 text-4xl underline-offset-2 underline'>Create a new post</h2>
                    <div className='w-full flex flex-col gap-4 items-center'>
                        <div className='bg-yellow-30 w-1/3'>
                            <p className='text-lg'>Title</p>
                            <input type="text" className='border border-black rounded-sm w-full p-2' onChange={(e) => setTitle(e.target.value)}/>
                        </div>
                        <div className='bg-yellow-30 w-1/3'>
                            <p className='text-lg'>Description</p>
                            <textarea className='border border-black rounded-sm w-full p-2 text-sm' onChange={(e) => setDesc(e.target.value)}/>
                        </div>
                        {/* <MyDropzone /> */}
                        <div className='flex gap-2'>
                            <button className='bg-slate-200 px-3 py-2 rounded-md' onClick={onSubmit}>
                                Post now
                            </button>

                            <Popover>
                                <PopoverTrigger asChild>
                                    <Button
                                        variant={"outline"}
                                        className={cn(
                                            "w-[280px] justify-start text-left font-normal",
                                            !date && "text-muted-foreground"
                                        )}
                                    >
                                        <CalendarIcon className="mr-2 h-4 w-4" />
                                        {date ? format(date, "PPP") : <span>Schedule for later</span>}
                                    </Button>
                                </PopoverTrigger>
                                <PopoverContent className="w-auto p-0">
                                    <Calendar
                                        mode="single"
                                        selected={date}
                                        onSelect={setDate}
                                        initialFocus
                                    />
                                </PopoverContent>
                            </Popover>
                        </div>



                    </div>
                </div>
            </div>

        </div>


    )
}

export default CreatePost