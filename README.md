### On12 API-CRUD | Projeto Guiado

Aluna : [Ana Paula Lima ](https://www.linkedin.com/in/ana-paula-lima-3269214b/#) 

Prof.: Paula Allemand

## Bem vinda ao {reprograma}trip
Uma api que permite você observar diferentes viagens de ônibus, controlando informações sobre o motorista e passageiros!<br />

O CRUD foi criado observando as demandas de negócio :point_down:

# Demandas de Negócio

- ver todas as viagens disponíveis<br />
- ver viagens por tempo de duração<br />
- ver viagens com número de passageiros<br />
- ordenar viagens com número de paradas<br />

- cadastrar novo passageiro em uma viagem enviando apenas nome, email e id da viagem<br />
- cadastrar todas as informações de um novo motorista em uma viagem<br />

- deletar uma viagem<br />
- deletar um passageiro no sistema<br />

- editar qualquer dado do motorista<br />
- substituir motorista<br />
- editar nome do passageiro no sistema<br />
- atualizar um passageiro no sistema<br />

# Orientações para requests (Contrato API)
O espaço abaixo para organizar as urls e respectivas ações do CRUD, relacionando com as demandas de negócio.<br />

## Em aula
- ver todas as viagens disponíveis<br />
{GET}/travels
const getAllTravels

- pesquisar uma viagem por id<br />
{GET}/travels/:id
const getTravelById

- cadastrar novo passageiro em uma viagem enviando apenas nome, email e id da viagem<br />
  {POST}/travels/:id/passenger/create
   {
        "id": automatico,
        "name": String,
        "email": String,
        "documentNumber": String,
        "travelId": String
    }
    const createPeople


- deletar um passageiro do sistema<br />
{DELETE}/passenger/:id
const deletePeople

//apesar do PUT ser usado para substituir
- atualizar um passageiro no sistema<br />
{PUT}/passenger/:id/update

​       {
​            "name": String,
​            "email": String,
​            "documentNumber": String,
​            "travelId": String
​        }


- editar nome do passageiro no sistema<br />
 {PATCH}/passenger/:id/updateName
  {
     "name":String
  }
  const updateName

- ordenar viagens com número de passageiros<br />

​    travels.passengersInfos.sort((a,b)=> b.year - a.year)

- cadastrar todas as informações de um novo motorista em uma viagem<br />

​       {POST}/travels/:id/Driver/create
​       {
​        "id": String,
​        "name": String,
​        "license": String
​       }
​       const createDriver

- editar qualquer dado do motorista<br />
Editar qualquer dado
{PATCH}/travel/:id/updatedriverInfos
 {
     "id": String,
     "name": String,
    "license": String
 }
 const updatedriverInfos

- substituir motorista<br />
{PUT}/travel/:id/modifydriverInfos

​        {
​            "id": String,
​            "name": String,
​            "license": String
​        }

​        const modifydriverInfos

- deletar uma viagem<br />

  {delete}/travel/:id

  const deleteTravel

DESAFIO \o/<br />
- ver viagens por tempo de duração<br />
- ordenar viagens com número de paradas<br />
travels.sort((a,b)=> a.stops - b.stops)



