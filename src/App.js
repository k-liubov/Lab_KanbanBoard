
import { useState, useEffect } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Main from './components/main/Main.jsx'
import Header from './components/Header/Header.jsx'
import Footer from './components/footer/Footer.jsx'
import './App.css'

function App() {
  const initialState = JSON.parse(window.localStorage.getItem('tasks')) || []
  const [tasks, setTasks] = useState(initialState)

  useEffect(() => {
    window.localStorage.setItem('tasks', JSON.stringify(tasks))

  }, [tasks])

  return (
    < Router >
      <div className='wrapper'>
        <Header />
        <Main tasks={tasks} setTasks={setTasks} />
        <Footer tasks={tasks} />
      </div>
    </Router>
  );
}

export default App
