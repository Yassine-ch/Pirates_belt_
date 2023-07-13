// CONTROLLER IMPORT

const Pirate = require ("../controllers/pirates.controllers")

//Routes

module.exports = (app) =>{
 // GetAllPirates
    app.get("/api/pirates", Pirate.findAll); 
     // CreateAnewPirate
    app.post("/api/pirates", Pirate.addPirate);
     // GetOneByID
    app.get("/api/pirates/:id",Pirate.findOne);
    // UpdatePirate
    app.put("/api/pirates/:id/edit",Pirate.updatePirate); 
    //DeletePirate
    app.delete("/api/pirates/:id/delete",Pirate.deletePirate); 
    
    }