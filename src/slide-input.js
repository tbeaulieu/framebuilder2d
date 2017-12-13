import React, { Component } from 'react';

class SlideInput extends Component{
    render(){
        return(
            <div>
            <label>{this.props.value} </label><input type="range" min={this.props.min} max={this.props.max} step={this.props.step} name={this.props.name} value={this.props.value} onChange={this.props.change}/>
            </div>
        )
    }
}

export default SlideInput