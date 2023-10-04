'use client';
import React from "react";

import { Button } from "@nextui-org/react";



const TagButton = ({dotColor, textColor, text}) => {
    return <>
        <Button size="sm" radius="full" className="py-0 px-3 bg-color5">
            <div className={`p-1 rounded-full ${dotColor}`}></div> <span className={`${textColor} text-sm`}>{text}</span>
        </Button>
    </>
}

export default TagButton