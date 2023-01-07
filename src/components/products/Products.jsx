import React from 'react';
import { useState } from 'react';
import "./Products.css";

function Products({fakeapia}) {
  const [ fakeApi, setFakeApi ] = useState(fakeapia);

  return (
    <div>
      {
        
          fakeApi.map( items=> 
            <div className='products'>
              <div>
                <p>{ items.months }</p>
                <p>{ items.year }</p>
                <p>{ items.day }</p>
              </div>
              <p> { items.info.title } </p>
              <span>$ { items.info.price } </span>
            </div>
          )
      
      }
    </div>
  )
}

export default Products
