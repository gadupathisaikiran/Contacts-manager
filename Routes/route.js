const router = require("express").Router()

const bodyparser = require("body-parser")




const contactmodel = require("../model/contactmodel")


router.use(bodyparser.json())

// post part......................................////.............................................................

router.post("/v1/contacts", async (req, res) => {


    try {

        const userfind = await contactmodel.find({ email: req.body.email })

     

        if (!userfind[0]) {

            if (req.body.firstName && req.body.lastName && req.body.email && req.body.phone) {


                const User = await contactmodel.create(req.body)
                res.status(201).json({
                    User
                })


            }
            if (!req.body.firstName) {

                res.status(404).json({
                    error: "missing required field : first name "
                })

                return
            }
            if (!req.body.lastName) {

                res.status(404).json({
                    error: "missing required field : last name "
                })
                return
            }
            if (!req.body.email) {

                res.status(404).json({
                    error: "missing required field : email "
                })

                return
            }

            if (!req.body.phone) {

                res.status(404).json({
                    error: "missing required field : phone number"
                })

                return
            }


            if (!req.body) {

                res.status(404).json({
                    error: "enter details"
                })

                return
            }



        }


        if (userfind[0]) {
            res.status(404).json({
                error: "user already exist"
            })

            return
        }


    }

    catch (e) {

        res.status(404).json({
            message: e.message
        })


    }




})



// get part.////////////////////////////////./////////





router.get("/v1/contacts",async(req,res)=>{


    try{
        const contacts = await contactmodel.find({})


    

            res.status(200).json({
                contacts

            })
        



    }
    catch(e){
        res.status(404).json({
            message:e.message
        })

    }


})


// get contacts by id .......................////....................................




router.get("/v1/contacts/:id",async(req,res)=>{

    const ID=req.params.id

    try{
        const contacts = await contactmodel.find({_id:ID})


      if(contacts[0]){

        res.status(200).json({
            contacts

        })



        return

      }
      else{

        res.status(404).json({
            error: "There is no contact with that id"

        })
      }

          
        



    }
    catch(e){
        res.status(404).json({
            message:e.message
        })

    }


})



// ..........................//.......................DELETE PART




router.delete("/v1/contacts/:id",async(req,res)=>{

    const ID=req.params.id

    try{
        const contacts = await contactmodel.findByIdAndDelete({_id:ID})


      if(contacts){

        res.status(204).json({
            

        })



        return

      }
      else{

        res.status(404).json({
            error: "There is no contact with that id"

        })
      }

          
        



    }
    catch(e){
        res.status(404).json({
            message:e.message
        })

    }


})



// ...............................PUT part.............................





router.put("/v1/contacts/:id",async(req,res)=>{

    const ID=req.params.id

    

    try{
        const contacts = await contactmodel.findByIdAndUpdate({_id:ID},{firstName:req.body.firstName,lastName:req.body.lastName,email:req.body.email,phone:req.body.phone})

       

      if(contacts){

        res.status(204).json({
            

       
        })



        return

      }
      else{

        res.status(404).json({
            error: "There is no contact with that id"

        })
      }

          
        



    }
    catch(e){
        res.status(404).json({
            message:e.message
        })

    }


})


// /,,,,,,,,,,,,,,,,,,,,,,,//...........................patch part..........



router.patch("/v1/contacts/:id",async(req,res)=>{

    const ID=req.params.id

    

    try{
        const contacts = await contactmodel.findByIdAndUpdate({_id:ID},{firstName:req.body.firstName,lastName:req.body.lastName,email:req.body.email,phone:req.body.phone})

       

      if(contacts){

        res.status(204).json({
            

       
        })



        return

      }
      else{

        res.status(404).json({
            error: "There is no contact with that id"

        })
      }

          
        



    }
    catch(e){
        res.status(404).json({
            message:e.message
        })

    }


})






module.exports = router
