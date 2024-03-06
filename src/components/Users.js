import { Component, useState } from 'react'
import User from './User'
import classes from './Users.module.css'

const USERS_MOCK = [
  { id: 'u1', name: 'Luna' },
  { id: 'u2', name: 'Max' },
  { id: 'u3', name: 'Cris' },
]

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

  render() {
    const usersList = (
      <ul>
        {USERS_MOCK.map((user) => (
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
