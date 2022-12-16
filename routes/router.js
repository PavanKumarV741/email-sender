const express=require("express")
const router=express.Router()
const nodemailer=require("nodemailer")
const smtpTransport=require("nodemailer-smtp-transport")

router.post("/register",(req,res)=>{
    // console.log(req.body)
    const {email}=req.body
    try{
        const transporter=nodemailer.createTransport(smtpTransport({
            // port:587,    //or"587"         //for this not require to install nodemailer-smtp-transport and not require to write above smtpTransport 
            // secure:false,       // secure:true for port 465(default),secure:false for 587
            service:"gmail",
            auth:{
                user:process.env.EMAIL,
                pass:process.env.PASSWORD
            }
        }))

        const mailOptions={
            from:process.env.EMAIL,
            to:email,
            subject:"sending email with React and nodejs",
            html:"<h1>congratulations you succesfully send Email<h1/>"
        }

        transporter.sendMail(mailOptions,(err,info)=>{
            if(err){
                console.log("error",err)
            }else{
                console.log("email sent",info.response)
                res.status(201).json({info})
            }
        })
    }
    catch(err){
        res.status(401).json({err})
    }
})

module.exports=router