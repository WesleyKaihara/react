import Titulo from './Titulo';
import Relogio from './Relogio'
import { Alert } from 'antd';

function App() {
  return (
    <div className="App">
      <Titulo cor="blue">Olá</Titulo>
    <Relogio
    dataHoraInicial={new Date('1989-05-12 12:00:00')}
    />
    <div className="App">
    <Alert message="Success Text" type="success" />
    <Alert message="Info Text" type="info" />
    <Alert message="Warning Text" type="warning" />
    <Alert message="Error Text" type="error" />
    </div>
    
    </div>
  );
}

export default App;

