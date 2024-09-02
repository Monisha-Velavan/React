import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Header from './Header';

function Home() {
    const firstname = "Monisha";  
    const counterVal = useSelector((state) => state.counter);
    const dispatch = useDispatch();
    const [status,setStatus]=useState(false);
    const add = () => {
        dispatch({ type: 'Add' });
    };
    
    const sub = () => {
        dispatch({ type: 'Sub' });
    };
    const storeMyDetails=()=>{
        dispatch({
            "type":"saveDetails",
            data:{name:"Monisha",email:"Monisha@gmail.com"}
        })
    }

    return (
        <div className='container'>
            <Header />
            {(status)?<p className="red">This is Paragraph</p>:null}
            <h1>This is the Home component</h1>
            {firstname}  <br />
            <h1>From Redux: {counterVal}</h1><br />
            <input type='button' value='Add' onClick={add} /> &nbsp;&nbsp;
            <input type='button' value='Sub' onClick={sub} />
            <input type='button' value='submit' onClick={storeMyDetails}/>
        </div>
    );    
}

export default Home;
