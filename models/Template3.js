const mongoose = require('mongoose');

const Template3 = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users',
        required: true
    },
    navPrimaryColor: String,
    navSecondaryColor: String,
    navTextColour: String,
    backgroundColour: String,
    website_name: String,
    heading: String,
    subHeading: String,
    img1: String,
    img2: String,
    img3: String,
    img4: String,
    img5: String,
    img6: String,
    img7: String,
    img8: String,
    img9: String,
    img10: String,
    img11: String,
    img12: String
})

module.exports = mongoose.model("Template3", Template3, "Template3");