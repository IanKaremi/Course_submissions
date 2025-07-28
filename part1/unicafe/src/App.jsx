import { useState } from 'react'
import Statistics from './compoents/statistics'



function App() {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <>
    <h1>Give Feedback</h1>
    <button onClick={()=>setGood(good+1)}>Good</button>
    <button onClick={()=>setNeutral(neutral+1)}>neutral</button>
    <button onClick={()=>setBad(bad+1)}>bad</button>


    {(good==0 && neutral==0 && bad == 0) && <div>No feedback given.</div>}

    {!(good==0 && neutral==0 && bad == 0) && <Statistics g={good} n={neutral} b={bad}/>}
   

    {!(good==0 && neutral==0 && bad == 0) && <p>average {(good + (bad*-1))/(good+neutral+bad)}</p>}
    {!(good==0 && neutral==0 && bad == 0) && <p>positive {good/(good+neutral+bad)*100}%</p>}
      
    </>
  )
}

export default App
