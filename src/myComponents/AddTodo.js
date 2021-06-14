import React from 'react'
import './AddTodo.css'

const AddTodo = () => {
    return (
        <div className='addTodoOuter'>
            <div className="addTodoInner">
                <div className="cardTopArea">
                    <div className="cardTitle">
                        <input type="text" name="text"  placeholder='Subject'/>
                    </div>
                    <div className="timeline">
                        <div className="date">
                            <input type="date"/>
                        </div>
                        <div className="time">
                            <input type="time"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
 
export default AddTodo
