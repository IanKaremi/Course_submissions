import { useState } from 'react'



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

    <h2>Statistics</h2>
    <p>good {good}</p>
    <p>neutral {neutral}</p>
    <p>bad {bad}</p>

    <p>average {(good + (bad*-1))/(good+neutral+bad)}</p>
    <p>positive {good/(good+neutral+bad)*100}%</p>
      
    </>
  )
}

export default App
