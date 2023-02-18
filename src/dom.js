const DOM = {

    tbody: document.querySelector('table tbody'),

    toPayAmount: document.querySelector('.to-pay-panel div h3'),
    payedAmount: document.querySelector('.payed-panel div h3'),

    addTicketHtml(objectValues) {
        const tr =  document.createElement('tr')
        const index = DOM.tbody.children.length
        const html = this.ticketHtml(objectValues,index)
        tr.innerHTML = html
        this.tbody.appendChild(tr)
    }, 
    
    ticketHtml(objectValues,index) {
        const formatedDate = Utils.formatDate(objectValues.date)
        const formatedAmount = Utils.formatAmount(objectValues.amount)
        const statusClass = Ticket.verifyTicketStatus(objectValues.status)

        return  `
            <td class="description">${objectValues.description}</td>
            <td class="amount">${'R$ ' + formatedAmount}</td>
            <td class="validity">${formatedDate}</td>
            <td class="status ${statusClass}">${objectValues.status}</td>
            <td><img src="./assets/icons/options.svg" alt="options icon" onclick="Ticket.ticketOptions(${index})"></td>
        `

    },


    ticketOptionsHtml(ticketObject, index) {
        return `
            <img src="./assets/icons/close.svg" alt="close modal icon" class="closeModalButton" onclick="Modal.toggleTicketOptions()"> 
            <h3>${ticketObject.description}</h3>
            <button id="remove-ticket-button" onclick="Ticket.removeTicket(${index})">Remover Boleto</button>
            <button onclick="Ticket.payTicket(${index}, event)">Quitar Boleto</button>
        `
    },

    amountsPanelHtml(panel, amount) {
        const needComma = Number.isInteger(amount)
        if (needComma === true) {
            amount = amount.toFixed(2)
        }

        if (panel === 'to-pay') {
            this.toPayAmount.innerHTML = amount
        } else {
            this,this.payedAmount.innerHTML = amount
        }
    }
}