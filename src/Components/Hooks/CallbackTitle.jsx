import React from 'react'  
  
function Title() {  
    console.log("Title component rendered")  
    return (  
  
        <div>  
            <h3>Title Component</h3> 
        </div>  
    )  
}  
 
// Without using useCallback()
//export default Title  

//Using useCallback()
export default React.memo(Title)  

