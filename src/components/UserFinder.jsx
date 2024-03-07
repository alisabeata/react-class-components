import { Component } from 'react'
import Users from './Users'
import UsersContext from '../context/UsersContext'
import classes from './UserFinder.module.css'

class UserFinder extends Component {
  // you can use only one context in class-based components
  // access via this.context
  static contextType = UsersContext

  constructor() {
    super()
    this.state = {
      filteredUsers: [],
      searchTerm: '',
    }
  }

  searchChangeHandler(event) {
    this.setState((prevState) => ({
      ...prevState,
      searchTerm: event.target.value,
    }))
  }

  componentDidMount() {
    this.setState({
      filteredUsers: this.context?.users,
    })
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchTerm !== this.state.searchTerm) {
      this.setState({
        filteredUsers: this.context?.users.filter((user) =>
          user.name.toLowerCase().includes(this.state.searchTerm.toLowerCase()),
        ),
      })
    }
  }

  render() {
    return (
      <>
        <div className={classes.finder}>
          <input type="search" onChange={this.searchChangeHandler.bind(this)} />
        </div>
        <Users users={this.state.filteredUsers} />
      </>
    )
  }
}

export default UserFinder
