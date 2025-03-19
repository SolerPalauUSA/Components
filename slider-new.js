class SliderComponent extends HTMLElement {
    constructor() {
        super();
        this.currentIndex = 0;
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <div class="slider-container">
                <div class="slider"></div>
                <div class="nav"></div>
            </div>
            <style>
                ${this.getStyle()}
            </style>
        `;
        this.slider = this.shadowRoot.querySelector('.slider');
        this.nav = this.shadowRoot.querySelector('.nav');
    }

    connectedCallback() {
        this.fetchSlides();
    }

    async fetchSlides() {
        const response = await fetch('slider.json');
        const data = await response.json();
        this.slides = data.sliders;
        this.renderSlides();
        this.startSlider();
    }

    renderSlides() {
        this.slides.forEach((slide, index) => {
            const slideElement = document.createElement('div');
            slideElement.classList.add('slide');
            if (index === 0) slideElement.classList.add('active');
            slideElement.innerHTML = `
                <div class="slide-content">
                    <h2>${slide.title}</h2>
                    <p class="description">${slide.description}</p>
                    <a href="${slide.cta.link}" class="cta-button">${slide.cta.text}</a>
                </div>
                <div class="image-wrapper ${index % 2 === 0 ? 'left' : 'right'}">
                    <img src="${slide.image}" alt="${slide.title}">
                </div>
            `;
            this.slider.appendChild(slideElement);

            const navItem = document.createElement('div');
            navItem.classList.add('nav-item');
            if (index === 0) navItem.classList.add('active');
            navItem.addEventListener('click', () => this.goToSlide(index));
            this.nav.appendChild(navItem);
        });
    }

    startSlider() {
        this.interval = setInterval(() => {
            this.nextSlide();
        }, 4000);
    }

    nextSlide() {
        this.currentIndex = (this.currentIndex + 1) % this.slides.length;
        this.updateSlider();
    }

    goToSlide(index) {
        this.currentIndex = index;
        this.updateSlider();
    }

    updateSlider() {
        const slides = this.shadowRoot.querySelectorAll('.slide');
        slides.forEach((slide, index) => {
            slide.classList.toggle('active', index === this.currentIndex);
        });
        this.nav.querySelectorAll('.nav-item').forEach((item, index) => {
            item.classList.toggle('active', index === this.currentIndex);
        });
    }

    getStyle() {
        return `
            .slider-container {
                position: relative;
                width: 85%;
                margin: auto;
                overflow: hidden;
                background-color: white;
                border-radius: 10px;
                box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
                margin-top: -15rem;
                height: 400px;
                z-index: 9980
            }
            .slider {
                display: flex;
                position: relative;
                height: 100%;
                transition: opacity 1s ease;
            }
            .slide {
                min-width: 100%;
                box-sizing: border-box;
                display: flex;
                flex-direction: row;
                align-items: center;
                padding: 20px;
                background-color: whitesmoke;
                color: #212529;
                opacity: 0;
                transition: opacity 1s ease;
                height: 100%;
                position: absolute;
                top: 0;
                left: 0;
                z-index: 1;
            }
            .slide.active {
                opacity: 1;
                z-index: 2;
            }
            .image-wrapper {
                width: 50%;
                display: flex;
                justify-content: space-evenly;
                align-items: center;
                height: 100%;
                overflow: hidden;
            }
            .image-wrapper img {
                max-width: 100%;
                max-height: 100%;
                border-radius: 10px;
                border: none;
                box-shadow: none;
            }
            .slide-content {
                display: flex;
                flex-direction: column;
                padding: 20px;
                width: 50%;
                height: 100%;
            }
            .slide-content h2 {
                font-size: 2.5em;
                margin-bottom: 10px;
            }
            .slide-content p {
                font-size: 1.3em;
                margin-bottom: 20px;
            }
            .slide-content a.cta-button {
                background-color: #ef3340;
                color: whitesmoke;
                padding: 15px 30px;
                border-radius: 5px;
                text-decoration: none;
                font-size: 1.5em;
                transition: background-color 0.3s ease;
                width: fit-content;
                text-align: center;
                display: inline-block;
                margin-top: 1.5rem;
            }
           
            .nav {
                position: absolute;
                bottom: 10px;
                left: 50%;
                transform: translateX(-50%);
                display: flex;
                z-index: 3;
            }
            .nav-item {
                width: 30px;
                height: 5px;
                background: #ccc;
                margin: 0 5px;
                border-radius: 5px;
                cursor: pointer;
                transition: background-color 0.3s ease;
            }
            .nav-item.active {
                background: #212529
            }
            @media (max-width: 896px) {
    .slider-container {
        height: 300px;
        margin-top: 0.5rem;
    }
    .slide {
        flex-direction: column-reverse;
        padding: 10px;
    }
    .image-wrapper {
        width: 100%;
        height: 60%;
        margin-bottom: 10px;
    }
    .slide-content {
        width: 100%;
        text-align: center;
        padding: 0 10px; /* Add padding to prevent content from touching edges */
    }
    .slide-content h2 {
        font-size: 1.75em;
        margin-bottom: 5px;
    }
    .slide-content p {
        display: none;
    }
    .slide-content a.cta-button {
        font-size: 1.2em;
        padding: 10px 20px;
        width: 100%; /* Set the button width to 100% */
        max-width: 280px; /* Limit the button width on smaller screens */
        margin: 0 auto; /* Center the button */
        box-sizing: border-box; /* Ensure padding is included in the width */
    }
}

        `;
    }
}

customElements.define('slider-component', SliderComponent);
