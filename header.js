// Header Component
class HeaderComponent extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
            <div class="navbar">
                <div class="logo">ALFAMOTOGARAGE</div>
                <nav>
                    <a href="index.html">Home</a>
                    <a href="services.html">Services</a>
                    <a href="portfolio.html">Portfolio</a>
                    <a href="contact.html">Contact</a>
                    <a href="shop.html">Shop</a>
                </nav>
            </div>
        `;
    }
}

// Register the custom element
customElements.define('header-component', HeaderComponent); 