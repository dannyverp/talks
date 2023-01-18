import React from "react";
import 'reveal.js/css/reveal.scss'
import 'reveal.js/dist/theme/black.css'
import {PresentationBar} from "components/PresentationBar";

interface lifeguardPresentation {
    children: React.ReactElement
}

const Presentation = ({children}: lifeguardPresentation) => {
    return (
        <>
            <PresentationBar/>
            {children}
        </>
    )
};

export {Presentation}