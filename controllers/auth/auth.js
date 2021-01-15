const HttpStatus=require("http-status-codes")
const User=require('../../models/User')
const bcrypt = require('bcryptjs');
const jwt=require("jsonwebtoken")

module.exports={
async register(req,res){
    console.log("back register",req.body)
	const userEmail=await User.findOne({
		email:req.body.email.toLowerCase()
	});//to check if the email already exist
	if(userEmail){
		return res.json({message:"Email already exist"})
	}


	return bcrypt.hash(req.body.password,10,(err,hash)=>{
		if(err){
			return res.json({message:"Error hashing password"})
		}

		const body={
			email:req.body.email.toLowerCase(),
			password:hash,
			
		}

		User.create(body).
			then((user)=>{
				const token=jwt.sign({data:user},"Myjsonsecret",{
					 expiresIn:'5h'
				});
                res.cookie("auth",token);
                
                console.log(
                    "user care",user
                )
				res.json({message:"User created successfully",user,token})
			})
			.catch(err=>{
                console.log(
                    "user not created"
                )
				res.json({message:"Error occured"+err});
		})
	})
},

async login(req, res) {
	if (!req.body.email || !req.body.password) {
		return res
			.json({ message: 'No empty fields allowed' });
	}

	await User.findOne({ email: req.body.email })
		.then(user => {
			if (!user) {
				return res
					.json({ message: 'E-mail not found' });
			}

			return bcrypt.compare(req.body.password, user.password).then(result => {
				if (!result) {
					return res
						.json({ message: 'Password is incorrect' });
				}
				const token = jwt.sign({ data: user }, "Myjsonsecret", {
					expiresIn: '5h'
				});
                res.cookie('token', token);
                
                console.log("lgi",user,token)
				return res
					.json({ message: 'Login successful', user, token });
			});
		})
		.catch(err => {
			return res
				.json({ message: 'Error occured'+err });
		});
},



}