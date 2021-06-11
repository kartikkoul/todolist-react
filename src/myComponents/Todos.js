import React from 'react'
import './Todos.css'
import {Container} from 'react-bootstrap'
import TodoItem from './TodoItem'

const Todos = (props) => {

    
    return (
        <Container>

            <div className="handleTodos">
                <button className="add ">Add</button>
                <span className="deleteAll" onClick={props.onDeleteAll}>Delete All</span>
            </div>

            <div className="todosFrameOuter">
                <div className='todosFrame'>

                    {props.todo.length===0?'No Important Tasks For Now!!':props.todo.map(
                        (item) => {
                            return (
                                    <TodoItem todoItem={item} key={item.sno} onDelete={props.onDelete}/>
                            )
                        }
                    )}

                    

                    
                </div>
            </div>
        </Container>
    )
}

export default Todos
