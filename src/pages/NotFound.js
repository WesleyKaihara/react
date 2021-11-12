import {Link} from 'react-router-dom';

function NotFound() {
    return (
        <div>
            <h1>
                Página não encontrada (404)
            </h1> 
                <h3><Link to="/">Voltar</Link ></h3>  
                        
        </div>
       
    )
}

export default NotFound;