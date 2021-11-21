const express = require("express")
const app = express()
const mongoose = require("mongoose")
const url = "mongodb+srv://test:test@cluster0.i9rtd.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
const mySchema = require('./studentSchema');

mongoose.connect(url).then(()=> console.log("Connected to DB"))
app.use(express.json())
app.post("/add-new-post",async(req,res)=> {
    const studentName = req.body.name;
    const studentRegNo = req.body.registrationNumber;
    const studentMarks = req.body.marks; 

    try{
        const newStudent = new mySchema(
            {
                name:studentName,
                registrationNumber:studentRegNo,
                marks:studentMarks
            }
        )
        const savedStudent = await newStudent.save()
        res.json(
            {"message" : "Student is saved", "data": savedStudent}
        )

    }catch(err){
        res.json(err);
    }

})
app.use("/",(req,res)=> {
    res.json(
        {"message" : "Server running"}
    )
})

app.listen(3001, ()=>console.log("Express Server Started"))