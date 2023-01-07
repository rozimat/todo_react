import React, {useState} from 'react'
import "./Form.css";


function Form() {
  const [form, setForm ] =useState({
    titel: "",
    price: "",
    date: ""
  });
  const inputValue=(e)=>{
    
    setForm(e.target.value);
  }
  console.log(form);
  function submitInfo(e){
    console.log(e);
  }
  
  return (
    <div onSubmit={submitInfo} className='form'>
      <div>
        <label>Title</label>
        <input onChange={inputValue} type="text" />
      </div>
      <div >
      <label>Title</label>
      <input onChange={inputValue} type="number" />
      </div>
      <div >
        <label>Title</label>
        <input onChange={inputValue} type="date" />
      </div>
      <button>Seve</button>
    </div>
  )
}

export default Form
