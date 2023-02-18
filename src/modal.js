const Modal = {
    addModalOverlay: document.querySelector('.add-new-modal-overlay'),
    ticketOptionsModalOverlay: document.querySelector('.ticket-options-modal-overlay'),
    ticketOptionsModal: document.querySelector('.ticket-options-modal-overlay .modal'),


    toggleAddModal() {
        this.addModalOverlay.classList.toggle('active')
    },

    toggleTicketOptions() {
        this.ticketOptionsModalOverlay.classList.toggle('active')
    },

    generateTicketOptionsModal(ticketOptionsHtml) {
        this.ticketOptionsModal.innerHTML = ticketOptionsHtml
    }
}