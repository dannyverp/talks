import React, {useState} from 'react';
import Reveal from "reveal.js";
import {TitleSlide} from "components/slides/Title";
import {useTranslation} from "react-i18next";
import {Slide} from "../../../../components/slides/Slide";
import {Link} from "react-router-dom";
import {FaCaretLeft} from "react-icons/fa";

const TheRescue = () => {

    const {t: translate} = useTranslation();
    const [initialized, setInitialized] = useState<boolean>(false)

    React.useEffect(() => {
        if (!initialized) {
            let deck = new Reveal({
                backgroundTransition: 'slide',
                transition: 'slide',
                display: 'flex',
                hash: true,
                respondToHashChanges: true,
                slideNumber: true,
            })
            deck.initialize();
            setInitialized(true);
        }
    }, [initialized])

    return (
        <>
            <div className="reveal !h-screen !w-screen">
                <div className="slides">
                    <TitleSlide>
                        <h1>{translate('slides.lifeguarding.lifesaver.the-rescue.title')}</h1>
                    </TitleSlide>
                    <TitleSlide>
                        <h1>{translate('chapter')} 9</h1>
                        <h2>{translate('slides.lifeguarding.lifesaver.the-rescue.rescue.title')}</h2>
                    </TitleSlide>
                    <Slide>
                        <Link to=".." relative="path"
                              className="!no-underline bg-transparent hover:!bg-orange-500 !bg-orange-400 !text-white font-semibold hover:!text-white py-2 px-4 border border-orange-300 rounded">
                            <FaCaretLeft className="inline stroke-orange-700"/> {translate('overview')}
                        </Link>
                    </Slide>
                </div>
            </div>
        </>)
}

export {TheRescue}