const User = require("../../models/User");
const {cloudinary} = require('../../utilities/cloudinary');

exports.getSiteList = async(req, res, next) => {
    try{
        let response = await User.findById(req.params.id);
        let siteList = response.websites;
        console.log(siteList);
        res.send(siteList);
    }
    catch(err){
        console.log(err);
        res.send(err);
    }
}