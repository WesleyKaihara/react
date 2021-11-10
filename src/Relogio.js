import { useState,useEffect }  from 'react';   //importar somente uma Hook

function Relogio(props){
    const {dataHoraInicial} = props;
    const [dataHora,setDataHora] = useState(dataHoraInicial)  //destructuring   valorInicial,ValorAlterado
    useEffect(()=>{                                
        setInterval(()=> {
        setDataHora(date => {
            return new Date(date.getTime()+1000)
        });
        },1000);
    },[]);                                        //[] atualização de componente
    return (
        <div>
            Relógio: {dataHora.toString()}
        </div>
    )
}


export default Relogio;