const initialState = ''

const filterReducer = (state = initialState, action) => {
  if (action.type === 'RESETFILTER') {
    return initialState
  }
  if (action.type === 'FILTER') {
    return action.data.filter
  }
  return state
}

export const changeFilterAction = filter => {
  return(
    {
      type: 'FILTER',
      data: {
        filter
      }
    }
  )
}

export const resetFilterAction = () => {
  return {
    type: 'RESETFILTER'
  }
}

export default filterReducer