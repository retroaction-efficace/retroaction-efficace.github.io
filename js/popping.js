export function popping() {
    const tooltips = document.querySelectorAll('.tooltip');

    tooltips.forEach(tooltip => {
        const div = tooltip.querySelector('div');

        tooltip.addEventListener('mouseenter', () => {
            tooltip.classList.add('active');
            setTimeout(() => {
                const rect = div.getBoundingClientRect();
                const viewport = window.innerWidth;
                const viewportHeight = window.innerHeight;
                const tooltipWidth = rect.width;
                const tooltipHeight = rect.height;

                // Tooltip on the left edge of the viewport
                if (rect.left < 0) {
                    div.style.left = '10px';
                    div.style.transform = 'translateX(0)';
                }
                // Tooltip on the right edge of the viewport
                else if (rect.right > viewport) {
                    div.style.left = `${viewport - tooltipWidth - 10}px`;
                    div.style.transform = 'translateX(0)';
                }
                // Tooltip too close to the top or bottom
                if (rect.top < 0) {
                    div.style.top = '10px';
                } else if (rect.bottom > viewportHeight) {
                    div.style.top = `${viewportHeight - tooltipHeight - 10}px`;
                }
                // Tooltip centered within the viewport
                else {
                    div.style.left = '50%';
                    div.style.transform = 'translateX(-50%)';
                    div.style.top = '125%'; // Keeping the bottom position for the tooltip
                }
            }, 10);
        });

        tooltip.addEventListener('mouseleave', () => {
            tooltip.classList.remove('active');
        });
    });
}
