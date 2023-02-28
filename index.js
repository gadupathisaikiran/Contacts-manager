const express=require("express")

const app=express()

const bodyparser=require("body-parser")

const mongoose=require("mongoose");
app.use(bodyparser.json())

app.use("/",require("./Routes/route"))


async function main(){

    mongoose.connect('mongodb+srv://test-2:test-2@cluster0.bgdbs80.mongodb.net/?retryWrites=true&w=majority')
    .then(() => console.log('Connected!'));


} 


main()



app.listen(5005,()=>{console.log("port is listening at 5005")})







