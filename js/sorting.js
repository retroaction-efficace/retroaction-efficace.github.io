document.addEventListener('DOMContentLoaded', function() {
    const draggableContainer = document.getElementById('draggable');
    const paragraphs = draggableContainer.querySelectorAll('p');
    const button = draggableContainer.querySelector('button.verify');

    // Function to update visibility of elements
    function updateVisibility() {
        let visibleCount = 0;
        paragraphs.forEach(p => {
            if (p.classList.contains('visible')) {
                visibleCount++;
                if (visibleCount > 1) {
                    p.classList.remove('visible');
                    p.classList.add('hidden');
                }
            }
        });

        if (visibleCount === 0) {
            const nextParagraph = Array.from(paragraphs).find(p => !p.classList.contains('dropped') && p.classList.contains('hidden'));
            if (nextParagraph) {
                nextParagraph.classList.remove('hidden');
                nextParagraph.classList.add('visible');
            } else {
                button.classList.remove('hidden');
                button.classList.add('visible');
                draggableContainer.style.background = 'none';
                draggableContainer.style.outline = 'none';
            }
        }
    }

    updateVisibility();

    // Drag and drop functionality
    paragraphs.forEach(p => {
        p.setAttribute('draggable', true);
        p.addEventListener('dragstart', function(event) {
            event.dataTransfer.setData('text/plain', event.target.id);
        });
    });

    const dropzones = document.querySelectorAll('.dropzone');
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
                draggableElement.classList.remove('visible');
                draggableElement.classList.add('dropped');
                updateVisibility();
            }
        });
    });
});
