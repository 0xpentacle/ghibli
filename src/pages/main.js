import React from "react";
import Layout from "../components/layout";


import arietty from "../assets/images/gifs/arietty.gif";
import butterfly from "../assets/images/gifs/butterfly.gif";
import cat from "../assets/images/gifs/cat-gif.gif";
import dragon from "../assets/images/gifs/dragon.gif";
import ephemeris from "../assets/images/gifs/ephemeris.gif";
import farming from "../assets/images/gifs/farming.gif";
import forestspirit from "../assets/images/gifs/forest-spirit.gif";
import forestspirit02 from "../assets/images/gifs/forest-spirit-miyazaki-ghibli.gif";
import lake from "../assets/images/gifs/ghibli-lake-flower.gif";
import heart from "../assets/images/gifs/heart-swallow.gif";
import howl from "../assets/images/gifs/howl.gif";
import howlasleep from "../assets/images/gifs/howl-asleep.gif";
import howllook from "../assets/images/gifs/howl-look.gif";
import kaguya from "../assets/images/gifs/kaguya.gif";
import kaguya02 from "../assets/images/gifs/kaguya-2.gif";
import kaguya03 from "../assets/images/gifs/kaguya-3.gif";
import kaguyafarm from "../assets/images/gifs/kaguya-farm.gif";


export const Main = () => {
    return (
        <Layout>
            <section>
                <img src={arietty} alt="studio ghibli"/>
                <img src={butterfly} alt="studio ghibli"/>
                <img src={cat} alt="studio ghibli"/>
                <img src={dragon} alt="studio ghibli"/>
                <img src={ephemeris} alt="studio ghibli"/>
                <img src={farming} alt="studio ghibli"/>
                <img src={forestspirit} alt="studio ghibli"/>
                <img src={forestspirit02} alt="studio ghibli"/>
                <img src={lake} alt="studio ghibli"/>
                <img src={heart} alt="studio ghibli"/>
                <img src={howl} alt="studio ghibli"/>
                <img src={howlasleep} alt="studio ghibli"/>
                <img src={howllook} alt="studio ghibli"/>
                <img src={kaguya} alt="studio ghibli"/>
                <img src={kaguya02} alt="studio ghibli"/>
                <img src={kaguya03} alt="studio ghibli"/>
                <img src={kaguyafarm} alt="studio ghibli"/>
            </section>
        </Layout>
    )
}
