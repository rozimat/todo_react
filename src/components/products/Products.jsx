import React from 'react';
import { useState } from 'react';
import "./Products.css";

function Products({fakeapia}) {
  

  return (
    <div>
      {
        
        fakeapia.map( items=> 
            <div className='products'>
              <div>
                <p>{ items.info.months }</p>
                <p>{ items.info.year }</p>
                <p>{ items.info.day }</p>
              </div>
              <p> { items.title } </p>
              <span>$ { items.price } </span>
            </div>
          )
      
      }
    </div>
  )
}

export default Products
