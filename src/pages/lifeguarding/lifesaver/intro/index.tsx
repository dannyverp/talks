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
            <div className="reveal flex-grow !w-screen">
                <div className="slides !h-full !w-11/12 mx-auto">
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
                    <Slide>
                        <h1>Zwemmen in Nederland</h1>
                        <SlideUl>
                            <li>Overal legaal, behalve uitzonderingen:</li>
                            <SlideUl>
                                <li>Vaarwegen en veerpont routes</li>
                                <li>In havens en bij bruggen, sluizen en viaducten</li>
                            </SlideUl>
                            <li>Staat niet altijd ter plekke aangegeven maaar wel in wet vastgelegd</li>
                            <li className="text-red-400">Zwemmen in open water is altijd op eigen risico</li>
                            <li>750 aangewezen zwemlocatie te vinden op <a href="https://zwemwater.nl">zwemwater.nl</a>
                            </li>
                        </SlideUl>
                    </Slide>
                    <Slide>
                        <h1>Oprichting en geschiedenis</h1>
                        <SlideUl>
                            <li>Opgericht in 1917 als <strong className="!text-orange-400 font-extrabold">Nederlandsche
                                Bond tot het Redden van Drenkelingen</strong> door
                                reddingsbrigades: Den Bosch, Amsterdam, Breda, Den Haag en
                                Haarlem
                            </li>
                            <SlideUl>
                                <li>Doel is eenheid in lesstof en reddingstechnieken</li>
                            </SlideUl>
                            <li>Vanaf 1952 het predicaat Koninklijke Bond</li>
                            <li>Vanaf 2007 hernoemd naar Reddingsbrigade Nederland met KNBRD als statutaire naam</li>
                        </SlideUl>
                    </Slide>
                    <Slide>
                        <h1>Organisatie Reddingsbrigades</h1>
                        <table>
                            <thead>
                            <tr className="font-extrabold">
                                <td>Organisaties</td>
                                <td>Hulpverlening</td>
                                <td>Lifesavingsport</td>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td className="font-extrabold">International Life Saving Federation (ILS)</td>
                                <td className="!space-y-1">
                                    <p className="!mt-0">Organiseer world conference on drowning prevention</p>
                                    <p>Normstelling voor preventie, hulpverlening, sport en zakelijke
                                        belangen.</p>
                                </td>
                                <td>WK Lifesaving</td>
                            </tr>
                            <tr>
                                <td className="font-extrabold">ILS Europe (ILSE)</td>
                                <td className="!space-y-1">
                                    <p className="!mt-0">
                                        Normstelling binnen Europa voor opleiding, hulpverlening, sport, bestuur en
                                        beleid.</p></td>
                                <td>EK Lifesaving</td>
                            </tr>
                            <tr>
                                <td className="font-extrabold">Reddingsbrigade Nederland</td>
                                <td className="!space-y-1">
                                    <p className="!mt-0">
                                        Nationale normstelling voor opleiding, hulpverlening, sport..</p>
                                    <p className="!mt-0">
                                        Opdrachtnemer Nationale Reddingsvloot samen met de brandweer.</p>
                                </td>
                                <td>NK Lifesaving</td>
                            </tr>
                            <tr>
                                <td className="font-extrabold">Invidiuele reddingsbrigades</td>
                                <td></td>
                                <td>
                                    Lifesaving-opleidingen<br/>
                                    Lifesaving sport<br/>
                                    Clubwedstrijden
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </Slide>
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