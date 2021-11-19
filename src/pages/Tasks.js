import { useNavigate } from 'react-router-dom';
import { Button, Col, Form, Row } from 'antd';
import fakeAuth from '../fake-auth';
import axios from 'axios';
import { useEffect, useState, useMemo } from 'react';
import  InputText from '../components/InputText'
import TaskItem from '../components/TaskItem'

function Tasks() {
    const [tasks, setTasks] = useState([]);    //Armazenamento de dados e reage quando ocorre alguma mudança
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
                <TaskItem task={task} key={task.id}/>
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
                        <InputText label="Busca de tarefas" 
                        placeholder="Buscar..." 
                        onChange={handleSearch} help={"Buscando por :"+search}/>
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
                    {tasksFilter.map(renderTask)}   {/*ARRAY.map retorna todos os dados formatados(com JSX)*/}
                </tbody>
            </table>

        </div>
    )
}

export default Tasks;