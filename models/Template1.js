const mongoose = require('mongoose');

const Template1 = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users',
        required: true
    },
    imgIDS: {
        type: Array,
        required: true
    },
    navPrimaryColor: String,
    navSecondaryColor: String,
    website_name: String,
    website_description: String,
    carousel_img1: String,
    carousel_img2: String,
    founder_image: String,
    section1_heading: String,
    section1_content: String,
    section2_heading: String,
    section2_content: String,
    section3_heading: String,
    founder_name: String,
    founder_description: String,
    slogan: String,
    navTextColour: String,
    sitePrimaryColour: String,
    siteSecondaryColour: String
})

module.exports = mongoose.model("Template1", Template1, "Template1");