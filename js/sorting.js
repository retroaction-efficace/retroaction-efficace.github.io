document.addEventListener('DOMContentLoaded', function() {
    const draggableContainer = document.getElementById('draggable');
    const paragraphs = draggableContainer.querySelectorAll('p');
    const verifyButton = document.querySelector('button.verify');
    const retryButton = document.querySelector('button.retry');
    const excellentMessage = document.querySelector('.correct');
    const dropzones = document.querySelectorAll('.dropzone');

    const correctPlacements = {
        'p1': 0,
        'p5': 0,
        'p3': 1,
        'p8': 1,
        'p2': 2,
        'p7': 2,
        'p4': 3,
        'p6': 3
    };

    function updateVisibility() {
        let visibleCount = 0;
        paragraphs.forEach(p => {
            if (p.classList.contains('visible')) {
                visibleCount++;
                if (visibleCount > 1) {
                    p.classList.replace('visible', 'hidden');
                }
            }
        });

        if (visibleCount === 0) {
            const nextParagraph = Array.from(paragraphs).find(p => !p.classList.contains('dropped') && p.classList.contains('hidden'));
            if (nextParagraph) {
                nextParagraph.classList.replace('hidden', 'visible');
            } else {
                draggableContainer.style.display = 'none';
            }
        }
    }

    function checkAllPlaced() {
        const allPlaced = Array.from(paragraphs).every(p => p.classList.contains('dropped'));
        verifyButton.classList.toggle('visible', allPlaced);
        verifyButton.classList.toggle('hidden', !allPlaced);
    }

    function attachDragStartEvent(element) {
        element.setAttribute('draggable', true);
        element.style.cursor = 'grab';
        element.addEventListener('dragstart', function(event) {
            event.dataTransfer.setData('text/plain', event.target.id);
        });
    }

    function resizeParagraphsInDropzones() {
        dropzones.forEach(zone => {
            Array.from(zone.children).forEach(child => {
                if (child.tagName === 'P') {
                    child.style.fontSize = '0.8em';
                }
            });
        });
    }

    paragraphs.forEach(p => {
        p.classList.add('hidden');
        attachDragStartEvent(p);
    });

    updateVisibility();

    dropzones.forEach(zone => {
        zone.addEventListener('dragover', event => event.preventDefault());

        zone.addEventListener('drop', function(event) {
            event.preventDefault();
            const id = event.dataTransfer.getData('text/plain');
            const draggableElement = document.getElementById(id);
            if (draggableElement) {
                zone.appendChild(draggableElement);
                draggableElement.classList.replace('visible', 'dropped');
                attachDragStartEvent(draggableElement);
                resizeParagraphsInDropzones();
                updateVisibility();
                checkAllPlaced();
            }
        });
    });

    verifyButton.addEventListener('click', function() {
        let allCorrect = true;
        dropzones.forEach((zone, index) => {
            Array.from(zone.children).forEach(child => {
                if (correctPlacements[child.id] === index) {
                    child.style.color = 'green';
                } else {
                    child.style.color = 'red';
                    allCorrect = false;
                }
            });
        });
        verifyButton.classList.replace('visible', 'hidden');
        if (allCorrect) {
            excellentMessage.classList.replace('hidden', 'visible');
            paragraphs.forEach(p => {
                p.removeAttribute('draggable');
                p.classList.add('no-drag');
                p.style.cursor = 'default';
            });
        } else {
            retryButton.classList.replace('hidden', 'visible');
        }
    });

    retryButton.addEventListener('click', function() {
        paragraphs.forEach(p => {
            p.classList.remove('dropped', 'hidden', 'no-drag');
            p.classList.add('visible');
            p.style.color = ''; 
            p.style.fontSize = ''; 
            p.style.cursor = 'grab';
            draggableContainer.appendChild(p);
            attachDragStartEvent(p);
        });
        dropzones.forEach(zone => {
            while (zone.firstChild) {
                zone.removeChild(zone.firstChild);
            }
        });
        draggableContainer.style.display = '';
        verifyButton.classList.replace('visible', 'hidden');
        retryButton.classList.replace('visible', 'hidden');
        excellentMessage.classList.replace('visible', 'hidden');
        updateVisibility();
    });
});
