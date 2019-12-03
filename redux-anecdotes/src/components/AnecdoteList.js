import React from 'react'
import {voteAction} from '../reducers/anecdoteReducer'

const AnecdoteList = props => {
  const {store} = props
  const anecdotes = store.getState()

  const vote = id => {
    store.dispatch(voteAction(id))
  };

  return (
    <>
      {anecdotes.sort((a1, a2) => a2.votes - a1.votes).map(anecdote => (
        <div key={anecdote.id}>
          <div>{anecdote.content}</div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote.id)}>vote</button>
          </div>
        </div>
      ))}
    </>
  )
}

export default AnecdoteList