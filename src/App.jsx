import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';

function App() {
  return (
    <>
      <Navbar title="TextUtils" />
      <div className="container">
      <Textform heading="Enter the Text to Analyze Below"/>
      </div>
    </>
  );
}

export default App;
