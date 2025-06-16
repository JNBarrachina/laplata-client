import { HomeHeader } from "../../organisms/HomeHeader/HomeHeader"

import "./Home.css"

export const Home = () => {
    return (
        <>
            <HomeHeader />
            <main className="homeMain">
                <h1 className=" homeTitle">Stay in the positive<br />Stay in the <span className="subtitleSpan">green</span></h1>
                <p className="homeTitle secondTitle"></p>
            </main>
        </>
    )
}
