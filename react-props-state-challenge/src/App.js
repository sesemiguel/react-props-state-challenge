import './App.css';
import Challenge from './components/Challenge';
import Challenge2 from './components/Challenge2';
import Challenge3 from './components/Challenge3';
import Challenge4 from './components/Challenge4';
import Challenge5 from './components/Challenge5';

function App() {

  return (
    <>
      <Challenge name="Miguel"/>
      <Challenge2 />
      <Challenge3 />
      <Challenge4 />
      <Challenge5 darkMode={true}/>
    </>

  );
}

export default App;
