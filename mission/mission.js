let selectElem = document.querySelector('select');
let logo = document.querySelector('img');
let pageContent = document.querySelector('body');

selectElem.addEventListener('change', changeTheme);

function changeTheme() {
    let current = selectElem.value;
    if (current == 'dark') {
        // code for changes to colors and logo

        const image = document.querySelector('img');
        image.setAttribute('src', 'images/byui-logo-white.png');

        document.body.style.backgroundColor = 'darkslategrey';

        document.querySelectorAll('p').forEach(p => p.style.color = 'white');
        document.querySelectorAll('li').forEach(l => l.style.color = 'white');
        document.querySelector('#schoolname').style.color = 'cornflowerblue';

    } else {
        // code for changes to colors and logo

        const image = document.querySelector('img');
        image.setAttribute('src', 'https://wddbyui.github.io/wdd131/images/byui-logo-blue.webp');

        document.body.style.backgroundColor = 'white';

        document.querySelectorAll('p').forEach(p => p.style.color = 'black');
        document.querySelectorAll('li').forEach(l => l.style.color = 'black');
        document.querySelector('#schoolname').style.color = '#035f9c';
    }
}           
     