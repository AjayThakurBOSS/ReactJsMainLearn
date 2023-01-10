import React, { Component, PureComponent } from 'react';
// import RegComp from './RegComp';
// import PureComp from './PureCo mp';
import MemoComp from './MemoComp';

export class ParentComp extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name: 'Ajay'
      }
    }

    componentDidMount(){
        setInterval(() => {
            this.setState({
                name:'Ajay'
            })
        },2000)
    }
    
  render() {
    console.log('Parent Component render')
    return (
      <div>
        Parent Component
        <MemoComp name={this.state.name}/>
        {/*<RegComp name= {this.state.name}/>
    <PureComp name={this.state.name}/>*/}
      </div>
    );
  }
}

export default ParentComp;
