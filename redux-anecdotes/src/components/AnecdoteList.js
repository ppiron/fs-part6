import React from 'react'
import {connect} from 'react-redux'
import {voteAction} from '../reducers/anecdoteReducer'
import {voteActionNotification, createResetNotification} from '../reducers/notificationReducer'

const AnecdoteList = props => {
  const vote = id => {
    props.voteAction(id)
    const content = props.anecdotes.find(anecdote => anecdote.id === id).content
    props.voteActionNotification(content, 3000)
  };

  return (
    <>
      {props.anecdotes.sort((a1, a2) => a2.votes - a1.votes).map(anecdote => (
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

const anecdotesToShow = ({anecdotes, filter}) => {
  return anecdotes.filter(anecdote => anecdote.content.toLowerCase().includes(filter.toLowerCase())) 
}

const mapStateToProps = state => {
  return {
    anecdotes: anecdotesToShow(state)
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