import React, { PropTypes } from 'react'

export default class  ChildComponent extends React.Component {

    static defaultProps = {
        defaultArray: [0]
    };

    static propTypes = {
        defaultArray:React.PropTypes.arrayOf(React.PropTypes.number)
    };

    constructor(props){
        super(props);
        this.state = {
            clickCount: 0
        }

    }



    onClick =()=> {
        const newCount = this.state.clickCount + 1;
        this.props.defaultArray.push(newCount);
        this.setState({
            clickCount: newCount
        })
    };

    render(){
        const defaultArray = this.props.defaultArray;
        let statusUI = defaultArray.length === 1 ?
                        <span>Increment is not Clicked yet</span> :
                        <ul>
                            <li>Clicking on incrementer will add value to props.defaultArray(Though props.defaultArray is Read-Only)</li>
                            <li>After Mounting back we expected to print <b>0</b></li>
                            <li>But we get <b>{defaultArray}</b> </li>
                        </ul>;


        return (
            <div style={{border:'1px solid lightgrey', padding:'32px',background:'lightblue' }}>
                <h4>Child Component</h4>
                <div>
                    <button onClick={this.onClick}>Increment</button>
                </div>
                {statusUI}
            </div>
        );
    }
}