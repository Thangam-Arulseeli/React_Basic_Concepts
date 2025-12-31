import React, { Component } from "react";

class LifeCycleClass extends Component {
  constructor(props) { // Receives the props when LifeCycleClass is rendered
    super(props);  // Calls the super class constructor which is Clomponent here and passes 'props' there
    this.state = {
      count: 0
    };
    console.log("1. Constructor");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("2. getDerivedStateFromProps");
    return null; // or return updated state
  }

  componentDidMount() {
    console.log("4. componentDidMount");
    // API calls, timers, subscriptions
  }

  render() {
    console.log("3. Render");
    return (
      <div>
        <h2>Count: {this.state.count}</h2>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Increment
        </button>
        <hr></hr>
        Updating Demo <UpdateDemo />
        <hr></hr>
        Unmounting Demo <UnmountingDemo />
      </div>
    );
  }
}


class UpdateDemo extends Component {
  state = { value: 0 };

  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldComponentUpdate");
    return true; // false stops re-render
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("getSnapshotBeforeUpdate");
    return prevState.value;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("componentDidUpdate");
    console.log("Previous value:", snapshot);
  }

  render() {
    return (
      <div>
        <h3>Value: {this.state.value}</h3>
        <button onClick={() => this.setState({ value: this.state.value + 1 })}>
          Update
        </button>
      </div>
    );
  }
}

class UnmountingDemo extends Component {
  componentDidMount() {
    this.timer = setInterval(() => {
      console.log("Timer running");
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
    console.log("Component Unmounted");
  }

  render() {
    return <h4>Timer Component</h4>;
  }
}


export default LifeCycleClass;
export { UpdateDemo, UnmountingDemo };

/*
/// Mounting Phase
This component demonstrates the lifecycle methods of a class component in React.
It includes constructor, getDerivedStateFromProps, componentDidMount, and render.
The component initializes a count state and provides a button to increment the count.
The console logs show the order of lifecycle method invocations.
-------------------------
Order of Execution:
constructor
↓
static getDerivedStateFromProps
↓
render
↓
componentDidMount
-------------------------

Purpose of Each
---------------
Method	                  Purpose
constructor	              Initialize state, bind methods
getDerivedStateFromProps	Sync props to state
render	                  Returns JSX
componentDidMount	        API calls, DOM access

*/

/*/ Updating Lifecycle Example
*
Order of Execution:
--------------------
static getDerivedStateFromProps
↓
shouldComponentUpdate
↓
render
↓
getSnapshotBeforeUpdate
↓
componentDidUpdate


Purpose of Each
---------------
Method	                  Purpose
shouldComponentUpdate	    Performance optimization
getSnapshotBeforeUpdate	  Capture DOM info
componentDidUpdate	      Act after update

*/

/*// UNMOUNTING PHASE
/*
//UNMOUNTING PHASE
Only One Method:

componentWillUnmount()

Purpose
•	Cleanup timers
•	Remove event listeners
•	Cancel API subscriptions
Order of Execution:
--------------------
componentWillUnmount  
--------------------

*/


