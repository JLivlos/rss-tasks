const tree = document.querySelector('.tree');
const shelf = document.querySelector('.shelf');
const toys = Array.from(document.querySelectorAll('.toy'));
let currentDroppable = null;
let canDrop = false;
let currentX;
let currentY;
let currentArea;
let currentBlocks = {
    'tree': tree,
    'shelf': shelf
};
let treeMap = document.querySelector('.droppable');

document.querySelector('body').onselectstart = function(e) {
    e.preventDefault();
};

document.querySelector('.tree-img').onmousedown = function(e) {
    e.preventDefault();
};

toys.forEach((toy) => {

    toy.onpointerdown = function(event) {
        currentX = `${toy.getBoundingClientRect().left}px`;
        currentY = `${toy.getBoundingClientRect().top}px`;

        let shiftX = event.clientX - toy.getBoundingClientRect().left;
        let shiftY = event.clientY - toy.getBoundingClientRect().top;

        toy.style.position = 'absolute';
        toy.style.zIndex = 1000;
        document.body.append(toy);

        moveAt(event.pageX, event.pageY);

        function moveAt(pageX, pageY) {
            toy.style.left = pageX - shiftX + 'px';
            toy.style.top = pageY - shiftY + 'px';
        };

        function onMouseMove(event) {
            moveAt(event.pageX, event.pageY);

            toy.hidden = true;
            let elemBelow = document.elementFromPoint(event.clientX, event.clientY);
            toy.hidden = false;

            if (!elemBelow) return;

            let droppableBelow = elemBelow.closest('.droppable');
            if (currentDroppable != droppableBelow) {
                if (currentDroppable) {
                    canDrop = false;
                }
                currentDroppable = droppableBelow;
                if (currentDroppable) {
                    currentArea = droppableBelow;
                    canDrop = true;
                }
            }
        }

        document.addEventListener('pointermove', onMouseMove);

        toy.onpointerup = function() {
            if (canDrop === true) {
                currentArea.append(toy);
                toy.style.left = +(toy.style.left).split('px')[0] - currentBlocks[currentArea.name].getBoundingClientRect().left + 'px';
                toy.style.top = +(toy.style.top).split('px')[0] - currentBlocks[currentArea.name].getBoundingClientRect().top + 'px';
                document.removeEventListener('pointermove', onMouseMove);
                toy.onpointerup = null;
                if (treeMap.children.length === 8) alert('Если вы закончили украшать елку, нажмите готово')
            } else {
                toy.style.left = currentX;
                toy.style.top = currentY;
                document.removeEventListener('pointermove', onMouseMove);
                toy.onpointerup = null;
            };
        };

    };

    toy.ondragstart = function() {
        return false;
    };
});