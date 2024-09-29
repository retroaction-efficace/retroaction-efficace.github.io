document.addEventListener('DOMContentLoaded', function() {
    const draggableContainer = document.getElementById('draggable');
    const paragraphs = draggableContainer.querySelectorAll('p');
    const verifyButton = document.querySelector('button.verify');
    const retryButton = document.querySelector('button.retry');

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
                draggableContainer.style.background = 'none';
                draggableContainer.style.outline = 'none';
                draggableContainer.style.display = 'none'; // Hide the container
            }
        }
    }

    // Function to check if all paragraphs are placed
    function checkAllPlaced() {
        const allPlaced = Array.from(paragraphs).every(p => p.classList.contains('dropped'));
        if (allPlaced) {
            verifyButton.classList.remove('hidden');
            verifyButton.classList.add('visible');
        } else {
            verifyButton.classList.remove('visible');
            verifyButton.classList.add('hidden');
        }
    }

    // Initial visibility update
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
                checkAllPlaced();
            }
        });
    });

    // Verify button functionality
    verifyButton.addEventListener('click', function() {
        dropzones.forEach((zone, index) => {
            const children = zone.children;
            Array.from(children).forEach(child => {
                if (correctPlacements[child.id] === index) {
                    child.style.color = 'green';
                } else {
                    child.style.color = 'red';
                }
            });
        });
        verifyButton.classList.remove('visible');
        verifyButton.classList.add('hidden');
        retryButton.classList.remove('hidden');
        retryButton.classList.add('visible');
    });

    // Retry button functionality
    retryButton.addEventListener('click', function() {
        paragraphs.forEach(p => {
            p.classList.remove('dropped');
            p.classList.remove('hidden');
            p.classList.add('visible');
            p.style.color = ''; // Reset text color
            draggableContainer.appendChild(p);
        });
        dropzones.forEach(zone => {
            while (zone.firstChild) {
                zone.removeChild(zone.firstChild);
            }
        });
        draggableContainer.style.display = ''; 
        draggableContainer.style.background = '';
        draggableContainer.style.outline = '';
        verifyButton.classList.remove('visible');
        verifyButton.classList.add('hidden');
        retryButton.classList.remove('visible');
        retryButton.classList.add('hidden');
        updateVisibility();
    });
});
