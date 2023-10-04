'use client';

import { Button } from "@nextui-org/react"

const MyButton = ({text}) => {
    return (
        <Button className="py-3 px-8 font-semibold w-max rounded-full bg-color1 text-white">{text}</Button>
    )
}

export default MyButton;