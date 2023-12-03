import 'babel-polyfill';
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';
import cssReset from "../style/reset.scss";
import scssCommon from "../style/common.scss";
import scssHeader from "../style/swiper.scss";
import scssCommonPage from "../style/commonPage.scss";
import scssDetailPage from "../style/detailPage.scss";
import { swiperConfig, swiperConfigCharacters } from './swiper.js';
import commonHeader from "./commonHeader.js";
import renderCommonPage from "./commonPage.js";
import renderDetailHeader from "./detailHeader.js";
import renderDetailNavigation from "./navigation.js";
import renderDetailBodyDescription from "./detailBodyDescription.js";
import renderDetailBodyCharacters from "./detailBodyCharacters.js";
import renderDetailBodyCreators from "./detailBodyCreators.js";
import favicon from "../assets/favicon.svg";
import backgroundCommon from "../assets/background-common.jpg";

function renderLoader() {
    const $loaderBox = document.createElement('div');
    const $loader = document.createElement('span');
    $loader.textContent = "Loading";
    $loaderBox.classList.add('loader__box')
    $loader.classList.add('loader');

    $loaderBox.append($loader);
    document.body.append($loaderBox);
}

const searchParams = new URLSearchParams(window.location.search);
let episodeId = Number(searchParams.get('episodeId'));

function loadResurce(src) {
    return fetch(src).then(res => res.json());
}

async function render() {
    if (episodeId !== 0) {
        renderLoader();

        if (episodeId < 4) {
            episodeId = episodeId + 3;
        } else {
            episodeId = episodeId - 3;
        }

        try {
            let response = await fetch(`https://swapi.dev/api/films/${episodeId}`);
            let result = await response.json();

            if (result.code === 404) {
                const error = new Error('Не удалось получить ответ с сервера');
                error.statusCode = result.code;
                throw error;
            }
            Promise.all(result.characters.slice(0, 10).map((elem) => loadResurce(elem)))
                .then((characters) => {
                    document.querySelector('.loader__box').remove();
                    document.body.append(renderDetailNavigation());
                    document.body.append(renderDetailHeader(result));
                    document.body.append(renderDetailBodyDescription(result, episodeId));
                    document.body.append(renderDetailBodyCharacters(characters));
                    document.body.append(renderDetailBodyCreators(result));
                    const swiper = new Swiper(".characters__swiper", swiperConfigCharacters);
                });
        } catch (error) {
            console.log(`Возникла ошибка ${error.name}: ${error.message}`);
        }
    } else {
        try {
            renderLoader();
            let response = await fetch('https://swapi.dev/api/films');
            document.querySelector('.loader__box').remove();
            let result = await response.json();
            document.body.append(commonHeader());
            document.body.append(renderCommonPage(result.results));
            const swiper = new Swiper(".mySwiper", swiperConfig);
        } catch (error) {
            console.log(`Возникла ошибка ${error.name}: ${error.message}`);
        }
    }
}

render();





