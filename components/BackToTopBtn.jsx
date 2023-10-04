'use client';

const BackToTopBtn = () => {

    const backToTop = () => {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    }

    return (
        <p className="text-sm text-hover cursor-pointer scroll-smooth" onClick={() => backToTop()}>↑Back To Top</p>
    )
}

export default BackToTopBtn