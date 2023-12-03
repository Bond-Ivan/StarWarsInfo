import descriptionImg1 from "../assets/detailPage-description--1.jpg";
import descriptionImg2 from "../assets/detailPage-description--2.jpg";
import descriptionImg3 from "../assets/detailPage-description--3.jpg";
import descriptionImg4 from "../assets/detailPage-description--4.jpg";
import descriptionImg5 from "../assets/detailPage-description--5.jpg";
import descriptionImg6 from "../assets/detailPage-description--6.jpg";

const arrayDescriptionImg = [
    descriptionImg1,
    descriptionImg2,
    descriptionImg3,
    descriptionImg4,
    descriptionImg5,
    descriptionImg6,
];


export default function renderDetailBodyDescription(results, episodeId) {

    const $description = document.createElement('section');
    const $descriptionWrapper = document.createElement('div');
    const $descriptionTitle = document.createElement('h2');
    //////////////////////
    const $descriptionBox = document.createElement('div');
    const $descriptionText = document.createElement('p');
    //////////////////////
    const $descriptionBox2 = document.createElement('div');
    const $descriptionImg = document.createElement('img');

    $descriptionImg.src = arrayDescriptionImg[episodeId - 1];

    $descriptionTitle.setAttribute('id', 'descriptionTitle');

    $descriptionWrapper.classList.add('description__wrapper');
    $descriptionBox.classList.add('description__box');
    $descriptionBox2.classList.add('description__box2');
    $descriptionImg.classList.add('description__img');
    $description.classList.add('container', 'description');
    $descriptionTitle.classList.add('description__title');
    $descriptionText.classList.add('description__text');

    $descriptionText.textContent = results.opening_crawl;
    $descriptionTitle.textContent = 'Description';

    $descriptionBox.append($descriptionText);
    $description.append($descriptionTitle);
    $descriptionBox2.append($descriptionImg);
    $descriptionWrapper.append($descriptionBox);
    $descriptionWrapper.append($descriptionBox2);

    $description.append($descriptionWrapper);

    return $description;
}
