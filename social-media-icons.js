let showMediaButton = document.getElementsByClassName('show-social-button')[0];
showMediaButton.addEventListener('click', (ev) => {
    let mediaButtonsGroup = document.getElementsByClassName('s-m')[0];
    const show = mediaButtonsGroup.classList.contains('show-media-buttons');
    const hide = mediaButtonsGroup.classList.contains('hide-media-buttons');

    if (show) {
        mediaButtonsGroup.classList.replace('show-media-buttons', 'hide-media-buttons');
    } else if (hide) {
        mediaButtonsGroup.classList.replace('hide-media-buttons', 'show-media-buttons');
    } else {
        mediaButtonsGroup.classList.add('show-media-buttons');
    }
});