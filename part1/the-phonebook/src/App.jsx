import { useState } from 'react'

const App = () => {

  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')

  function handleChange(e){
  
    setNewName(e.target.value)
    
    
  }
  const handleSubmit = (v) =>{
    v.preventDefault()
    console.log(newName);
    setPersons(prev => prev.concat({name: newName}))
    
  }

  const renderPerson = persons.map((x)=>{return <li>{x.name}</li>})
 

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={handleSubmit}>
        <div>
          name: <input value={newName} onChange={handleChange}/>
          debug: {newName}
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