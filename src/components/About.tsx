import React from 'react';
import Vivi from '../img/Vivi.jpg';


const About = () => {
    return (
        <>
        <div className="row">
            <div className="col boxAbout">
                <img src={Vivi} alt="Vivi" className="img-fluid imgCV thumbnail " />

                <p className="text-center pt-4">
                Depuis mon enfance, je suis passionnée par l'informatique, fascinée par la technologie et animée par le désir de créer et d'innover. Cette passion m'a amenée à suivre une formation spécialisée en conception et développement web. Aujourd'hui, je vis mon rêve en programmant chaque jour avec enthousiasme et détermination, convaincue que l'informatique est bien plus qu'un métier, c'est une vocation.                
                </p>


                <p className="text-center pt-4">
                En tant que stagiaire chez Dexentri, pendant trois mois, j'ai eu l'opportunité captivante de prendre en charge la conception et le développement de l'interface utilisateur d'une plateforme de trading novatrice, spécialisée dans les bouteilles de vin. Ce projet m'a plongé au cœur de technologies de pointe, notamment React pour l'interface utilisateur, ainsi que des requêtes en NoSQL sur MastermindCMS et en SQL sur une API Rest. Cette expérience enrichissante m'a permis d'approfondir mes compétences en développement web tout en travaillant sur un projet concret et stimulant.              
                </p>


                {/* <p className="textIndent">
                    Aujourd'hui, je vis mon rêve en programmant chaque jour avec enthousiasme et détermination. Je suis convaincue que l'informatique est bien plus qu'un simple métier, c'est une passion qui me pousse à me lever chaque matin avec le désir de créer, d'innover et de contribuer au monde numérique.
                </p>
                <p className="textIndent">
                    Ma passion pour l'informatique a commencé dès mon plus jeune âge lorsque j'ai découvert le monde fascinant de la technologie. Même lorsque mes parents doutaient de l'avenir de ce domaine, j'étais intriguée par chaque nouvel appareil et interface intuitive.
                </p>

                <p className="textIndent">
                    Avec le temps, j'ai réalisé que mon intérêt pour l'informatique n'était pas une simple phase, mais bien une véritable passion.
                    Convaincue de ma vocation, j'ai décidé de me former dans le domaine du développement web et web mobile en suivant une formation spécialisée.
                </p>
                <p className="textIndent">
                    J'ai ensuite enchaîné avec une autre formation pour enrichir mes connaissances et approfondir mes compétences dans le domaine.
                    Cette décision représentait pour moi bien plus qu'un simple choix de carrière, mais une véritable affirmation de ma vocation dans le monde de la technologie.
                </p> */}
            </div>
        </div>
        </>
    );
}

export default About;


