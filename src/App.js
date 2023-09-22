import './App.css';
import Navbar from './Navbar';
import MyIntro from './MyIntro';
import Bottompage from './Bottompage';
import Certifications from './Certifications';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <MyIntro/>
      <Certifications />
      <Bottompage/>    
    </div>
  );
}


export default App;
