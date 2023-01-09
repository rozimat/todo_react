import React, {useState} from 'react';
import './App.css';
import Products from "./components/products/Products";
import Form from "./components/form/Form";

const fakeapia= [
  {
      "title" : "New Radio",
      "price" : "55.5",
      "info" :{
      "months" : " November",
      "year" : "2024",
      "day": "27"
    }
  },
  {
      "title" : "New Radio",
      "price" : "55.5",
      "info" :{
      "months" : " November",
      "year" : "2024",
      "day": "27"
    }
  },
  {
      "title" : "New Radio",
      "price" : "55.5",
      "info" :{
      "months" : " November",
      "year" : "2024",
      "day": "27"
    }
  },
  {
      "title" : "New Radio",
      "price" : "55.5",
      "info" :{
      "months" : " November",
      "year" : "2024",
      "day": "27"
    }
  }
];

function App() {
  const [fake_api, setFake_api] = useState(fakeapia);
  const  addData=(data)=>{
    setFake_api((prev)=>{
      return[data, ...prev ];

    })
  };

  return (
    <div className="App">
      <Form onaddData={addData}/>
      <Products fakeapia={fake_api}/>
    </div>
  );
}

export default App;
