// Add your code to this file
let body = document.querySelector('body');
body.style['background-color'] = 'DarkBlue';

let heading = document.querySelector('h1');
heading.style['text-decoration'] = 'underline'

let intro = document.querySelector('h2');
intro.innerHTML = "Here are Pokemon's incredible Gen 1 starters!"
intro.style['display'] = 'flex'
intro.style['justify-content'] = 'center'

let img1 = document.querySelectorAll('img');
for(let i=0; i < img1.length; i++) {
    img1[i].style['border-style'] = 'dotted';
    img1[i].style['border-color'] = 'yellow';
}

let bulb = document.getElementById("bulbasaur_container")
bulb.style['background-color'] = '#388E8E'

let names = document.getElementsByClassName("pokemon_names")
for(let i=0; i < names.length; i++) {
    names[i].style['color'] = '#FDEEA6';
    names[i].innerHTML += "!"
}

let footer = document.querySelector('footer');
footer.innerHTML = 'All Star Code - DOM Project';
footer.style['text-decoration'] = 'underline overline';
footer.style['font-size'] = '30px';
footer.style['font-style'] = 'italic';

