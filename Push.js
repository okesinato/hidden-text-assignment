import React from 'react'

const Push = (props) => {
   return(
   <div className ="container">
        <button onClick={props.nato}>  </button>
        {props.counter}
        <button onClick ={props.sinato}>  </button>

    </div>

   )
   

}
export default Push