import Image from "next/image"
import TagButton from "./tagButton"

import { FaCalendarDays, FaRegClock } from "react-icons/fa6"

const Section1 = () => {


    return <>
        <section className="mt-24">
            <div className="grid grid-cols-2 max-md:grid-cols-1 max-md:flex max-md:flex-col-reverse gap-6">
                <div>
                    <div className="mb-4">
                        <TagButton dotColor={'bg-color1'} textColor={'text-color2'} text={'travel'} />
                    </div>
                    <div>
                        <h2 className="text-5xl max-sm:text-2xl font-semibold mb-6 text-hover">Never let your memories be greater than your dreams</h2>
                        <p className="mb-6 text-lg max-sm:text-base">
                            Before long the searchlight discovered some distance away a schooner with all sails set, apparently the same vessel which had been noticed earlier in the evening...
                        </p>
                        <div className="flex items-center">
                            <FaCalendarDays className="text-color2 text-sm mr-1" />
                            <p className="text-sm max-sm:text-xs mr-4">May,2 2022</p>
                            <FaRegClock className="text-color2 text-sm mr-1" />
                            <p className="text-sm max-sm:text-xs">3 min read</p>
                        </div>
                    </div>
                </div>

                <div>
                    <div className="img-border rounded-2xl h-max shadow-lg">
                        <Image src={'/ship.jpg'} width={500} height={500} className="rounded-sm w-full h-full" />
                    </div>
                </div>

            </div>
        </section>
    </>

}

export default Section1