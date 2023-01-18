import React from "react";
import {LanguageSelector} from "components/LanguageSelector";

const LanguageSelectorFloat = () => {
    return (
        <aside>
            <div
                className="bg-white z-50 fixed top-0 right-8 inline-block text-left drop-shadow-lg hover:bg-gray-50">
                <LanguageSelector/>
            </div>
        </aside>
    )
}

export {LanguageSelectorFloat}