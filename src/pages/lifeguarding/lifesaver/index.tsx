import React from 'react';
import {useTranslation} from "react-i18next";
import {Link} from "react-router-dom";
import {FaCaretLeft} from "react-icons/fa";
import rn from "assets/img/rn.jpg";
import swimmer from "assets/img/swimmer.jpg";
import rescue from "assets/img/rescue.jpg";
import lifeguard from "assets/img/lifeguard.jpg";

const Lifesaver = () => {
    const {t: translate} = useTranslation();

    return (<section>
            <header>
                <h1>{translate('home.sections.title')}</h1>
            </header>
            <main className="grid gap-4 grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 my-16">
                <article className="flex">
                    <Link to="./intro" relative="path"
                          className="no-underline flex flex-col xl:flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row hover:bg-zinc-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 w-full">
                        <img
                            className="m-0 object-cover rounded-t-lg xl:w-full md:w-1/2 h-full xl:h-52 md:rounded-none md:rounded-l-lg xl:rounded-t-lg xl:rounded-b-none"
                            src={rn} alt=""/>
                        <div className="flex flex-col justify-between p-4 leading-normal">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{translate('slides.lifeguarding.lifesaver.overview.introduction.title')}</h5>
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{translate('slides.lifeguarding.lifesaver.overview.introduction.content')}</p>
                        </div>
                    </Link>
                </article>
                <article className="flex">
                    <Link to="./safety" relative="path"
                          className="no-underline flex flex-col xl:flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row hover:bg-zinc-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 w-full">
                        <img
                            className="m-0 object-cover rounded-t-lg xl:w-full md:w-1/2 h-full xl:h-52 md:rounded-none md:rounded-l-lg xl:rounded-t-lg xl:rounded-b-none"
                            src={swimmer} alt=""/>
                        <div className="flex flex-col justify-between p-4 leading-normal">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{translate('slides.lifeguarding.lifesaver.overview.safety.title')}</h5>
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{translate('slides.lifeguarding.lifesaver.overview.safety.content')}</p>
                        </div>
                    </Link>
                </article>
                <article className="flex">
                    <Link to="./skills" relative="path"
                          className="no-underline flex flex-col xl:flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row hover:bg-zinc-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 w-full">
                        <img
                            className="m-0 object-cover rounded-t-lg xl:w-full md:w-1/2 h-full xl:h-52 md:rounded-none md:rounded-l-lg xl:rounded-t-lg xl:rounded-b-none"
                            src={rescue} alt=""/>
                        <div className="flex flex-col justify-between p-4 leading-normal">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{translate('slides.lifeguarding.lifesaver.overview.skills.title')}</h5>
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{translate('slides.lifeguarding.lifesaver.overview.skills.content')}</p>
                        </div>
                    </Link>
                </article>
                <article className="flex">
                    <Link to="./the-rescue" relative="path"
                          className="no-underline flex flex-col xl:flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row hover:bg-zinc-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 w-full">
                        <img
                            className="m-0 object-cover rounded-t-lg xl:w-full md:w-1/2 h-full xl:h-52 md:rounded-none md:rounded-l-lg xl:rounded-t-lg xl:rounded-b-none"
                            src={lifeguard} alt=""/>
                        <div className="flex flex-col justify-between p-4 leading-normal">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{translate('slides.lifeguarding.lifesaver.overview.aid.title')}</h5>
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{translate('slides.lifeguarding.lifesaver.overview.aid.content')}</p>
                        </div>
                    </Link>
                </article>
            </main>
            <footer className="mb-8">
                <Link to=".." relative="path"
                      className="no-underline bg-transparent hover:bg-orange-500 text-orange-700 font-semibold hover:text-white py-2 px-4 border border-orange-500 hover:border-transparent rounded">
                    <FaCaretLeft className="inline stroke-orange-700"/> {translate('back')}
                </Link>
            </footer>
        </section>
    )
};

export
{
    Lifesaver
}
    ;