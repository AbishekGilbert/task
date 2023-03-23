
import './App.css';
import Card1 from './Card1';
import Card2 from './Card2';
import Card3 from './Card3';

function App() {
  return (
    <div className="App">
      <div classNamw="container d-flex justify-content-center gap-4 flex-wrap flex-row p-3 bg-color">
      <Card1 />
      <Card2 />
      <Card3 />
      </div>
    </div>
  );
}

export default App;
