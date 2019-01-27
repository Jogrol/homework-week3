import * as React from 'react'
import { connect } from 'react-redux'
import ModelDetails from './ModelDetails'
import PropTypes from 'prop-types'


export class ModelDetailsContainer extends React.Component {

    static propTypes = {
        models: PropTypes.array.isRequired,
    }

  render() {
    return <ModelDetails model={this.props.models} />
    }
}   

const mapStateToProps = (state) => { 
    return  {models: state}
}

export default connect(mapStateToProps)(ModelDetailsContainer)