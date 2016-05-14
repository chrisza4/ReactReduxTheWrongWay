
import React from 'react'
import { connect } from 'react-redux'

const title = React.createClass({

  propTypes: {
    title: React.PropTypes.string
  },

  getInitialState () {
    return {
      title: this.props.title
    }
  },

  onDoSomething () {
    this.setState({ title: 'Me rocks' })
  },

  render () {

    return (
      <div className='title'>
        {this.state.title}
        <button onClick={this.onDoSomething}>Click here to do something</button>
      </div>

    )
  }
})

module.exports = connect((reduxStateTree, ownProps) => {
  return { ...ownProps, title: reduxStateTree.title }
})(title)
