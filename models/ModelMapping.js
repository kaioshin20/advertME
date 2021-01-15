const mongoose = require('mongoose');

const ModalMapping = new mongoose.Schema({
    id: {
        type: String,
        required: true
    },
    modal: {
        type: String,
        requires: true
    }
})

module.exports = mongoose.model("ModalMapping", ModalMapping, "ModalMapping");