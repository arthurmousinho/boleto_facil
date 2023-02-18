const Utils = {
    formatDate(unformattedDate) {
        let formatedDate = unformattedDate.split('-').reverse().join('/')
        return formatedDate
    },

    haveComma(amount) {
         for (const comma of amount) {
            if(comma === ',') {
                formatedAmount = unformattedAmount.replace(',', '.')
                return formatedAmount
            } else {
                return amount
            }
         }
    },

    formatAmount(unformattedAmount) {
        let formatedAmount = this.haveComma(unformattedAmount)
        const needDot = Number.isInteger(Number(formatedAmount))
        
        if (needDot === true) {
            formatedAmount = Number(unformattedAmount).toFixed(2)
        }

        return formatedAmount
    }
}