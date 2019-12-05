import React from 'react'
import {connect} from 'react-redux'
import anecdoteService from '../services/anecdotes'
import {createAnecdoteAction} from '../reducers/anecdoteReducer'
import {createAnecdoteActionNotification, createResetNotification} from '../reducers/notificationReducer'

const AnecdoteForm = props => {
  // const {store} = props
  const createNew = async event => {
    event.preventDefault()
    const newContent = event.target.anecdote.value
    event.target.anecdote.value = ''
    const newAnecdote = await anecdoteService.createNew(newContent)
    props.createAnecdoteAction(newAnecdote)
    props.createAnecdoteActionNotification(newAnecdote.content)
    window.setTimeout(() => props.createResetNotification(), 3000)
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

const mapDispatchToProps = {
  createAnecdoteAction,
  createAnecdoteActionNotification,
  createResetNotification
}

export default connect(
  null,
  mapDispatchToProps
)(AnecdoteForm)