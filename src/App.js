import React, { Component } from 'react';
import './App.css';



class App extends Component {

  state = {
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

  render() {
    
  const renderData = (item) => {

      const brand = item
    
      const year = brand.map(key => {if(key.year){
         const year = key.year;
            return year
            } 
            return null
        }  
      )
      const brandName = brand[0]
      
      return  <option key={brandName} value={brandName}>
            {brandName} ({year[1]})
            </option>
  }
    
 

  // console.log(Object.keys(data))
    return (
      <div className="App">
        <header className="App-header">
          
        </header>
        <h1>Brands</h1>
         <select>
           <option value=" ">Pick a model</option>
            {Object.entries(this.state).map(renderData)}
        </select>
      </div>
    );
  }
}

export default App;

// Object.entries(data).map(item => {
//   const brand = item

//   const brandName = brand[0]
  
  
//   brand.map(key => {if(key.year){
//     const year = key.year;
//     console.log(brandName, year)
//     return <option value={brandName}>{brandName + year}</option>
//   }  
  
// }
// )
// }
// )


