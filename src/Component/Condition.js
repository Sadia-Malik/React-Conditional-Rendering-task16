import React, { useState } from 'react';
import './Eventhandling.css';

function Condition() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
   <div className='position'>
    <h2 className='text-center mt-5'>Conditional Rendering</h2>
       <div className='text-center mt-5 mb-5'>
      <p className='fs-3 fw-bold'>Count: {count}</p>
      <button className='px-4 py-3 me-2 fs-3 fw-bold ' onClick={increment}>+</button>
      <button className='px-4 py-3 fs-3 fw-bold'onClick={decrement}>-</button>
    </div>
   </div>
  );
}

export default Condition;
