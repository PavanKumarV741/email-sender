require("dotenv").config()
const express=require("express")
const app=express()
const router=require("./routes/router")
const cors=require("cors")

app.get("/",(req,res)=>{
    res.send("api home page")
})

app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(cors())
app.use(router)

const PORT=5000
app.listen(PORT ,(err)=>{
    if(!err){
    console.log(`server running at port ${PORT}`)
    }
})
