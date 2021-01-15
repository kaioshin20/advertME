const ModalMapping = require('../../models/ModelMapping');
const Template1 = require('../../models/Template1');
const Template2 = require('../../models/Template2');
const Template3 = require('../../models/Template3');
const User = require("../../models/User");
const {cloudinary} = require('../../utilities/cloudinary');

exports.getTemplate = async(req, res, next) => {
    try{
        let mappingData = await ModalMapping.find({id: req.params.id});
        console.log(mappingData, req.params.id);
        let data = null;
        if(mappingData[0].modal === "Template1")
            data = await Template1.findById(req.params.id);
        else if(mappingData[0].modal === "Template2")
            data = await Template2.findById(req.params.id);
        else if((mappingData[0].modal === "Template3"))
            data = await Template3.findById(req.params.id);
        console.log(data);
        res.send(data);
    }
    catch(err){
        console.log(err);
        res.send(err);
    }
}

//for edit site
exports.getEditTemplate = async(req, res, next) => {
    try{
        let mappingData = await ModalMapping.find({id: req.params.id});
        console.log(mappingData, req.params.id);
        let data = null;
        if(mappingData[0].modal === "Template1")
            data = await Template1.findById(req.params.id);
        else if(mappingData[0].modal === "Template2")
            data = await Template2.findById(req.params.id);
        else if((mappingData[0].modal === "Template3"))
            data = await Template3.findById(req.params.id);
        
        console.log("ghafsdhgsafdg", data);
        res.json(data)
    }
    catch(err){
        console.log(err);
        res.send(err);
    }
}

exports.getTemplateName = async(req, res, next) => {
    try{
        let response = await Template1.findById(req.params.id);
        if(response === null){
            response = await Template2.findById(req.params.id);
            if(response === null){
                response = await Template3.findById(req.params.id);
                if(response === null)
                    res.send("invalid");
                else
                    res.send("Template3");
            }
            else
                res.send("Template2")
        }
        else{
            res.send("Template1")
        }
    }
    catch(err){
        console.log(err);
        res.send(err);
    }
}

exports.deleteTemplate = async(req, res, next) => {
    try{
        let response;
        if(req.params.template === "Template1"){
            response = await Template1.findByIdAndDelete(req.params.id);
        }
        else if(req.params.template === "Template2"){
            response = await Template2.findByIdAndDelete(req.params.id);
        }
        else if((req.params.template === "Template3")){
            response = await Template3.findByIdAndDelete(req.params.id);
        }
        let publicIDS = response.imgIDS;
        for (const publicID of publicIDS) {
            await cloudinary.v2.uploader.destroy(publicID);
        }

        await ModalMapping.findOneAndDelete({id: req.params.id});

        let userData = await User.findById(req.params.userID);
        let userSiteArray = userData.websites;
        let newUserSiteArray = [];
        let counter = 0;
        userSiteArray.map((id, index) => {
            if(id != req.params.id){
                newUserSiteArray[counter] = id;
                counter++;
            }
        });
        let newUserData = {...userData._doc};
        newUserData.websites = newUserSiteArray;
        await User.findByIdAndUpdate(
            req.params.userID,
            newUserData
        )

        res.send(response); 
    }
    catch(err){
        console.log(err);
        res.send(err);
    }
}

exports.postTemplate1 = async(req, res, next) => {

    console.log("reac3")
    try{
        let data = {
            name: "Template1",
            user: req.body.user,
            imgIDS: null,
            navPrimaryColor: req.body.navPrimaryColor,
            navSecondaryColor: req.body.navSecondaryColor,
            website_name: req.body.website_name,
            website_description: req.body.website_description,
            section1_heading: req.body.section1_heading,
            section1_content: req.body.section1_content,
            section2_heading: req.body.section2_heading,
            section2_content: req.body.section2_content,
            section3_heading: req.body.section3_heading,
            founder_name: req.body.founder_name,
            founder_description: req.body.founder_description,
            slogan: req.body.slogan,
            navTextColour: req.body.navTextColour,
            sitePrimaryColour: req.body.sitePrimaryColour,
            siteSecondaryColour: req.body.siteSecondaryColour,
            carousel_img1: "nil",
            carousal_img2: "nil",
            founder_image: "nil"
        }
        const {carousel_img1,carousel_img2,founder_image} = req.body;
        let files = [];
        let publicIDS = [];
        files.push(carousel_img1);
        files.push(carousel_img2);
        files.push(founder_image);

        const urls = [];
        for (const file of files) {
          const newPath = await cloudinary.v2.uploader.upload(file);
          urls.push(newPath);
        }
    
        data.carousel_img1 = urls[0].url;
        publicIDS.push(urls[0].public_id);
        data.carousel_img2 = urls[1].url;
        publicIDS.push(urls[1].public_id);
        data.founder_image = urls[2].url;
        publicIDS.push(urls[2].public_id);

        data.imgIDS = publicIDS;
        
        console.log(data);
        console.log(publicIDS);
        if(req.params.edit === "true"){
            let response = await Template1.findByIdAndUpdate(req.body.siteID, data);
            console.log(response);
        }
        else{
            let response = await Template1.create(data);
            await ModalMapping.create({
                id: response._id,
                modal: response.name
            });

            let userData = await User.findById(req.body.user);
            let userSiteArray = userData.websites;
            let newUserSiteArray = [...userSiteArray];
            newUserSiteArray.push(response._id);
            let newUserData = {...userData._doc};
            newUserData.websites = newUserSiteArray;
            await User.findByIdAndUpdate(
                req.body.user,
                newUserData
            )
        }
        res.send("success");
    } catch(err){
        console.log(err);
        res.send(err);
    }
}

