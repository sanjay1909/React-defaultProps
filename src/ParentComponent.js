import React, { PropTypes } from 'react'
import ChildComponent from './ChildComponent'

export default class  ParentComponent extends React.Component {

    static propTypes = {
        onClick:React.PropTypes.func
    };

    constructor(props){
        super(props);
        this.state = {
            mount: true
        }
    }

    mountChildComponent=()=>{
        this.setState({
            mount: true
        })
    }

    unMountChildComponent=()=>{
        this.setState({
            mount: false
        })
    }

    render(){

        let childComponentUI = this.state.mount ? <ChildComponent /> : null

        return (
            <div style={{border:'1px solid lightgrey', padding:'8px'}}>
                <h2 style={{textAlign:'center'}}>Parent Component</h2>
                <ul>
                    <li><strong>Fact 1: </strong>Props are read-only</li>
                    <li>if a prop contains an array or a Object (non-primitive value), we can still mutate the value inside that reference. <u>Is that Expected?</u> </li>
                    <li><strong>Fact 2: </strong>If parent don't pass props, child is expected to take <i>defaultProps</i> value</li>
                    <li>But in our case looks like the prev mutated value is set as <i>child's defaultProps</i> value on child un-mount. <u>Is that Expected?</u></li>
                </ul>
                <div style={{padding:'8px'}}>
                    <div style={{padding:'16px'}}>
                        <h3>Demo To Test </h3>
                        <h4>Click on = Increment | Un-Mount Child | Mount Child</h4>
                        <button onClick={this.mountChildComponent}> Mount Child</button>
                        &nbsp;&nbsp;
                        <button onClick={this.unMountChildComponent}>Un-Mount Child </button>
                    </div>
                    {childComponentUI}
                </div>

            </div>
        );
    }
}