import React, { Component } from 'react';
import {Layer, Stage, Group, Rect, Line, Circle, RegularPolygon} from 'react-konva';
import './App.css';
// import { RegularPolygon } from 'konva';

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
      strokeWidth={this.props.tubeDiameter}
      lineCap={"round"}
      
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
        strokeWidth={this.props.postDiameter}
        />
      <Line
          points={[this.props.bbp[0], canvasHeight-this.props.bbp[1], this.props.stt[0], canvasHeight-this.props.stt[1]]}
          stroke={'red'}
          strokeWidth={this.props.tubeDiameter}
          />  
      <Line
          points={[this.props.ste[0], canvasHeight-this.props.ste[1], this.props.ste[2], canvasHeight-this.props.ste[3]]}
          stroke={'red'}
          strokeWidth={this.props.tubeDiameter}
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
          strokeWidth={this.props.tubeDiameter}
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
        strokeWidth={this.props.tubeDiameter}
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
          strokeWidth={this.props.tubeDiameter}
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

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      zoomScale: .5,
      wheelSize: 622,
      tireSize: 23,
      rimDepthFront: 60,
      rimDepthRear: 60,
      chainstayLength: 404,
      chainstayThickness: 20,
      seatstayThickness: 20,
      bottomBracketDrop: 58,
      seatTubeLength: 560,
      seattubeDiameter:27.2,
      seatTubeExtension: 20,
      seatTubeAngle: 74,
      seatStayOffset: 50,
      saddleHeight: 180,
      topTubeLength: 570,
      headTubeLength: 159,
      headTubeAngle: 74.5,
      headTubeOffset: 30,
      forkLength: 396,
      forkOffset: 40,
      stemLength: 110,
      stemAngle: 17,
      stemStack: 40,
      barDrop: 173,
      barReach: 109,
      reachDrop: 50,
      barTension: 0,
      barCurve: "Track",
      tubeDiameter: 28
    }
    this.adjustValues = this.adjustValues.bind(this);
  }
  componentDidMount() {
      this.updateCanvas();
  }

  updateCanvas() {
      // const ctx = this.refs.canvas.getContext('2d');
      // ctx.fillRect(0,0, 100, 100);
      // ctx.transform(1, 0, 0, -1, 0, this.refs.canvas.height);
  }

  adjustValues(event){
    this.setState({[event.target.name]:event.target.value});
  }

  render() {
    //Utilities
    let zm = (x)=> x*this.state.zoomScale;
    let rads = (deg) => (deg * (Math.PI/180));
    let wheelRadius = zm(this.state.wheelSize/2);
   
    //Calc points
    let bbPoint = [
        getFromHypotenuse(zm(this.state.chainstayLength), 
        zm(this.state.bottomBracketDrop))+wheelRadius, 
        wheelRadius- zm(this.state.bottomBracketDrop)
      ];
    
    let seatPoints = [
      bbPoint[0]-Math.sin(rads(90-this.state.seatTubeAngle))*zm(this.state.seatTubeLength),
      Math.cos(rads(90-this.state.seatTubeAngle))*zm(this.state.seatTubeLength)+wheelRadius
    ];

    let seatTubeExtensionPoints = [
      seatPoints[0], 
      seatPoints[1], 
      seatPoints[0]-Math.sin(rads(90-this.state.seatTubeAngle))*zm(this.state.seatTubeExtension), 
      Math.cos(rads(90-this.state.seatTubeAngle))*zm(this.state.seatTubeExtension)+seatPoints[1]
    ];
    
    let seatPostPoints = [
      seatPoints[0], 
      seatPoints[1], 
      seatPoints[0]-Math.sin(rads(90-this.state.seatTubeAngle))*zm(this.state.saddleHeight), 
      Math.cos(rads(90-this.state.seatTubeAngle))*zm(this.state.saddleHeight)+seatPoints[1]
    ];
    
    let seatStayOffsetPoint = [
      seatPoints[0]+Math.sin(rads(90-this.state.seatTubeAngle))*zm(this.state.seatStayOffset),
      seatPoints[1]-Math.cos(rads(90-this.state.seatTubeAngle))*zm(this.state.seatStayOffset)
    ];

    let headPoints = [
      seatPoints[0]+zm(this.state.topTubeLength),
      Math.cos(rads(90-this.state.headTubeAngle))*zm(this.state.forkLength) + zm(this.state.headTubeLength) + wheelRadius,
      seatPoints[0]+zm(this.state.topTubeLength)+Math.sin(rads(90-this.state.headTubeAngle))*zm(this.state.headTubeLength),
      Math.cos(rads(90-this.state.headTubeAngle))*zm(this.state.forkLength) + wheelRadius      
    ];

    let forkPoints = [
      seatPoints[0]+zm(this.state.topTubeLength)+Math.sin(rads(90-this.state.headTubeAngle))*zm(this.state.headTubeLength),
      Math.cos(rads(90-this.state.headTubeAngle))*zm(this.state.forkLength) + wheelRadius,
      seatPoints[0]+zm(this.state.topTubeLength)+Math.sin(rads(90-this.state.headTubeAngle))*zm(this.state.forkLength)+zm(this.state.forkOffset),
      wheelRadius];
    
    let stackPoints = [
      headPoints[0],
      headPoints[1],
      headPoints[0]-Math.sin(rads(90-this.state.headTubeAngle))*zm(this.state.stemStack), 
      Math.cos(rads(90-this.state.headTubeAngle))*zm(this.state.stemStack)+headPoints[1]
    ];

    let stemPoints = [
      stackPoints[2],
      stackPoints[3],
      stackPoints[2]+Math.cos(rads(90-this.state.headTubeAngle-this.state.stemAngle))*zm(this.state.stemLength),
      stackPoints[3]+Math.sin(rads(90-this.state.headTubeAngle-this.state.stemAngle))*zm(this.state.stemLength)
    ];

    //These are dynamically calculated from our already existing seattube and top tube

    let ttPoints = [
        seatPoints[0],
        seatPoints[1],
        headPoints[0],
        headPoints[1]  
    ];

    let dtPoints = [
        bbPoint[0],
        bbPoint[1],
        headPoints[2]-Math.sin(rads(90-this.state.headTubeAngle))*zm(this.state.headTubeOffset),
        headPoints[3]+Math.cos(rads(90-this.state.headTubeAngle))*zm(this.state.headTubeOffset)
    ];

    let barPoints =[
      stemPoints[2],
      stemPoints[3],
      stemPoints[2]+zm(this.state.barReach),
      stemPoints[3]-zm(this.state.reachDrop),
      stemPoints[2],
      stemPoints[3]-zm(this.state.barDrop),
      stemPoints[2]-zm(this.state.barReach/2),
      stemPoints[3]-zm(this.state.barDrop)
    ];

    let wheelbase = forkPoints[2]-wheelRadius;

    return (
      <div className="App">
       {/* <canvas ref="canvas" width={800} height={600}></canvas> */}
       <Stage width={1024} height={canvasHeight}>
          <Layer
            draggable={'true'}
          >
            <RearWheel 
              wheelRadius={wheelRadius}
              depth={zm(this.state.rimDepthRear)}
              tire={zm(this.state.tireSize)}
              />
            <FrontWheel
              wheelRadius={wheelRadius}
              wheelbase={wheelbase}
              depth={zm(this.state.rimDepthFront)}
              tire={zm(this.state.tireSize)}
            />
            <Chainstay 
              wheelRadius={wheelRadius}
              length={zm(this.state.chainstayLength)}
              bottomBracketDrop = {zm(this.state.bottomBracketDrop)}
              tubeDiameter = {zm(this.state.chainstayThickness)}
            />
            <SeatTube
              bbp={bbPoint}
              stt={seatPoints}
              ste={seatTubeExtensionPoints}
              shp={seatPostPoints}
              tubeDiameter={zm(this.state.tubeDiameter)}
              postDiameter={zm(this.state.seattubeDiameter)}
            />
            <SeatStay
              wheelRadius={wheelRadius}
              stt={seatStayOffsetPoint}
              tubeDiameter = {zm(this.state.chainstayThickness)}              
            />
            <TopTube
              points={ttPoints}
              tubeDiameter={zm(this.state.tubeDiameter)}              
            />
            <DownTube
              points={dtPoints}
              tubeDiameter={zm(this.state.tubeDiameter)}              
            />
            <BottomBracketHole
              wheelRadius={wheelRadius}
              bbp={bbPoint}
            />
            
            <Stem
              stack={stackPoints}
              points={stemPoints}
            />
            <HeadTube
              points={headPoints}
              tubeDiameter={zm(this.state.tubeDiameter)}              
            />
            <Fork
              points={forkPoints}
            />

            <Handlebars
              points={barPoints}
              tension={this.state.barTension}
            />
            <Nuts
              wheelRadius={wheelRadius}
              wheelbase={wheelbase}
            />
          </Layer>
          <Layer>
            {/* <Line 
                points={[0,canvasHeight-wheelRadius,2000,canvasHeight-wheelRadius]}
                stroke={'blue'}
                strokeWidth={1}
                dash={[1, 1]}
                
            />
             <Line 
                points={[0,canvasHeight-seatPoints[1],2000,canvasHeight-seatPoints[1]]}
                stroke={'blue'}
                strokeWidth={1}
                dash={[1, 1]}
                
            />
            <Line 
                points={[0,canvasHeight-forkPoints[1],2000,canvasHeight-forkPoints[1]]}
                stroke={'blue'}
                strokeWidth={1}
                dash={[1, 1]}
                
            />
            <Line 
                points={[0,canvasHeight-forkPoints[3],2000,canvasHeight-forkPoints[3]]}
                stroke={'blue'}
                strokeWidth={1}
                dash={[1, 1]}
                
            />
            <Line
                points={[bbPoint[0],0,bbPoint[0],canvasHeight]}
                stroke={'blue'}
                strokeWidth={1}
                dash={[1, 1]}
                
            /> */}

            <Line
                points={[seatPoints[0],canvasHeight-seatPoints[1]-50, seatPoints[0],canvasHeight-seatPoints[1]-60, headPoints[0] ,canvasHeight-seatPoints[1]-60, headPoints[0] ,canvasHeight-seatPoints[1]-50]}
                stroke={'blue'}
                strokeWidth={1}
                dash={[1, 1]}
            />
{/* 
            <Line
                points={[seatPoints[0],0,seatPoints[0],canvasHeight]}
                stroke={'blue'}
                strokeWidth={1}
                dash={[1, 1]}
                
            />
            <Line
                points={[forkPoints[0],0,forkPoints[0],canvasHeight]}
                stroke={'blue'}
                strokeWidth={1}
                dash={[1, 1]}
                
            />
            <Line
                points={[forkPoints[2],0,forkPoints[2],canvasHeight]}
                stroke={'blue'}
                strokeWidth={1}
                dash={[1, 1]}
                
            /> */}
          </Layer>
       </Stage>
        <div className="controls">
          <section>
          <label>Wheel Size {this.state.wheelSize}mm</label>
          {/* <input type="range" min="200" max="700" step="1" name="wheelSize" value={this.state.wheelSize} onChange={this.adjustValues}/> */}
          <select value={this.state.wheelSize} name="wheelSize" onChange={this.adjustValues}>
            <option value="406">20" BMX</option>  
            <option value="507">24" Cruiser</option>
            <option value="559">26" Mountain Bike</option>
            <option value="584">650B</option>
            <option value="622">700C/29er</option>
          </select>
          <label>Front Depth {this.state.rimDepthFront}mm</label>
          <input type="range" min="10" max="100" step="1" name="rimDepthFront" value={this.state.rimDepthFront} onChange={this.adjustValues}/>
          <label>Rear Depth {this.state.rimDepthRear}mm</label>
          <input type="range" min="10" max="100" step="1" name="rimDepthRear" value={this.state.rimDepthRear} onChange={this.adjustValues}/>
          <label>Tire Size {this.state.tireSize}</label>
          <input type="range" min="18" max="55" step="1" name="tireSize" value={this.state.tireSize} onChange={this.adjustValues}/>
          </section>
          <section>
            <label>Chainstay Length {this.state.chainstayLength}mm</label>
            <input type="range" min={this.state.wheelSize/2} max="500" step="1" name="chainstayLength" value={this.state.chainstayLength} onChange={this.adjustValues}/>
            <label>Seat Stay Offset {this.state.seatStayOffset}mm</label>
            <input type="range" min="0" max="200" name="seatStayOffset" value={this.state.seatStayOffset} onChange={this.adjustValues}/>
            <label>Tubing Diameter {this.state.chainstayThickness}mm</label>
            <input type="range" min="10" max="40" name="chainstayThickness" value={this.state.chainstayThickness} onChange={this.adjustValues}/>

            <label>Bottom Bracket Drop {this.state.bottomBracketDrop}mm</label>
            <input type="range" min="0" max="100" name="bottomBracketDrop" value={this.state.bottomBracketDrop} onChange={this.adjustValues}/>
          </section>

          <section>
            <label>Seat Tube Angle {this.state.seatTubeAngle}</label>
            <input type="range" min="60" max="90" step=".5" name="seatTubeAngle" value={this.state.seatTubeAngle} onChange={this.adjustValues}/>
            <label>Seat Tube {this.state.seatTubeLength}mm </label>
            <input type="range" min="200" max="700" step="1" name="seatTubeLength" value={this.state.seatTubeLength} onChange={this.adjustValues}/>
            <label>Seat Tube Extension {this.state.seatTubeExtension}mm </label>
            <input type="range" min="0" max={this.state.saddleHeight} step="1" name="seatTubeExtension" value={this.state.seatTubeExtension} onChange={this.adjustValues}/>
            <label>Saddle Height {this.state.saddleHeight}mm </label>
            <input type="range" min="0" max="300" step="1" name="saddleHeight" value={this.state.saddleHeight} onChange={this.adjustValues}/>
          </section>

          <section>
            <label>Effective TT {this.state.topTubeLength}mm </label>
            <input type="range" min="400" max="700" step="1" name="topTubeLength" value={this.state.topTubeLength} onChange={this.adjustValues}/>
            <label>Tubing Diameter {this.state.tubeDiameter}mm </label>
            <input type="range" min="22" max="80" step="1" name="tubeDiameter" value={this.state.tubeDiameter} onChange={this.adjustValues}/>
          </section>

          <section>
            <label>Head Tube Angle {this.state.headTubeAngle}</label>
            <input type="range" min="60" max="90" step=".5" name="headTubeAngle" value={this.state.headTubeAngle} onChange={this.adjustValues}/>
            <label>Head Tube {this.state.headTubeLength}mm </label>
            <input type="range" min="50" max="230" step="1" name="headTubeLength" value={this.state.headTubeLength} onChange={this.adjustValues}/>
            </section>
          <section>
            <label>Stem Length {this.state.stemLength}mm</label>
            <input type="range" min="70" max="140" step="1" name="stemLength" value={this.state.stemLength} onChange={this.adjustValues}/>
            <label>Stem Angle -{this.state.stemAngle} degrees</label>
            <input type="range" min="0" max="30" step="1" name="stemAngle" value={this.state.stemAngle} onChange={this.adjustValues}/>
            <label>Stack {this.state.stemStack}mm</label>
            <input type="range" min="0" max="80" step="1" name="stemStack" value={this.state.stemStack} onChange={this.adjustValues}/>

          </section>
          <section>
            <label>Bar Reach {this.state.barReach}mm</label>
            <input type="range" min="70" max="140" step="1" name="barReach" value={this.state.barReach} onChange={this.adjustValues}/>
            <label>Bar Drop {this.state.barDrop}mm</label>
            <input type="range" min="70" max="190" step="1" name="barDrop" value={this.state.barDrop} onChange={this.adjustValues}/>
            <label>Reach Drop {this.state.reachDrop}mm</label>
            <input type="range" min="0" max={this.state.barDrop} step="1" name="reachDrop" value={this.state.reachDrop} onChange={this.adjustValues}/>
            <label>Bar Tension {this.state.barTension}</label>
            <input type="range" min="0" max="1" step=".02" name="barTension" value={this.state.barTension} onChange={this.adjustValues}/>
          </section>
          <section>
            <label>Fork Length {this.state.forkLength}mm</label>
            <input type="range" min={(this.state.wheelSize/2)+30} max="504" step=".5" name="forkLength" value={this.state.forkLength} onChange={this.adjustValues}/>

            <label>Fork Offset {this.state.forkOffset}mm</label>
            <input type="range" min="20" max="70" step="1" name="forkOffset" value={this.state.forkOffset} onChange={this.adjustValues}/>
          </section> 
        </div>
        <div className="Statistics">
        <h3>Stats</h3>
          <p>Total Stack: {seatPoints[0]/this.state.zoomScale}mm</p>
          <label>zoomScale </label><input type="range" min=".01" max="2" step=".01" name="zoomScale" value={this.state.zoomScale} onChange={this.adjustValues}/>{this.state.zoomScale}/>
        </div>
      </div>
    );
  }
}

export default App;
