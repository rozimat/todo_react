import React, {useState} from 'react'
import "./Form.css";


function Form(props) {
  const [form, setForm ] =useState({
    title: "",
    price: "",
    date: ""
  });

  const arrMonths = [
    "January", 
    "February", 
    "March", 
    "April",
    "May", 
    "June", 
    "July", 
    "August",
    "September", 
    "October", 
    "November",
    "December"
  ]

  function submitInfo(e){
    e.preventDefault();
    const data = 
      {
        id : Math.random().toFixed(2),
        title: form.title,
        price: form.price,
        info: {
          months: arrMonths [new Date(form.date).getMonth()],
          year: new Date(form.date).getFullYear(),
          day: new Date(form.date).getDay(),


        }
      };
      props.onaddData(data);
  }
  
  function getValueInput(e){
    setForm((prev)=>{
      return {
        ...prev,
        [e.target.name] : e.target.value
      };
    });
  }

  
  return (
    <div  className='form'>
      <form onSubmit={submitInfo} className='form'>
      <div>

        <label>Title</label>
        <input onChange={getValueInput} 
        name="title" 
        type="text" />
      </div>

      <div >
      <label>Title</label>
      <input onChange={getValueInput} 
      name="price" 
      type="number" />
      </div>

      <div >
        <label>Title</label>
        <input onChange={getValueInput} 
        name="date" 
        type="date" />
      </div>

      <button>Seve</button>
      </form>
    </div>
  )
}

export default Form
