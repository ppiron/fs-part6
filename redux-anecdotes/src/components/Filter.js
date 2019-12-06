import React from 'react'
import {connect} from 'react-redux'
import {changeFilterAction} from '../reducers/filterReducer'

const Filter = (props) => {
  const handleChange = (event) => {
    props.changeFilterAction(event.target.value)
  }
  const style = {
    marginBottom: 10
  }

  return (
    <div style={style}>
      filter <input onChange={handleChange} />
    </div>
  )
}

const mapDispatchToProps = {
  changeFilterAction
}

export default connect(
  null,
  mapDispatchToProps
)(Filter)
