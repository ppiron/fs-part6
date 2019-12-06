import axios from 'axios'

const baseUrl = 'http://localhost:3001/anecdotes'

const getId = () => (100000 * Math.random()).toFixed(0)

const getAll = async() => {
  const response = await axios.get(baseUrl)
  return response.data
}

const createNew = async content => {
  const response = await axios.post(baseUrl, {content, id: getId(), votes: 0})
  return response.data
}

const vote = async id => {
  const votedAnecdote = await axios.get(`${baseUrl}/${id}`)
  const response = await axios.put(`${baseUrl}/${id}`, {...votedAnecdote.data, votes: votedAnecdote.data.votes + 1})
  return response.data
}

export default { getAll, createNew, vote }