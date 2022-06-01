// import './App.css';
import './App.scss';
import Navigation from './Components/Navigation';
import 'bootstrap/dist/css/bootstrap.min.css';
import Barnner from './Components/Barnner';
import Mininav from './Components/Mininav';
import Horizontal from './Components/Horizontal';
import CryptContent from './Components/CryptContent';
import DownLine from './Components/DownLine';
import VestContent from './Components/VestContent';
import FooterNav from './Components/FooterNav';

function App() {
  return (
    <div className="App">
      <header className="App-body">
        <Navigation/>
        <Barnner/>
        <Mininav />
        <Horizontal/>
        <CryptContent/>
        <DownLine/>
        <VestContent/>
        <FooterNav/>
      </header>
    </div>
  );
}

export default App;
