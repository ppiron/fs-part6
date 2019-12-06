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

export const voteActionNotification = (content, delay) => {
  return dispatch => {
    dispatch(
      {
        type: 'VOTENOTIFICATION',
        data: {content}
      }
    )
    setTimeout(() => dispatch({
      type: 'RESETNOTIFICATION'
    }), delay)
  }
}

export const createAnecdoteActionNotification = (content, delay) => {
  return dispatch => {
    dispatch(
      {
       type: 'NEWNOTIFICATION',
       data: {
         content,
       }
      }  
    )
    setTimeout(() => dispatch({
      type: 'RESETNOTIFICATION'
    }), delay)
  }
}

export const createResetNotification = () => {
  return {
    type: 'RESETNOTIFICATION'
  }
}

export default notificationReducer