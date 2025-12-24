import React, { Component } from 'react';

export default class StateClass extends Component {
    // constructor(props) {
    // super(props)
    constructor() {
        super(); // Calls parent class Component constructor
        // Step 1. Initialize/Create state property
        this.state = {
            count: 0
        };
    }

    incrementCount = () => {
        this.setState({ count: this.state.count + 1 });
    }

    render() {
        return (
            <div className="StateClass">
                <h2 className="heading"> StateClass Component</h2>
                <p>Count: {this.state.count}</p>  {/* Displaying state value -- String Interpolation */}
                <button onClick={this.incrementCount}>Increment</button>
            </div>
        );
    }
} 

// export default StateClass; 
// ✅ default export
// No named exports in this file


// State Management in Class Component
export class StateClass1 extends Component{
    constructor(){
        super(); // Calls parent class Component constructor
        // Step 1. Initialize/Create state property
        this.state = {
            count: 0
        };
        // Step 3. Binds the changes to state property
        // Until the session is open / component is alive ie until refresh the page
        this.increment = this.increment.bind(this);
        //this.decrement = this.decrement.bind(this);  // No need to have bind for decrement method, since we are using arrow function

        // ✔ Arrow functions:
        // Do not have their own this
        // They inherit this from the surrounding context
        // Here, the surrounding context is the class instance
    }
    increment(){
        // Step 2. Change the value of the state property
        console.log(this.state.count); 
        this.setState({
        count: this.state.count+1
       });
    }
    decrement = () => { // Arrow function
       console.log(this.state.count);
       if (this.state.count!==0){ 
        this.setState({
            count: this.state.count-1
           });
    }
  }
    render(){
        return (
          <div>
            <h2> State Management in Class Component </h2>
            
            <button onClick={this.increment}> Increase Count </button>
                 { this.state.count }   {/* String Interpolation */}
            <button onClick={this.decrement}> Decrease Count </button>
          </div>   )  }   }



