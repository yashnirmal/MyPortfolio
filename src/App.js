import './App.css';
import First from './components/First';
import Third from './components/Third';
import Second from './components/Second';
import Scroll from './components/Scroll';
import Fourth from './components/Fourth';

function App() {
  return (
    <>
    <First />
    {/* <div style={{width:"100vw",height:"50vh"}} onClick={(e)=>{console.log("Cliked : "+e.target)}}></div> */}
    <Second />
    <Fourth />
    <Third />
    <Scroll />
    </>
  );
}

export default App;
