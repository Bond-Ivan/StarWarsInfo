function renderDetailHeader(result) {

    const $header = document.createElement('header');
    const $headerTitle = document.createElement('h1');
    const $headerEpisode = document.createElement('p');
    const $headerReleaseDate = document.createElement('p');

    $header.classList.add('container', 'detail__header');
    $headerTitle.classList.add('detail__title');
    $headerEpisode.classList.add('detail__episode');
    $headerReleaseDate.classList.add('detail__release-date');

    $headerTitle.textContent = result.title;
    $headerEpisode.textContent = 'Episode number:' + ' ' + result.episode_id;
    $headerReleaseDate.textContent = 'Release date:' + ' ' + result.release_date;

    $header.append($headerTitle);
    $header.append($headerEpisode);
    $header.append($headerReleaseDate);

    return $header;
}

export default renderDetailHeader;
