import React from 'react'

function FunctionalCompFragments(){
  return (
    <div>
      <h3>This is my Functional component</h3>
      <p> React supports class and functional components </p>
      {/* Funtional component 1 & 2 are using React Fragments */}
      <FunctionalComp2></FunctionalComp2>
      <FunctionalComp3></FunctionalComp3>
      <p> Nesting of functional components in a single functional component </p>
      <hr></hr>
    </div>
  )
}

function FunctionalComp2(){
  return <>
     <p> This is functional compontent 2 </p>
     </>
} 

function FunctionalComp3(){
  return ( 
     <React.Fragment>
        <p> This is functional compontent 3 </p>
     </React.Fragment>
    );
} 

export default FunctionalCompFragments;