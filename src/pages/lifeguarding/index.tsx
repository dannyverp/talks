import React from 'react';
import {useTranslation} from "react-i18next";
import lifesaver from "assets/img/lifesaver.jpg"
import major from "assets/img/major.jpg"
import rb from 'assets/img/rb.jpg'
import {Link} from "react-router-dom";
import {FaCaretLeft} from "react-icons/fa";

const Lifeguarding = () => {
    const {t: translate} = useTranslation();

    return (<section>
            <header>
                <h1>{translate('home.sections.title')}</h1>
            </header>
            <main className="grid gap-4 grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 my-16">
                <article className="flex">
                    <Link to="./lifesaver"
                          className="no-underline flex flex-col xl:flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row hover:bg-zinc-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 w-full">
                        <img
                            className="m-0 object-cover rounded-t-lg xl:w-full md:w-1/2 h-full xl:h-52 md:rounded-none md:rounded-l-lg xl:rounded-t-lg xl:rounded-b-none"
                            src={lifesaver} alt=""/>
                        <div className="flex flex-col justify-between p-4 leading-normal">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{translate('home.sections.lifeguarding.lifesaver.title')}</h5>
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{translate('home.sections.lifeguarding.lifesaver.content')}</p>
                        </div>
                    </Link>
                </article>
                <article className="flex">
                    <Link to="disasters"
                          className="cursor-pointer no-underline flex flex-col xl:flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row hover:bg-zinc-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 w-full">
                        <img
                            className="m-0 object-cover rounded-t-lg xl:w-full md:w-1/2 h-full xl:h-52 md:rounded-none md:rounded-l-lg xl:rounded-t-lg xl:rounded-b-none"
                            src={major} alt=""/>
                        <div className="flex flex-col justify-between p-4 leading-normal">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{translate('home.sections.lifeguarding.incidents.title')}</h5>
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{translate('home.sections.lifeguarding.incidents.content')}</p>
                        </div>
                    </Link>
                </article>
                <article className="flex opacity-40">
                    <Link to="/lifeguarding"
                          className="cursor-not-allowed no-underline flex flex-col xl:flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row hover:bg-zinc-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 w-full">
                        <img
                            className="m-0 object-cover rounded-t-lg xl:w-full md:w-1/2 h-full xl:h-52 md:rounded-none md:rounded-l-lg xl:rounded-t-lg xl:rounded-b-none"
                            src={rb} alt=""/>
                        <div className="flex flex-col justify-between p-4 leading-normal">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{translate('home.sections.lifeguarding.ow.title')}</h5>
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{translate('home.sections.lifeguarding.ow.content')}</p>
                        </div>
                    </Link>
                </article>
            </main>
            <footer className="mb-8">
                <Link to=".."
                      className="no-underline bg-transparent hover:bg-orange-500 text-orange-700 font-semibold hover:text-white py-2 px-4 border border-orange-500 hover:border-transparent rounded">
                    <FaCaretLeft className="inline stroke-orange-700"/> {translate('back')}
                </Link>
            </footer>
        </section>
    )
};

export
{
    Lifeguarding
}
    ;