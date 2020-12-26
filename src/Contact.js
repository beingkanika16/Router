
import React from 'react';
import { useHistory } from 'react-router-dom';



function Contact(e){
   let history = useHistory();
    function handleClick() {
      history.push('./')
   }
    return (<>
       <h1>contact us</h1>
      <button onClick={handleClick}>
        Click me
      </button>
      </>
    );
   }
export default Contact;