const sliderContainer = document.querySelector('.slider-container');
        const images = sliderContainer.querySelectorAll('img');
        let currentImageIndex = 0;

        function changeImage() {
            images[currentImageIndex].classList.remove('active');
            currentImageIndex = (currentImageIndex + 1) % images.length;
            images[currentImageIndex].classList.add('active');
        }

        setInterval(changeImage, 4000); // change image every 4 seconds
 