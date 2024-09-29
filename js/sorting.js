document.addEventListener('DOMContentLoaded', () => {
    const listItems = document.querySelectorAll('.draggable li');
    const paragraphs = document.querySelectorAll('.draggable p');
    const dropzones = document.querySelectorAll('.dropzone');
    const verifyButton = document.querySelector('.verify');
    const draggableContainer = document.getElementById('draggable');
    let currentIndex = 0;

    listItems[currentIndex].classList.replace('hidden', 'visible');

    paragraphs.forEach(p => {
        p.addEventListener('dragstart', dragStart);
        p.setAttribute('draggable', 'true');
    });

    verifyButton.addEventListener('dragstart', dragStart);

    dropzones.forEach(zone => {
        zone.addEventListener('dragover', e => {
            e.preventDefault();
        });
        zone.addEventListener('drop', drop);
    });

    function dragStart(e) {
        e.dataTransfer.setData('text/plain', e.target.id);
    }

    function drop(e) {
        e.preventDefault();
        const id = e.dataTransfer.getData('text/plain');
        const draggableElement = document.getElementById(id);

        if (e.target.children.length === 0) {
            e.target.appendChild(draggableElement);
            draggableElement.classList.replace('visible', 'dropped');
            if (draggableContainer.querySelectorAll('p.visible').length === 0) {
                if (currentIndex < listItems.length - 1) {
                    listItems[++currentIndex].classList.replace('hidden', 'visible');
                } else {
                    draggableContainer.style.background = 'none';
                    draggableContainer.style.border = 'none';
                    verifyButton.classList.replace('hidden', 'visible');
                }
            }
        }
    }
});
