const App = {
    init() {
        for (let ticket of Ticket.all){
            DOM.addTicketHtml(ticket)
        }
        Ticket.updateAmountPanel()
        Storage.set(Ticket.all)
    }
}

App.init()