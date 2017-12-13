import React, { Component } from 'react';
import {Layer, Stage, Group, Rect, Line, Circle, RegularPolygon} from 'react-konva';

let canvasHeight = 700;

function getFromHypotenuse(hypotenuse, side1){
    // let side2 = Math.sqrt((Math.pow(hypotenuse,2)-Math.pow(side1,2)));
    let side2 = Math.pow(hypotenuse, 2)+Math.pow(side1, 2);
    return Math.sqrt(side2);
  }
  

class RearWheel extends Component{
  render(){
    return(
      <Group>
        <Circle 
              x={this.props.wheelRadius} 
              y={canvasHeight-this.props.wheelRadius} 
              radius={this.props.wheelRadius + this.props.tire}
              fill={"#222"}
        />
        <Circle
              x={this.props.wheelRadius} 
              y={canvasHeight-this.props.wheelRadius} 
              radius={this.props.wheelRadius}
              stroke={'black'}
              strokeWidth={1}
              fill={"#333"}
              
            />
        <Circle
              x={this.props.wheelRadius} 
              y={canvasHeight-this.props.wheelRadius} 
              radius={this.props.wheelRadius-this.props.depth}
              stroke={'black'}
              strokeWidth={1}
              fill={"#fff"}              
            />
            
        </Group>
  
    );
  }
}

class FrontWheel extends Component{
  render(){
    return(
      <Group>
         <Circle 
              x={this.props.wheelbase+this.props.wheelRadius} 
              y={canvasHeight-this.props.wheelRadius} 
              radius={this.props.wheelRadius + this.props.tire}
              fill={"#222"}
          />
        <Circle
          x={this.props.wheelbase + this.props.wheelRadius}
          y={canvasHeight-this.props.wheelRadius}
          radius={this.props.wheelRadius}
          stroke={'black'}
          strokeWidth={1}
          fill={"#333"}
        />
        <Circle
        x={this.props.wheelbase + this.props.wheelRadius} 
        y={canvasHeight-this.props.wheelRadius} 
        radius={this.props.wheelRadius-this.props.depth}
        stroke={'black'}
        strokeWidth={1}
        fill={"#fff"}
      />
    </Group>
    
    )
  }
}

class Chainstay extends Component{
  render(){
    return(
      <Line
      points={[this.props.wheelRadius, canvasHeight-(this.props.wheelRadius), 
        getFromHypotenuse(this.props.length, this.props.bottomBracketDrop)+this.props.wheelRadius
        , canvasHeight-(this.props.wheelRadius-this.props.bottomBracketDrop)]}
      stroke={'red'}
      strokeWidth={15}
      />
    )
  }
}

class SeatTube extends Component{
  render(){
    return(
      <Group>
      <Line
        points={[this.props.shp[0], canvasHeight-this.props.shp[1], this.props.shp[2], canvasHeight-this.props.shp[3]]}
        stroke={'black'}
        strokeWidth={14}
      />
      <Line
          points={[this.props.bbp[0], canvasHeight-this.props.bbp[1], this.props.stt[0], canvasHeight-this.props.stt[1]]}
          stroke={'red'}
          strokeWidth={15}
      />  
      <Line
          points={[this.props.ste[0], canvasHeight-this.props.ste[1], this.props.ste[2], canvasHeight-this.props.ste[3]]}
          stroke={'red'}
          strokeWidth={15}     
      />
      </Group>
    )
  }
}

class SeatStay extends Component{
  render(){
    return(
      <Line
          points={[this.props.wheelRadius, canvasHeight-this.props.wheelRadius, this.props.stt[0], canvasHeight-this.props.stt[1]]}
          stroke={'red'}
          strokeWidth={15}
      />
    )
  }
}

class TopTube extends Component{
  render(){
    return(
      <Line
        // points={[this.props.stt[0], canvasHeight-this.props.stt[1]]}
        points={[this.props.points[0],canvasHeight-this.props.points[1],this.props.points[2],canvasHeight-this.props.points[3]]}
        stroke={'red'}
        strokeWidth={15}
      />
    )
  }
}

class DownTube extends Component{
  render(){
    return(
      <Line
          points={[this.props.points[0],canvasHeight-this.props.points[1],this.props.points[2],canvasHeight-this.props.points[3]]}
          stroke={"Red"}
          strokeWidth={15}
      />
    )
  }
}
class HeadTube extends Component{
  render(){
    return(
      <Line
        points={[this.props.points[0],canvasHeight-this.props.points[1],this.props.points[2],canvasHeight-this.props.points[3]]}
        stroke={'Red'}
        strokeWidth={15}
      />
    )
  }
}

class Fork extends Component{
  render(){
    return(
      <Line
        points={[this.props.points[0],canvasHeight-this.props.points[1],this.props.points[2],canvasHeight-this.props.points[3]]}
        stroke={'black'}
        strokeWidth={17}
        lineCap={"round"}
      />
    )
  }
}

class Stem extends Component{
  render(){
    return(
      <Group>
        <Line 
          points={[this.props.stack[0], canvasHeight-this.props.stack[1], this.props.stack[2], canvasHeight-this.props.stack[3]]}
          stroke={'black'}
          strokeWidth={15}
        />
        <Line
          points={[this.props.points[0],canvasHeight-this.props.points[1],this.props.points[2],canvasHeight-this.props.points[3]]}
          stroke={'black'}
          strokeWidth={20}
          // lineCap={"round"}
        />
      </Group>
    )
  }
}

class BottomBracketHole extends Component{
  render(){
    return(
      <Circle
        x={this.props.bbp[0]}
        y={canvasHeight-this.props.bbp[1]}
        radius={10}
        stroke={'black'}
        strokeWidth={1}
        fill={'#fff'}
      />
    )
  }
}

class Handlebars extends Component{
  render(){
    return(
      <Line
        points={[
          this.props.points[0],
          canvasHeight-this.props.points[1],
          this.props.points[2],
          canvasHeight-this.props.points[3],
          this.props.points[4],
          canvasHeight-this.props.points[5],
          this.props.points[6],
          canvasHeight-this.props.points[7]
        ]}
        stroke={'silver'}
        strokeWidth={15}
        lineCap={"round"}
        lineJoin={"bevel"}
        tension={this.props.tension}
      />
    )
  }
}

class Nuts extends Component{
  render(){
    return(
      <Group>
        <RegularPolygon
          sides={6}
          stroke={'black'}
          strokeWidth={1}
          fill={'green'}
          x={this.props.wheelbase+this.props.wheelRadius} 
          y={canvasHeight-this.props.wheelRadius} 
        />
        <RegularPolygon
          sides={6}
          stroke={'black'}
          strokeWidth={1}
          fill={'green'}
          x={this.props.wheelRadius} 
          y={canvasHeight-this.props.wheelRadius} 
        />
      </Group>
    )
  }
}

export default { RearWheel, FrontWheel, HeadTube, TopTube, DownTube, SeatStay, Chainstay, SeatTube, BottomBracketHole, Handlebars, Stem, Fork, Nuts};