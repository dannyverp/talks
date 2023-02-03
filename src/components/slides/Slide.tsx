import React from "react";

interface slide {
    children: React.ReactElement | React.ReactElement[]
    backgroundImage?: string
    backgroundSize?: string
}

const Slide = ({children, backgroundImage, backgroundSize}: slide) => {
    return (
        <section data-transition="slide"
                 className="flex flex-col justify-center items-center"
                 data-background-color="#fff"
                 data-background-image={backgroundImage}
                 data-background-size={backgroundSize}>
            <div className="!prose !prose-2xl !max-w-none">
                {children}
            </div>
        </section>
    )
}

interface slideTitle {
    children: string
}

const SlideTitle = ({children}: slideTitle) => {
    return (
        <h2 className="!text-orange-500">{children}</h2>
    )
}

interface slideUl {
    children: React.ReactElement | React.ReactElement[]
}

const SlideUl = ({children}: slideUl) => {
    return (
        <ul className="text-left space-y-6 list-disc marker:!text-indigo-500">{children}</ul>
    )
}

interface slideUl {
    children: React.ReactElement | React.ReactElement[]
}

const SlideOl = ({children}: slideUl) => {
    return (
        <ol className="text-left space-y-6 list-disc marker:!text-indigo-500">{children}</ol>
    )
}

export {Slide, SlideTitle, SlideUl, SlideOl}
