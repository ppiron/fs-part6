const initialState = null 

const notificationReducer = (state=initialState, action) => {
  if (action.type === 'VOTENOTIFICATION') {
    return `You voted ${action.data.content}`
  }
  if (action.type === 'NEWNOTIFICATION') {
    return `Created new anecdote: ${action.data.content}`
  }
  if (action.type === 'RESETNOTIFICATION') {
    return initialState
  }
  return state
}

export const voteActionNotification = content => {
  return {
    type: 'VOTENOTIFICATION',
    data: { content }
  }
}

export const createAnecdoteActionNotification = content => {
  return {
    type: 'NEWNOTIFICATION',
    data: {
      content,
    }
  }
}

export const createResetNotification = () => {
  return {
    type: 'RESETNOTIFICATION'
  }
}

export default notificationReducer