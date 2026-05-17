
const btn = document.querySelector('.menu-button');
const menu = document.querySelector('nav');

const pictureSet = document.querySelector('.picture-set');
const modal = document.querySelector('dialog');
const modalImage = modal.querySelector('img');
const closeButton = modal.querySelector('.close-viewer');

function toggleMenu(){
    menu.classList.toggle('hide');
}

function showPicture(e) {
    console.log(e.target); 
    
    const img = e.target;
    const src = img.getAttribute('src');
    const alt = img.getAttribute('alt');
    const full = src.replace('sm', 'full');

    modalImage.src = full;
    modalImage.alt = alt;

    modal.showModal();
}

btn.addEventListener('click', toggleMenu);

pictureSet.addEventListener('click', showPicture);

closeButton.addEventListener('click', () => {
    modal.close();
});

modal.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.close();
    }
});
     