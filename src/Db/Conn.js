const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/express_node')
.then( ()=> console.log("Connection is Good"))
.catch( (err)=>console.log(err))

const userSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },

    email : {
        type : String,
        required : true
    },

    phone : {
        type : Number,
        required :true,
     
    },

    password : { String,
   
    
    }
  
})

    const User = new mongoose.model("USER", userSchema)

    // const createDocument = async ()=>{
    //     try{

    //         const DoDo = new User({
    //             name : "Aasim",
    //             email : "soomro@gmail.com",
    //             phone : 03453432440,
    //             password : "lunduuu"
    //         })

    //         const Mongo = new User({
    //             name : "Farhan",
    //             email : "sardar@gmail.com",
    //             phone : 03453432440,
    //             password : "lunduuu"
    //         })

    //         const MongoDb = new User({
    //             name : "Mosu",
    //             email : "Mosu@gmail.com",
    //             phone : 03453432440,
    //             password : "lunduuu"
    //         })

    //         const Nodejs = new User({
    //             name : "Shahzd",
    //             email : "soomr@gmail.com",
    //             phone : 03453432440,
    //             password : "lunduuu"
    //         })

    //         const Reactjs = new User({
    //             name : "Nawaz",
    //             email : "Nawazsoomro@gmail.com",
    //             phone : 03453432440,
    //             password : "lunduuu"
    //         })

    //         const CSharp = new User({
    //             name : "Akhtiyar",
    //             email : "Akhtiyarsoomro@gmail.com",
    //             phone : 03453432440,
    //             password : "lunduuu"
    //         })
        
    //     const data = await User.insertMany([DoDo,Mongo,MongoDb,Nodejs,Reactjs,CSharp]);
    //     console.log(data)
    //     }catch(err) {
    //         console.log(err)
    //     }
    // }

    // createDocument();

//     const findData = async ()=>{


//    try {
//         const duty = await User.find({$and : [{name : "Farhan"}, {name :"Farhan"}]})
//         .select({name : 1})
//         .limit(2)
//         console.log(duty)       
   
//    }catch(err) {
//         console.log(err)
//    }

// }
// findData();


    const deleteData = async (_id)=>{
        try{
            const result = await User.deleteOne({_id})
            console.log(result)
        }catch(err) {
            console.log(err)
        }
        
    }
    deleteData("6138c0b5ed35f1a32ed95b63")
