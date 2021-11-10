import Titulo from '../components/Titulo';
import Relogio from '../components/Relogio'
import onChange from '../components/Switch'
import { Alert,Switch,Progress } from 'antd'; //( ctrl + space ) sugestões de propriedades


function Home() {
  return (
    <div className="App">
      <Titulo cor="blue">Olá</Titulo>
    <Relogio
    dataHoraInicial={new Date('1989-05-12 12:00:00')}
    />
    <div className="Alertas">
      <Alert message="Success Text" type="success" closable={true}/>
      <Alert message="Info Text" type="info" closable={true}/>
      <Alert message="Warning Text" type="warning" closable={true}/>
      <Alert message="Error Text" type="error" closable={true}/>
    </div>

      <Switch defaultChecked onChange={onChange} />

       <div>
         <Progress percent={75} status="exception"/>
         <Progress percent={50}/>
      </div>
    </div>
  );
}

export default Home;

