import React from "react";

export default class ClassCompProps extends React.Component{
  render(){
    return(
      <div>
        <h4> Example for Props in Class Component </h4>
        <h3> Welcome to Props in Class Component ---- Welcome {this.props.name} from {this.props.place}!!!!</h3>
        <ChildClassComp myClassProps="Aditya Ramanand" myAge={22}></ChildClassComp>
        <hr />
      </div>
    );
  }
}


// In class components, props is a property of the class instance (this).
// Again, it’s not a reserved keyword, but this.props is the standard way to access props.
// props is not a keyword
// In class components, you cannot rename this.props
// But you can assign it to another variable name


class ChildClassComp extends React.Component{
  render(){
    return (
      <>
        <p> Welcome to Nested Child Class Props ---- Welcome!!! {this.myClassProps}!!!!</p>
        <p> Your Age is: {this.props.myAge} years </p>
        <ChildClassComp1 myClassProps={this.props.myClassProps} myAge={this.props.myAge}></ChildClassComp1>
      </>
    )
  }
}

export class ChildClassComp1 extends React.Component{
  render(){
    return (
      <>
        <p> Welcome to Nested Child Class Props ---- Welcome!!! {this.props.myClassProps}!!!!</p>
        <p> Your Age is: {this.props.myAge} years </p>
        <ChildClassComp2 myClassProps={this.props.myClassProps} myAge={this.props.myAge}></ChildClassComp2>
      </>
    )
  }
}

export class ChildClassComp2 extends React.Component{
  render(){
    return (
      <>
        <p> Welcome to Nested Child Class Props ---- Welcome!!! {this.props.myClassProps}!!!!</p>
        <p> Your Age is: {this.props.myAge} years </p>
      </>
    )
  }
}