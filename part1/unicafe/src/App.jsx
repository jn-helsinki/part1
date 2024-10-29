import { useState } from 'react'


const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [score, setScore] = useState(0)
  const [total, setTotal] = useState(0)

  const handleGoodClick = () =>{
    setGood(good+1)
    setScore(score+1)
    setTotal(total+1)
  }

  const handleNeutralClick = () =>{
    setNeutral(neutral+1)
    setTotal(total+1)
  }

  const handleBadClick = () =>{
    setBad(bad+1)
    setScore(score-1)
    setTotal(total+1)
  }

  return (<>
    <h1>give feedback</h1>
    <div>
    <button onClick = {handleGoodClick}>good</button>
    <button onClick = {handleNeutralClick}>neutral</button>
    <button onClick = {handleBadClick}>bad</button>
    </div>
    <h1>statistics</h1>
    <div>
      <div>good {good}</div>
      <div>neutral {neutral}</div>
      <div>bad {bad}</div>
      <div>all {total}</div>
      <div>average {score/total}</div>
      <div>positive {good/total}%</div>
    </div>
    </>
  )
}

export default App
