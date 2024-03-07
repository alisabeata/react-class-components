import UserFinder from './components/UserFinder'
import UsersContext from './context/UsersContext'

// For many cases it's more than enough to use function components
// but there are few cases when you should know how to deal with the classes components
// one of them: error boundaries
// old version of the React (< 16.8) was based on the classes components aproach

// (!) class-based components can't use hooks; they belong to the functional paradigm

// life cycles:
// componentDidMount() -> useEffect(..., []) - called once
// componentDidUpdate() -> useEffect(..., [someValue, ...]) - called when the component updated
// componentWillUnmount() -> useEffect(... return () => {...}, []) - called when the component is unmounted

// getDerivedStateFromProps() -> useEffect(() => {if (props.someValue !== derivedState) {...}}, [props.someValue])
// shouldComponentUpdate() -> React.memo(...)
// getSnapshotBeforeUpdate() -> combination of the useRef() and useLayoutEffect()
// componentDidCatch() -> only available in class-based components

const USERS_MOCK = [
  { id: 'u1', name: 'Luna' },
  { id: 'u2', name: 'Max' },
  { id: 'u3', name: 'Cris' },
]

function App() {
  const usersContext = {
    users: USERS_MOCK,
  }

  return (
    <UsersContext.Provider value={usersContext}>
      <UserFinder />
    </UsersContext.Provider>
  )
}

export default App
