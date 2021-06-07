import React from 'react'
import './Todos.css'
import {Container} from 'react-bootstrap'
import TodoItem from './TodoItem'

const Todos = (props) => {
    return (
        <Container>
            <div className="todosFrameOuter">
                <div className='todosFrame'>

                    {props.todo.map(
                        (item) => {
                            return (
                                <>
                                    <TodoItem todoItem={item} key={item.sno} onDelete={props.onDelete}/>
                                </>
                            )
                        }
                    )}

                    
                </div>
            </div>
        </Container>
    )
}

export default Todos
