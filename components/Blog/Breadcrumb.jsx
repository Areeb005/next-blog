import React from 'react'

const Breadcrumb = ({heading, text}) => {
    return <>

        <div className="mt-12 h-max py-12 bg-[url('/travel.jpg')] bg-center bg-cover img-border shadow-xl rounded-3xl flex justify-center items-center max-lg:px-6">
            <div className="text-center rounded-3xl px-8 max-sm:px-4 py-6 max-w-3xl relative">
                <div className="w-full h-full breadcrumb-background rounded-3xl"></div>
                <h2 className="mb-4 text-4xl max-sm:text-2xl text-color2 font-bold relative z-40">{heading}</h2>
                <p className="text-color2 text-xl max-sm:text-base relative z-40">{text}</p>
            </div>
        </div>

    </>
}

export default Breadcrumb