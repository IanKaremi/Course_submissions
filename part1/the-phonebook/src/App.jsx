import { useState } from 'react'

const App = () => {

  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ]) 
  const [newName, setNewName] = useState('')
  const [newPhone, setNewPhone] = useState('')
  const [param, setParam] = useState('')
  const [res, setRes] = useState([])

  function handleNameChange(e){
  
    setNewName(e.target.value)
    
    
  }
  const handlePhoneChange = (y) =>{
    setNewPhone(y.target.value)
    console.log(newPhone);
    

  }

  const handleSubmit = (v) =>{
    v.preventDefault()
    
    let val = persons.find(obj => obj.name === newName)
    if(val === undefined){
      setPersons(prev => prev.concat({name: newName, number:newPhone}))
    }else{
      alert(`${newName} already exists.`)
    }
    
    
  }

  const renderPerson = persons.map((x)=>{return <li key={x.id}>{x.name} - {x.number}</li>})

  const renderRes = res.map((x)=>{return <li key={x.id}>{x.name} - {x.number}</li>})


  const handleParamChange = (y) =>{
    setParam(y.target.value)
    let temp_arr = []
    
    persons.forEach((x)=>{
      if (x.name.toLowerCase().includes(y.target.value)){
        console.log(y.target.value);
        temp_arr.push(x) 
      }
    })
    
    console.log('results',temp_arr)
    setRes(temp_arr)
    

  }
 

  return (
    <div>
      <h1>Phonebook</h1>
      <form>
        filter by name <input value={param} onChange={handleParamChange} />
      </form>
      <h2>add a new</h2>
      <form onSubmit={handleSubmit}>
        <div>
          name: <input value={newName} onChange={handleNameChange}/>
        </div>
        <div>
          number: <input type='tel' maxLength='10' minLength='10' value={newPhone} onChange={handlePhoneChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>{res.length > 0 ? renderRes :renderPerson}</ul>
    </div>
  )
}

export default App