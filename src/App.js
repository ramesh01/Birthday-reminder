import './App.css';
import List from './components/List';
import data from './data';
import { useState } from 'react';
function App() {
  const [people, setPeople] = useState(data);
  return (<main>
    <div className="container-main">
    <section className="container">
      <h3>{people.length} birthdays today</h3>
      <List people={people}/>
      <button className="btn btn-primary" onClick={()=>setPeople([])}>Clear all</button>
    </section>
    </div>
  </main>
  );
}

export default App;
