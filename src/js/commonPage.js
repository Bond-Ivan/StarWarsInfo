
import img1 from "../assets/episode-1.jpg";
import img2 from "../assets/episode-2.jpg";
import img3 from "../assets/episode-3.jpg";
import img4 from "../assets/episode-4.jpg";
import img5 from "../assets/episode-5.jpg";
import img6 from "../assets/episode-6.jpg";

const arrayImg = [
    img1,
    img2,
    img3,
    img4,
    img5,
    img6
];

export default function renderCommonPage(data) {
    let flag = 0;

    const $swiper = document.createElement('div');
    const $swiperWrapper = document.createElement('div');
    const $swiperPagination = document.createElement('div');

    $swiper.classList.add('swiper', 'mySwiper');
    $swiperWrapper.classList.add('swiper-wrapper');
    $swiperPagination.classList.add('swiper-pagination');

    for (let element of data) {
        const $swiperElement = document.createElement('div');
        $swiperElement.classList.add('swiper-slide');
        const $swiperImg = document.createElement('img');
        $swiperImg.src = arrayImg[flag++];

        const $swiperElementBox = document.createElement('div');
        const $swiperElementTitle = document.createElement('a');
        const $swiperElementText = document.createElement('span');

        $swiperElementTitle.href = `?episodeId=${element.episode_id}`;

        $swiperElementTitle.textContent = element.title;

        $swiperElementText.textContent = 'Episode ' + element.episode_id;

        $swiperElementBox.classList.add('swiper-slide__box');
        $swiperElementTitle.classList.add('swiper-slide__link');
        $swiperElementText.classList.add('swiper-slide__span');

        $swiperElementTitle.append($swiperElementText);

        $swiperElementBox.append($swiperElementTitle);

        $swiperElement.append($swiperImg);
        $swiperElement.append($swiperElementBox);

        $swiperWrapper.append($swiperElement);
    }

    $swiper.append($swiperWrapper);
    $swiper.append($swiperPagination);

    return $swiper;
}
