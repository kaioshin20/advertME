const mongoose = require('mongoose');

const Template2 = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users',
        required: true
    },
    siteThemeColour: String,
    navPrimaryColor: String,
    navSecondaryColor: String,
    navTextColour: String,
    website_name: String,
    website_description: String,
    carousel_img1: String,
    carousel_img2: String,
    section1_image: String,
    section2_image: String,
    section1_heading: String,
    section1_content: String,
    section2_heading: String,
    section2_content: String,
    cardH1: String,
    cardC1: String,
    cardH2: String,
    cardC2: String,
    cardH3: String,
    cardC3: String,
    cardH4: String,
    cardC4: String,
    slogan: String
})

module.exports = mongoose.model("Template2", Template2, "Template2");