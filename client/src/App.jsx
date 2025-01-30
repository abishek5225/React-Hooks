
import './App.css'
import Hook1 from './Hooks/UseStatehooks'
import Hook2 from './Hooks/UseEffecthooks'
import Hook3 from './Hooks/UseRefhooks'
import Hook4 from './Hooks/UseMemohooks'

function App() {
 

  return (
    <>
    <h1>What are hooks?
    </h1>
    <p >React Hooks are special functions that let you use React features (like state and lifecycle methods) 
      inside functional components. Before hooks, you had to use class components to manage state and side
       effects, but now you can do it in functional components using hooks.</p>
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
