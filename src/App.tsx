import React from 'react';
import {Helmet} from 'react-helmet';
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import {Disasters, Home, Intro, Lifeguarding, Lifesaver, Safety, Skills, TheRescue} from "pages";
import {Overview, Presentation} from "containers";
import favicon from 'assets/img/101.png'


function App() {
    return (
        <section className="flex min-h-screen min-w-screen">
            <BrowserRouter>
                <Helmet>
                    <title>Talks @ Danny Verpoort</title>
                    <link rel="icon" type="image/png" href={favicon} sizes="32x32"/>
                </Helmet>
                <Routes>
                    <Route path={"/lifeguarding"} element=
                        {<Overview><Lifeguarding/></Overview>}></Route>
                    <Route path={"/lifeguarding/lifesaver"} element={<Overview><Lifesaver/></Overview>}></Route>
                    <Route path={"/lifeguarding/lifesaver/safety"}
                           element={<Presentation><Safety/></Presentation>}></Route>
                    <Route path={"/lifeguarding/lifesaver/skills"}
                           element={<Presentation><Skills/></Presentation>}></Route>
                    <Route path={"/lifeguarding/lifesaver/the-rescue"}
                           element={<Presentation><TheRescue/></Presentation>}></Route>
                    <Route path={"/lifeguarding/lifesaver/intro"}
                           element={<Presentation><Intro/></Presentation>}></Route>
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
