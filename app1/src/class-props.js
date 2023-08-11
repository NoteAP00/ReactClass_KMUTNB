import React,{Component} from "react";

export default class MsgBox extends Component {
/*
    constructor(props) {
        super(props)
    }
*/
    render() {
        const divStyle = {
            margin: '10px',
            padding: '5x',
            color: this.props.color,
            backgroundColor: this.props.bgcolor,
            fontSize: this.props.fontSize,
            border: this.props.border
        }
        return (
            <div style={divStyle}>
                {this.props.text}
            </div>
        )
    }
}