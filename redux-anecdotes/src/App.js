import React , { useEffect } from 'react';
import {connect} from 'react-redux'
// import anecdoteService from './services/anecdotes'
import {initializeAnecdotes} from './reducers/anecdoteReducer'
import AnecdoteList from './components/AnecdoteList'
import AnecdoteForm from './components/AnecdoteForm'
import Notifications from './components/Notification'
import Filter from './components/Filter'

const App = props => {
  useEffect(() => {
    props.initializeAnecdotes()
  }, [props])

  return (
    <div>
      <h2>Anecdotes</h2>
      <Filter />
      <Notifications />
      <AnecdoteList />
      <h2>create new</h2>
      <AnecdoteForm />
    </div>
  );
};

export default connect(null, {initializeAnecdotes})(App);
