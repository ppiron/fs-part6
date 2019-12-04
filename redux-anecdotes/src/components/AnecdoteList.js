import React from 'react'
import {connect} from 'react-redux'
import {voteAction} from '../reducers/anecdoteReducer'
import {voteActionNotification, createResetNotification} from '../reducers/notificationReducer'

const AnecdoteList = props => {
  // const {store} = props
  // const filter =  store.getState().filter
  const anecdotes = props.anecdotes.filter(anecdote => anecdote.content.includes(props.filter))

  const vote = id => {
    props.voteAction(id)
    const content = anecdotes.find(anecdote => anecdote.id === id).content
    props.voteActionNotification(content)
    window.setTimeout(() => props.createResetNotification(), 3000)
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

const mapStateToProps = state => {
  return {
    anecdotes: state.anecdotes,
    filter: state.filter
  }
}

const mapDispatchToProps = {
  voteAction,
  voteActionNotification,
  createResetNotification
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AnecdoteList)