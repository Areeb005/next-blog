import { FaXTwitter, FaFacebookF, FaLinkedinIn, FaInstagram, FaGithub, FaRegClock } from "react-icons/fa6"
import Link from "next/link"
import Image from "next/image"
import TagButton from "./tagButton"


const SidebarArticles = () => {

    const tags = [
        {
            id: 1,
            link: '#',
            name: 'Food',
            dot: 'bg-color6'
        },
        {
            id: 2,
            link: '#',
            name: 'Health',
            dot: 'bg-color7'
        },
        {
            id: 3,
            link: '#',
            name: 'Inspiration',
            dot: 'bg-color8'
        },
        {
            id: 4,
            link: '#',
            name: 'Lifestyle',
            dot: 'bg-color9'
        },
        {
            id: 5,
            link: '#',
            name: 'Nature',
            dot: 'bg-color10'
        },
        {
            id: 6,
            link: '#',
            name: 'Technology',
            dot: 'bg-color11'
        },
        {
            id: 7,
            link: '#',
            name: 'Travel',
            dot: 'bg-color1'
        },
    ]

    return <>
        <div className="h-max w-full shadow-2xl rounded-3xl p-8 max-sm:px-4 bg-color4">

            {/* posts */}

            <div className="mb-12">
                <h3 className="text-xl font-bold mb-6">Featured Posts</h3>

                <div className="flex items-center mb-6">
                    <div className="w-24 h-20 mr-3">
                        <Image src={'/ship.jpg'} width={200} height={200} className="rounded-xl w-full h-full" />
                    </div>
                    <div className="w-60 max-lg:w-full">
                        <div>
                            <p className="text-medium font-medium mb-2 text-hover">Never let your memories be greater than your dreams</p>
                            <div className="flex items-center">
                                <FaRegClock className="text-color2 text-sm mr-1" />
                                <p className="text-sm">3 min read</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex items-center mb-6">
                    <div className="w-24 h-20 mr-3">
                        <Image src={'/ship.jpg'} width={200} height={200} className="rounded-xl w-full h-full" />
                    </div>
                    <div className="w-60 max-lg:w-full">
                        <div>
                            <p className="text-medium font-medium mb-2 text-hover">Never let your memories be greater than your dreams</p>
                            <div className="flex items-center">
                                <FaRegClock className="text-color2 text-sm mr-1" />
                                <p className="text-sm">3 min read</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>


            {/* Tags */}
            <div className="mb-12">
                <h3 className="text-xl font-bold mb-6">Tags</h3>

                <div className="flex flex-wrap">
                    {
                        tags.map(e => {
                            return <div key={e.id} className="mr-2 mb-3">
                                <TagButton text={e.name} dotColor={e.dot} textColor={'text-color2'} />
                            </div>
                        })
                    }

                </div>
            </div>

            {/* posts */}

            <div className="mb-12">
                <h3 className="text-xl font-bold mb-6">Latest Posts</h3>

                <div className="flex items-center mb-6">
                    <div className="w-24 h-20 mr-3">
                        <Image src={'/ship.jpg'} width={200} height={200} className="rounded-xl w-full h-full" />
                    </div>
                    <div className="w-60 max-lg:w-full">
                        <div>
                            <p className="text-medium font-medium mb-2 text-hover">Never let your memories be greater than your dreams</p>
                            <div className="flex items-center">
                                <FaRegClock className="text-color2 text-sm mr-1" />
                                <p className="text-sm">3 min read</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex items-center mb-6">
                    <div className="w-24 h-20 mr-3">
                        <Image src={'/ship.jpg'} width={200} height={200} className="rounded-xl w-full h-full" />
                    </div>
                    <div className="w-60 max-lg:w-full">
                        <div>
                            <p className="text-medium font-medium mb-2 text-hover">Never let your memories be greater than your dreams</p>
                            <div className="flex items-center">
                                <FaRegClock className="text-color2 text-sm mr-1" />
                                <p className="text-sm">3 min read</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            {/* Form */}

            <div className="bg-color1 rounded-xl p-8 max-sm:px-4 mb-12">
                <div className="text-center mb-6">
                    <h2 className="text-3xl text-color3 mb-2">Newsletter</h2>
                    <h3 className="text-xl text-color3">Get the latest posts delivered straight to your inbox.</h3>
                </div>
                <div>
                    <form action="">
                        <input type="text" placeholder="Your Name" name="" id="" className="news-inp-fields" />
                        <input type="email" placeholder="Your Email Address" name="" id="" className="news-inp-fields" />
                        <button className="news-inp-fields font-semibold mb-0">Subscribe</button>
                    </form>
                </div>
            </div>

            <div>
                <h3 className="text-xl font-bold mb-6">Follow Us</h3>
                <div>
                    <Link href={'#'}>
                        <div className="icon-div">
                            <FaXTwitter className="text-[#00acee] text-2xl" />
                        </div>
                        <div className="icon-div">
                            <FaFacebookF className="text-[#3b5998] text-2xl" />
                        </div>
                        <div className="icon-div">
                            <FaLinkedinIn className="text-[#0072b1] text-2xl" />
                        </div>
                        <div className="icon-div">
                            <FaInstagram className="text-[#d62976] text-2xl" />
                        </div>
                        <div className="icon-div">
                            <FaGithub className="text-color2 text-2xl" />
                        </div>
                    </Link>
                </div>
            </div>

        </div>
    </>
}

export default SidebarArticles