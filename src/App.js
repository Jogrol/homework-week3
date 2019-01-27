import React, { Component } from 'react';
import { connect } from 'react-redux';



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
    this.state = {
      models: []}
    }
 
  updateSection = (event) => {
   
    const model = event.target.value;
    console.log(model)
    this.setState({
      model: model
    });
    }
    
  
  handleSubmit = (event) => {
    event.preventDefault()

    // console.log(this.state.model)
    // console.log(data[`${this.state.model}`].year)
    this.addModel(
      {
        manufacturer: data[`${this.state.model}`].manufacturer,
        year: data[`${this.state.model}`].year,
        origin: data[`${this.state.model}`].origin,
      }
    )
  }
  addModel = (manufacturer,year,origin) => {
    console.log(manufacturer,year,origin)
    this.props.dispatch({
      type: 'ADD_MODEL',
      payload:  
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
      </div>
    );
  }

}
const mapStateToProps = (state) => {
  console.log(state)
  return {
    models: state
  }
}

export default connect(mapStateToProps)(App)