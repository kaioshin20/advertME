const cloudinary = require('cloudinary');

cloudinary.config({
    cloud_name: 'kaioshin',
    api_key: '722974177559755',
    api_secret: 'b_Qa_8k5iydI_0bi9qliEYKp9Os',
});

module.exports = { cloudinary };