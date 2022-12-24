import { useState } from 'react';
import './App.css';
import AllTasks from './components/AllTasks/AllTasks';
import ActiveTasks from './components/ActiveTasks/ActiveTask';
import CompletedTasks from './components/CompletedTasks/CompletedTasks';
import { createItem } from './components/helper/localStorage';

createItem('todoList');

const App = () => {
	
  const [tabState, setTabState] = useState({
    all: true,
    active: false,
    completed: false
  });

  const hrShowClassName = 'hr-visible';
  const hrHideClassName = 'hr-invisible';

  const handleTabSwitch = (tabName) => {

    switch(tabName) {
      case 'all':
        setTabState({
          all: true,
          active: false,
          completed: false
        })
        break;
      case 'active':
        setTabState({
          all: false,
          active: true,
          completed: false
        })
        break;
      case 'completed':
        setTabState({
          all: false,
          active: false,
          completed: true
        })
        break;
      default:
        break;
    }
  }

  return (
    <div className='app'>
      <h1 className='app-heading'>#todo</h1>
      <div className='app-control'>
        <div onClick={() => handleTabSwitch('all')} className='app-control-tab'>
          <span>All</span>
          <hr className={tabState.all ? hrShowClassName: hrHideClassName} />
        </div>
        <div onClick={() => handleTabSwitch('active')} className='app-control-tab'>
          <span>Active</span>
          <hr className={tabState.active ? hrShowClassName: hrHideClassName} />
        </div>
        <div onClick={() => handleTabSwitch('completed')} className='app-control-tab'>
          <span>Completed</span>
          <hr className={tabState.completed ? hrShowClassName: hrHideClassName} />
        </div>
      </div>
      {tabState.all ? <AllTasks /> : null}
      {tabState.active ? <ActiveTasks /> : null}
      {tabState.completed ? <CompletedTasks /> : null}
    </div>
  )
}

export default App