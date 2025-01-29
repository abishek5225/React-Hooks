
import './App.css'
import Hook1 from './Hooks/UseStatehooks'
import Hook2 from './Hooks/UseEffecthooks'
import Hook3 from './Hooks/UseRefhooks'

function App() {
 

  return (
    <>
      <div className="hook">
        <Hook1 />
      </div>
      <div className="hook">
        <Hook2 />
      </div>
      <div className="hook">
        <Hook3 />
      </div>
    </>
  )
}

export default App
