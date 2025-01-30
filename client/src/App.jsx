
import './App.css'
import Hook1 from './Hooks/UseStatehooks'
import Hook2 from './Hooks/UseEffecthooks'
import Hook3 from './Hooks/UseRefhooks'
import Hook4 from './Hooks/UseMemohooks'

function App() {
 

  return (
    <>
    <h1 className='mb-4'>Hooks </h1>
      <div className="hook">
        <Hook1 />
      </div>
      <div className="hook">
        <Hook2 />
      </div>
      <div className="hook">
        <Hook3 />
      </div>
      <div className="hook">
        <Hook4/>
      </div>
    </>
  )
}

export default App
