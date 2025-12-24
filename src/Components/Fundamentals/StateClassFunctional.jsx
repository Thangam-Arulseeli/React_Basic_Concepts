import React, { Component, useState } from "react";

// State Management in Class Component

export default class StateClass extends Component{
    constructor(){
        super(); // Calls parent class Component
        // Step 1. Initialize/Create state property 
                    // this.state property
        this.state = {
            customername: "John Doe",
            countQty: 0,
            price: 100

        };
        // Step 3. Binds the changes to the state property (To reflect the changes)
        // Until the session is open / component is alive ie until refresh the page
       // bind(this) reflect the changes done by the setState() to this.state.count
        this.purchase = this.purchase.bind(this);
    }
    
    // Method purchase() to change the state of count property with the help of this.setState()
    purchase(){
        // Step 2. Change the value of the state property - this.setState() method
        this.setState({
        count: this.state.countQty+1
       });
       console.log(this.state.count); 
    }

    render(){
        return (
          <div>
            <h2> State Management in Class Component </h2>
            <p>Customer Name: {this.state.customername}</p>
            <p> Price: {this.state.price}</p>
            <p> Count Value in Class Component : { this.state.countQty }</p>  {/* String Interpolation */}
            <button onClick={this.increment}> Purchase Count </button>
          </div>  
        );
    }
}

// State Management in Functional Component
// Import useState hook from "react" library
const StateFunctional = () => {
    const[count, setIncrease] = useState(0); // Arg 1 - State property name, Arg 2 - The function responsible for making the changes 
    // Arg 2 is optional, which is the function to change the state property
    // To set the value to state property - count, use arg 1 only
    
    const increment = () => {
        setIncrease(count+1);
        console.log(count);
    };
    
    return (
        <div>
          <h2> State Management in Functional Component </h2>
          <p> Count Value in Functional Component : { count }</p>  {/* String Interpolation */}
          <button onClick={increment}> Increase Count </button>
        </div>  
      );
};
export  {StateFunctional};
