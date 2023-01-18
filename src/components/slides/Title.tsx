import React from "react";

interface titleSlide {
    children: React.ReactElement | React.ReactElement[]
    backgroundImage?: string
    backgroundSize?: string
}

const TitleSlide = ({children, backgroundImage, backgroundSize}: titleSlide) => {
    return (
        <section data-transition="slide" className="flex flex-col justify-center items-center"
                 data-background-color="rgb(249,115,22)"
                 data-background-image={backgroundImage}
                 data-background-size={backgroundSize}>
            <div className="!prose !prose-invert !max-w-none">
                {children}
            </div>
        </section>
    )
}

export {TitleSlide}
