import express from "express"

const port=3000;


const app = express()

const PORT = process.env.PORT || 3000





app.listen(PORT, ()=>{
    console.log(`Server listen at port ${PORT}`);
    // connectDB()
})