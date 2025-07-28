import { useState } from 'react'
import Statistics from './components/statistics'
import StatisticsLine from './components/stat-line'
import Btn from './components/btn'



function App() {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <>
    <h1>Give Feedback</h1>

    <Btn text="good" onClick={()=>setGood(good+1)}/>
    <Btn text="neutral" onClick={()=>setNeutral(neutral+1)}/>
    <Btn text="bad" onClick={()=>setBad(bad+1)}/>    


    {(good==0 && neutral==0 && bad == 0) && <div>No feedback given.</div>}

    {!(good==0 && neutral==0 && bad == 0) && <>
    <h2>Statistics</h2>
    <StatisticsLine text="good" g={good}/>
    <StatisticsLine text="neutral" g={neutral}/>
    <StatisticsLine text="bad" g={bad}/>
    </>}
   

    {!(good==0 && neutral==0 && bad == 0) && <p>average {(good + (bad*-1))/(good+neutral+bad)}</p>}
    {!(good==0 && neutral==0 && bad == 0) && <p>positive {good/(good+neutral+bad)*100}%</p>}
      
    </>
  )
}

export default App
