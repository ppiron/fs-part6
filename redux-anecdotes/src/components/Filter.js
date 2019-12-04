import React from 'react'
import {connect} from 'react-redux'
import {changeFilterAction} from '../reducers/filterReducer'

const Filter = (props) => {
  const handleChange = (event) => {
    // input-field value is in variable event.target.value
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
