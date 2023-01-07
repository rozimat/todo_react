import React from 'react';
import './App.css';
import Products from "./components/products/Products";
import Form from "./components/form/Form";

function App() {
  const fakeapia= [
    {
      "months" : " August",
      "year" : "2021",
      "day": "15",
      "info" :{
        "title" : "Toiltet paper",
        "price" : "99.5"
      }
    },
    {
      "months" : " Sentabr",
      "year" : "2022",
      "day": "20",
      "info" :{
        "title" : "New television",
        "price" : "98.9"
      }
    },
    {
      "months" : " Oktabr",
      "year" : "2023",
      "day": "25",
      "info" :{
        "title" : "Old tv",
        "price" : "77.5"
      }
    },
    {
      "months" : " November",
      "year" : "2024",
      "day": "27",
      "info" :{
        "title" : "New Radio",
        "price" : "55.5"
      }
    }
  ]
  return (
    <div className="App">
      <Form/>
      <Products fakeapia={fakeapia}/>
    </div>
  );
}

export default App;
