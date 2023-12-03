import RichardMarquand from "../assets/RichardMarquand.jpg";
import HowardGKazanjian from "../assets/HowardGKazanjian.jpg";
import GeorgeLucas from "../assets/GeorgeLucas.jpg";
import RickMcCallum from "../assets/RickMcCallum.jpg";
import GaryKurtz from "../assets/GaryKurtz.jpg";
import IrvinKershner from "../assets/IrvinKershner.jpg";

let idElem = 0;

const arrayCreators = [
    {
        name: "Richard Marquand",
        img: RichardMarquand,
        text: `Richard Marquand, a British film director, was born on September 22
        , 1937 and left his indescribable mark on the history of cinema. His life
        and creativity embodies an undoubted contribution to world cinema, and his
        The name is inextricably linked with one of the most popular cinematic
        Phenomena - "Star Wars: Episode VI - Return of the Jedi".
        Tireless and creative, Richard Marquand passed away on September 4, 1987.
        His legacy continues to live on in the hearts of cinema fans,
        and "Return of the Jedi" remains an eternal testimony to his magnificent
        contribution to the art of cinema.`
    },

    {
        name: "Howard G. Kazanjian",
        img: HowardGKazanjian,
        text: `Howard G. Kazanjian is a well-known producer in the film and television industry. His
        his career spans various genres and projects, making him a significant player in
        the entertainment industry.
        One of the key moments in his career was his participation in the iconic franchise
        "Star Wars". Kazanjian was the producer of "Star Wars: Episode V – Empire
        Strikes Back" (1980) and "Star Wars: Episode VI – Return of the Jedi" (1983),
        which brought him great recognition and popularity among fans of this epic saga.
        As a person, although information about Howard G. Kazanjian's personal life is not so widely available`
    },

    {
        name: "George Lucas",
        img: GeorgeLucas,
        text: `George Lucas. Back in May 1971, in Cannes, Lucas signed a contract with the United Artists studio
        on the set of the movie "Star Wars", and on August 1 of the same year, the name "The Star Wars" was
        It is registered by the American Association of Film Companies.
        In 1973, George began writing the screenplay. The initial drafts were very different from
        the final film.
        Writing the script was difficult for Lucas because he was always inclined to be more
        to visual, imaginative cinema. The filming of the film undermined Lucas's health, so he decided to
        for the next two films of the Saga, hire other directors, remaining in the chair of the screenwriter and producer.`
    },

    {
        name: "Rick McCallum",
        img: RickMcCallum,
        text: `Rick McCallum is a famous film producer. He was born on August 22, 1954, his birthplace
        is Germany. Rick is also well known as an American film producer who worked on
        "The Chronicles of the Young Indiana Jones and the Star Wars Trilogy: Special Edition.
        The Star Wars prequels also ushered in a new era of digital filmmaking, and McCallum played
        a leading role in its development, overseeing a team of creative and technical professionals
        that developed and created the industry's first all-digital production pipeline."`
    },

    {
        name: "Gary Kurtz",
        img: GaryKurtz,
        text: `Gary Kurtz is a producer, screenwriter and director, best known for his contributions
        to the Star Wars saga. Gary Kurtz was born in 1942 in New York City, and his film career began
        in the 1970s. He was one of the first to start working on Star Wars, and has since become an
        integral part of the franchise's history. In 1977, Kurtz was appointed executive producer of
        Star Wars: Episode IV - A New Hope, which became one of the most successful films of all time.
        He also produced the next three episodes of the saga, including "Star Wars: Episodes V - The Empire Strikes Back”
        and “Star Wars: Episode VI - Return of the Jedi".`
    },

    {
        name: "Irvin Kershner",
        img: IrvinKershner,
        text: `Irwin Kershner is an American film director, best known for his work on the Star Wars film series.
        However, his most significant contribution to the film industry was the Star Wars films, on which he worked
        as a director. In 1981, he directed Star Wars: Episode V - The Empire Strikes Back, which became the second
        film in the series and received many positive reviews from critics and viewers. After that, Kershner returned
        to work on Star Wars in 1999, when he directed the final episode of the saga, Star Wars: Episode IX - Return of the Jedi.`
    },
]

export default function renderDetailBodyCreators(results) {

    const $creators = document.createElement('section');
    const $creatorsTitle = document.createElement('h2');
    const $creatorsList = document.createElement('ul');

    const $creatorsItem = document.createElement('li');
    const $creatorsItemDescription = document.createElement('div');
    const $creatorsItemPhoto = document.createElement('div');

    $creatorsTitle.setAttribute('id', 'creatorsTitle');

    $creators.classList.add('container');
    $creatorsTitle.classList.add('creators__title');
    $creatorsList.classList.add('creators__list');

    $creatorsTitle.textContent = 'Creators';

    $creators.append($creatorsTitle);
    $creators.append($creatorsList);

    console.log(results);

    renderCreatorsElement(results.director.split(', '), $creatorsList);
    renderCreatorsElement(results.producer.split(', '), $creatorsList);

    let creatorsTextElems = document.querySelectorAll('.creators__item-description');
    return $creators;
}

function renderCreatorsElement(results, container) {

    for (let result of results) {

        let item = arrayCreators.find(elem => elem.name == result);

        const $creatorsItem = document.createElement('li');
        const $creatorsItemDescription = document.createElement('div');
        const $creatorsItemPhoto = document.createElement('div');
        const $creatorsDescriptionText = document.createElement('p');
        const $creatorsItemImg = document.createElement('img');

        $creatorsItem.classList.add('creators__item');
        $creatorsDescriptionText.classList.add('creators__item-text');
        $creatorsItemImg.classList.add('creators__item-img');
        $creatorsItemDescription.classList.add('creators__item-description');

        if (idElem % 2 !== 0) {
            $creatorsItemDescription.classList.add('creators__item-description--margin');
        }

        idElem++;

        $creatorsItemImg.src = item.img;
        $creatorsDescriptionText.textContent = item.text;

        $creatorsItemDescription.append($creatorsDescriptionText);
        $creatorsItemPhoto.append($creatorsItemImg);
        $creatorsItem.append($creatorsItemDescription);
        $creatorsItem.append($creatorsItemPhoto);

        container.append($creatorsItem);
    }
}


