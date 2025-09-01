import { useState, useEffect } from 'react'
import Filter from './components/filter'
import PersonForm from './components/personForm'
import Persons from './components/persons'

import phoneService from './services/phoneService'

const App = () => {

  
  const get_data = () =>{
    phoneService.getAll()
    .then(
      response => {
        const person_data = response.data
        // console.log(person_data);
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
  const [del, SetDel] = useState('')


  function handleNameChange(e){
    setNewName(e.target.value)
  }

  const handlePhoneChange = (y) =>{
    setNewPhone(y.target.value)
    // console.log(newPhone);
  }

  const handleSubmit = (v) =>{
    v.preventDefault()
    let val = persons.find(obj => obj.name === newName)
    if(val === undefined){
      let new_obj = {name: newName, number:newPhone}
      setPersons(prev => prev.concat({name: newName, number:newPhone}))
      phoneService.create(new_obj)
      setTimeout(()=>{
       const notif =  document.getElementById("notif")
       notif.style.display = "block"
      },"20")
      setTimeout(()=>{
       const notif =  document.getElementById("notif")
       notif.style.display = "none"
      },"1000")
    


    }else{
      let bool;
    
      if (!(window.confirm(`${newName} already exists. Would you like to update their number to: ${newPhone} ?`))) return
      let name = persons.find(obj => obj.name === newName)
      let url = name.id
      
      let new_obj = {name: newName, number:newPhone}
     
     
      phoneService.put(url,new_obj).catch(error => {
        alert(`the user '${newName}' was already deleted from server`, error)     
        const notif = document.getElementById('del-notif')
        notif.textContent = `${newName}' was already deleted from server`
        setTimeout(()=>{notif.style.display = "block"},"20")
        setTimeout(()=>{notif.style.display = "none"},"1000")
        bool = true    
      })
      
      if(bool){

        return;
       

      }else{
         const notif = document.getElementById('notif')
      notif.textContent = `Edited ${newName}`
       setTimeout(()=>{
       const notif =  document.getElementById("notif")
       notif.style.display = "block"
      },"20")
      setTimeout(()=>{
       const notif =  document.getElementById("notif")
       notif.style.display = "none"
      },"1000")

      }
     
    }
  }

  const handleDelete = (id,name) =>{

    if(window.confirm("Are you sure you want to delete?")){
        phoneService.delete_el(id)

        console.log('deleted', name);
        SetDel(name);

        setTimeout(()=>{
        const notif =  document.getElementById("del-notif")
        notif.style.display = "block"
        },"20");
        setTimeout(()=>{
        const notif =  document.getElementById("del-notif")
        notif.style.display = "none"
        },"1000");

    }else{
      alert("Deletion aborted.")
    }
  }
  const renderPerson = persons.map((x)=>{return <li key={x.id}>{x.name} - {x.number} <button onClick={()=>handleDelete(x.id, x.name)}>Delete</button></li>})
  const renderRes = res.map((x)=>{return <li key={x.id}>{x.name} - {x.number}<button onClick={()=>handleDelete(x.id, x.name)}>Delete</button></li>})

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
      <div id="notif"  className="notif" style={{display:'none'}}>
        Added {newName}.
      </div>

      <div id="del-notif"  className="del-notif" style={{display:'none'}}>
        Deleted {del}.
      </div>
      
      
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