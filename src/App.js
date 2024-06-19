import logo from './logo.svg';
import './App.css';
import Products from './Products';
import a from './Products';
import Navbar from './components/Navbar';
import TypeWriter from './components/TypeWriter';
import EducationTile from './components/EducationTile';
import sst from './components/images.png';
import MyCarousel from './components/MyCarousel';
import ProgressBar from './components/ProgressBar'; 
import { useEffect, useState } from 'react';
import Counter from './components/ProgressBar';
function App() {
  const [percentage,setPercentage] = useState(0);
  useEffect(()=>{
    const interval = setInterval(()=>{
      setPercentage((percentage)=>{
        if(percentage<100){
          return percentage+10;
        }
        else{
          return 100;
        }
      })},1000);
    return ()=>{clearInterval(interval);}
    
  });
  return (
    <div className="App">
      <Products/>
      {/* <Counter /> */}
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello Class 1
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      {/* <Products/> */}
      
    </div>
  );
}

export default App;
{/* <Navbar/>
      <TypeWriter text={["Harsh","Kumar","Patwa"]} typingSpeed = {100} deletingSpeed = {50} duration={1000}/>
      <a/>
      {/* <Tile header="Hi everyone" subheader="My name is Harsh Kumar" /> */}
      // <EducationTile image={sst} collegeName={"Scler School Of Technology"} course={"Computer Science"} year={"2023-2027"} description={"Ivy league"}/>
      // <MyCarousel/>
      // <ProgressBar percentage={
        // percentage
      // }/> */}