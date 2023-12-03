function renderDetailNavigation() {

    const $navigationWrapper = document.createElement('div');
    const $navigationList = document.createElement('ul');
    const $navigationLinkBack = document.createElement('a');

    $navigationWrapper.classList.add('navigation', 'container');
    $navigationList.classList.add('navigation__list');
    $navigationLinkBack.classList.add('navigation__link-back')

    $navigationLinkBack.href = '?episodeId=0';
    $navigationLinkBack.textContent = 'Back to slider';

    $navigationList.append(renderNavigationItem('Description', '#descriptionTitle'));
    $navigationList.append(renderNavigationItem('Characters', '#charactersnTitle'));
    $navigationList.append(renderNavigationItem('Creators', '#creatorsTitle'));
    $navigationWrapper.append($navigationList);
    $navigationWrapper.append($navigationLinkBack);

    return $navigationWrapper;
}

function renderNavigationItem(text, href) {

    const $navigationItem = document.createElement('li');
    const $navigationLink = document.createElement('a');

    $navigationItem.classList.add('navigation__item');
    $navigationLink.classList.add('navigation__item-link');

    $navigationLink.href = href;
    $navigationLink.textContent = text;

    $navigationItem.append($navigationLink);

    return $navigationItem;
}

export default renderDetailNavigation;
