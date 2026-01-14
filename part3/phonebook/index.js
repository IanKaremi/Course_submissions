const express = require('express')
const { NULL } = require('mysql/lib/protocol/constants/types')
const app = express()
app.use(express.json())

let phonebook = [
    { 
      "id": "1",
      "name": "Arto Hellas", 
      "number": "040-123456"
    },
    { 
      "id": "2",
      "name": "Ada Lovelace", 
      "number": "39-44-5323523"
    },
    { 
      "id": "3",
      "name": "Dan Abramov", 
      "number": "12-43-234345"
    },
    { 
      "id": "4",
      "name": "Mary Poppendieck", 
      "number": "39-23-6423122"
    },
    { 
      "id": "5",
      "name": "Fake 1", 
      "number": "31-33-922122"
    }
]

const PORT = 3001
app.listen(PORT, ()=>{
    console.log(`Server running on port ${PORT}`)
})

app.get('/api/persons',(request,response)=>{
    response.json(phonebook)
    
})

app.get('/info',(request,response)=>{
     const date_now = new Date();
    response.json(`Phonebook has info for ${phonebook.length} people.
    ${date_now.toString()}`)

})

app.get('/api/persons/:id', (request, response) => {
    const id = request.params.id;
    const person = phonebook.find(x => x.id === id);

    if (person) {
        response.json(person);
    } else {
        response.status(410).json("No matching user found.");
    }
});

app.delete('/api/persons/:id',(request,response)=>{
  const id = request.params.id;
  const person = phonebook.find(x => x.id === id);
 

    if (person) {
        phonebook  = phonebook.filter(x=> x.id !== person.id)
       
        response.json("Deleted.");
    } else {
        response.status(410).json("No matching user found.");
    }
  
   

})

app.post('/api/persons',(request,response)=>{
    const id = Math.floor(Math.random()*1000000)
    const name = request.body.name;
    const number = request.body.number;

    let blank = !request.body.name  || !request.body.number
    let exists = phonebook.some((x)=> x.name === name)

    if (blank){// if no
      response.status(400).json({ Error: "Missing fields. Make sure name & number are filled." });
    
    }else{
      if(exists){
        response.status(400).json({Error: "Name must be unique."});
      
        console.log(exists)    
      }else{
        phonebook.push(
        {"id" : id,
        "name" : name,
        "number" : number})
        response.json("Added.")

      }
  }
    

    
  
})