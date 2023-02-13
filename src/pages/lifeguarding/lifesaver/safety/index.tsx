import React, {useState} from 'react';
import Reveal from "reveal.js";
import {TitleSlide} from "components/slides/Title";
import {useTranslation} from "react-i18next";
import {Slide, SlideOl, SlideUl} from "components/slides/Slide";
import {Link} from "react-router-dom";
import {FaCaretLeft, FaCaretRight, FaPlus, FaQuestion} from "react-icons/fa";
import sidestroke from "assets/img/sidestroke.gif"
import elementaryBackstroke from "assets/img/elementaryBackstroke.gif"
import oldEnglish from "assets/img/oldEnglish.gif"
import breastStroke from "assets/img/breastStroke.gif"
import frontCrawl from "assets/img/frontCrawl.gif"
import backCrawl from "assets/img/backCrawl.gif"
import floating from "assets/img/floating.jpg"
import omenom from "assets/img/omenom.gif"
import treading from "assets/img/threading.gif"
import sculling from "assets/img/wrikken.gif"
import voorzichtig from "assets/img/voorzichtig.jpg"
import schrede from "assets/img/schrede.jpg"
import duiken from "assets/img/duiken.jpg"
import compact from "assets/img/compactjump.jpg"
import redvest1 from "assets/img/redvest1.jpg"
import redvest2 from "assets/img/redvest2.jpg"
import surfaceDive from "assets/img/hoekduik.gif"
import dompen from "assets/img/dompen.jpg"
import diving from "assets/img/duiken.webp"
import beachBoard from "assets/img/beachBoard.jpg"

