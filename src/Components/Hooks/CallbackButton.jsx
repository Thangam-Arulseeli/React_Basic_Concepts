import React from 'react'  
  
function Button({count,handleClick}) {  
  
    console.log("Button Component rendered")  
    return (  
        <div>  
            <h3>Button Component</h3>
            <p>Counter : {count}</p>  
            <button onClick={handleClick}>Increment Counter</button>  
        </div>  
    )  
}  
  
// Without using useCallback()
//export default Button  

//Using useCallback()
export default React.memo(Button)  

