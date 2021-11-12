import { useNavigate } from 'react-router-dom';
import { Button } from 'antd';
import fakeAuth from '../fake-auth';
import axios from 'axios';
import { useEffect, useState } from 'react';

function Tasks() {
    const [tasks, setTasks] = useState([]);    //Armazenamento de dados
    useEffect(() => {                            //dois argumentos função e lista de dependencias
        axios.get('https://jsonplaceholder.typicode.com/todos')
            .then(response => {
                setTasks(response.data)
            })

            .catch(err => {
                console.warn(err)
                alert("Erro ao entrar na tarefa")
            })
    }, []);  //segundo argumento

    const navigate = useNavigate();
    const sair = () => {
        fakeAuth.isAuthenticated = false;
        navigate('/login')
    }
    const renderTask =(task) =>{

        return (
            <tr>
                <td>{task.id}</td>
                <td>{task.title}</td>
                <td>{task.completed ? 'Sim' : 'Não'}</td>
            </tr>
        )
    }
    return (
        <div>
            <h1>Lista de Tarefas</h1>
            <table border="1">
                <thead>
                    <tr>
                        <th>id</th>
                        <th>Titulo</th>
                        <th>Concluida</th>
                    </tr>
                </thead>
                <tbody>
                 {tasks.map(renderTask)}
                </tbody>
            </table>
            <Button danger type="primary" onClick={sair}>
                Sair
            </Button>
        </div>
    )
}

export default Tasks;