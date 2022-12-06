const toys = Array.from(document.querySelectorAll('.toy'));
const shelf = document.querySelector('.shelf');
const cells = Array.from(document.querySelectorAll('.cell'));
const star = document.querySelector('.star');
const tree = document.querySelector('.tree');
const cellStar = document.querySelector('.cell-star');
let currentToy;
let currentImg;

toys.forEach(e => e.draggable = true);

shelf.addEventListener('dragstart', (e) => {
    e.target.classList.add('selected');
    currentToy = e.target;
    currentImg = e.target.classList[1];
});

cells.forEach((e) => {
    e.addEventListener('dragover', canDrop);
});

function canDrop(e) {
    e.preventDefault();
};

cellStar.addEventListener('drop', (e) => {
    if (star.classList.contains('selected')) {
        star.remove();
        cellStar.style.backgroundImage = "url('assets/star.png')";
        cellStar.removeEventListener('dragover', canDrop);
    } else {
        return;
    };

});

tree.addEventListener('drop', (e) => {
    if (star.classList.contains('selected')) {
        star.classList.remove('selected')
        return;
    } else {
        currentToy.remove();
        e.target.style.backgroundImage = `url('assets/${currentImg}.png')`;
        e.target.removeEventListener('dragover', canDrop);
    };

});