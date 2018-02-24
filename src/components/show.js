import React, {Component } from 'react';
import { connect} from 'react-redux';
import { bindActionCreators} from 'redux';
import * as TodoActions from '../actions/todo';

class Show extends Component{
    constructor(props){
        super(props);
        this.state = {}
    }

    render(){
        let todos = this.props.todos.map((todo,index)=>{
            return <tr key={index}>
            <td>{index}</td>
            <td>{todo}</td>
            </tr>
        })

        return(
     <div className="column show">
        <h3>Show Page</h3>
        <table>
            <thead>
                <th>S/N</th>
                <th>Todo</th>
            </thead>
            <tbody>
                {todos}
            </tbody>
        </table>
     </div>
        )
    }
}


function mapStateToProps(state,prop){
    return {
        todos: state.todo.todos
    }
}

function mapDispatchToProps(dispatch){
    return {
        actions: bindActionCreators(TodoActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Show);