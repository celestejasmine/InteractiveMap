import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

function makeBox (x, y) {
  const Style = {position: "absolute", top: x, left: y, height: 160, width: 150, backgroundColor: "white"};
  return Style;
}

//function makeButton(x, y) {
//  return <button type="button" name="name" style={{position: "absolute", top: x, left: y}} onClick={this.click1}> Click! </button>;
//}

class App extends Component {
  state = {
    isPolutionDetailOpenChina: false,
    isPolutionDetailOpenSaudiArabia: false,
    isPolutionDetailOpenTurkey: false,
    isPolutionDetailOpenRussia: false,
    prediction: 0
  }

  render() {
    return (<div>
      <head>
        <title> Interactive Map and CO2 Emissions </title>

      </head>

      <h1> Interactive Map and CO2 Emissions </h1>

      <body>
      <p> Our map provides information on the CO2 emissions for a few countries from around the world. Select a country to find data on emissions per capita from 1996 and 2014,
        as well as the current population. Try to imagine the future by inputing a future year and find out what the CO2 emissions will be then if the countries emissions continue with
        rate of the last 20 years. All data was found from The World Bank. </p>

      <p> For more information about global emissions, visit : </p>
      <a href="https://data.worldbank.org/indicator/EN.ATM.CO2E.PC?cid=GPD_27&name_desc=false&start=1996">World Bank World Emissions Html</a>

      <p>Code and Idea by Celeste Groux and Chloe Mersereau </p>

      <img src="https://geology.com/world/world-map.gif"/>


      <button type="button" name="China" style={{position: "absolute", top: 525, left: 895}} onClick={this.InvertChina}> ! </button>

        {this.state.isPolutionDetailOpenChina ?
           <div className="Box" style={makeBox(525, 895)}>

           <h1>
           Welcome to China!
           Please input a year value.
           </h1>

           <input type="text" name="years" onChange={this.prediction}/>

           <p>
           my prediction: {calculateFuturePolution(this.state.prediction, 0.3264, 649.61)}

           </p>

           <button onClick={this.InvertChina}> Done! </button>

           </div>
           : undefined}

       <button type="button" name="Saudia Arabia" style={{position: "absolute", top: 570, left: 690}} onClick={this.InvertSaudiArabia}> ! </button>

         {this.state.isPolutionDetailOpenSaudiArabia ?
            <div className="Box" style={makeBox(570, 690)}>

            <h1>
            Welcome to Saudi Arabia!
            Please input a year value.
            </h1>

            <input type="text" name="years" onChange={this.prediction}/>

            <p>
            my prediction: {calculateFuturePolution(this.state.prediction, 0.4506, 887.83)}

            </p>

            <button onClick={this.InvertSaudiArabia}> Done! </button>

            </div>
            : undefined}

        <button type="button" name="Turkey" style={{position: "absolute", top: 525, left: 665}} onClick={this.InvertTurkey}> ! </button>

          {this.state.isPolutionDetailOpenTurkey ?
             <div className="Box" style={makeBox(525, 665)}>

             <h1>
             Welcome to Turkey!
             Please input a year value.
             </h1>

             <input type="text" name="years" onChange={this.prediction}/>

             <p>
             my prediction: {calculateFuturePolution(this.state.prediction, 0.0821, 160.89)}

             </p>

             <button onClick={this.InvertTurkey}> Done! </button>
             </div>
             : undefined}

          <button type="button" name="Russia" style={{position: "absolute", top: 370, left: 885}} onClick={this.InvertRussia}> ! </button>

           {this.state.isPolutionDetailOpenRussia ?
              <div className="Box" style={makeBox(370, 885)}>

              <h1>
              Welcome to Russia!
              Please input a year value.
              </h1>

              <input type="text" name="years" onChange={this.prediction}/>

              <p>
              my prediction: {calculateFuturePolution(this.state.prediction, 0.1192, 227.62)}

              </p>

              <button onClick={this.InvertRussia}> Done! </button>
              </div>
              : undefined}

            </body>
            </div>)
}

  InvertChina=()=>{
    var currentState = this.state.isPolutionDetailOpenChina;
    var newState = !currentState;
    this.setState({
      isPolutionDetailOpenChina: newState
    });
  }
  InvertSaudiArabia=()=>{
    var currentState = this.state.isPolutionDetailOpenSaudiArabia;
    var newState = !currentState;
    this.setState({
      isPolutionDetailOpenSaudiArabia: newState
    });
  }
  InvertTurkey=()=>{
    var currentState = this.state.isPolutionDetailOpenTurkey;
    var newState = !currentState;
    this.setState({
      isPolutionDetailOpenTurkey: newState
    });
  }
  InvertRussia=()=>{
    var currentState = this.state.isPolutionDetailOpenRussia;
    var newState = !currentState;
    this.setState({
      isPolutionDetailOpenRussia: newState
    });
  }
    prediction=(event)=>{
      this.setState({
        prediction: event.target.value
      });
    }
}

export default App;

const  calculateFuturePolution=(years, a, b)=>{
      return (a - (b/years))*years;
    }
