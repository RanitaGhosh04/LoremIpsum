import { useState } from 'react'
import './App.css'
import data from './component/data'

function App() {

 const [count, setCount] = useState(0)
 const [text, setText] = useState([])

 const handleSubmit = (e) => {
  console.log(e);
  e.preventDefault()
  let amount = parseInt(count)

  if(amount<=0){
    amount = 1
  }
  if(amount>8){
    amount = 8
  }

  setText(data.slice(0,amount))
 }
  return (
    <>
 {/* <LoremGenerator /> */}

 <section>
  <h3>Genrate Lorun ipsum</h3>
  <form onSubmit={handleSubmit}>
    <input type="number"
    value={count}
    onChange={ (e)=>
      {setCount(e.target.value)
        // console.log(e);
      }}
     />
     <button>Generate</button>
  </form>
  <article>
    {
      text.map((item,index)=>{
        return <p key={index}>{item}</p>
      })
    }
  </article>
 </section>
    </>
  )
}

export default App
