import React from 'react';
import Header from './Header';
import { useSelector, useDispatch } from 'react-redux';

function About() {
  const firstname = "Monisha";  
    const counterVal = useSelector((state) => state.counter);
    const dispatch = useDispatch();// use to select a function


    const add = () => {
        dispatch({ type: 'Add' });
    };
    
    const sub = () => {
        dispatch({ type: 'Sub' });
    };

    

    const myDetails = useSelector((state)=>state.myDetails);


  return (
    <div>
        <Header/>
        <h1>{myDetails.name}</h1>
        <h1>{myDetails.email}</h1>
      <h1>About Us</h1>
      <p>We are a company dedicated to providing the best services.</p>
      <h1>From Redux: {counterVal}</h1><br/>
            <input type='button' value='Add' onClick={add} /> &nbsp;&nbsp;
            <input type='button' value='Sub' onClick={sub} />  
      
    </div>
  );
}

export default About;