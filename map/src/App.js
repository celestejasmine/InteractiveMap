import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { Data } from './Data.js';

function makeBox (x, y) {
  const Style = {position: "absolute", top: x, left: y, height: 160, width: 150, backgroundColor: "white"};
  return Style;
}

//function makeButton(x, y) {
//  return <button type="button" name="name" style={{position: "absolute", top: x, left: y}} onClick={this.click1}> Click! </button>;
//}

class App extends Component {
  state = {
    openStates: {
      "Algeria": false,
      "Argentina": false,
      "Bolivia": false,
      "Brazil": false,
      "Chile": false,
      "China": false,
      "Columbia": false,
      "Georgia": false,
      "Greenland": false,
      "India": false,
      "Indonesia": false,
      "Iran": false,
      "Kazakhstan": false,
      "Mexico": false,
      "Mongolia": false,
      "Morocco": false,
      "Nepal": false,
      "New Caledonia": false,
      "Norway": false,
      "Oman": false,
      "Russia": false,
      "Saudi Arabia": false,
      "South Africa": false,
      "Thailand": false,
      "Turkey": false,
      "Turkmenistan": false,
      "Saudi Arabia": false,
      "Uruguay": false,
      "Vietnam": false,
      "World": false
    },
    prediction: 0
  }

  render() {
    return (
      <div>
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
        {
          //Data.map((country) => (<div>{country[0]}</div>))
          Data.map((country) => {
            var name = country[0];
            var top = country[1];
            var left = country[2];
            var a = country[3];
            var b = country[4];
            console.log(this.state.openStates);
            return (
              <div>
              <button type="button"
                      name={name}
                      style={{position: "absolute", top: top, left: left}}
                      onClick={this.InvertCountry(name)}> ! </button>
              {this.state.openStates[name] ?
                (
                  <div className="Box"
                       style={makeBox(top, left)}>
                       <h1>
                          Welcome to {name}!
                          Please input a year value.
                       </h1>
                       <input type="text"
                              name="years"
                              onChange={this.prediction} />
                       <p>
                          My prediction: {calculateFuturePolution(this.state.prediction, a, b)}
                       </p>
                       <button onClick={this.InvertCountry(name)}> Done! </button>
                  </div>
                )
              : undefined}
              </div>
            )
          })
        }

        <img src="https://geology.com/world/world-map.gif"/>
        </body>
        </div>
    );
  }

  InvertCountry=(country)=>
    () => {
      var currentOpenStates = this.state.openStates;
      var newOpenStates = currentOpenStates;
      if (currentOpenStates[country] == false) {
        for (var key in currentOpenStates) {
          newOpenStates[key] = false;
        }
      }
      newOpenStates[country] = !currentOpenStates[country];
      this.setState({
        openStates: newOpenStates
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
