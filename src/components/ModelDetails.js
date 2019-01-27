import * as React from 'react'

export default function ModelDetails(props) {
    
    if (props.model.lenght === 0) return "nothing"
        return (
            <div>
                <h3>Computer Models</h3>
                    { props.model.map(model => 
                    <ul>
                        <li key={model.name}><b>{ model.name }</b></li>
                        <li key={model.manufacturer}>{ model.manufacturer }</li>
                        <li key={model.origin}>{ model.origin }</li>
                        <li key={model.year}>{ model.year }</li>
                    </ul> )}
            </div>)
}

