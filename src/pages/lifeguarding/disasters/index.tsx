import React, {useState} from 'react';
import Reveal from "reveal.js";
import {TitleSlide} from "components/slides/Title";
import {useTranslation} from "react-i18next";
import vehicles from 'assets/img/voertuigen.jpeg'

const Disasters = () => {

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
                        <>
                            <h1>{translate('slides.lifeguarding.disasters.title')}</h1>
                            <h2>{translate('slides.lifeguarding.disasters.subtitle')}</h2>
                        </>
                    </TitleSlide>
                    <TitleSlide>
                        <>
                            <h1>{translate('slides.lifeguarding.disasters.1-agenda.title')}</h1>
                            <ul className="text-left space-y-6 list-disc marker:!text-indigo-500">
                                <li className="text-white">{translate('slides.lifeguarding.disasters.1-agenda.1')}</li>
                                <li className="text-white">{translate('slides.lifeguarding.disasters.1-agenda.2')}
                                </li>
                                <li className="text-white">{translate('slides.lifeguarding.disasters.1-agenda.3')}</li>
                                <li className="text-white">{translate('slides.lifeguarding.disasters.1-agenda.4')}</li>
                                <li className="text-white">{translate('slides.lifeguarding.disasters.1-agenda.5')}</li>
                            </ul>
                        </>
                    </TitleSlide>
                    <TitleSlide backgroundImage={vehicles}>
                        <div></div>
                    </TitleSlide>
                    <TitleSlide backgroundImage={vehicles} backgroundSize="100%">
                        <div></div>
                    </TitleSlide>
                </div>
            </div>
        </>)
}

export {Disasters}