class HeaderComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `

    

      <style>
        @import url('https://use.typekit.net/hji1dmf.css');

        body {
          font-family: "futura-pt", sans-serif;
          font-weight: 400;
          font-style: normal;
          line-height: 1.5;
          margin: 0;
          padding: 0;
        }

        .header {
          background: #212529;
          position: relative;
          max-width: 100vw;
          margin: auto;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1rem;
          z-index: 9999;
          border-top: solid 4px #d9534f; 
        }

        .header-content {
          max-width: 85%;
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

       .header a {
        text-decoration: none;
        color: white;
        font-size: 20px;
        }

        .header a:hover {
          text-decoration: none;
          color: #d9534f;
          font-size: 20px;
        }

        .header ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .menu-items {
          display: flex;
          align-items: center;
          padding: .5rem;
        }

        .menu-items li {
          position: relative;
          padding: 0.5rem 1rem;
          transition: background 0.3s ease-in-out;
          width: 100%;
        }

        .menu-items li:hover {
          background-color: #212529;
          
        }

        .dropdown {
          position: relative;
        }

        .dropdown-menu,
        .menu-right {
          position: relative;
          background: #212529;
          width: 100%;
          max-height: 0;
          opacity: 0;
          visibility: hidden;
          overflow: hidden;
          transition: max-height 0.5s ease, opacity 0.5s ease, visibility 0.5s ease;
          height: auto;
        }

        .menu-right {
          left: 0;
        }

        .menu-item {
          display: flex;
          justify-content: space-between;
          width: 100%;
          color: #ffffff;
          flex-direction: column;
        }

        .dropdown-menu.show,
        .menu-right.show {
          max-height: 100vh;
          opacity: 1;
          visibility: visible;
        }

        .mega-menu {
          position: relative;
          left: 0;
          width: 100%;
          max-height: 0;
          opacity: 0;
          visibility: hidden;
          overflow: hidden;
          transition: max-height 0.5s ease, opacity 0.5s ease, visibility 0.5s ease;
          display: none;
        }

        .mega-menu.show {
          display: block;
          opacity: 1;
          visibility: visible;
          max-height: 100vh !important;
        }

        .mega-menu .content {
          background: #212529;
          padding: 1rem;
          display: flex;
          flex-direction: row;
          gap: 1rem;
          width: 100%;
          justify-content: space-evenly;
        }

        .content .col {
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          align-items: flex-start;
        }

        .content .col h2 {
          color: #d9534f;
          font-size: 2rem;
          padding-bottom: 0.5rem;
          margin-bottom: 1rem;
          border-bottom: 1px whitesmoke solid;
          margin-top: 0;
        }

        .content .col ul {
          list-style: none;
          padding: 0;
        }

        .content .col ul li {
          padding: 0.5rem 0;
        }

        .content .col ul li a {
          color: #ffffff;
          text-decoration: none;
          font-size: 1.25rem;
        }

        .content .col ul li a:hover {
        color: #d9534f;
        text-decoration: none;
        font-size: 1.25rem;
      }

        .nav-logo img {
          height: 100px;
        }

        .nav-logo.mobile-logo img {
          height: 75px;
          margin-top: 1rem;
        }

        .top-header {
          background-color: whitesmoke;
          display: flex;
          justify-content: center;
          padding: 2rem;
        }

        .top-header-content {
          max-width: 85%;
          width: 100%;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .search-item {
          align-items: center;
          display: flex;
        }

        .optisizer-logo-wrapp {
          align-items: center;
          display: flex;
          font-size: 20px;
          align-self: center;
          color: #212529;
          text-decoration: none;
          margin-bottom: 0.5rem;
          flex-direction: column;
        }

        .search-form {
          display: flex;
          align-items: center;
        }

        .search-input {
          padding: 0.4rem;
          margin-right: 0.5rem;
          border: 1px solid #ccc;
          border-radius: 4px;
          color: black;
          align-self: center;
        }

        .search-button {
          background: #d9534f;
          border: none;
          color: white;
          padding: 0.3rem;
          cursor: pointer;
          border-radius: 4px;
        }

        .mega-menu,
        .dropdown-menu,
        .menu-right {
          opacity: 0;
          visibility: hidden;
          max-height: 0;
          transition: max-height 0.5s ease, opacity 0.5s ease, visibility 0.5s ease;
        }

        .mega-menu.show,
        .dropdown-menu.show,
        .menu-right.show {
          opacity: 1;
          visibility: visible;
          max-height: 500px;
          box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
        }

        .hamburger {
          display: block;
          cursor: pointer;
          position: absolute;
          top: 1.8rem;
          right: 2rem;
          z-index: 1001;
          width: 30px;
          height: 30px;
        }

        .hamburger .bar {
          padding: 0;
          width: 30px;
          height: 4px;
          background-color: white;
          display: block;
          border-radius: 4px;
          transition: all 0.4s ease-in-out;
          position: absolute;
        }

        .hamburger .bar1 {
          top: 0;
        }

        .hamburger .bar2,
        .hamburger .bar3 {
          top: 13.5px;
        }

        .hamburger .bar4 {
          bottom: 0;
        }

        .checkbox1 {
          display: none;
        }

        .checkbox1:checked + label > .hamburger > .bar1 {
          transform: rotate(45deg);
          transform-origin: 5%;
          width: 41px;
        }

        .checkbox1:checked + label > .hamburger > .bar2 {
          transform: translateX(-40px);
          background-color: transparent;
        }

        .checkbox1:checked + label > .hamburger > .bar3 {
          transform: translateX(40px);
          background-color: transparent;
        }

        .checkbox1:checked + label > .hamburger > .bar4 {
          transform-origin: 5%;
          transform: rotate(-45deg);
          width: 41px;
        }

        .mobile-search-icon {
        disply: none;
        }

     .mobile-search-container{
     display: none;
     }


        @media (max-width: 996px) {

      .blurred-overlay {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.5); /* Semi-transparent background */
    backdrop-filter: blur(8px); /* Apply the blur effect */
    z-index: 998; /* Below the search box */
    opacity: 0; /* Invisible by default */
    transition: opacity 0.3s ease; /* Smooth fade effect */
}

.blurred-overlay.active {
    display: block; /* Show when active */
    opacity: 1; /* Fully visible */
}

.mobile-search-input-container {
    z-index: 999; /* Ensure it appears above the blurred background */
    transition: opacity 0.3s ease; /* Smooth fade effect for the search input */
}





        /* General styling for the search container */
.mobile-search-container {
    position: fixed;
    bottom: 20px;
    right: 20px;
    z-index: 1000;
    display: block;
}

/* Search icon styling */
.mobile-search-icon {
    background-color: #d9534f;
    border: none;
    color: white;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    cursor: pointer;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    transition: transform 0.3s ease;
    opacity: .8;
}

.mobile-search-icon i {
    font-size: 1.2rem; /* Match the size of the navigation icon */
    color: white; /* Ensure it matches the color scheme */
}

.mobile-search-icon:hover {
    transform: scale(1.1);
}

/* Hidden search input container */
.mobile-search-input-container {
    display: none;
    position: fixed;
    top: 20%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 80%;
    background: #212529;
    padding: 1.5rem;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);

}

/* Search form */
.mobile-search-form {
    display: flex;
    gap: 0.5rem;
    align-items: center;
}

/* Search input field */
.mobile-search-input {
    flex: 1;
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 1rem;
}

/* Search submit button */
.mobile-search-submit {
    background: #d9534f;
    border: none;
    color: white;
    padding: 0.5rem 1rem;
    border-radius: 4px;
    cursor: pointer;
}

.mobile-search-submit:hover {
    background: #d62c2c;
}

/* Close button for the search */
.mobile-search-close {
    background: none;
    border: none;
    color: white;
    font-size: 1.2rem;
    cursor: pointer;
    position: absolute;
    top: 10px;
    right: 10px;
}

.mobile-search-close:hover {
    color: #d9534f;
}

       .mega-menu.show {
       box-shadow: none;
       }

          .content .col h2 {
            color: #d9534f;
            font-size: 1.25rem;
            padding-bottom: 0.5rem;
            margin-bottom: 1rem;
            border-bottom: 1px whitesmoke solid;
            margin-top: 0;
          }

          .dropdown-menu li a,
          .mega-menu .content .col ul li a {
            font-size: 16px;
          }

          .top-header {
            display: none;
          }

          .menu-items li:first-child {
            margin-top: 80px;
          }

          .dropdown-menu li:first-child {
            margin-top: 0 !important;
          }

          .mega-links li:first-child {
            margin-top: 0 !important;
          }

          .header {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            padding: 0;
            height: 100px;
            z-index: 9999;
            border-bottom: solid 4px #d9534f;
            border-top: none;
          }

          .nav-logo.desktop-logo {
            display: none;
          }

          .nav-logo.mobile-logo {
            display: block;
            margin: 0 auto;
            padding: 0.5rem;
          }

          .menu-items {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            width: 100%;
            height: 100vh;
            position: fixed;
            top: 0;
            left: 0;
            background: #212529;
            padding: 6rem 2rem 2rem 2rem;
            z-index: 999;
            overflow-y: auto;
            opacity: 0;
            visibility: hidden;
            transition: opacity 0.5s ease, visibility 0.5s ease, top 0.5s ease;
          }

          .menu-items.show {
            top: -10px;
            opacity: 1;
            visibility: visible;
            overflow: hidden;
          }

          .menu-items .menu-item {
            width: 100%;
            padding: 1rem 0;
          }

          .menu-items li {
            width: 100%;
          }

          .hamburger {
            display: block;
          }

          .mega-menu .content {
            background: #212529;
            padding: 1rem;
            display: flex;
            flex-wrap: wrap;
            gap: 1rem;
            width: 100%;
            justify-content: start;
            overflow-y: auto;
            max-height: 60vh;
            box-shadow: none;
          }

          .search-form {
            position: fixed;
            top: 100px;
            left: -15px;
            width: 100%;
            background: #212529;
            padding: 1rem;
            justify-content: center;
            z-index: 998;
            display: none;
          }

          .search-input {
            padding: 0.5rem;
            margin-right: 0.5rem;
            border: 1px solid #ccc;
            border-radius: 4px;
            color: black;
            align-self: center;
            width: 80%;
          }

          .search-button {
            background: #d9534f;
            border: none;
            color: white;
            padding: 0.4rem;
            cursor: pointer;
            border-radius: 4px;
          }

          .search-item {
            display: none;
          }

          .mega-menu .content .col .mega-links {
            display: block;
            flex-direction: column;
            gap: 0.5rem;
            width: 175px;
          }

          .dropdown-menu,
          .menu-right {
            width: 100%;
            background: #212529;
            opacity: 0;
            visibility: hidden;
            transform: translateY(-10px);
            transition: all 0.3s ease;
            height: auto;
            margin-top: 0;
            padding: 0.5rem;
          }

          .dropdown-menu.show,
          .menu-right.show {
            opacity: 1;
            visibility: visible;
            transform: translateY(0);
            box-shadow: none;
          }

          .mega-menu.show,
          .dropdown-menu.show,
          .menu-right.show {
            opacity: 1;
            visibility: visible;
            max-height: 500px;
            width: 100%;
            
          }
        }

        @media (min-width: 996px) {
          .hamburger {
            display: none !important;
          }

          .nav-logo.mobile-logo {
            display: none;
          }

          .nav-logo.desktop-logo {
            display: flex;
            align-items: center;
            gap: 1rem;
          }

          .header-tag-wrap {
          display: flex;
          flex-direction: column;
          
          }

          .header-tag-1 {

          margin: 0px;
          font-size: 1.5rem;
          color: #212529;
          font-weight: 500;

          }

          .header-tag-2 {

          margin: 0px;
          font-size: 1.5rem;
          color: #212529;
          font-weight: 500;
          
          }

          .search-form {
            margin-right: 1rem;
            position: static;
            display: flex;
          }

          .mega-menu .content .col .mega-links {
            display: block;
          }

          .dropdown-menu,
          .menu-right {
            position: absolute;
            top: 100%;
            display: flex;
            padding: 2rem;
            flex-direction: column;
          }

          .dropdown-menu {
            left: 0;
            width: 200px;
          }

          .menu-right {
            left: auto;
            right: 0;
          }

          .mega-menu.show {
            display: block;
            opacity: 1;
            visibility: visible;
            position: absolute;
            max-height: 100vh !important;
            width: 100vw;
            margin-left: -235px;
            margin-right: auto;
            top: 100%;
          }
        }
      </style>

      <div class="top-header">
        <div class="top-header-content">
          <div class="nav-logo desktop-logo">
            <a href="/"><img src="https://www.solerpalau-usa.com/images/logos/sp-av-logo3.webp" alt="S&P USA Ventilation Systems, LLC Logo"></a>
            <div class="header-tag-wrap">
            <h1 class="header-tag-1">S&P CANADA</h1>
            <h1 class="header-tag-2">VENTILATION PRODUCTS, INC.</h1>
            </div>
          </div>
          <div class="search-item">
            <a class="optisizer-logo-wrapp" href="https://www.optisizer.com/"><img style="height: 60px;" src="https://www.solerpalau-usa.com/optisizer-logo.webp" alt="Optisizer Logo"></a>
          </div>
        </div>
      </div>
      <header class="header">
        <div class="header-content">
          <nav>
            <div class="nav-logo mobile-logo">
              <img src="/whitelogo.png" alt="Mobile Logo">
            </div>
            <input type="checkbox" id="checkbox1" class="checkbox1 visuallyHidden">
            <label for="checkbox1">
              <div class="hamburger">
                <span class="bar bar1"></span>
                <span class="bar bar2"></span>
                <span class="bar bar3"></span>
                <span class="bar bar4"></span>
              </div>
            </label>
            <ul class="menu-items">
              <!-- Dynamic content injected here -->
            </ul>
          </nav>
          <form action="/search-result.html" method="get" class="search-form">
            <input type="search" name="q" class="search-input" placeholder="product search..." autocomplete="off">
            <button class="search-button" type="submit" aria-label="Search"><img src="https://www.solerpalau-usa.com/search-icon.svg" alt="Search"></button>
          </form>


          <div class="mobile-search-container">
    <!-- Search Icon -->
    <button class="mobile-search-icon" aria-label="Search">
        <img src="/search-icon.svg" alt="Search">
    </button>

    <!-- Search Form -->
    <div class="mobile-search-input-container">
        <form action="/search-result.html" method="GET" class="mobile-search-form">
            <input 
                type="text" 
                name="q" 
                class="mobile-search-input" 
                placeholder="Search..." 
                aria-label="Search"
            />
            <button type="submit" class="mobile-search-submit">Go</button>
        </form>
    </div>
</div>

        </div>
        <div class="blurred-overlay"></div>
      </header>
    `;

    document.addEventListener("DOMContentLoaded", () => {
      const headerElement = document.querySelector('header-component');
      const shadowRoot = headerElement.shadowRoot;
  
      if (shadowRoot) {
          const searchIconButton = shadowRoot.querySelector(".mobile-search-icon");
          const searchInputContainer = shadowRoot.querySelector(".mobile-search-input-container");
          const blurredOverlay = shadowRoot.querySelector(".blurred-overlay");
          const searchIcon = searchIconButton.querySelector("img"); // Reference to the search SVG
  
          // Toggle search visibility
          searchIconButton?.addEventListener("click", () => {
              const isSearchVisible = searchInputContainer.style.display === "block";
  
              if (isSearchVisible) {
                  // Hide the search input and reset styles
                  searchInputContainer.style.opacity = "0";
                  setTimeout(() => {
                      searchInputContainer.style.display = "none";
                  }, 300); // Wait for fade-out transition
                  blurredOverlay.classList.remove("active");
                  searchIconButton.innerHTML = `<img src="/search-icon.svg" alt="Search">`; // Reset to search icon
              } else {
                  // Show the search input
                  searchInputContainer.style.display = "block";
                  searchInputContainer.style.opacity = "1"; // Fade in
                  blurredOverlay.classList.add("active");
                  searchIconButton.innerHTML = "X"; // Change to 'X' text
              }
          });
  
          // Hide the search input container if clicking on the blurred overlay
          blurredOverlay?.addEventListener("click", () => {
              searchInputContainer.style.opacity = "0";
              setTimeout(() => {
                  searchInputContainer.style.display = "none";
              }, 300); // Wait for fade-out transition
              blurredOverlay.classList.remove("active");
              searchIconButton.innerHTML = `<img src="/search-icon.svg" alt="Search">`; // Reset to search icon
          });
      } else {
          console.error('Shadow DOM not found for header-component.');
      }
  });
  
  
  
    
    this.fetchNavData();
  }

  async fetchNavData() {
    try {
      const response = await fetch('/Navdata.json');
      const navData = await response.json();
      this.buildNav(navData.menu);
    } catch (error) {
      console.error('Failed to load navigation:', error);
    }
  }

  buildNav(navItems) {
    const navLinks = this.shadowRoot.querySelector('.menu-items');
    navItems.forEach(item => {
      const li = document.createElement('li');
      li.classList.add('nav-item');
      const link = document.createElement('a');
      link.href = item.url;
      link.textContent = item.name;
      link.className = 'menu-item';
      li.appendChild(link);

      if (item.type === 'mega') {
        const megaMenu = document.createElement('div');
        megaMenu.className = 'mega-menu';
        const content = document.createElement('div');
        content.className = 'content';
        item.columns.forEach(column => {
          const col = document.createElement('div');
          col.className = 'col';
          const section = document.createElement('section');
          if (column.title) {
            const title = document.createElement('h2');
            title.textContent = column.title;
            section.appendChild(title);
          }
          if (column.links) {
            const links = document.createElement('ul');
            links.className = 'mega-links';
            column.links.forEach(link => {
              const linkLi = document.createElement('li');
              linkLi.innerHTML = `<a href="${link.url}">${link.name}</a>`;
              links.appendChild(linkLi);
            });
            section.appendChild(links);
          }
          col.appendChild(section);
          content.appendChild(col);
        });
        megaMenu.appendChild(content);
        li.appendChild(megaMenu);
      } else if (item.type === 'dropdown' || item.type === 'dropdown-right') {
        const dropdownMenu = document.createElement('ul');
        dropdownMenu.className = item.type === 'dropdown' ? 'dropdown-menu' : 'menu-right';
        item.links.forEach(link => {
          const linkLi = document.createElement('li');
          linkLi.innerHTML = `<a href="${link.url}" class="menu-item">${link.name}</a>`;
          dropdownMenu.appendChild(linkLi);
        });
        li.appendChild(dropdownMenu);
      }

      navLinks.appendChild(li);
    });

    this.addEventListeners();
  }

  addEventListeners() {
    const navItems = this.shadowRoot.querySelectorAll('.nav-item');
    const checkbox = this.shadowRoot.querySelector('.checkbox1');
    const navLinks = this.shadowRoot.querySelector('.menu-items');

        // Handle hamburger menu toggle
        checkbox.addEventListener('change', () => {
          if (checkbox.checked) {
              navLinks.classList.add('show');
              document.body.style.overflow = 'hidden'; // Disable scrolling
          } else {
              navLinks.classList.remove('show');
              document.body.style.overflow = 'auto'; // Re-enable scrolling
  
              // Remove show class and reset styles from dropdowns and mega-menus
              const dropdowns = this.shadowRoot.querySelectorAll('.dropdown-menu, .mega-menu, .menu-right');
              dropdowns.forEach(dropdown => {
                  dropdown.classList.remove('show');
                  dropdown.style.opacity = '0';
                  dropdown.style.visibility = 'hidden';
              });
          }
      });
  
    navItems.forEach(item => {
      const link = item.querySelector('.menu-item');
      const dropdown = item.querySelector('.dropdown-menu, .mega-menu, .menu-right');

      if (dropdown) {
        link.addEventListener('click', (e) => {
          if (window.innerWidth < 896) {
            e.preventDefault();
            // Close other open dropdowns
            const openDropdowns = this.shadowRoot.querySelectorAll('.dropdown-menu.show, .mega-menu.show, .menu-right.show');
            openDropdowns.forEach(openDropdown => {
              if (openDropdown !== dropdown) {
                openDropdown.classList.remove('show');
                setTimeout(() => {
                  openDropdown.style.opacity = '0';
                  openDropdown.style.visibility = 'hidden';
                }, 300);
              }
            });

            // Toggle the current dropdown
            const isShowing = dropdown.classList.contains('show');
            if (isShowing) {
              dropdown.classList.remove('show');
              setTimeout(() => {
                dropdown.style.opacity = '0';
                dropdown.style.visibility = 'hidden';
              }, 300);
            } else {
              dropdown.style.opacity = '1';
              dropdown.style.visibility = 'visible';
              dropdown.classList.add('show');
            }
          }
        });

        // Remove click event listeners for mega links in mobile view
        if (item.querySelector('.mega-menu')) {
          const colHeaders = item.querySelectorAll('.content .col h2');
          colHeaders.forEach(header => {
            header.removeEventListener('click', this.handleHeaderClick);
          });
        }
      }

      item.addEventListener('mouseenter', () => {
        if (window.innerWidth >= 896 && dropdown) {
          dropdown.classList.add('show');
        }
      });

      item.addEventListener('mouseleave', () => {
        if (window.innerWidth >= 896 && dropdown) {
          dropdown.classList.remove('show');
        }
      });
    });
  }

  handleHeaderClick(e) {
    if (window.innerWidth < 896) {
      e.preventDefault();
      const parentCol = e.currentTarget.parentElement;
      const megaLinks = parentCol.querySelector('.mega-links');
      if (megaLinks) {
        if (megaLinks.style.display === 'flex') {
          megaLinks.style.display = 'none';
        } else {
          megaLinks.style.display = 'flex';
        }
      }
    }
  }




}

customElements.define('header-component', HeaderComponent);
