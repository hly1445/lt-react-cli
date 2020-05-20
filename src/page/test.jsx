import React, { Component } from 'react';
import { connect } from 'react-redux'

class Home extends Component {
    constructor(props) {
        super(props)
    }
    render () {
        return (
            <div>
                <h1>this is  test page</h1>
                {this.props.count}
                {this.props.from}
                <button onClick={this.handleClik.bind(this)}>增加</button>
            </div>
        )
    }
    handleClik () {
        this.props.increment(1)
    }
}

const mapState = state => {
    return ({
        count: state.count.getIn(['address','count']),
        from:state.count.getIn(['address','from'])
    })
}

const mapDispatch = (dispatch) => ({
    // increment: dispatch.count.increment,
    increment: (payload) => {
        dispatch({ type: 'count/increment', payload: payload })
    },
})


export default connect(mapState,mapDispatch)(Home)