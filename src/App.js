import { faVideo } from '@fortawesome/free-solid-svg-icons';
import './App.css';
import Video from './components/Video.js'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


function App() {
  return (
    <div className="App">
      <h1>
      <FontAwesomeIcon icon={faVideo} size="2xl" style={{color: "black",}} />&nbsp; Get Your Daily Rabbit here!
      </h1>
      <Video />
    </div>
  );
}

export default App;