// ############################################################ TEMPLATE2 ############################################################

exports.postTemplate2 = async(req, res, next) => {
    try{
        let data = {
            name: "Template2" ,
            user: req.body.user,
            siteThemeColour: req.body.siteThemeColour,
            navPrimaryColor: req.body.navPrimaryColor,
            navSecondaryColor: req.body.navSecondaryColor,
            navTextColour: req.body.navTextColour,
            website_name: req.body.website_name,
            website_description: req.body.website_description,
            carousel_img1: "nil",
            carousel_img2: "nil",
            section1_image: "nil",
            section2_image: "nil",
            section1_heading: req.body.section1_heading,
            section1_content: req.body.section1_content,
            section2_heading: req.body.section2_heading,
            section2_content: req.body.section2_content,
            cardH1: req.body.cardH1,
            cardC1: req.body.cardC1,
            cardH2: req.body.cardH2,
            cardC2: req.body.cardC2,
            cardH3: req.body.cardH3,
            cardC3: req.body.cardC3,
            cardH4: req.body.cardH4,
            cardC4: req.body.cardC4,
            slogan: req.body.slogan
        }
        const {carousel_img1,carousel_img2,section1_image,section2_image} = req.body;
        let files = [];
        files.push(carousel_img1);
        files.push(carousel_img2);
        files.push(section1_image);
        files.push(section2_image);

        const urls = [];
        for (const file of files) {
          const newPath = await cloudinary.v2.uploader.upload(file);
          urls.push(newPath);
        }
    
        data.carousel_img1 = urls[0].url;
        data.carousel_img2 = urls[1].url;
        data.section1_image = urls[2].url;
        data.section2_image = urls[3].url;

        console.log(data);
        if(req.params.edit === "true"){
            let response = await Template2.findByIdAndUpdate(req.body.siteID, data);
            console.log(response);
        }
        else{
            let response = await Template2.create(data);
            await ModalMapping.create({
                id: response._id,
                modal: response.name
            });

            let userData = await User.findById(req.body.user);
            let userSiteArray = userData.websites;
            let newUserSiteArray = [...userSiteArray];
            newUserSiteArray.push(response._id);
            let newUserData = {...userData._doc};
            newUserData.websites = newUserSiteArray;
            await User.findByIdAndUpdate(
                req.body.user,
                newUserData
            )
        }
        res.send("success");
    } catch(err){
        console.log(err);
        res.send(err);
    }
}

// ############################################################ TEMPLATE3 ############################################################

exports.postTemplate3 = async(req, res, next) => {
    try{
        let data = {
            name: "Template3" ,
            user: req.body.user,
            navPrimaryColor: req.body.navPrimaryColor,
            navSecondaryColor: req.body.navSecondaryColor,
            navTextColour: req.body.navTextColour,
            backgroundColour: req.body.backgroundColour,
            website_name: req.body.website_name,
            heading: req.body.heading,
            subHeading: req.body.subHeading,
            img1: "nil",
            img2: "nil",
            img3: "nil",
            img4: "nil",
            img5: "nil",
            img6: "nil",
            img7: "nil",
            img8: "nil",
            img9: "nil",
            img10: "nil",
            img11: "nil",
            img12: "nil"
        }
        const {img1,img2,img3,img4,img5,img6,img7,img8,img9,img10,img11,img12} = req.body;
        let files = [];
        files.push(img1);
        files.push(img2);
        files.push(img3);
        files.push(img4);
        files.push(img5);
        files.push(img6);
        files.push(img7);
        files.push(img8);
        files.push(img9);
        files.push(img10);
        files.push(img11);
        files.push(img12);

        const urls = [];
        for (const file of files) {
          const newPath = await cloudinary.v2.uploader.upload(file);
          urls.push(newPath);
        }
    
        data.img1 = urls[0].url;
        data.img2 = urls[1].url;
        data.img3 = urls[2].url;
        data.img4 = urls[3].url;
        data.img5 = urls[4].url;
        data.img6 = urls[5].url;
        data.img7 = urls[6].url;
        data.img8 = urls[7].url;
        data.img9 = urls[8].url;
        data.img10 = urls[9].url;
        data.img11 = urls[10].url;
        data.img12 = urls[11].url;

        console.log(data);
        if(req.params.edit === "true"){
            let response = await Template3.findByIdAndUpdate(req.body.siteID, data);
            console.log(response);
        }
        else{
            let response = await Template3.create(data);
            await ModalMapping.create({
                id: response._id,
                modal: response.name
            });

            let userData = await User.findById(req.body.user);
            let userSiteArray = userData.websites;
            let newUserSiteArray = [...userSiteArray];
            newUserSiteArray.push(response._id);
            let newUserData = {...userData._doc};
            newUserData.websites = newUserSiteArray;
            await User.findByIdAndUpdate(
                req.body.user,
                newUserData
            )
        }
        res.send("success");
    } catch(err){
        console.log(err);
        res.send(err);
    }
}