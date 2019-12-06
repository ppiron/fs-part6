import React from 'react'
import {connect} from 'react-redux'
import {createAnecdoteAction} from '../reducers/anecdoteReducer'
import {createAnecdoteActionNotification, createResetNotification} from '../reducers/notificationReducer'

const AnecdoteForm = props => {
  const createNew = async event => {
    event.preventDefault()
    const newContent = event.target.anecdote.value
    event.target.anecdote.value = ''
    await props.createAnecdoteAction(newContent)
    props.createAnecdoteActionNotification(newContent, 3000)
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