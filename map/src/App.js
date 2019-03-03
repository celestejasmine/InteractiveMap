import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const myBoxStyle = {position: "absolute", top:450, left: 150, height: 100, width: 100, backgroundColor: "red"};

class App extends Component {
  state = {
    isPolutionDetailOpen: false,
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

      <img src="https://geology.com/world/world-map.gif"/>

      <button style={{position: "absolute", top: 450, left: 150}} onClick={this.click}> Click Here! </button>

        {this.state.isPolutionDetailOpen ?
           <div className="Box" style={myBoxStyle}>
           <h1>
           Hello! Please input a year value.
           </h1>

           <p>
           my prediction: {calculateFuturePolution(this.state.prediction)}
           </p>

           <input type="text" name="years" onChange={this.prediction}/>

           <button onClick={this.click2}> Done! </button>

           </div>
           : undefined}


      </body>
      </div>
    );
  }

  click=()=>{
    this.setState({
      isPolutionDetailOpen: true
    });

  }

    click2=()=>{
      this.setState({
        isPolutionDetailOpen: false
      });

  }

    prediction=(event)=>{
      this.setState({
        prediction: event.target.value
      });

    }

}

export default App;


const  calculateFuturePolution=(years)=>{
      return 2 * years;
    }
