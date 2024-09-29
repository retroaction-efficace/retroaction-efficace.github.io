document.addEventListener('DOMContentLoaded', function() {
    const draggableContainer = document.getElementById('draggable');
    const paragraphs = draggableContainer.querySelectorAll('p');
    const verifyButton = document.querySelector('button.verify');
    const retryButton = document.querySelector('button.retry');
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
        const visibleParagraphs = Array.from(paragraphs).filter(p => p.classList.contains('visible'));
        if (visibleParagraphs.length > 1) {
            visibleParagraphs.slice(1).forEach(p => p.classList.replace('visible', 'hidden'));
        }

        if (visibleParagraphs.length === 0) {
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
        verifyButton.classList.toggle('hidden', !allPlaced);
        verifyButton.classList.toggle('visible', allPlaced);
    }

    function reset() {
        paragraphs.forEach(p => {
            p.classList.remove('dropped', 'hidden');
            p.classList.add('visible');
            p.style.color = '';
            draggableContainer.appendChild(p);
        });
        dropzones.forEach(zone => zone.innerHTML = '');
        draggableContainer.style.display = '';
        verifyButton.classList.add('hidden');
        retryButton.classList.add('hidden');
        updateVisibility();
    }

    updateVisibility();

    paragraphs.forEach(p => {
        p.setAttribute('draggable', true);
        p.addEventListener('dragstart', function(event) {
            event.dataTransfer.setData('text/plain', event.target.id);
        });
    });

    // Initiate drag on mousedown inside the container
    draggableContainer.addEventListener('mousedown', function(event) {
        const closestParagraph = event.target.closest('p');
        if (closestParagraph) {
            const dataTransfer = new DataTransfer();
            dataTransfer.setData('text/plain', closestParagraph.id);

            const dragEvent = new DragEvent('dragstart', {
                bubbles: true,
                cancelable: true,
                dataTransfer: dataTransfer
            });

            closestParagraph.dispatchEvent(dragEvent);
        }
    });

    dropzones.forEach(zone => {
        zone.addEventListener('dragover', function(event) {
            event.preventDefault();
        });

        zone.addEventListener('drop', function(event) {
            event.preventDefault();
            const id = event.dataTransfer.getData('text/plain');
            const draggableElement = document.getElementById(id);
            if (draggableElement) {
                zone.appendChild(draggableElement);
                draggableElement.classList.replace('visible', 'dropped');
                updateVisibility();
                checkAllPlaced();
            }
        });
    });

    verifyButton.addEventListener('click', function() {
        dropzones.forEach((zone, index) => {
            Array.from(zone.children).forEach(child => {
                child.style.color = correctPlacements[child.id] === index ? 'green' : 'red';
            });
        });
        verifyButton.classList.add('hidden');
        retryButton.classList.remove('hidden');
    });

    retryButton.addEventListener('click', reset);
});
