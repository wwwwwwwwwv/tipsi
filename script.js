const textArea = document.getElementById('textArea');
const wordCount = document.getElementById('wordCount');
const timer = document.getElementById('timer');
let count = 0;
let time = 0;

textArea.addEventListener('input', () => {
    count = textArea.value.split(/\s+/).filter(Boolean).length;
    wordCount.textContent = count;
});

setInterval(() => {
    time++;
    timer.textContent = time;
}, 1000);

var images = [],
index = 0;

images[0] = "<img src='26.gif'>";
images[1] = "<img src='38.gif'> ";
images[2] = "<img src='19.gif'> ";
images[3] = "<img src='23.gif'> ";


index = Math.floor(Math.random() * images.length);

document.write(images[index]);




