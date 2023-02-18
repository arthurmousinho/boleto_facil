const Storage = {

    get(){
        return JSON.parse(localStorage.getItem("boletofacil:boleto")) || []
    },

    set(ticketObject){
        localStorage.setItem("boletofacil:boleto", JSON.stringify(ticketObject))
    },

    clear() {
        if (confirm('⚠️Tem certeza que deseja excluir todos os seus boletos?') == true) {
            localStorage.clear()
            window.location.reload()
        } else {
            return
        }
    }
}