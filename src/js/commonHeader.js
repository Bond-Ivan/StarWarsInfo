import arrowDown from "../assets/down_arrow.svg";

export default function commonHeader() {
    const $header = document.createElement('header');
    const $headerTitle = document.createElement('h1');
    const $headerText = document.createElement('p');

    const $scrollInfoBox = document.createElement('div');
    const $scrollInfoHeader = document.createElement('p');
    const $scrollInfoImg = document.createElement('img');

    $header.classList.add('container', 'header');
    $headerTitle.classList.add('header__title');
    $headerText.classList.add('header__text');

    $scrollInfoBox.classList.add('header__info-box');
    $scrollInfoHeader.classList.add('header__info-header');
    $scrollInfoImg.classList.add('header__info-img');

    $headerTitle.textContent = 'Star Wars Info';
    $headerText.textContent = `Immerse yourself in the world of Star Wars, on this
    site we can see a description, a list of characters and the names of those who
    led the creation of this episode`;
    $scrollInfoHeader.textContent = `Let's turn over the pages`;
    $scrollInfoImg.src = arrowDown;

    $scrollInfoBox.append($scrollInfoHeader);
    $scrollInfoBox.append($scrollInfoImg);

    $header.append($headerTitle);
    $header.append($headerText);
    $header.append($scrollInfoBox);

    return $header;
}
