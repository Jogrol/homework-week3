import * as React from 'react'
import { connect } from 'react-redux'
import ModelDetails from './ModelDetails'


export class ModelDetailsContainer extends React.Component {


  render() {
    return <ModelDetails model={this.props.models} />
  }
}

const mapStateToProps = (state) => {
    console.log(state)
    return  {
      models: state
    }
  }
export default connect(mapStateToProps)(ModelDetailsContainer)