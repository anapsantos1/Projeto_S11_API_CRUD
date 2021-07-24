const travels = require("../models/travels.json");
const passengers = require("../models/passengers.json");
const utils = require("../utils/travelsUtils");

travels.sort((a,b)=> b.passengersInfos - a.passengersInfos)

travels.sort((a,b)=> a.stops - b.stops)

const fs = require("fs");

const getAllTravels = (req, res) => {
    res.status(200).send(travels);

};

const getTravelById = (req, res) => {
    let idRequerido = req.params.id;

    let filteredTravel = utils.findById(travels, idRequerido);

    res.status(200).send(filteredTravel);
};



const createPeople = (req, res) => {
   

    let {name, email, documentNumber} = req.body

    let newPerson = {id: Math.random().toString(32).substr(2), 
        name, 
        email, 
        documentNumber 
    };

    let travelrequiredId = req.params.id;

    let travelRequired = utils.findById(travels, travelrequiredId)


    travels.forEach((travel) => {
        let sameTravel = travel === travelRequired;
        if (sameTravel){
            travel.passengersInfos.push(newPerson);
        }
    })

   
    fs.writeFile("./src/models/travels.json", JSON.stringify(travels), 'utf8', function (err){
        if(err){

            res.status(500).send({
                "message": err
            })

        }else{
            res.status(201).send({"message": "Passageiro adicionado a viagem com sucesso", travelRequired});
        }

    });
    

};

const deletePerson = (req, res) => {
    
    let requestId = req.params.id;

    //
    const filteredPerson = utils.findById(passengers, requestId);

    console.log(filteredPerson);

    const index = passengers.indexOf(filteredPerson);

    if(index >= 0){
        passengers.splice(index, 1);

        fs.writeFile("./src/models/passengers.json", JSON.stringify(passengers), 'utf8', function (err){
            if(err){
    
                res.status(500).send({
                    "message": err
                })
    
            }else{
                res.status(200).send({"mesage": "Passageiro excluido com sucesso", passengers})
            }
        });

        
    };


};

const updatePeople = (req, res) => {

    let requestId = req.params.id;
    const filteredId = utils.findById(passengers, requestId);

    let {name, email, documentNumber, travelId} = req.body

    let replacePerson = {
        "id": requestId,
        name, 
        email, 
        documentNumber,
        travelId 
    };

    let indice = passengers.indexOf(filteredId);    
    if(indice >= 0){
    passengers.splice(indice, 1, replacePerson);

    fs.writeFile("./src/models/passengers.json", JSON.stringify(passengers), 'utf8', function (err){
        if(err){

            res.status(500).send({
                "message": err
            })

        }else{
            res.status(200).send({"mensagem": "Put de substituição criado com sucesso", replacePerson})
        }
    });


    };




};

const updateName = (req, res) => {
    
    let requestId = req.params.id;
    
    const filteredId = utils.findById(passengers, requestId);

    let indice = passengers.indexOf(filteredId);

    if(indice >= 0){

    let updatedInform = req.body;

    let keyList = Object.keys(updatedInform);

    keyList.forEach((conteudo) => {
        console.log('chave', conteudo);
        filteredId[conteudo] = updatedInform[conteudo];
    });

    fs.writeFile("./src/models/passengers.json", JSON.stringify(passengers), 'utf8', function (err){
        if(err){

            res.status(500).send({
                "message": err
            })

        }else{
            res.status(200).send({"mensagem": "Titulo atualizado com sucesso", filteredId})
        }
    });


};

};

const createDriver = (req, res) => {
    

    let {name, license} = req.body

    let newDriver = {id: Math.random().toString(32).substr(2), 
        name, 
        license
    };

    console.log(newDriver)

    let travelrequiredId = req.params.id;

    let travelRequired = utils.findById(travels, travelrequiredId)

    travels.forEach((travel) => {
        let sameTravel = travel === travelRequired;
        if (sameTravel){
            travel.driverInfos.reserveDriver = newDriver;
        }
    });

    fs.writeFile("./src/models/travels.json", JSON.stringify(travels), 'utf8', function (err){
        if(err){

            res.status(500).send({
                "message": err
            })

        }else{
            res.status(201).send({"message": "Passageiro adicionado a viagem com sucesso", travelRequired});
        }

    });
    

};

const updatedriverInfos = (req, res) => {
    
    let requestIdDriver = req.params.id;

    let filteredIdDrive = utils.findById(travels, requestIdDriver)

    console.log('filteredIdDrive', filteredIdDrive);

    let indice = travels.indexOf(filteredIdDrive);  
    
    let {name, license} = req.body

    let updateDriver = {id: requestIdDriver, 
        name, 
        license
    };

   if(indice >= 0){


    travels.forEach((conteudo) => {
        console.log('chave', conteudo);

        let sameTravel = conteudo === filteredIdDrive;
        if (sameTravel){
        conteudo.driverInfos = updateDriver;
        }
    });

    fs.writeFile("./src/models/travels.json", JSON.stringify(travels), 'utf8', function (err){
        if(err){

            res.status(500).send({
                "message": err
            })

        }else{
            res.status(200).send({"mensagem": "Informação atualizada com sucesso", filteredIdDrive})
        }
    });

 };

};

const modifydriverInfos = (req, res) => {
    
    let requestIdDriver = req.params.id;

    let filteredIdDrive = utils.findById(travels, requestIdDriver)

    console.log('filteredIdDrive', filteredIdDrive);

    let indice = travels.indexOf(filteredIdDrive);  
    
    let {name, license} = req.body

    let modifyDriver = {id: Math.random().toString(32).substr(2), 
        name, 
        license
    };

   if(indice >= 0){


    travels.forEach((conteudo) => {
        console.log('chave', conteudo);

        let sameTravel = conteudo === filteredIdDrive;
        if (sameTravel){
        conteudo.driverInfos = modifyDriver;
        }
    });

    fs.writeFile("./src/models/travels.json", JSON.stringify(travels), 'utf8', function (err){
        if(err){

            res.status(500).send({
                "message": err
            })

        }else{
            res.status(200).send({"mensagem": "Motorista Substituido com sucesso", filteredIdDrive})
        }
    });

 };

};

const deleteTravel = (req, res) => {
    
    let requestId = req.params.id;

    //
    const filteredTravel = utils.findById(travels, requestId);

    console.log(filteredTravel);

    const index = travels.indexOf(filteredTravel);

    if(index >= 0){
        travels.splice(index, 1);

        fs.writeFile("./src/models/travels.json", JSON.stringify(travels), 'utf8', function (err){
            if(err){
    
                res.status(500).send({
                    "message": err
                })
    
            }else{
                res.status(200).send({"mesage": "Viagem excluida com sucesso", travels})
            }
        });

        
    };


}





module.exports = {
    getAllTravels, getTravelById, createPeople, deletePerson, updatePeople, updateName, createDriver,updatedriverInfos,modifydriverInfos,deleteTravel
}




module.exports = {
    getAllTravels, getTravelById, createPeople, deletePerson, updatePeople, updateName, createDriver,updatedriverInfos,modifydriverInfos,deleteTravel
}
