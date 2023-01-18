import React, {useEffect, useState} from "react";
import {FaChevronDown} from "react-icons/fa";
import classNames from "classnames";
import {useTranslation} from "react-i18next";
import i18n from "../i18n";
import {GB, NL} from "country-flag-icons/react/3x2";

const LanguageSelector = () => {

    const [dropdown, setDropdown] = useState<boolean>(false)
    const [locale, setLocale] = useState<string>(i18n.language)

    const {t: translate} = useTranslation();

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const languages: { [key: string]: React.ReactElement } = {
        "nl-NL": <span className="inline-flex gap-x-2"><NL className="w-6"/> {translate('languages.nl-NL')}</span>,
        "en-GB": <span className="inline-flex gap-x-2"><GB className="w-6"/> {translate('languages.en-GB')}</span>
    }

    useEffect(() => {
        if (!Object.keys(languages).includes(i18n.language)) {
            setLocale('nl-NL');
            i18n.changeLanguage('nl-NL')
        }
    }, [languages, locale])


    const toggleDropdown = () => {
        setDropdown(!dropdown);
    }

    const updateLocale = (locale: string) => {
        setLocale(locale);
        i18n.changeLanguage(locale);
        toggleDropdown();
    }

    return (
        <>
            <button type="button"
                    className="relative min-w-[20ch] px-2 py-3 h-full inline-flex items-center justify-between text-sm font-medium text-gray-700 hover:bg-gray-50"
                    id="menu-button" aria-expanded="true" aria-haspopup="true"
                    onClick={toggleDropdown}
            >
                {languages[locale]}
                <FaChevronDown className={classNames("ml-2 transition", {
                    "rotate-180": dropdown
                })}/>
            </button>
            <div
                className={classNames("absolute w-full clear-both hover:bg-gray-50 shadow-md overflow-hidden transition-all duration-300 left-0 z-50 origin-top-right bg-white shadow-lg ring-black ring-opacity-5 focus:outline-none", {
                    "max-h-0": !dropdown,
                    "max-h-64": dropdown,
                })}
                role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex={-1}>
                <ul className={classNames("px-0 my-0 transition-all duration-300", {
                    "max-h-0": !dropdown,
                    "max-h-64": dropdown
                })} role="none">
                    {Object.entries(languages).filter(([key, value]) => key !== locale).map(([key, value]) => <li
                        key={key} onClick={() => {
                        updateLocale(key)
                    }} className="cursor-pointer flex gap-x-2 text-gray-700 block px-4 py-2 text-sm"
                        role="menuitem"
                        tabIndex={-1}
                        id="menu-item-0">{value}
                    </li>)}
                </ul>
            </div>
        </>
    )
}

export {LanguageSelector}