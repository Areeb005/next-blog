'use client';

import { Select, SelectItem, Textarea, Input } from "@nextui-org/react";
import { useState } from "react";
import MyButton from "../MyButton";


const Form = () => {


    const [category, setcategory] = useState('')
    const [title, settitle] = useState('')
    const [mins, setmins] = useState('')
    const [blogcontent, setblogcontent] = useState('')


    const addBlog = (e) => {
        e.preventDefault();

        console.log(category, title, mins, blogcontent);
    }

    return <>
        <form action="" onSubmit={(e) => addBlog(e)}>
            <div className="w-full flex flex-col justify-center items-center">

                <div className="w-3/5 flex flex-col items-center justify-center">

                    <div className="w-full flex mb-4 items-center justify-center">
                        <Select
                            isRequired
                            items={blogCategory}
                            label="Select Category"
                            className="max-w-xs mr-2"
                            variant="bordered"
                            onChange={(e) => setcategory(e.target.value)}
                        >
                            {(blogCategory) => <SelectItem key={blogCategory.value}>{blogCategory.label}</SelectItem>}
                        </Select>

                        <Input
                            isRequired
                            type="text"
                            label="Title"
                            variant="bordered"
                            className="max-w-xs mr-2"
                            value={title}
                            onChange={(e) => settitle(e.target.value)}

                        />

                        <Input
                            isRequired
                            type="number"
                            label="Approx. Mins Reading"
                            variant="bordered"
                            className="max-w-xs"
                            value={mins}
                            onChange={(e) => setmins(e.target.value)}

                        />
                    </div>


                    <Textarea
                        isRequired
                        label="Write Your Blog"
                        minRows={20}
                        className="max-w-full"
                        variant="bordered"
                        value={blogcontent}
                        onChange={(e) => setblogcontent(e.target.value)}

                    />

                    <MyButton text={'Add Blog'} className={'rounded-lg mt-4'} type={'submit'} />


                </div>

            </div>

        </form>

    </>
}

export default Form







export const blogCategory = [

    { label: "Food", value: "food", description: "The second most popular pet in the world" },
    { label: "Health", value: "health", description: "The second most popular pet in the world" },
    { label: "Inspiration", value: "inspiration", description: "The second most popular pet in the world" },
    { label: "Lifestyle", value: "lifestyle", description: "The second most popular pet in the world" },
    { label: "Nature", value: "nature", description: "The second most popular pet in the world" },
    { label: "Technology", value: "technology", description: "The second most popular pet in the world" },
    { label: "Travel", value: "Travel", description: "The second most popular pet in the world" },

];
