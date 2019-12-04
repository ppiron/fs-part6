import React from 'react'
import {connect} from 'react-redux'
import {createAnecdoteAction} from '../reducers/anecdoteReducer'
import {createAnecdoteActionNotification, createResetNotification} from '../reducers/notificationReducer'

const AnecdoteForm = props => {
  // const {store} = props
  const createNew = event => {
    event.preventDefault()
    props.createAnecdoteAction(event.target.anecdote.value)
    props.createAnecdoteActionNotification(event.target.anecdote.value)
    event.target.anecdote.value = ''
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