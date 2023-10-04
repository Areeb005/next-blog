import Image from "next/image"
import TagButton from "../tagButton"
import MyButton from "../MyButton"
import SidebarArticles from "../SidebarArticles"
import { FaCalendarDays, FaRegClock } from "react-icons/fa6"
import { Blogs } from "@/app/blogs"
import DOMPurify from 'dompurify';
import { JSDOM } from 'jsdom';




const SinglePage = () => {

    let data = '';


    Blogs.forEach(e => {
        if (e.category == "travel") {
            data = e
        }
    })

    // const sanitizedData = () => ({
    //     __html: DOMPurify.sanitize(data.content)
    // })


    return <>
        <section className="mt-24">
            <div className="grid grid-cols-3 max-lg:grid-cols-1 max-lg:flex max-lg:flex-col gap-8">
                <div className="col-span-2">
                    <div className="w-full p-8 rounded-3xl shadow-xl bg-color4">
                        <div className="mb-8">
                            <TagButton dotColor={'bg-color1'} textColor={'text-color2'} text={'travel'} />
                            <h2 className="mt-6 text-4xl max-sm:text-2xl font-bold mb-4 text-hover leading-tight">{data.title}</h2>
                            <div className="flex items-center">
                                {/* <FaCalendarDays className="text-color2 text-sm mr-1" />
                                <p className="text-sm max-sm:text-xs mr-4">May,2 2022</p> */}
                                <FaCalendarDays className="text-color2 text-sm mr-1" />
                                <p className="text-sm max-sm:text-xs mr-4">{data.date}</p>
                                <FaRegClock className="text-color2 text-sm mr-1" />
                                <p className="text-sm max-sm:text-xs">{data.read_time} min read</p>
                            </div>
                        </div>
                        <div
                            dangerouslySetInnerHTML={{
                                __html: DOMPurify(new JSDOM('<!DOCTYPE html>').window).sanitize(data.content)
                            }}
                        />

                    </div>
                </div>

                <div className="">
                    <SidebarArticles />
                </div>
            </div>
        </section>
    </>
}

export default SinglePage