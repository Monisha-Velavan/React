import React from 'react';
import Header from './Header';
import { useSelector, useDispatch } from 'react-redux';

function Contact() {
  const firstname = "Premalatha";  
    const counterVal = useSelector((state) => state.counter);
    const dispatch = useDispatch();// use to select a function


    const add = () => {
        dispatch({ type: 'Add' });
    };
    
    const sub = () => {
        dispatch({ type: 'Sub' });
    };

    

  return (
    <div>
        <Header/>
      <h1>Contact Us</h1>
      <p>You can reach us via email at Monisha@example.com.</p>  
      <h1>From Redux: {counterVal}</h1><br/>
            <input type='button' value='Add' onClick={add} /> &nbsp;&nbsp;
            <input type='button' value='Sub' onClick={sub} />      
    </div>
  );
}

export default Contact;