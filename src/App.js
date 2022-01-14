import React, { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
  ]

  const [selected, setSelected] = useState(0)

  const [points, setPoints] = useState(new Array(anecdotes.length).fill(0))

  const manipulateArray = (points, setPoints, selected) => {
    const copy = [...points]
    copy[selected] += 1
    setPoints(copy)
  }

  const getAnecdoteWithMostVotes = (points, anecdotes) => {
    let highestVote = 0
    let anecdote = ""
    for(let i = 0; i < points.length; i++){
      if(points[i] > highestVote){
        anecdote = anecdotes[i]
        highestVote = points[i]
        i = 0
      }
    }

    return anecdote
  }

  const divStyle = {
    display: 'flex',
    alignItems: 'center'
  };

  return (
    <div>
      <h1>
        Anecdote of the day
      </h1>
      {anecdotes[selected]}
      <p>
        Got {points[selected]} votes.
      </p>
      <div style={divStyle}>
        <Button onclick={() => manipulateArray(points, setPoints, selected)} text="vote"/>
        <Button onclick={() => setSelected(Math.floor(Math.random()*(7)))} text="next anecdote"/>
      </div>
      <h1>
        Anecdote with most votes
      </h1>
      {getAnecdoteWithMostVotes(points, anecdotes)}
    </div>
  )
}

const Button = (props) => {
  return (
    <div>
      <button onClick={props.onclick}>
        {props.text}
      </button>
    </div>
  )
}

export default App