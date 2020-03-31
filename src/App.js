import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render (){
    return (
      <div className="App">
      My Hello World Lokesh
      <FirstComponent></FirstComponent>
      <SecondComponent></SecondComponent>
      <ThirdComponent></ThirdComponent>
      <FourthComponent></FourthComponent>
      </div>
    );
  }
}


class FirstComponent extends Component{
  render(){
    return (
      <div className ="FirstComponent">First Component</div>
    );
  }
}

class SecondComponent extends Component{
  render(){
    return(
      <div className="SecondComponent">Second Component</div>
    );
  }
}

function ThirdComponent(){
  return(
    <div className="ThirdComponent"> Third Component</div>
  );
}

function FourthComponent(){
  return(
    <div className="FourthComponent">Fourth Component</div>
  );
}
export default App;
