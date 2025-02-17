import { Component } from 'react'
import User from './User'
import classes from './Users.module.css'

class Users extends Component {
  constructor() {
    super()
    // in class-based components the state is always an object
    // strictly in this notation this.state = {}
    this.state = {
      showUsers: true,
    }
  }

  toggleUsersHandler() {
    // this.state.showUsers = ... NOT!
    // to update state use this.setState({}) always should returns an object
    this.setState((prevState) => {
      return {
        ...prevState,
        showUsers: !prevState.showUsers,
      }
    })
  }

  componentDidUpdate() {
    if (this.props.users.length === 0) {
      // an artificial error
      // to emulate an Error Boundaries case
      // the handler is in the ErrorBoundary.jsx file
      throw new Error('No user provided')
    }
  }

  render() {
    const usersList = (
      <ul>
        {/* props are accessible through this.props method */}
        {this.props.users.map((user) => (
          <User key={user.id} name={user.name} />
        ))}
      </ul>
    )

    return (
      <div className={classes.users}>
        {/* important to bind method to this of the object (not this of button in this case) */}
        <button onClick={this.toggleUsersHandler.bind(this)}>
          {this.state.showUsers ? 'Hide' : 'Show'} Users
        </button>
        {this.state.showUsers && usersList}
      </div>
    )
  }
}

export default Users
