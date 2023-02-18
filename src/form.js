const Form = {

    description: document.getElementById('description'),
    amount: document.getElementById('amount'),
    date: document.getElementById('date'),
    status: 'pendente',


    getFormValues() {
        return objectValues =  {
            description: this.description.value,
            amount: this.amount.value,
            date: this.date.value,
            status: this.status,
        }
    },

    clearFormFields() {
        this.description.value = "",
        this.amount.value = "",
        this.date.value = ""
    },

    verifyEmptyFields(objectValues) {
        if (objectValues.description === "" || objectValues.amount == "" || objectValues.date == "") {
             return false
        } else {
            return true
        }  
    }
}