import React from 'react'
import {createAnecdoteAction} from '../reducers/anecdoteReducer'
import {createAnecdoteActionNotification, createResetNotification} from '../reducers/notificationReducer'

const AnecdoteForm = props => {
  const {store} = props
  const createNew = event => {
    event.preventDefault()
    store.dispatch(createAnecdoteAction(event.target.anecdote.value))
    store.dispatch(createAnecdoteActionNotification(event.target.anecdote.value))
    event.target.anecdote.value = ''
    window.setTimeout(() => store.dispatch(createResetNotification()), 3000)
  }

  return (
    <>
    <form onSubmit={createNew}>
        <div>
          <input name='anecdote'/>
        </div>
        <button>create</button>
      </form>
    </>
  )
}
export default AnecdoteForm