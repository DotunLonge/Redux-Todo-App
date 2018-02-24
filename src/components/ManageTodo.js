import React, {Component } from 'react';
import {connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import * as TodoActions from '../actions/todo';

class Add extends Component{
    constructor(props){
        super(props);
        this.state = {
        }

    }

    addTodo = (e)=>{
        e.preventDefault();
      this.props.actions.AddTodo(this.state.newTodo)
    }

    removeTodo = (e)=>{
        e.preventDefault();
        // console.log( this.props.todos[this.state.TodoId])
        this.props.actions.RemoveTodo( this.props.todos[this.state.TodoId] )
    }
    render(){
        return(
            <div className="column">
                <h3>Add Page</h3>
                <form action="" onSubmit = {this.addTodo}>
                    <div className="form-group">
                        <input type="text" placeholder="Todo Goes Here" onChange = {(e)=>{
                            this.setState({newTodo: e.target.value })
                        }} />
                    </div>
                
                    <div className="form-group">
                        <input type="submit" value="Add"/>
                    </div>
                
                </form>

                <form action="" onSubmit = {this.removeTodo}>
                    <div className="form-group">
                        <input type="number" onChange = {(e)=>{
                            this.setState({TodoId: e.target.value })
                        }} />
                    </div>
                
                    <div className="form-group">
                        <input type="submit" value="Remove"/>
                    </div>
                
                </form>
    
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

export default connect(mapStateToProps, mapDispatchToProps)(Add);