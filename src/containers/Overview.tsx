import React, {useEffect} from "react";
import logo from "assets/img/101.png"
import {LanguageSelectorFloat} from "components/LanguageSelectorFloat";
import {useTranslation} from "react-i18next";

interface overview {
    children: React.ReactElement
}

const Overview = ({children}: overview) => {

    const {t: translate} = useTranslation();

    useEffect(() => {
        const html = document.querySelector('html')
        if (html !== null) {
            html.className = '';
        }
        const body = document.querySelector('body')
        if (body !== null) {
            body.className = '';
        }
    }, [])

    return (
        <>
            <LanguageSelectorFloat/>
            <section
                className="flex-col flex shadow-lg mx-auto overflow-shown dark:bg-zinc-700 bg-zinc-50 min-h-full w-full">
                <header
                    className="flex flex-col md:flex-row items-center md:space-x-16 px-8 md:px-24 justify-between pt-10 bg-gradient-to-t from-orange-400 to-orange-500">
                    <img className="md:w-1/4 bg-zinc-100 rounded-full" src={logo} alt="Presentation"/>
                    <main className="prose prose-invert text-white max-w-60 h-content flex-grow">
                        <h1>{translate('hero.title')}</h1>
                        <p>{translate('hero.content')}</p>
                    </main>
                </header>
                <svg viewBox="0 0 100 15" className="bg-gradient-to-b from-orange-400 to-orange-500 !mt-0">
                    <defs>
                        <pattern id="Wave"
                                 x="0" y="0" width="100" height="15"
                                 patternUnits="userSpaceOnUse">
                            <path className="fill-stone-50" d="M0 25 0 6C20 9 38 11 55 7 72 4 87 4 100 6l0 19z"
                                  id="path4"/>
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#Wave)"/>
                </svg>
                <main className="w-full max-w-full prose dark:prose-invert flex-grow px-24">
                    {children}
                </main>
            </section>
        </>
    )
};

export {Overview}