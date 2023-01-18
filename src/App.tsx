import React from 'react';
import {Helmet} from 'react-helmet';
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import {Disasters, Home, Lifeguarding} from "pages";
import {Overview} from "containers";
import {Presentation} from "./containers/LifeguardPresentation";

function App() {
    return (
        <section className="flex min-h-screen min-w-screen">
            <BrowserRouter>
                <Helmet>
                    <meta charSet="utf-8"/>
                    <title>Talks @ Danny Verpoort</title>
                </Helmet>
                <Routes>
                    <Route path={"/lifeguarding"} element=
                        {<Overview><Lifeguarding/></Overview>}></Route>
                    <Route path={"/lifeguarding/lifesaver"} element={<Overview><Lifeguarding/></Overview>}></Route>
                    <Route path={"/lifeguarding/lifeguards"} element={<Overview><Lifeguarding/></Overview>}></Route>
                    <Route path={"/lifeguarding/disasters"} element={<Presentation><Disasters/></Presentation>}></Route>
                    <Route path={"/"} element={<Overview><Home/></Overview>}></Route>
                    <Route path={"*"} element={<Navigate to={"/"}/>}/>
                </Routes>
            </BrowserRouter>
        </section>
    );
}

export default App;
