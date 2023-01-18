import React from "react";
import {LanguageSelector} from "./LanguageSelector";
import {SlideNavigator} from "./slideNavigator";
import {Logo} from "./Logo";
import {Link} from "react-router-dom";

const PresentationBar = () => {

    return (
        <header
            className="flex flex-row items-stretch justify-between z-50 fixed px-4 top-0 left-0 bg-white w-full shadow-xl">
            <Link to="/lifeguarding">
                <Logo collapsed={false} association="Enschede" regionClassName="text-blue-600"
                      associationClassName="inline text-blue-600 text-xs"
                      className="text-xs text-orange-500 hidden sm:flex flex-col w-min py-2"/>
            </Link>

            <div className="flex justify-between w-full sm:w-auto sm:justify-start items-center gap-x-4">
                <SlideNavigator/>
                <Link to="/lifeguarding">
                    <Logo collapsed={true} association="Enschede" regionClassName="text-blue-600"
                          associationClassName="inline text-blue-600 text-xs"
                          className="text-xs text-orange-500 flex sm:hidden flex-col w-min py-4"/>
                </Link>
                <div className="relative h-full">
                    <LanguageSelector/>
                </div>
            </div>
        </header>
    )
}

export {PresentationBar}