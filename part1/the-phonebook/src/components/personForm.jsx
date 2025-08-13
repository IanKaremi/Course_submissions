export default function PersonForm(props) {
    
    return(
        <form onSubmit={props.handleSubmit}>
        <div>
          name: <input value={props.newName} onChange={props.handleNameChange}/>
        </div>
        <div>
          number: <input type='tel' maxLength='10' minLength='10' value={props.newPhone} onChange={props.handlePhoneChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    )
    
}