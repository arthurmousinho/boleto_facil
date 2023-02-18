const MobileMenu = {
    menuButton: document.querySelector('mobile-menu'),
    menuItens: document.querySelector('.mobile-header nav'),
    menuIcon: document.querySelector('.mobile-header button'),
    openStatus: false,

    toggleMenu() {
        this.menuItens.classList.toggle('on')

        if (this.openStatus === false) {
            this.openStatus = true
            const html = this.menuHtmlCotent('close', 'Fechar')
            this.updateMenuIcon(html)
        } else {
            this.openStatus = false
            const html = this.menuHtmlCotent('menu', 'Menu')
            this.updateMenuIcon(html)
        }
    },

    updateMenuIcon(html) {
        this.menuIcon.innerHTML = html
    },

    menuHtmlCotent(icon, text) {
        const html = `
            <img src="./assets/icons/${icon}.svg" alt="menu icon">
            <p>${text}</p>
        `
        return html
    }
}