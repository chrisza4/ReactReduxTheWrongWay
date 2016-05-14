
import React from 'react'
import { connect } from 'react-redux'

const title = React.createClass({

  propTypes: {
    title: React.PropTypes.string,
    dispatch: React.PropTypes.func,
  },

  onDoSomething () {

    this.props.dispatch(ChangeTitleAction('ME ROCKS'))
  },

  render () {

    return (
      <div className='title'>
        {this.props.title}
        <button onClick={this.onDoSomething}>Click here to do something</button>
      </div>

    )
  }
})

const ChangeTitleAction = (newTitle) => {
  return {
    type: 'CHANGE_TITLE',
    newTitle
  }
}

function reducer (oldReduxStateTree = {}, action = {}) {
  switch (action.type) {
    CASE 'CHANGE_TITLE':
      // return Object.assign({ }) <----- THE OLD WAY (ES6)
      return { ...oldReduxStateTree, title: action.newTitle } // With correct babel, this can be interprete as comment abot
  }
}

module.exports = connect((reduxStateTree, ownProps) => {
  return { ...ownProps, title: reduxStateTree.title }
})(title)
