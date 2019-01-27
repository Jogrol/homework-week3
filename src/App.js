import React, { Component } from 'react';
import { connect } from 'react-redux';
import ModelDetailsContainer from './ModelDetailsContainer';
import store from './store'

const data = {
  "Ivel Z3": {
    manufacturer: "Ivasim",
    year: 1969,
    origin: "Croatia"
  },
  "Bally Astrocade": {
    manufacturer: "Bally Consumer Products",
    year: 1977,
    origin: "USA"
  },
  "Sord M200 Smart Home Computer": {
    manufacturer: "Sord Computer Corporation",
    year: 1971,
    origin: "Japan"
  },
  "Commodore 64": {
    manufacturer: "Commodore",
    year: 1982,
    origin: "USA"
  }
}

class App extends Component {

  constructor(props) {
    super(props);
    this.state = []
    
  }
 
  updateSection = (event) => {
    this.setState({
      model: event.target.value
    });
  }
  
  handleSubmit = (event) => {
    event.preventDefault()
    this.addModel(
      {
        name: this.state.model,
        manufacturer: data[`${this.state.model}`].manufacturer,
        year: data[`${this.state.model}`].year,
        origin: data[`${this.state.model}`].origin,
      }
    )
  }

  addModel = (name,manufacturer,year,origin) => {
    store.dispatch( {
      type: 'ADD_MODEL',
      payload:
        name,  
        manufacturer,
        year,
        origin  
      
    })
  }

  render() {
    
  const renderData = (item) => {
      const model = item[0]
      const year = data[`${model}`].year

      return  <option key={model} value={model}>
            {model} ({year})
            </option>
      }

      return (
      <div className="App">
        <form onSubmit={this.handleSubmit}>
          <select value={this.state.value} onChange={this.updateSection}>
              <option value=" ">Pick a model</option>
              {Object.entries(data).map(renderData)}
          </select>
          <input type="submit" value="Add" />
        </form>
        <ModelDetailsContainer />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {models: state}
}

export default connect(mapStateToProps,{ModelDetailsContainer})(App)