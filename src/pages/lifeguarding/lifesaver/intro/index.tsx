import React, {useState} from 'react';
import Reveal from "reveal.js";
import {TitleSlide} from "components/slides/Title";
import {useTranslation} from "react-i18next";
import {Slide, SlideOl, SlideTitle, SlideUl} from "components/slides/Slide";
import {FaCaretLeft, FaCaretRight} from "react-icons/fa";
import {Link} from "react-router-dom";

const Intro = () => {

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
                        <h1>{translate('slides.lifeguarding.lifesaver.intro.title')}</h1>
                    </TitleSlide>
                    <Slide>
                        <SlideTitle>{translate('slides.lifeguarding.lifesaver.intro.agenda.title') || ""}</SlideTitle>
                        <SlideUl>
                            <li>{translate('slides.lifeguarding.lifesaver.intro.agenda.planning')}</li>
                            <li>{translate('slides.lifeguarding.lifesaver.intro.agenda.lifeguard-federation')}</li>
                            <li>{translate('slides.lifeguarding.lifesaver.intro.agenda.lifesavers')}</li>
                        </SlideUl>
                    </Slide>
                    <Slide>
                        <SlideTitle>{translate('slides.lifeguarding.lifesaver.intro.planning.title') || ""}</SlideTitle>
                        <p>{translate('slides.lifeguarding.lifesaver.intro.planning.intro')}</p>
                        <SlideOl>
                            <li>{translate('slides.lifeguarding.lifesaver.intro.planning.lesson1')}</li>
                            <li>{translate('slides.lifeguarding.lifesaver.intro.planning.lesson2')}</li>
                            <li>{translate('slides.lifeguarding.lifesaver.intro.planning.lesson3')}</li>
                            <li>{translate('slides.lifeguarding.lifesaver.intro.planning.lesson4')}</li>
                            <li>{translate('slides.lifeguarding.lifesaver.intro.planning.lesson5')}</li>
                            <li>{translate('slides.lifeguarding.lifesaver.intro.planning.lesson6')}</li>
                            <li>{translate('slides.lifeguarding.lifesaver.intro.planning.lesson7')}</li>
                        </SlideOl>
                    </Slide>
                    <TitleSlide>
                        <h1>{translate('chapter')} 1</h1>
                        <h2>{translate('slides.lifeguarding.lifesaver.intro.associations.title')}</h2>
                    </TitleSlide>
                    <TitleSlide>
                        <h1>{translate('chapter')} 2</h1>
                        <h2>{translate('slides.lifeguarding.lifesaver.intro.lifesaver.title')}</h2>
                    </TitleSlide>
                    <Slide>
                        <Link to=".." relative="path"
                              className="mr-8 !no-underline bg-transparent hover:bg-orange-500 !text-orange-400 font-semibold hover:!text-white py-2 px-4 border border-orange-300 hover:border-transparent rounded">
                            <FaCaretLeft className="inline stroke-orange-700"/> {translate('overview')}
                        </Link>
                        <Link to="../safety" relative="path"
                              className="!no-underline bg-transparent hover:!bg-orange-500 !bg-orange-400 !text-white font-semibold hover:!text-white py-2 px-4 border border-orange-300 rounded">
                            {translate('next')}<FaCaretRight className="inline stroke-orange-700"/>
                        </Link>
                    </Slide>
                </div>
            </div>
        </>)
}

export {Intro}