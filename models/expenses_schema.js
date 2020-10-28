const mongoose = require("mongoose")

const expensesSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true,
    },
    budget: {
        type: Number,
        required: true,

    },
    color:{
        type: String,
        required: true,
        validate: [isHexFormat, 'Color is not in Hexadecimal format']
    }
}, { collection: 'pb_expenses'})

function isHexFormat(s) {
    return /^#([A-Fa-f0-9]{6})$/.test(s)
}
module.exports = mongoose.model('pb_expenses', expensesSchema)