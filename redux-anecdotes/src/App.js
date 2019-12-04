import React from 'react';
import AnecdoteList from './components/AnecdoteList'
import AnecdoteForm from './components/AnecdoteForm'
import Notifications from './components/Notification'
import Filter from './components/Filter'

const App = props => {
  // const {store} = props

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

export default App;
