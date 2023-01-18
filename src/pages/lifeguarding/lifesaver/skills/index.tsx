import React, {useState} from 'react';
import Reveal from "reveal.js";
import {TitleSlide} from "components/slides/Title";
import {useTranslation} from "react-i18next";
import {Slide} from "../../../../components/slides/Slide";
import {Link} from "react-router-dom";
import {FaCaretLeft, FaCaretRight} from "react-icons/fa";

const Skills = () => {

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
                        <h1>{translate('slides.lifeguarding.lifesaver.skills.title')}</h1>
                    </TitleSlide>
                    <TitleSlide>
                        <h1>{translate('chapter')} 7</h1>
                        <h2>{translate('slides.lifeguarding.lifesaver.skills.skills.title')}</h2>
                    </TitleSlide>
                    <TitleSlide>
                        <h1>{translate('chapter')} 8</h1>
                        <h2>{translate('slides.lifeguarding.lifesaver.skills.first-aid.title')}</h2>
                    </TitleSlide>
                    <Slide>
                        <Link to=".." relative="path"
                              className="mr-8 !no-underline bg-transparent hover:bg-orange-500 !text-orange-400 font-semibold hover:!text-white py-2 px-4 border border-orange-300 hover:border-transparent rounded">
                            <FaCaretLeft className="inline stroke-orange-700"/> {translate('overview')}
                        </Link>
                        <Link to="../the-rescue" relative="path"
                              className="!no-underline bg-transparent hover:!bg-orange-500 !bg-orange-400 !text-white font-semibold hover:!text-white py-2 px-4 border border-orange-300 rounded">
                            {translate('next')}<FaCaretRight className="inline stroke-orange-700"/>
                        </Link>
                    </Slide>
                </div>
            </div>
        </>)
}

export {Skills}