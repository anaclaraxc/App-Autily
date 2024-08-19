
document.addEventListener('DOMContentLoaded', function() {
    const menuBtn = document.querySelector('.menu-btn');
    const sideMenu = document.getElementById('sideMenu');
    const closeBtn = document.getElementById('closeBtn');

    menuBtn.addEventListener('click', function() {
        sideMenu.classList.toggle('open');
    });

    closeBtn.addEventListener('click', function() {
        sideMenu.classList.remove('open');
    });
});


document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.carousel-items');
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');
    
    function updateCarousel() {
        const itemWidth = document.querySelector('.item').offsetWidth;
        const itemMargin = parseFloat(window.getComputedStyle(document.querySelector('.item')).marginRight);
        const containerWidth = document.querySelector('.carousel-container').offsetWidth;
        const itemsToShow = Math.floor(containerWidth / (itemWidth + itemMargin));
        const totalItems = container.children.length;
        const visibleWidth = (itemWidth + itemMargin) * itemsToShow;
        const maxIndex = Math.ceil(totalItems * (itemWidth + itemMargin) / visibleWidth) - 1; // Total de páginas

        let currentIndex = 0;

        function updateTransform() {
            container.style.transform = `translateX(-${currentIndex * visibleWidth}px)`;
        }

        prevButton.addEventListener('click', () => {
            if (currentIndex > 0) {
                currentIndex--;
                updateTransform();
            }
        });

        nextButton.addEventListener('click', () => {
            if (currentIndex < maxIndex) {
                currentIndex++;
                updateTransform();
            }
        });

        // Inicialize o carrossel para mostrar a primeira página
        updateTransform();
    }

    // Atualize o carrossel na inicialização e no redimensionamento da janela
    updateCarousel();
    window.addEventListener('resize', updateCarousel);
});

document.getElementById("finalizarBtn").addEventListener("click", function () {
    this.innerHTML = "✓ Finalizado";
    this.disabled = true;
});

function toggleTask(checkbox) {
    const task = checkbox.parentElement;
    if (checkbox.checked) {
        task.classList.add('completed');
    } else {
        task.classList.remove('completed');
    }
}