const Safety = () => {

    const {t} = useTranslation();
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
                        <h1>{t('translation:slides.lifeguarding.lifesaver.safety.title')}</h1>
                    </TitleSlide>
                    <TitleSlide>
                        <h1>{t('translation:chapter')} 3</h1>
                        <h2>{t('translation:slides.lifeguarding.lifesaver.safety.swimming-skills.title')}</h2>
                    </TitleSlide>
                    <Slide>
                        <h1>{t('translation:contents')}</h1>
                        <SlideOl>
                            <li>{t('translation:slides.lifeguarding.lifesaver.safety.swimming-skills.contents.strokes')}</li>
                            <li>{t('translation:slides.lifeguarding.lifesaver.safety.swimming-skills.contents.self-rescue')}</li>
                            <li>{t('translation:slides.lifeguarding.lifesaver.safety.swimming-skills.contents.entering')}</li>
                            <li>{t('translation:slides.lifeguarding.lifesaver.safety.swimming-skills.contents.diving')}</li>
                        </SlideOl>
                    </Slide>
                    <Slide>
                        <h1>{t('translation:slides.lifeguarding.lifesaver.safety.swimming-skills.title')}</h1>
                        <p>{t('translation:slides.lifeguarding.lifesaver.safety.swimming-skills.intro')}</p>
                        <SlideUl>
                            <li>{t('translation:slides.lifeguarding.lifesaver.safety.swimming-skills.open-water-vs-pool')}</li>
                            <li>{t('translation:slides.lifeguarding.lifesaver.safety.swimming-skills.lifesaver-age')}</li>
                        </SlideUl>
                    </Slide>
                    <Slide>
                        <h1>{t('translation:slides.lifeguarding.lifesaver.safety.swimming-skills.sidestroke.title')}</h1>
                        <div className="flex">
                            <img src={sidestroke} className="w-1/3" alt=""/>
                            <SlideUl>
                                <li>{t('translation:slides.lifeguarding.lifesaver.safety.swimming-skills.sidestroke.energy')}</li>
                                <li>{t('translation:slides.lifeguarding.lifesaver.safety.swimming-skills.sidestroke.transport')}</li>
                            </SlideUl>
                        </div>
                    </Slide>
                    <Slide>
                        <h1>{t('translation:slides.lifeguarding.lifesaver.safety.swimming-skills.elementary-backstroke.title')}</h1>
                        <div className="flex">
                            <img src={elementaryBackstroke} className="w-1/3" alt=""/>
                            <SlideUl>
                                <li>{t('translation:slides.lifeguarding.lifesaver.safety.swimming-skills.elementary-backstroke.energy')}</li>
                                <li>{t('translation:slides.lifeguarding.lifesaver.safety.swimming-skills.elementary-backstroke.transport')}</li>
                            </SlideUl>
                        </div>
                    </Slide>
                    <Slide>
                        <h1>{t('translation:slides.lifeguarding.lifesaver.safety.swimming-skills.double-arm-backstroke.title')}</h1>
                        <div className="flex">
                            <img src={oldEnglish} className="w-1/3" alt=""/>
                            <SlideUl>
                                <li>{t('translation:slides.lifeguarding.lifesaver.safety.swimming-skills.double-arm-backstroke.energy')}</li>
                                <li>{t('translation:slides.lifeguarding.lifesaver.safety.swimming-skills.double-arm-backstroke.self-rescue')}</li>
                                <li>{t('translation:slides.lifeguarding.lifesaver.safety.swimming-skills.double-arm-backstroke.rest')}</li>
                                <li>{t('translation:slides.lifeguarding.lifesaver.safety.swimming-skills.double-arm-backstroke.attention')}</li>
                            </SlideUl>
                        </div>
                    </Slide>
                    <Slide>
                        <h1>{t('translation:slides.lifeguarding.lifesaver.safety.swimming-skills.breast-stroke.title')}</h1>
                        <div className="flex">
                            <img src={breastStroke} className="w-1/3" alt=""/>
                            <SlideUl>
                                <li>{t('translation:slides.lifeguarding.lifesaver.safety.swimming-skills.breast-stroke.energy')}</li>
                                <li>{t('translation:slides.lifeguarding.lifesaver.safety.swimming-skills.breast-stroke.communication')}</li>
                                <li>{t('translation:slides.lifeguarding.lifesaver.safety.swimming-skills.breast-stroke.aboveWater')}</li>
                            </SlideUl>
                        </div>
                    </Slide>
                    <Slide>
                        <h1>{t('translation:slides.lifeguarding.lifesaver.safety.swimming-skills.front-crawl.title')}</h1>
                        <div className="flex">
                            <img src={frontCrawl} className="w-1/3" alt=""/>
                            <SlideUl>
                                <li>{t('translation:slides.lifeguarding.lifesaver.safety.swimming-skills.front-crawl.energy')}</li>
                                <li>{t('translation:slides.lifeguarding.lifesaver.safety.swimming-skills.front-crawl.fastest')}</li>
                                <li>{t('translation:slides.lifeguarding.lifesaver.safety.swimming-skills.front-crawl.communication')}</li>
                                <li>{t('translation:slides.lifeguarding.lifesaver.safety.swimming-skills.front-crawl.aboveWater')}</li>
                            </SlideUl>
                        </div>
                    </Slide>
                    <Slide>
                        <h1>{t('translation:slides.lifeguarding.lifesaver.safety.swimming-skills.back-crawl.title')}</h1>
                        <div className="flex">
                            <img src={backCrawl} className="w-1/3" alt=""/>
                            <SlideUl>
                                <li>{t('translation:slides.lifeguarding.lifesaver.safety.swimming-skills.back-crawl.energy')}</li>
                                <li>{t('translation:slides.lifeguarding.lifesaver.safety.swimming-skills.back-crawl.communication')}</li>
                                <li>{t('translation:slides.lifeguarding.lifesaver.safety.swimming-skills.back-crawl.aboveWater')}</li>
                                <li>{t('translation:slides.lifeguarding.lifesaver.safety.swimming-skills.back-crawl.direction')}</li>
                            </SlideUl>
                        </div>
                    </Slide>
                    <Slide>
                        <h1>{t('translation:slides.lifeguarding.lifesaver.safety.swimming-skills.self-rescue-skills.title')}</h1>
                    </Slide>
                    <Slide>
                        <h1>{t('translation:slides.lifeguarding.lifesaver.safety.swimming-skills.self-rescue-skills.floating.title')}</h1>
                        <div className="flex">
                            <img src={floating} className="w-1/3" alt=""/>
                            <SlideUl>
                                <li>{t('translation:slides.lifeguarding.lifesaver.safety.swimming-skills.self-rescue-skills.floating.important')}</li>
                                <li>{t('translation:slides.lifeguarding.lifesaver.safety.swimming-skills.self-rescue-skills.floating.cold')}</li>
                            </SlideUl>
                        </div>
                    </Slide>
                    <Slide>
                        <h1>{t('translation:slides.lifeguarding.lifesaver.safety.swimming-skills.self-rescue-skills.threading.title')}</h1>
                        <div className="flex">
                            <div className="flex flex-col w-1/5 mx-4">
                                <img className="!m-0" src={omenom} alt=""/>
                                <img className="!mt-4" src={treading} alt=""/>
                            </div>
                            <SlideUl>
                                <li>{t('translation:slides.lifeguarding.lifesaver.safety.swimming-skills.self-rescue-skills.threading.persist')}</li>
                                <li>{t('translation:slides.lifeguarding.lifesaver.safety.swimming-skills.self-rescue-skills.threading.attention')}</li>
                            </SlideUl>
                        </div>
                    </Slide>
                    <Slide>
                        <h1>{t('translation:slides.lifeguarding.lifesaver.safety.swimming-skills.self-rescue-skills.sculling.title')}</h1>
                        <div className="flex">
                            <img src={sculling} className="w-1/3" alt=""/>
                            <SlideUl>
                                <li>{t('translation:slides.lifeguarding.lifesaver.safety.swimming-skills.self-rescue-skills.sculling.distance')}</li>
                                <li>{t('translation:slides.lifeguarding.lifesaver.safety.swimming-skills.self-rescue-skills.sculling.energy')}</li>
                            </SlideUl>
                        </div>
                    </Slide>
                    <Slide>
                        <h1>{t('translation:slides.lifeguarding.lifesaver.safety.swimming-skills.entering.title')}</h1>
                    </Slide>
                    <Slide>
                        <h1>{t('translation:slides.lifeguarding.lifesaver.safety.swimming-skills.entering.running.title')}</h1>
                        <div className="flex">
                            <iframe width="100%" src="https://www.youtube.com/embed/A4BOtZH6HZk"
                                    title="YouTube video player" frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    allowFullScreen></iframe>
                            <SlideUl>
                                <li>{t('translation:slides.lifeguarding.lifesaver.safety.swimming-skills.entering.running.quickest')}</li>
                                <li>{t('translation:slides.lifeguarding.lifesaver.safety.swimming-skills.entering.running.careful')}</li>
                                <li>{t('translation:slides.lifeguarding.lifesaver.safety.swimming-skills.entering.running.ankles')}</li>
                            </SlideUl>
                        </div>
                    </Slide>
                    <Slide>
                        <h1>{t('translation:slides.lifeguarding.lifesaver.safety.swimming-skills.entering.diving.title')}</h1>
                        <div className="flex">
                            <iframe width="100%" className="w-1/3"
                                    src="https://www.youtube.com/embed/wk-8Duu7otQ?start=13"
                                    title="YouTube video player" frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    allowFullScreen></iframe>
                            <SlideUl>
                                <li>{t('translation:slides.lifeguarding.lifesaver.safety.swimming-skills.entering.diving.avoid')}</li>
                                <li>{t('translation:slides.lifeguarding.lifesaver.safety.swimming-skills.entering.diving.protect')}</li>
                            </SlideUl>
                        </div>
                    </Slide>
                    <Slide>
                        <h1>{t('translation:slides.lifeguarding.lifesaver.safety.swimming-skills.entering.careful.title')}</h1>
                        <div className="flex">
                            <img className="w-1/3" src={voorzichtig} alt=""/>
                            <SlideUl>
                                <li>{t('translation:slides.lifeguarding.lifesaver.safety.swimming-skills.entering.careful.facing')}</li>
                                <li>{t('translation:slides.lifeguarding.lifesaver.safety.swimming-skills.entering.careful.depth')}</li>
                            </SlideUl>
                        </div>
                    </Slide>
                    <Slide>
                        <h1>{t('translation:slides.lifeguarding.lifesaver.safety.swimming-skills.entering.stride.title')}</h1>
                        <div className="flex">
                            <img className="w-1/3" src={schrede} alt=""/>
                            <SlideUl>
                                <li>{t('translation:slides.lifeguarding.lifesaver.safety.swimming-skills.entering.stride.leap')}</li>
                                <li>{t('translation:slides.lifeguarding.lifesaver.safety.swimming-skills.entering.stride.fins')}</li>
                                <li>{t('translation:slides.lifeguarding.lifesaver.safety.swimming-skills.entering.stride.depth')}</li>
                            </SlideUl>
                        </div>
                    </Slide>
                    <Slide>
                        <h1>{t('translation:slides.lifeguarding.lifesaver.safety.swimming-skills.entering.jump.title')}</h1>
                        <div className="flex">
                            <img className="w-1/3" src={duiken} alt=""/>
                            <SlideUl>
                                <li>{t('translation:slides.lifeguarding.lifesaver.safety.swimming-skills.entering.jump.quick')}</li>
                                <li>{t('translation:slides.lifeguarding.lifesaver.safety.swimming-skills.entering.jump.depth')}</li>
                            </SlideUl>
                        </div>
                    </Slide>
                    <Slide>
                        <h1>{t('translation:slides.lifeguarding.lifesaver.safety.swimming-skills.entering.upright.title')}</h1>
                        <div className="flex">
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/Wo7V6bgs-go?start=518"
                                    title="YouTube video player" frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    allowFullScreen></iframe>
                            <SlideUl>
                                <li>{t('translation:slides.lifeguarding.lifesaver.safety.swimming-skills.entering.upright.height')}</li>
                                <li>{t('translation:slides.lifeguarding.lifesaver.safety.swimming-skills.entering.upright.depth')}</li>
                                <li>{t('translation:slides.lifeguarding.lifesaver.safety.swimming-skills.entering.upright.equipment')}</li>
                            </SlideUl>
                        </div>
                    </Slide>
                    <Slide>
                        <h1>{t('translation:slides.lifeguarding.lifesaver.safety.swimming-skills.entering.compact.title')}</h1>
                        <div className="flex">
                            <img className="w-1/3" src={compact} alt=""/>
                            <SlideUl>
                                <li>{t('translation:slides.lifeguarding.lifesaver.safety.swimming-skills.entering.compact.heights')}</li>
                                <li>{t('translation:slides.lifeguarding.lifesaver.safety.swimming-skills.entering.compact.protection')}</li>
                            </SlideUl>
                        </div>
                    </Slide>
                    <Slide>
                        <h1>{t('translation:slides.lifeguarding.lifesaver.safety.swimming-skills.entering.lifejacket.title')}</h1>
                        <div className="flex">
                            <div className="flex flex-col w-1/3">
                                <img className="!m-0" src={redvest1} alt=""/>
                                <img className="!m-0" src={redvest2} alt=""/>
                            </div>
                            <SlideUl>
                                <li>{t('translation:slides.lifeguarding.lifesaver.safety.swimming-skills.entering.lifejacket.collar')}</li>
                                <li>{t('translation:slides.lifeguarding.lifesaver.safety.swimming-skills.entering.lifejacket.force')}</li>
                            </SlideUl>
                        </div>
                    </Slide>
                    <Slide>
                        <h1>{t('translation:slides.lifeguarding.lifesaver.safety.swimming-skills.diving.title')}</h1>
                    </Slide>
                    <Slide>
                        <h1>{t('translation:slides.lifeguarding.lifesaver.safety.swimming-skills.diving.surfaceDive.title')}</h1>
                        <div className="flex">
                            <img src={surfaceDive} className="h-64" alt=""/>
                            <SlideUl>
                                <li>{t('translation:slides.lifeguarding.lifesaver.safety.swimming-skills.diving.surfaceDive.bottom')}</li>
                                <li>{t('translation:slides.lifeguarding.lifesaver.safety.swimming-skills.diving.surfaceDive.chance')}</li>
                                <li>{t('translation:slides.lifeguarding.lifesaver.safety.swimming-skills.diving.surfaceDive.bottom')}</li>
                            </SlideUl>
                        </div>
                    </Slide>
                    <Slide>
                        <h1>{t('translation:slides.lifeguarding.lifesaver.safety.swimming-skills.diving.submerging.title')}</h1>
                        <div className="flex">
                            <img src={dompen} className="w-1/3" alt=""/>
                            <SlideUl>
                                <li>{t('translation:slides.lifeguarding.lifesaver.safety.swimming-skills.diving.submerging.search')}</li>
                                <li>{t('translation:slides.lifeguarding.lifesaver.safety.swimming-skills.diving.submerging.miss')}</li>
                            </SlideUl>
                        </div>
                    </Slide>
                    <Slide>
                        <h1>{t('translation:slides.lifeguarding.lifesaver.safety.swimming-skills.diving.diving.title')}</h1>
                        <div className="flex">
                            <img src={diving} className="w-1/3" alt=""/>
                            <SlideUl>
                                <li>{t('translation:slides.lifeguarding.lifesaver.safety.swimming-skills.diving.diving.distance')}</li>
                                <li>{t('translation:slides.lifeguarding.lifesaver.safety.swimming-skills.diving.diving.search')}</li>
                                <li>{t('translation:slides.lifeguarding.lifesaver.safety.swimming-skills.diving.diving.careful')}</li>
                            </SlideUl>
                        </div>
                    </Slide>
                    <TitleSlide>
                        <h1>{t('translation:chapter')} 4</h1>
                        <h2>{t('translation:slides.lifeguarding.lifesaver.safety.safety-awareness.title')}</h2>
                    </TitleSlide>
                    <Slide>
                        <h2>{t('translation:slides.lifeguarding.lifesaver.safety.safety-awareness.openWater.do')}</h2>
                    </Slide>
                    <Slide>
                        <h1>{t('translation:slides.lifeguarding.lifesaver.safety.safety-awareness.openWater.preparation.title')}</h1>
                        <SlideOl>
                            <li>{t('translation:slides.lifeguarding.lifesaver.safety.safety-awareness.openWater.preparation.weather')}</li>
                            <li>{t('translation:slides.lifeguarding.lifesaver.safety.safety-awareness.openWater.preparation.whichWater')}</li>
                            <li>{t('translation:slides.lifeguarding.lifesaver.safety.safety-awareness.openWater.preparation.lifeguard')}</li>
                            <li>{t('translation:slides.lifeguarding.lifesaver.safety.safety-awareness.openWater.preparation.training')}</li>
                        </SlideOl>
                    </Slide>
                    <Slide>
                        <h1>{t('translation:slides.lifeguarding.lifesaver.safety.safety-awareness.openWater.location.title')}</h1>
                        <SlideOl>
                            <li>{t('translation:slides.lifeguarding.lifesaver.safety.safety-awareness.openWater.location.notify')}</li>
                            <li>{t('translation:slides.lifeguarding.lifesaver.safety.safety-awareness.openWater.location.dangers')}</li>
                            <li>{t('translation:slides.lifeguarding.lifesaver.safety.safety-awareness.openWater.location.notify')}</li>
                            <li>{t('translation:slides.lifeguarding.lifesaver.safety.safety-awareness.openWater.location.lifejacket')}</li>
                        </SlideOl>
                    </Slide>
                    <Slide>
                        <h1>{t('translation:slides.lifeguarding.lifesaver.safety.safety-awareness.openWater.location.title')}</h1>
                        <div className="flex">
                            <img src={beachBoard} className="w-1/3 !m-0" alt=""/>
                            <SlideUl>
                                <li>{t('translation:slides.lifeguarding.lifesaver.safety.safety-awareness.openWater.board.also')}</li>
                            </SlideUl>
                        </div>
                    </Slide>
                    <Slide>
                        <h1>{t('translation:slides.lifeguarding.lifesaver.safety.safety-awareness.openWater.flags.title')}</h1>
                    </Slide>
                    <Slide>
                        <div className="flex">
                            <div className="flex w-64 h-32 flex-col">
                                <div className="bg-red-500 w-full h-full"></div>
                                <div className="bg-yellow-500 w-full h-full"></div>
                            </div>
                            <div className="w-full opacity-0">
                                <SlideUl>
                                    <li>{t('translation:slides.lifeguarding.lifesaver.safety.safety-awareness.openWater.flags.present')}</li>
                                </SlideUl>
                            </div>
                        </div>
                    </Slide>
                    <Slide>
                        <div className="flex">
                            <div className="flex w-64 h-32 flex-col">
                                <div className="bg-red-500 w-full h-full"></div>
                                <div className="bg-yellow-500 w-full h-full"></div>
                            </div>
                            <div className="w-full">
                                <SlideUl>
                                    <li>{t('translation:slides.lifeguarding.lifesaver.safety.safety-awareness.openWater.flags.present')}</li>
                                </SlideUl>
                            </div>
                        </div>
                    </Slide>
                    <Slide>
                        <div className="flex">
                            <div className="flex w-64 h-32 flex-col">
                                <div className="bg-red-500 w-full h-full"></div>
                                <div className="bg-red-500 mt-2 w-full h-full"></div>
                            </div>
                            <div className="w-full opacity-0">
                                <SlideUl>
                                    <li>{t('translation:slides.lifeguarding.lifesaver.safety.safety-awareness.openWater.flags.forbidden')}</li>
                                </SlideUl>
                            </div>
                        </div>
                    </Slide>
                    <Slide>
                        <div className="flex">
                            <div className="flex w-64 h-32 flex-col">
                                <div className="bg-red-500 w-full h-full"></div>
                                <div className="bg-red-500 mt-2 w-full h-full"></div>
                            </div>
                            <div className="w-full">
                                <SlideUl>
                                    <li>{t('translation:slides.lifeguarding.lifesaver.safety.safety-awareness.openWater.flags.forbidden')}</li>
                                </SlideUl>
                            </div>
                        </div>
                    </Slide>
                    <Slide>
                        <div className="flex">
                            <div className="flex w-64 h-32 flex-col">
                                <div className="bg-red-500 w-full h-full"></div>
                            </div>
                            <div className="w-full opacity-0">
                                <SlideUl>
                                    <li>{t('translation:slides.lifeguarding.lifesaver.safety.safety-awareness.openWater.flags.advised')}</li>
                                </SlideUl>
                            </div>
                        </div>
                    </Slide>
                    <Slide>
                        <div className="flex">
                            <div className="flex w-64 h-32 flex-col">
                                <div className="bg-red-500 w-full h-full"></div>
                            </div>
                            <div className="w-full">
                                <SlideUl>
                                    <li>{t('translation:slides.lifeguarding.lifesaver.safety.safety-awareness.openWater.flags.advised')}</li>
                                </SlideUl>
                            </div>
                        </div>
                    </Slide>
                    <Slide>
                        <div className="flex">
                            <div className="flex w-64 h-32 flex-col">
                                <div className="bg-yellow-500 w-full h-full"></div>
                            </div>
                            <div className="w-full opacity-0">
                                <SlideUl>
                                    <li>{t('translation:slides.lifeguarding.lifesaver.safety.safety-awareness.openWater.flags.danger')}</li>
                                </SlideUl>
                            </div>
                        </div>
                    </Slide>
                    <Slide>
                        <div className="flex">
                            <div className="flex w-64 h-32 flex-col">
                                <div className="bg-yellow-500 w-full h-full"></div>
                            </div>
                            <div className="w-full">
                                <SlideUl>
                                    <li>{t('translation:slides.lifeguarding.lifesaver.safety.safety-awareness.openWater.flags.danger')}</li>
                                </SlideUl>
                            </div>
                        </div>
                    </Slide>
                    <Slide>
                        <div className="flex">
                            <div className="flex w-64 h-32 flex-col">
                                <div className="bg-purple-500 w-full h-full"></div>
                            </div>
                            <div className="w-full opacity-0">
                                <SlideUl>
                                    <li>{t('translation:slides.lifeguarding.lifesaver.safety.safety-awareness.openWater.flags.marine')}</li>
                                </SlideUl>
                            </div>
                        </div>
                    </Slide>
                    <Slide>
                        <div className="flex">
                            <div className="flex w-64 h-32 flex-col">
                                <div className="bg-purple-500 w-full h-full"></div>
                            </div>
                            <div className="w-full">
                                <SlideUl>
                                    <li>{t('translation:slides.lifeguarding.lifesaver.safety.safety-awareness.openWater.flags.marine')}</li>
                                </SlideUl>
                            </div>
                        </div>
                    </Slide>
                    <Slide>
                        <div className="flex">
                            <div className="w-0 h-0
                              border-t-[50px] border-t-transparent
                              border-l-[300px] border-l-orange-600
                              border-b-[50px] border-b-transparent">
                            </div>
                            <div className="w-full opacity-0">
                                <SlideUl>
                                    <li>{t('translation:slides.lifeguarding.lifesaver.safety.safety-awareness.openWater.flags.inflatables')}</li>
                                </SlideUl>
                            </div>
                        </div>
                    </Slide>
                    <Slide>
                        <div className="flex">
                            <div className="w-0 h-0
                              border-t-[50px] border-t-transparent
                              border-l-[300px] border-l-orange-600
                              border-b-[50px] border-b-transparent">
                            </div>
                            <div className="w-full">
                                <SlideUl>
                                    <li>{t('translation:slides.lifeguarding.lifesaver.safety.safety-awareness.openWater.flags.inflatables')}</li>
                                </SlideUl>
                            </div>
                        </div>
                    </Slide>
                    <Slide>
                        <div className="flex">
                            <div className="flex w-64 h-32 flex-col">
                                <div className="flex bg-green-500 w-full h-full items-center justify-center">
                                    <FaPlus className="text-white text-7xl"/>
                                </div>
                            </div>
                            <div className="w-full opacity-0">
                                <SlideUl>
                                    <li>{t('translation:slides.lifeguarding.lifesaver.safety.safety-awareness.openWater.flags.firstAid')}</li>
                                </SlideUl>
                            </div>
                        </div>
                    </Slide>
                    <Slide>
                        <div className="flex">
                            <div className="flex w-64 h-32 flex-col">
                                <div className="flex bg-green-500 w-full h-full items-center justify-center">
                                    <FaPlus className="text-white text-7xl"/>
                                </div>
                            </div>
                            <div className="w-full">
                                <SlideUl>
                                    <li>{t('translation:slides.lifeguarding.lifesaver.safety.safety-awareness.openWater.flags.firstAid')}</li>
                                </SlideUl>
                            </div>
                        </div>
                    </Slide>
                    <Slide>
                        <div className="flex">
                            <div className="flex w-64 h-32 flex-col">
                                <div
                                    className="flex bg-white border-2 border-black w-full h-full items-center justify-center">
                                    <FaQuestion className="text-blue-700 text-7xl"/>
                                </div>
                            </div>
                            <div className="w-full opacity-0">
                                <SlideUl>
                                    <li>{t('translation:slides.lifeguarding.lifesaver.safety.safety-awareness.openWater.flags.child')}</li>
                                </SlideUl>
                            </div>
                        </div>
                    </Slide>
                    <Slide>
                        <div className="flex">
                            <div className="flex w-64 h-32 flex-col">
                                <div
                                    className="flex bg-white border-2 border-black w-full h-full items-center justify-center">
                                    <FaQuestion className="text-blue-700 text-7xl"/>
                                </div>
                            </div>
                            <div className="w-full">
                                <SlideUl>
                                    <li>{t('translation:slides.lifeguarding.lifesaver.safety.safety-awareness.openWater.flags.child')}</li>
                                </SlideUl>
                            </div>
                        </div>
                    </Slide>
                    <Slide>
                        <div className="flex">
                            <div className="flex w-64 h-32 flex-col">
                                <div className="bg-red-500 w-1/2 h-1/3 rounded-tl-3xl border-r-2 border-black"></div>
                                <div className="bg-yellow-500 w-1/2 h-1/3 border-r-2 border-black"></div>
                                <div className="h-1/3 w-1/2 border-r-2 border-black"></div>
                            </div>
                            <div className="flex w-64 h-32 flex-col">
                                <div className="bg-red-500 w-1/2 h-1/3 rounded-tl-3xl border-r-2 border-black"></div>
                                <div className="bg-yellow-500 w-1/2 h-1/3 border-r-2 border-black"></div>
                                <div className="h-1/3 w-1/2 border-r-2 border-black"></div>
                            </div>
                            <div className="w-full opacity-0">
                                <SlideUl>
                                    <li>{t('translation:slides.lifeguarding.lifesaver.safety.safety-awareness.openWater.flags.area')}</li>
                                </SlideUl>
                            </div>
                        </div>
                    </Slide>
                    <Slide>
                        <div className="flex">
                            <div className="flex w-64 h-32 flex-col">
                                <div className="bg-red-500 w-1/2 h-1/3 rounded-tl-3xl border-r-2 border-black"></div>
                                <div className="bg-yellow-500 w-1/2 h-1/3 border-r-2 border-black"></div>
                                <div className="h-1/3 w-1/2 border-r-2 border-black"></div>
                            </div>
                            <div className="flex w-64 h-32 flex-col">
                                <div className="bg-red-500 w-1/2 h-1/3 rounded-tl-3xl border-r-2 border-black"></div>
                                <div className="bg-yellow-500 w-1/2 h-1/3 border-r-2 border-black"></div>
                                <div className="h-1/3 w-1/2 border-r-2 border-black"></div>
                            </div>
                            <div className="w-full">
                                <SlideUl>
                                    <li>{t('translation:slides.lifeguarding.lifesaver.safety.safety-awareness.openWater.flags.area')}</li>
                                </SlideUl>
                            </div>
                        </div>
                    </Slide>
                    <Slide>
                        <div className="flex">
                            <div className="flex w-64 h-32 flex-col">
                                <div
                                    className="bg-red-500 w-1/2 h-2/3 rounded-tl-3xl border-r-2 border-black text-center flex">
                                    <div className="text-white rotate-90">Danger</div>
                                </div>
                                <div className="h-1/3 w-1/2 border-r-2 border-black"></div>
                            </div>
                            <div className="flex w-64 h-32 flex-col">
                                <div
                                    className="bg-red-500 w-1/2 h-2/3 rounded-tl-3xl border-r-2 border-black text-center flex">
                                    <div className="text-white rotate-90">Danger</div>
                                </div>
                                <div className="h-1/3 w-1/2 border-r-2 border-black"></div>
                            </div>
                            <div className="w-full opacity-0">
                                <SlideUl>
                                    <li>{t('translation:slides.lifeguarding.lifesaver.safety.safety-awareness.openWater.flags.dangerous')}</li>
                                </SlideUl>
                            </div>
                        </div>
                    </Slide>
                    <Slide>
                        <div className="flex">
                            <div className="flex w-64 h-32 flex-col">
                                <div
                                    className="bg-red-500 w-1/2 h-2/3 rounded-tl-3xl border-r-2 border-black text-center flex">
                                    <div className="text-white rotate-90">Danger</div>
                                </div>
                                <div className="h-1/3 w-1/2 border-r-2 border-black"></div>
                            </div>
                            <div className="flex w-64 h-32 flex-col">
                                <div
                                    className="bg-red-500 w-1/2 h-2/3 rounded-tl-3xl border-r-2 border-black text-center flex">
                                    <div className="text-white rotate-90">Danger</div>
                                </div>
                                <div className="h-1/3 w-1/2 border-r-2 border-black"></div>
                            </div>
                            <div className="w-full">
                                <SlideUl>
                                    <li>{t('translation:slides.lifeguarding.lifesaver.safety.safety-awareness.openWater.flags.dangerous')}</li>
                                </SlideUl>
                            </div>
                        </div>
                    </Slide>
                    <Slide>
                        <div className="flex">
                            <div className="flex w-64 h-32 flex-col">
                                <div className="flex w-1/2 h-1/3">
                                    <div
                                        className="bg-black w-1/2 h-full rounded-tl-3xl border-r-2 border-black"></div>
                                    <div
                                        className="bg-white w-1/2 h-full border-r-2 border-black border-t-gray-100 border-t-2"></div>
                                </div>
                                <div className="flex w-1/2 h-1/3 drop-shadow-xl">
                                    <div className="bg-white w-1/2 h-full rounded-tl-3xl border-black"></div>
                                    <div className="bg-black w-1/2 h-full border-r-2 border-black"></div>
                                </div>
                                <div className="h-1/3 w-1/2 border-r-2 border-black"></div>
                            </div>
                            <div className="flex w-64 h-32 flex-col">
                                <div className="flex w-1/2 h-1/3">
                                    <div
                                        className="bg-black w-1/2 h-full rounded-tl-3xl border-r-2 border-black"></div>
                                    <div
                                        className="bg-white w-1/2 h-full border-r-2 border-black border-t-gray-100 border-t-2"></div>
                                </div>
                                <div className="flex w-1/2 h-1/3 drop-shadow-xl">
                                    <div className="bg-white w-1/2 h-full rounded-tl-3xl border-black"></div>
                                    <div className="bg-black w-1/2 h-full border-r-2 border-black"></div>
                                </div>
                                <div className="h-1/3 w-1/2 border-r-2 border-black"></div>
                            </div>
                            <div className="w-full opacity-0">
                                <SlideUl>
                                    <li>{t('translation:slides.lifeguarding.lifesaver.safety.safety-awareness.openWater.flags.watersports')}</li>
                                </SlideUl>
                            </div>
                        </div>
                    </Slide>
                    <Slide>
                        <div className="flex">
                            <div className="flex w-64 h-32 flex-col">
                                <div className="flex w-1/2 h-1/3">
                                    <div
                                        className="bg-black w-1/2 h-full rounded-tl-3xl border-r-2 border-black"></div>
                                    <div
                                        className="bg-white w-1/2 h-full border-r-2 border-black border-t-gray-100 border-t-2"></div>
                                </div>
                                <div className="flex w-1/2 h-1/3 drop-shadow-xl">
                                    <div className="bg-white w-1/2 h-full rounded-tl-3xl border-black"></div>
                                    <div className="bg-black w-1/2 h-full border-r-2 border-black"></div>
                                </div>
                                <div className="h-1/3 w-1/2 border-r-2 border-black"></div>
                            </div>
                            <div className="flex w-64 h-32 flex-col">
                                <div className="flex w-1/2 h-1/3">
                                    <div
                                        className="bg-black w-1/2 h-full rounded-tl-3xl border-r-2 border-black"></div>
                                    <div
                                        className="bg-white w-1/2 h-full border-r-2 border-black border-t-gray-100 border-t-2"></div>
                                </div>
                                <div className="flex w-1/2 h-1/3 drop-shadow-xl">
                                    <div className="bg-white w-1/2 h-full rounded-tl-3xl border-black"></div>
                                    <div className="bg-black w-1/2 h-full border-r-2 border-black"></div>
                                </div>
                                <div className="h-1/3 w-1/2 border-r-2 border-black"></div>
                            </div>
                            <div className="w-full">
                                <SlideUl>
                                    <li>{t('translation:slides.lifeguarding.lifesaver.safety.safety-awareness.openWater.flags.watersports')}</li>
                                </SlideUl>
                            </div>
                        </div>
                    </Slide>
                    <TitleSlide>
                        <h1>{t('translation:chapter')} 5</h1>
                        <h2>{t('translation:slides.lifeguarding.lifesaver.safety.risks.title')}</h2>
                    </TitleSlide>
                    <TitleSlide>
                        <h1>{t('translation:chapter')} 6</h1>
                        <h2>{t('translation:slides.lifeguarding.lifesaver.safety.self-rescue.title')}</h2>
                    </TitleSlide>
                    <Slide>
                        <Link to=".." relative="path"
                              className="mr-8 !no-underline bg-transparent hover:bg-orange-500 !text-orange-400 font-semibold hover:!text-white py-2 px-4 border border-orange-300 hover:border-transparent rounded">
                            <FaCaretLeft className="inline stroke-orange-700"/> {t('translation:overview')}
                        </Link>
                        <Link to="../skills" relative="path"
                              className="!no-underline bg-transparent hover:!bg-orange-500 !bg-orange-400 !text-white font-semibold hover:!text-white py-2 px-4 border border-orange-300 rounded">
                            {t('translation:next')}<FaCaretRight className="inline stroke-orange-700"/>
                        </Link>
                    </Slide>
                </div>
            </div>
        </>)
}

export {Safety}