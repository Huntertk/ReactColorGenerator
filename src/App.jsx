import React, { useState } from 'react'
import './App.css'
import Values from 'values.js'
import SingleColor from '../Components/SingleColor'

const App = () => {
  const [color, setColor] = useState('')
  const [error, setError] = useState(false)
  const [list, setList] = useState(new Values('#544a7d').all(10))

  const handleSubmit = (e) => {
    e.preventDefault()
    try {
      let colors = new Values(color).all(10)
      setList(colors)
    console.log(colors)
    } catch (err) {
      setError(true)
      console.error(err)

    }
    
  }
  
  return (
    <>
    <section className='container'>
    <h3>color generator</h3>
    <form onSubmit={handleSubmit}>
      <input type="text" value={color} onChange={(e) => {return setColor(e.target.value)}}
      placeholder='#f5f5f5'
      className={`${error ? 'error' : null}`}
      />
      <button className='btn' type='submit'>submit </button>
    </form>
    </section>
    <section className="colors">
      {list.map((col, index) => {
        console.log(col)
        return <SingleColor key={index} {...col} index={index} hexColor={col.hex} />
      })}
    </section>
    </>
  )
}

export default App
