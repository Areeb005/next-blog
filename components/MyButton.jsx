'use client';

import { Button } from "@nextui-org/react"

const MyButton = ({ text, className, type}) => {
    return (
        <Button type={type} className={`py-3 px-8 font-semibold w-max rounded-full bg-color1 text-white ${className}`}>{text}</Button>
    )
}

export default MyButton;