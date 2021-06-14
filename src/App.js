import './App.css';
import Header from './myComponents/Header';
import Title from './myComponents/Title';
import Todos from './myComponents/Todos'
import Footer from './myComponents/Footer';
import AddTodo from './myComponents/AddTodo'
import { useState } from 'react'

function App() {

  const onDelete = (e) => { 

    // Deleting this way in react doesnt work 
    // let index = todo.indexOf(todo);
    // todo.splice(index, 1)

    setTodo(
        todo.filter((todo) => {
          return e!==todo
        })
    )
  }

  const onDeleteAll = () => {
    return setTodo([])
  }

  var [todo, setTodo] = useState([
    {
        sno : 1,
        title : 'Update the client',
        date : '23/11/1999',
        time : '22:22',
        description : 'Update the client about the development and the new feature.'
    },
    {
        sno : 2,
        title : 'Team coding',
        date : '23/11/1999',
        time : '22:22',
        description : 'Meeting with team at 7AM and gotta develop the new component by tonight'
    },
    {
        sno : 3,
        title : 'Exercise',
        date : '23/11/1999',
        time : '22:22',
        description : 'Go to exercise, today is Biceps game'
    }
  ])
  
  


  return (
    <div className="webApp-Outer">
      <div className="webApp-Inner">
        <div className="addTodoPopup">
            <AddTodo/>
        </div> 
        <div className="navbar-title">
          <div className="navbar">
            <Header item1 = 'Todo' item2 ='About'/>
          </div>
          <div className="titleOuter">
            <Title title='Kya Karneka Hai Bhidu?'/>
          </div>
        </div>   

        <div className="midSection">
          <Todos todo={todo} onDelete={onDelete} onDeleteAll={onDeleteAll} />
        </div>

            

      </div>
      {/* <footer>
        <div className='footerArea'>
          <Footer/>
        </div>
      </footer> */}
    </div>
  );
}

export default App;
