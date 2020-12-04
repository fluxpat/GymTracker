import './App.css';
import DynamicMoviesList from './components/dynamicListsDemo/DynamicMoviesList';
import Header from './components/Header.js';
import { listItems, WorkoutList } from './components/ListDemo';

function App() {
  return (
    <div className="App">
      {/* <Header /> */}
      <ul>{ listItems }</ul>
      <div>
        <WorkoutList />
      </div>
      <hr/>
        <DynamicMoviesList />
    </div>
  );
}

export default App;
