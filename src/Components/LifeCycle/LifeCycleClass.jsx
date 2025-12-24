import React from 'react';

class Counter extends React.Component{
  // Initial Phase - Invokes the constructor with default props & state
  constructor(props){
    super(props);
    this.state = {
      count: 0,
      age: 0
    };
 // this.incrementCounter = () => this.setState({count: this.state.count+1});
 // this.decrementCounter = () => this.setState({count: this.state.count-1});
  this.incrementAge = () => this.setState({age: this.state.age+1});
  this.decrementAge = () => this.setState({age: this.state.age-1});
  this.decrementCounter = this.decrementCounter.bind(this);
}

 incrementCounter = () => this.setState({count: this.state.count+1});
 //decrementCounter = () => this.setState({count: this.state.count-1});
 decrementCounter(){ 
   //----- Error comes
   console.log(this.state.count);
  this.setState({count: this.state.count-1});
  console.log(this.state.count);
 }

 //Mounting the components

// Before Mounting - Called Once
componentWillMount(){
  console.log("Component will mount is called");
}

// After Mounting - Called Once
componentDidMount(){
  console.log("Component did mount is called");
  console.log("Component updated. Count is now: " + this.state.count)
}

// Updating Phase - Called multiple times
// Updating the component
componentDidUpdate(){
  console.log("Component updated. Count is now " + this.state.count);
}

//Rendering the Component
render(){
  console.log("Rendering.....");
  return (
    <React.Fragment>
      <h4 style={{marginTop: 10, marginBottom: 10}}>
          Count: {this.state.count}
      </h4>
      <button style={{marginTop: 20, marginBottom: 20, padding: 10}}
          onClick={this.incrementCounter}
          > + </button>
      <button style={{marginTop: 20, marginBottom: 20, padding: 10}}
          onClick={this.decrementCounter}
          > - </button>
      <h4 style={{marginTop: 10, marginBottom: 10}}> 
          Age: {this.state.age}
      </h4>
      <button style={{marginTop: 20, marginBottom: 20, padding: 10}}
          onClick={this.incrementAge}
          > + </button>
      <button style={{marginTop: 20, marginBottom: 20, padding: 10}}
          onClick={this.decrementAge}
          > - </button>
    </React.Fragment>
  );
} 
}

//------------------------
//Catching Errors in Components
class CounterThatThrowsError extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };

    this.increment = () => this.setState({ count: this.state.count + 1 });
    this.decrement = () => this.setState({ count: this.state.count - 1 });
  }

  //Unmounting Phase
  componentWillUnmount() {
    console.log("Counter has been unmounted!");
    // Output: Counter has been unmounted!
  }

  render() {
    if (this.state.count === 3) throw new Error("Crashed!");

    return (
      <React.Fragment>
        <h1 style={{ marginTop: 100, marginBottom: 30 }}>
          Count: {this.state.count}
        </h1>
        {/* setState - > increment the count value by 1 */}
        <button onClick={this.increment} style={{ padding: 5, marginRight: 5 }}>
          +
        </button>
        {/* setState - > decrement the count value by 1 */}
        <button onClick={this.decrement} style={{ padding: 5 }}>
          -
        </button>
      </React.Fragment>
    );
  }
}

//--------------------------------
export default class ClassLifeCycle extends React.Component {
  constructor(props) {
    super(props);

    //Catch errors
    this.state = {
      hasError: false,
      error: null,
    };
  }

  //   componentDidMount() {
  //     console.log("Component has mounted.");
  //   }

  //static getDerivedStateFromError(error) for returning an updated state to allow a render of fallback UI.
  static getDerivedStateFromError(error) {
    return {
      hasError: true,
      error: error,
    };
  }

  //componentDidCatch(error, errorInfo) for logging error information to the console,
  //including a component stack tracing back to the source of the error.
  componentDidCatch(error) {
    console.log(error.name + ": " + error.message);
    // Output: Error: Crashed!
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ marginTop: 100, marginLeft: 200 }}>
          <h1>Oh no! Something's gone wrong!</h1>
        </div>
      );
    }

    return (
      <div style={{ marginTop: 100, marginLeft: 200 }}>
        <h1>REACT LIFECYCLE</h1>
         <Counter />
        <CounterThatThrowsError />
        <hr></hr>
      </div>
    );
  }
}


