import React from "react";
import {FaChevronLeft, FaChevronRight, FaHome, FaList} from "react-icons/fa";
import {Link} from "react-router-dom";

const SlideNavigator = () => {

    return (
        <div
            className="flex items-stretch h-full">
            <Link to=".." relative="path" className="hover:bg-gray-50 flex items-center px-2"><FaHome/></Link>
            <button className="text-gray-300 cursor-not-allowed hover:bg-gray-50 flex items-center px-2"><FaList/>
            </button>
            <Link to="."
                  className="text-center text-gray-300 cursor-not-allowed hover:bg-gray-50 flex items-center px-2"><FaChevronLeft/></Link>
            <Link to="."
                  className="text-center text-gray-300 cursor-not-allowed hover:bg-gray-50 flex items-center px-2"><FaChevronRight/></Link>
        </div>
    )
}

export {SlideNavigator}