

const Pirate = require ("../models/pirates.model")

//READ_ALL_PIRATES!!!! 

module.exports.findAll = (request,response) =>{
    //FOR BLACK SORT 
    Pirate.find().sort({name:1})
    .then((allDaPirates)=>{
        response.json(allDaPirates)  
    })
    .catch(err=>response.json(err))
}


//CREATE_NEW_PIRATE

module.exports.addPirate = (request,response) =>{
    Pirate.create(request.body) 
    .then((newPirate)=>{
        console.log("Pirate created Succefully")
        response.json(newPirate) 

    })
    .catch(err=> response.status(400).json(err))         
}




//GET_ONE_PIRATEBY_ID

module.exports.findOne = (request,response) =>{
    Pirate.findById(request.params.id)
    
    .then((onePirate)=>{
        response.json(onePirate)  

    })
    .catch(err=>response.json(err))
}


//UPDATE_ONE_PIRATE

module.exports.updatePirate = (request,response) =>{
    Pirate.findByIdAndUpdate(request.params.id, request.body,{new:true, runValidators:true})
    
    .then((result)=>{
        response.json(result)  

    })
    .catch(err=>response.status(400).json(err))
}

//DELETE_A_PIRATE

module.exports.deletePirate = (request,response) =>{
    Pirate.findByIdAndDelete(request.params.id)
    
    .then((result)=>{
        response.json({result:result})  

    })
    .catch(err=>response.json(err))
}