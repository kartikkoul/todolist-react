import React from 'react'
import './TodoItem.css'

const TodoItem = ({todoItem, onDelete}) => {

    return (
        <div className='itemCard'>
            <div className="cardInner">
                <div className="topArea">
                    <div className="title">{todoItem.title}</div>
                    <div className="timeline">
                        <div className="date">
                            {todoItem.date}
                        </div>
                        <div className="time">
                            {todoItem.time}
                        </div>
                    </div>
                </div>

                <div className="midArea">
                    <div className="description">
                        {todoItem.description}
                    </div>
                </div>

                <div className="buttonArea">
                    <button className="done customBtn" onClick={onDelete}>
                        Done
                    </button>
                    <button className="delete customBtn" onClick={onDelete}>
                        Delete
                    </button>
                </div>

            </div>
        </div>
    )
}

export default TodoItem
