const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */

/* Declaring the alternative text for each image file */

/* Looping through images */

let i = 0;
for (i = 0; i < 5; i++) {
    const newImage = document.createElement('img');
    newImage.setAttribute('src', `/images/pic${i + 1}.png`);
    newImage.setAttribute('alt', `pic${i + 1}.png`);
    thumbBar.appendChild(newImage);

    newImage.addEventListener('click', () => {
        changeImage(newImage.getAttribute('src'));
    })
}

function changeImage(src) {
    displayedImage.setAttribute('src', src);
}

/* Wiring up the Darken/Lighten button */

btn.addEventListener('click', () => {
    let btnClass = btn.getAttribute('class');

    if(btnClass == "dark"){
        btn.setAttribute("class", "light");
        btn.textContent = "Lighten";
        overlay.style.backgroundColor = "rgba(0,0,0,0.5)";
    }else{
        btn.setAttribute("class", "dark");
        btn.textContent = "Darken";
        overlay.style.backgroundColor = "rgba(0,0,0,0)";
    }
})
