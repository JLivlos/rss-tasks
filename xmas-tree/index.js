const star = document.querySelector('.star');
const tree = document.querySelector('.tree');
const toys = Array.from(document.querySelectorAll('.toy'));
let currentDroppable = null;
let canDrop = false;
let currentX;
let currentY;

toys.forEach((toy) => {

    toy.onmousedown = function(event) {
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
                    canDrop = true;
                }
            }
        }

        document.addEventListener('mousemove', onMouseMove);

        toy.onmouseup = function() {
            if (canDrop === true) {
                document.removeEventListener('mousemove', onMouseMove);
                toy.onmouseup = null;
            } else {
                toy.style.left = currentX;
                toy.style.top = currentY;
                document.removeEventListener('mousemove', onMouseMove);
                toy.onmouseup = null;
            }
        };

    };

    toy.ondragstart = function() {
        return false;
    };
});