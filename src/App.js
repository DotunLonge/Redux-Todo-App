import React, {Component } from 'react';
import './components/shared.css';
import ManageTodo from './components/ManageTodo';
import Show from './components/show';

class App extends Component{
    constructor(props){
        super(props);
        this.state = {}
    }

    render(){
        return(
            <div className="main">
              <ManageTodo/>
              <Show/>
            </div>
        )
    }
}

export default App;