import './App.css';
import ButtonComponent from './components/ButtonComponent';
import ImageComponent from './components/ImageComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ButtonComponent btnText="Cliccami" />
        <ImageComponent imgName="logo192.png" imgAlt="Logo di react" />
      </header>
    </div>
  );
}

export default App;
