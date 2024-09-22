// Get HTML head element
let head = document.getElementsByTagName('HEAD')[0];

// Create new link Element
let link = document.createElement('link');

// set the attributes for link element
link.rel = 'stylesheet';

link.type = 'text/css';

link.href = './css/typewriter.css';

// Append link element to HTML head
head.appendChild(link);

let typewriterConfig = ["Your Text", true];
const tYpewriter = document.getElementsByClassName('typewriter-effect');
function typewriter() {
    const typeWriter = document.getElementById('typewriter-text');
    if (typewriterConfig[1] === true) {
        tYpewriter[tYpewriter.length - 1].style.setProperty('justify-content', 'center');
    }
    typeWriter.innerHTML = typewriterConfig[0];
    typeWriter.style.setProperty('--characters', typewriterConfig[0].length);
}
