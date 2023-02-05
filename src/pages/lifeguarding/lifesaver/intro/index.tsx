import React, {useState} from 'react';
import Reveal from "reveal.js";
import {TitleSlide} from "components/slides/Title";
import {useTranslation} from "react-i18next";
import {Slide, SlideOl, SlideTitle, SlideUl} from "components/slides/Slide";
import {FaCaretLeft, FaCaretRight} from "react-icons/fa";
import {Link} from "react-router-dom";
import bystander from "assets/img/bystander.webp"
import lifeguard from "assets/img/lifeguard.jpeg"
import lifeguards from "assets/img/lifeguards.jpg"
import sports from "assets/img/sports.jpg"
import history from "assets/img/history.webp"
import nrv from "assets/img/nrv.jpg"

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
                <div className="slides py-20">
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
                        <h2>{translate('slides.lifeguarding.lifesaver.intro.associations.swimming.title')}</h2>
                    </TitleSlide>
                    <Slide>
                        <h1>{translate('slides.lifeguarding.lifesaver.intro.associations.swimming.title')}</h1>
                        <SlideUl>
                            <li>{translate('slides.lifeguarding.lifesaver.intro.associations.swimming.legal')}</li>
                            <SlideUl>
                                <li>{translate('slides.lifeguarding.lifesaver.intro.associations.swimming.exceptions1')}</li>
                                <li>{translate('slides.lifeguarding.lifesaver.intro.associations.swimming.exceptions')}</li>
                            </SlideUl>
                            <li>{translate('slides.lifeguarding.lifesaver.intro.associations.swimming.notices')}</li>
                            <li className="text-red-400">{translate('slides.lifeguarding.lifesaver.intro.associations.swimming.notices')}</li>
                            <li>{translate('slides.lifeguarding.lifesaver.intro.associations.swimming.locations')} <a
                                href="https://zwemwater.nl">zwemwater.nl</a>
                            </li>
                        </SlideUl>
                    </Slide>
                    <Slide>
                        <h1>{translate('slides.lifeguarding.lifesaver.intro.associations.history.title')}</h1>
                        <div className="flex items-center">
                            <img src={history} className="w-1/3 h-min" alt=""/>
                            <SlideUl>
                                <li>{translate('slides.lifeguarding.lifesaver.intro.associations.history.foundedAs')}
                                    <strong className="!text-orange-400 font-extrabold">Nederlansche Bond tot het Redden
                                        van
                                        Drenkelingen</strong> {translate('slides.lifeguarding.lifesaver.intro.associations.history.foundedBy')}
                                </li>
                                <SlideUl>
                                    <li>{translate('slides.lifeguarding.lifesaver.intro.associations.history.goal')}</li>
                                </SlideUl>
                                <li>{translate('slides.lifeguarding.lifesaver.intro.associations.history.royal')}</li>
                                <li>{translate('slides.lifeguarding.lifesaver.intro.associations.history.rename')}</li>
                            </SlideUl>
                        </div>
                    </Slide>
                    <Slide>
                        <h1>{translate('slides.lifeguarding.lifesaver.intro.associations.organisation.title')}</h1>
                        <table>
                            <thead>
                            <tr className="font-extrabold">
                                <td>{translate('slides.lifeguarding.lifesaver.intro.associations.organisation.organisation')}</td>
                                <td>{translate('slides.lifeguarding.lifesaver.intro.associations.organisation.operational')}</td>
                                <td>{translate('slides.lifeguarding.lifesaver.intro.associations.organisation.sports')}</td>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td className="font-extrabold">{translate('slides.lifeguarding.lifesaver.intro.associations.organisation.ils')}</td>
                                <td className="!gap-y-1">
                                    <p className="!mt-0 !mb-1">{translate('slides.lifeguarding.lifesaver.intro.associations.organisation.conference')}</p>
                                    <p className="!mt-0 !mb-1">{translate('slides.lifeguarding.lifesaver.intro.associations.organisation.ilsResponsibilities')}</p>
                                </td>
                                <td>{translate('slides.lifeguarding.lifesaver.intro.associations.organisation.wc')}</td>
                            </tr>
                            <tr>
                                <td className="font-extrabold">{translate('slides.lifeguarding.lifesaver.intro.associations.organisation.ilse')}</td>
                                <td className="!gap-y-1">
                                    <p className="!mt-0 !mb-0">{translate('slides.lifeguarding.lifesaver.intro.associations.organisation.ilseResponsibilities')}</p>
                                </td>
                                <td>{translate('slides.lifeguarding.lifesaver.intro.associations.organisation.ec')}</td>
                            </tr>
                            <tr>
                                <td className="font-extrabold">{translate('slides.lifeguarding.lifesaver.intro.associations.organisation.reddingsbrigadeNL')}</td>
                                <td className="!gap-y-1">
                                    <p className="!mt-0 !mb-1">{translate('slides.lifeguarding.lifesaver.intro.associations.organisation.nationalResponsibilities1')}</p>
                                    <p className="!mt-0 !mb-1">{translate('slides.lifeguarding.lifesaver.intro.associations.organisation.nationalResponsibilities2')}</p>
                                </td>
                                <td>{translate('slides.lifeguarding.lifesaver.intro.associations.organisation.nk')}</td>
                            </tr>
                            <tr>
                                <td className="font-extrabold">{translate('slides.lifeguarding.lifesaver.intro.associations.organisation.individuals')}</td>
                                <td>{translate('slides.lifeguarding.lifesaver.intro.associations.organisation.individualsResponsibilities')}</td>
                                <td>
                                    {translate('slides.lifeguarding.lifesaver.intro.associations.organisation.educate')}<br/>
                                    {translate('slides.lifeguarding.lifesaver.intro.associations.organisation.sport')}<br/>
                                    {translate('slides.lifeguarding.lifesaver.intro.associations.organisation.clubChampionship')}
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </Slide>
                    <Slide>
                        <h1>{translate('slides.lifeguarding.lifesaver.intro.associations.trainings.title')}</h1>
                        <p>{translate('slides.lifeguarding.lifesaver.intro.associations.trainings.intro')}</p>
                        <table>
                            <thead>
                            <tr className="font-bold">
                                <td>{translate('slides.lifeguarding.lifesaver.intro.associations.trainings.training')}</td>
                                <td>{translate('slides.lifeguarding.lifesaver.intro.associations.trainings.content')}</td>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>{translate('slides.lifeguarding.lifesaver.intro.associations.trainings.junior')}</td>
                                <td>{translate('slides.lifeguarding.lifesaver.intro.associations.trainings.selfRescue')}</td>
                            </tr>
                            <tr>
                                <td>{translate('slides.lifeguarding.lifesaver.intro.associations.trainings.rescuer')}</td>
                                <td>{translate('slides.lifeguarding.lifesaver.intro.associations.trainings.rescue')}</td>
                            </tr>
                            <tr>
                                <td>{translate('slides.lifeguarding.lifesaver.intro.associations.trainings.lifesaver')}</td>
                                <td>{translate('slides.lifeguarding.lifesaver.intro.associations.trainings.lifesaving')}</td>
                            </tr>
                            </tbody>
                        </table>
                    </Slide>
                    <Slide>
                        <h1>{translate('slides.lifeguarding.lifesaver.intro.associations.lifeguard.title')}</h1>
                        <p>{translate('slides.lifeguarding.lifesaver.intro.associations.lifeguard.intro')}</p>
                        <table>
                            <thead>
                            <tr className="font-bold">
                                <td>{translate('slides.lifeguarding.lifesaver.intro.associations.lifeguard.training')}</td>
                                <td>{translate('slides.lifeguarding.lifesaver.intro.associations.lifeguard.specialization')}</td>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>{translate('slides.lifeguarding.lifesaver.intro.associations.lifeguard.junior')}</td>
                                <td>{translate('slides.lifeguarding.lifesaver.intro.associations.lifeguard.none')}</td>
                            </tr>
                            <tr>
                                <td>{translate('slides.lifeguarding.lifesaver.intro.associations.lifeguard.lifeguard')}</td>
                                <td>{translate('slides.lifeguarding.lifesaver.intro.associations.lifeguard.rescue')}</td>
                            </tr>
                            <tr>
                                <td>{translate('slides.lifeguarding.lifesaver.intro.associations.lifeguard.senior')}</td>
                                <td>{translate('slides.lifeguarding.lifesaver.intro.associations.lifeguard.seniorSpecialisations')}</td>
                            </tr>
                            <tr>
                                <td>{translate('slides.lifeguarding.lifesaver.intro.associations.lifeguard.ovd')}</td>
                                <td>{translate('slides.lifeguarding.lifesaver.intro.associations.lifeguard.none')}</td>
                            </tr>
                            </tbody>
                        </table>
                    </Slide>
                    <Slide>
                        <h1>{translate('slides.lifeguarding.lifesaver.intro.associations.activities.title')}</h1>
                        <h3>
                            {translate('slides.lifeguarding.lifesaver.intro.associations.activities.operational')}
                        </h3>
                        <div className="flex space-x-3 items-center">
                            <img src={lifeguards} className="w-2/3 h-min" alt=""/>
                            <SlideUl>
                                <SlideOl className="!ml-0">
                                    <li>{translate('slides.lifeguarding.lifesaver.intro.associations.activities.educate')}</li>
                                    <li>{translate('slides.lifeguarding.lifesaver.intro.associations.activities.guard')}</li>
                                    <li>{translate('slides.lifeguarding.lifesaver.intro.associations.activities.stepIn')}</li>
                                    <li>{translate('slides.lifeguarding.lifesaver.intro.associations.activities.renderAid')}</li>
                                    <li>{translate('slides.lifeguarding.lifesaver.intro.associations.activities.report')}</li>
                                </SlideOl>
                            </SlideUl>
                        </div>
                    </Slide>
                    <Slide>
                        <h1>{translate('slides.lifeguarding.lifesaver.intro.associations.activities.title')}</h1>
                        <h3>
                            {translate('slides.lifeguarding.lifesaver.intro.associations.activities.sports')}
                        </h3>
                        <div className="flex space-x-3 items-center">
                            <img src={sports} className="w-2/3 h-min" alt=""/>
                            <SlideUl>
                                <SlideOl className="!ml-0">
                                    <li>{translate('slides.lifeguarding.lifesaver.intro.associations.activities.pool')}</li>
                                    <li>{translate('slides.lifeguarding.lifesaver.intro.associations.activities.ocean')}</li>
                                    <li>{translate('slides.lifeguarding.lifesaver.intro.associations.activities.serc')}</li>
                                </SlideOl>
                            </SlideUl>
                        </div>
                    </Slide>
                    <Slide iframe="https://www.youtube.com/embed/D3ZnbsUbMdQ"/>
                    <Slide>
                        <h1>{translate('slides.lifeguarding.lifesaver.intro.associations.activities.title')}</h1>
                        <h3>
                            {translate('slides.lifeguarding.lifesaver.intro.associations.activities.fleet')}
                        </h3>
                        <div className="flex space-x-3 items-center">
                            <img src={nrv} className="w-2/3 h-min" alt=""/>
                            <SlideUl>
                                <SlideOl className="!ml-0">
                                    <li>{translate('slides.lifeguarding.lifesaver.intro.associations.activities.regions')}</li>
                                    <li>{translate('slides.lifeguarding.lifesaver.intro.associations.activities.units')}</li>
                                    <li>{translate('slides.lifeguarding.lifesaver.intro.associations.activities.fire')}</li>
                                </SlideOl>
                            </SlideUl>
                        </div>
                    </Slide>
                    <TitleSlide>
                        <h1>{translate('chapter')} 2</h1>
                        <h2>{translate('slides.lifeguarding.lifesaver.intro.lifesaver.title')}</h2>
                    </TitleSlide>
                    <Slide>
                        <h1>{translate('slides.lifeguarding.lifesaver.intro.lifesaver.lifesaver.title')}</h1>
                        <div className="flex items-center">
                            <img src={bystander} alt="" className="w-1/5 h-min"/>
                            <SlideUl>
                                <li>{translate('slides.lifeguarding.lifesaver.intro.lifesaver.lifesaver.preparation')}</li>
                                <li>{translate('slides.lifeguarding.lifesaver.intro.lifesaver.lifesaver.emergencies')}</li>
                                <SlideUl>
                                    <li>{translate('slides.lifeguarding.lifesaver.intro.lifesaver.lifesaver.renderAid')}</li>
                                </SlideUl>
                                <li>{translate('slides.lifeguarding.lifesaver.intro.lifesaver.lifesaver.physical')}</li>
                                <li>{translate('slides.lifeguarding.lifesaver.intro.lifesaver.lifesaver.knowledge')}</li>
                            </SlideUl>
                        </div>
                    </Slide>
                    <Slide>
                        <h1>{translate('slides.lifeguarding.lifesaver.intro.lifesaver.lifeguard.title')}</h1>
                        <div className="flex items-center">
                            <img src={lifeguard} alt="" className="w-1/5 h-min"/>
                            <SlideUl>
                                <li>{translate('slides.lifeguarding.lifesaver.intro.lifesaver.lifeguard.professional')}</li>
                                <li>{translate('slides.lifeguarding.lifesaver.intro.lifesaver.lifeguard.prevention')}</li>
                                <li>{translate('slides.lifeguarding.lifesaver.intro.lifesaver.lifeguard.knowledge')}</li>
                            </SlideUl>
                        </div>
                    </Slide>
                    <Slide>
                        <h1>{translate('slides.lifeguarding.lifesaver.intro.lifesaver.leadership.title')}</h1>
                        <SlideUl className="fragment">
                            <li>{translate('slides.lifeguarding.lifesaver.intro.lifesaver.leadership.amateurs')}</li>
                            <li>{translate('slides.lifeguarding.lifesaver.intro.lifesaver.leadership.aspects')}</li>
                        </SlideUl>
                    </Slide>
                    <Slide>
                        <h1>{translate('slides.lifeguarding.lifesaver.intro.lifesaver.leadership.title')}</h1>
                        <SlideUl className="fragment">
                            <li>{translate('slides.lifeguarding.lifesaver.intro.lifesaver.leadership.amateurs')}</li>
                            <li>{translate('slides.lifeguarding.lifesaver.intro.lifesaver.leadership.aspects')}</li>
                            <SlideOl>
                                <li>{translate('slides.lifeguarding.lifesaver.intro.lifesaver.leadership.delegate')}</li>
                                <li>{translate('slides.lifeguarding.lifesaver.intro.lifesaver.leadership.check')}</li>
                                <li>{translate('slides.lifeguarding.lifesaver.intro.lifesaver.leadership.correct')}</li>
                                <li>{translate('slides.lifeguarding.lifesaver.intro.lifesaver.leadership.evaluate')}</li>
                            </SlideOl>
                        </SlideUl>
                    </Slide>
                    <Slide>
                        <h1>{translate('slides.lifeguarding.lifesaver.intro.lifesaver.ambassadors.title')}</h1>
                        <SlideUl>
                            <li>{translate('slides.lifeguarding.lifesaver.intro.lifesaver.ambassadors.careful')}</li>
                            <li>{translate('slides.lifeguarding.lifesaver.intro.lifesaver.ambassadors.inform')}</li>
                        </SlideUl>
                    </Slide>
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