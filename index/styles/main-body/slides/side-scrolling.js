function sideScrolling() {
    const pictureContainer = document.querySelector('.side-scrolling-images .picture-container');
    const images = pictureContainer.querySelectorAll('img');

    images.forEach(img => {
        img.setAttribute("draggable", "false");
        img.addEventListener('dragstart', (e) => e.preventDefault())
    })

    let isDown = false;
    let startX;
    let scrollLeft;

    pictureContainer.addEventListener('mousedown', (e) => {
        isDown = true;
        pictureContainer.classList.add('active');
        startX = e.pageX - pictureContainer.offsetLeft;
        scrollLeft = pictureContainer.scrollLeft;
    });

    pictureContainer.addEventListener('mouseleave', () => {
       isDown = false;
       pictureContainer.classList.remove('active');
    });

    pictureContainer.addEventListener('mouseup', () => {
        isDown = false;
        pictureContainer.classList.remove('active');
    });

    pictureContainer.addEventListener('pointermove', (e) => {
        if (!isDown) {
            return;
        }
        e.preventDefault();
        const x = e.pageX - pictureContainer.offsetLeft;
        const walk = (x - startX) *3;
        pictureContainer.scrollLeft = scrollLeft - walk;
    });
}

sideScrolling();