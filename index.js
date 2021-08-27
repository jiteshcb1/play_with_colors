const btn = document.querySelector('#btn');
btn.addEventListener('click', () => {
    var red = Math.floor(Math.random() * 255) + 1;
    var blue = Math.floor(Math.random() * 255) + 1;
    var green = Math.floor(Math.random() * 255) + 1;
    document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
});
