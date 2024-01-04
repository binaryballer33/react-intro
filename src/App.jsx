import { puppyList } from './data.js'
import './App.css'

function App() {

  return (
    <>
      { 
        puppyList.map((puppy) => {
          return <p key={puppy.key}>{puppy.name}</p>
        })
      }
    </>
  )
}

export default App
