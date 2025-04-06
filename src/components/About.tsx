import React from 'react';
import Vivi from '../img/Vivi.jpg';

const About = () => {
    return (
        <>
        <div className="row">
            <div className="col boxAbout">
                <img src={Vivi} alt="Vivi" className="img-fluid imgCV thumbnail " />

                <p className="text-center pt-4">
                    Passionnée par l'informatique depuis toujours, j'ai orienté ma carrière vers le développement web et la data. Après une formation spécialisée, j'ai acquis une solide expertise en développement d'interfaces utilisateur, d'APIs, et en gestion de bases de données. Aujourd'hui, je m'épanouis dans des projets web et Big Data, convaincue que l'informatique est un domaine à la fois stimulant et d'impact.
                </p>

                <p className="text-center pt-4">
                    Lors de mon stage chez Dexentri, j'ai travaillé sur la conception de l'interface d'une plateforme de trading, utilisant React, NoSQL, et API REST. Cette expérience m'a permis d'approfondir mes compétences techniques tout en contribuant à un projet concret et innovant.
                </p>

                <p className="text-center pt-4">
                    Aujourd'hui, je développe des solutions sur des projets comme Canaljob, où je gère la plateforme et les flux de données, tout en continuant à évoluer avec des technologies comme Symfony, React, Python et Big Data.
                </p>
            </div>
        </div>
        </>
    );
}

export default About;
