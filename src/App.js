import Users from './components/Users'

// For many cases it's more than enough to use function components
// but there are few cases when you should know how to deal with the classes components 
// one of them: error boundaries
// old version of the React (< 16.8) was based on the classes components aproach

// (!) class-based components can't use hooks; they belong to the functional paradigm

function App() {
  return (
    <div>
      <Users />
    </div>
  )
}

export default App
