import React from "react";

export default class SpreadOpFragments extends React.Component{
  render(){
    return (
      <div>
        <h3> Spread Operator </h3>
        <SpreadSyntax></SpreadSyntax>
        <h3>React Fragments- Table</h3>
        <Table></Table>
      </div>
    )
  }
} 

//Spread syntax
export function SpreadSyntax(){
  const originalImage = {
    src: "https://th.bing.com/th/id/OIP.yNOaibrXZ3bEEC8bfTkJtQHaHa?w=168&h=180&c=7&r=0&o=5&dpr=1.56&pid=1.7",
    alt: "This is a random image"
  };
  //The spread operator is very useful when you want to make an exact
  //copy of an existing array, you can use the spread operator to accomplish this quickly.
  const formattegImage = {
    ...originalImage,
    height: 100,
    width: 100
  };
  return (
      <div style={{marginTop:10}}>
        <Image {...formattegImage} />
      </div>
  );
}

function Image(props){
  return (
    <>
    <img {...props} />
    </>
  );
}

// Fragments
class Table extends React.Component{
  render(){
    return (
      <table
        className="table"
        style={{
          color: "blue",
          marginTop: 10,
          marginLeft: 100,
          marginBottom: 10,
          padding: 2,
          fontSize: 14,
        }}>
        <thead>
          <tr>
            <Columns />
          </tr>
        </thead>
        </table>
    );
  }
}

class Columns extends React.Component{
  render(){
    return(
      <React.Fragment>
        <th> ID </th>
        <th> NAME </th>
        <th> COUNTRY </th>
      </React.Fragment>
    );
  }
}

