import { useState } from 'react'

const App = () => {

  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')
  const [newPhone, setNewPhone] = useState('')

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

  const renderPerson = persons.map((x)=>{return <li key={x.name}>{x.name} - {x.number}</li>})
 

  return (
    <div>
      <h2>Phonebook</h2>
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
      <ul>{renderPerson}</ul>
    </div>
  )
}

export default App