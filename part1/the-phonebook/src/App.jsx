import { useState, useEffect } from 'react'
import Filter from './components/filter'
import PersonForm from './components/personForm'
import Persons from './components/persons'
import axios from 'axios'

const App = () => {

  
  const get_data = () =>{
    axios.get("http://localhost:3001/persons").then(
      response => {
        const person_data = response.data
        console.log(person_data);
        setPersons(person_data)
      
        
      }
    )
  }
  useEffect(get_data,[])

  const [persons, setPersons] = useState([]) 
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
        //console.log(y.target.value);
        temp_arr.push(x) 
      }
    })
    //console.log('results',temp_arr)
    setRes(temp_arr)
  }
 

  return (
    <div>
      <h1>Phonebook</h1>
      <Filter value={param} onChange={handleParamChange}/>
      <h2>add a new</h2>
      <PersonForm handleSubmit={handleSubmit} newName={newName} handleNameChange={handleNameChange} newPhone={newPhone} handlePhoneChange={handlePhoneChange}/>
      <h2>Numbers</h2>
      <Persons res={res} renderRes={renderRes} renderPerson={renderPerson}/>
      {/* <ul>{res.length > 0 ? renderRes :renderPerson}</ul> */}
    </div>
  )
}

export default App