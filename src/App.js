import './App.css';
import Navbar from './Navbar';
import MyIntro from './MyIntro';
import Bottompage from './Bottompage';
import Certifications from './Certifications';
import Projects from './Projects';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <MyIntro/>
      <Certifications />
      <Projects />
      <Bottompage/>    
    </div>
  );
}


export default App;
