import './App.css';
import Myheadeer from './Components/Myheadeer';
import Mynav from './Components/Mynav';
import Second from './Components/Second';
import Third from './Components/Third';
import Myslider from "./Components/Myslider";
import Everyone from './Components/Everyone';
import Myform from './Components/Myform';
import Myfooter from './Components/Myfooter';

function App() {
  return (
    <>
    <div className='bg-head'>
    <Mynav></Mynav>
    <Myheadeer></Myheadeer>
    </div>
    <Second></Second>
    <Third></Third>
    <Myslider></Myslider>
    <Everyone></Everyone>
    <Myform></Myform>
    <Myfooter></Myfooter>
    </>
  );
}

export default App;
