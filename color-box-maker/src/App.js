import './App.css';
import BoxList from './BoxList'

function App() {
  
  return (
    <div className="App flex-wrapper">
      <BoxList/>
      <div className="footer footer-grid">
          <div> Contact us </div>
          <div> Hire us</div>
          <div> Give us feedback! </div>
          <div> Careers </div>
      </div>
  
    </div>
  );
}

export default App;
