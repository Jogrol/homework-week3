import * as React from 'react'

export default function ModelDetails(props) {


if (props.model.lenght === 0) return 'Loading...'
return (
        <div>
        <h1>Computer Model</h1>
        
        { props.model.map(model => 
        <ul>
            <li key={model.manufacturer}>{ model.manufacturer }</li>
            <li key={model.origin}>{ model.origin }</li>
            <li key={model.year}>{ model.year }</li>
        </ul> )}
        </div>)

}

