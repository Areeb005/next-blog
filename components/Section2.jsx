import Image from "next/image"
import TagButton from "./tagButton"
import MyButton from "./MyButton"
import SidebarArticles from "./SidebarArticles"



const Section2 = () => {



    return <>
        <section className="mt-24">
            <div className="grid grid-cols-3 max-lg:grid-cols-1 max-lg:flex max-lg:flex-col gap-8">
                <div className="col-span-2">
                    <div className="w-full grid grid-cols-3 max-sm:grid-cols-1 gap-6 justify-center items-center p-8 rounded-3xl shadow-xl bg-color4">
                        <div className="w-full h-full overflow-hidden">
                            <Image src={'/ship.jpg'} width={400} height={200} className="rounded-3xl w-full h-full" />
                        </div>
                        <div className="col-span-2 max-sm:col-span-1">
                            <div className="mb-4">
                                <TagButton dotColor={'bg-color1'} textColor={'text-color2'} text={'travel'} />
                            </div>
                            <div>
                                <h2 className="text-3xl max-sm:text-2xl font-bold mb-4 text-hover">Never let your memories be greater than your dreams</h2>
                                <p className="mb-4 text-lg max-sm:text-base">
                                    Before long the searchlight discovered some distance away a schooner with all sails set, apparently the same vessel which had been noticed earlier in the evening...
                                </p>
                                <div className="flex">
                                    <p className="text-sm max-sm:text-xs mr-4">May,2 2022</p>
                                    <p className="text-sm max-sm:text-xs">3 min read</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="text-center mt-12">
                        <MyButton text={'Load More'} />
                    </div>
                </div>

                <div className="">
                    <SidebarArticles />
                </div>
            </div>
        </section>
    </>

}

export default Section2