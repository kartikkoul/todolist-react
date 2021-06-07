import './App.css';
import Header from './myComponents/Header';
import Title from './myComponents/Title';
import Todos from './myComponents/Todos'

function App() {

  const onDelete = (todo) => {
    console.log('OnDelete Works', todo)
  }

  let todo = [
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
          title : 'Update the client',
          date : '23/11/1999',
          time : '22:22',
          description : 'Update the client about the development and the new feature'
      }
  ]


  return (
    <div className="webApp-Outer">
      <div className="webApp-Inner">
        <div className="navbar-title">
          <div className="navbar">
            <Header item1 = 'Todo' item2 ='About'/>
          </div>
          <div className="titleOuter">
            <Title title='Kya Karneka Hai Bhidu?'/>
          </div>
        </div>

        <Todos todo={todo} onDelete={onDelete}/>
        
      </div>
    </div>
  );
}

export default App;
