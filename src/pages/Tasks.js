import { useNavigate } from 'react-router-dom';
import { Button, Col, Form, Input, Row } from 'antd';
import fakeAuth from '../fake-auth';
import axios from 'axios';
import { useEffect, useState, useMemo } from 'react';

function Tasks() {
    const [tasks, setTasks] = useState([]);    //Armazenamento de dados
    const [search, setSearch] = useState('');
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

    const sair = () => {                      //Função para deslogar
        fakeAuth.isAuthenticated = false;
        navigate('/login')
    }

    const handleSearch = (event) => {   //recebe valor colocado no input da pesquisa
        setSearch(event.target.value)
    }



    const renderTask = (task) => {

        return (                                 //recebe os valores da Array
            <tr key={task.id}>
                <td align="center">{task.id}</td>
                <td >{task.title}</td>
                <td align="center">{task.completed ? 'Sim' : 'Não'}</td>
            </tr>
        )
    }

    //const tasksFilter = tasks.filter(function (task) {      //Filtro da Página de Tarefas(obs:passa por cada palavra)
    //   return task.title.includes(search);
    //});

    const tasksFilter = useMemo(() => {      //Filtro da Página de Tarefas(obs:passa por cada palavra)
        return tasks.filter(function (task) {
            return task.title.toLowerCase().includes(search.toLowerCase())   
        })
    }, [tasks,search]);  //muda quando o valor de search ou tasks é alterado 

    return (
        <div align="center">
            <Button danger type="primary" onClick={sair}>
                Sair
            </Button>
            <br />
            <br />

            <Row gutter={[24, 24]} justify="center">         {/*Barra de pesquisa da página com JSX*/}
                <Col span="23">
                    <Form layout="vertical" >
                        <Form.Item label="Busca de tarefas"
                        help={"Pesquisando por:"+ search}>
                            <Input placeholder="Buscar ..." onChange={handleSearch} />
                        </Form.Item>
                    </Form>
                </Col>
            </Row>

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
                    {tasksFilter.map(renderTask)}
                </tbody>
            </table>

        </div>
    )
}

export default Tasks;