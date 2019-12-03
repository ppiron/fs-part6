import React from 'react'
import {createAnecdoteAction} from '../reducers/anecdoteReducer'

const AnecdoteForm = props => {
  const {store} = props
  const createNew = event => {
    event.preventDefault()
    store.dispatch(createAnecdoteAction(event.target.anecdote.value))
    event.target.anecdote.value = ''
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