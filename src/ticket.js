const Ticket = {
    all: Storage.get(),

    addTicket(event) {
        event.preventDefault()
        const ticketObject = Form.getFormValues()
        console.log(ticketObject)
        const verifyFields = Form.verifyEmptyFields(ticketObject)

        if (verifyFields === false) {
            alert('Preencha todos os dados para salvar !!')
        } else {
            this.all.push(ticketObject)
            DOM.addTicketHtml(ticketObject)
            Form.clearFormFields()
            Modal.toggleAddModal()
            this.updateAmountPanel()
            Storage.set(this.all)
        }
    },

    ticketOptions(index) {
        const ticketOpject = this.all[index]
        const ticketOptionsHtml = DOM.ticketOptionsHtml(ticketOpject, index)
        Modal.generateTicketOptionsModal(ticketOptionsHtml)
        Modal.toggleTicketOptions()
    },

    removeTicket(index) {
        this.all.splice(index, 1);
        App.init()
    },

    payTicket(index,event) {
        event.preventDefault()
        const ticketObject = this.all[index]
        this.updateTicketStatusToPayed(ticketObject,index)
        DOM.tbody.innerHTML = ""
        Modal.toggleTicketOptions()
        App.init()
    },

    updateTicketStatusToPayed(ticketObject) {
        const ticketElement = DOM.tbody.children
        console.log(ticketElement)
        ticketObject.status = "quitado"
    },

    verifyTicketStatus(status) {
        if (status === 'pendente') {
            const statusClass = 'to-pay'
            return statusClass
        } else {
            const statusClass = 'payed'
            return statusClass
        }
    },

    calculateAmounts(amountsArray) {
        let sum = 0
        for (const amount of amountsArray) {
            sum = sum + amount
        }
        return sum
    },

    updateAmountPanel() {
        let toPayAmounts = []
        let payedAmounts = []

        for (const ticket of this.all) {
            if (ticket.status === 'pendente') {
                toPayAmounts.push(Number(ticket.amount))
            } else {
                payedAmounts.push(Number(ticket.amount))
            }
        } 

        const toPayAmountSum = this.calculateAmounts(toPayAmounts)
        const payedAmountSum = this.calculateAmounts(payedAmounts)

        DOM.amountsPanelHtml('to-pay', toPayAmountSum)
        DOM.amountsPanelHtml('pay', payedAmountSum)
    }
}