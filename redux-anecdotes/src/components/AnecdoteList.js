import React from 'react'
import {voteAction} from '../reducers/anecdoteReducer'
import {voteActionNotification, createResetNotification} from '../reducers/notificationReducer'

const AnecdoteList = props => {
  const {store} = props
  const filter =  store.getState().filter
  const anecdotes = store.getState().anecdotes.filter(anecdote => anecdote.content.includes(filter))

  const vote = id => {
    store.dispatch(voteAction(id))
    const content = anecdotes.find(anecdote => anecdote.id === id).content
    store.dispatch(voteActionNotification(content))
    window.setTimeout(() => store.dispatch(createResetNotification()), 3000)
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