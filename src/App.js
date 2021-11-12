import {
  HashRouter as Router,       //BrowserRouter 
  Routes,
  Route,
  Link,
} from 'react-router-dom';

import Home from './pages/Home';
import Tasks from './pages/Tasks';
import About from './pages/About';
import Hero from './pages/Hero'
import Login from './pages/Login'
import NotFound from './pages/NotFound'
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <div className="App">
      <Router>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/tasks">Tarefas</Link></li>
          <li><Link to="/about">Sobre</Link></li>

          <li><Link to="/hero/strange">Dr Estranho</Link></li>
          <li><Link to="/hero/captain">Cap América</Link></li>
          <li><Link to="/hero/spider-man">Home Aranha</Link></li>

        </ul>
        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/hero/:heroId" element={<Hero />} />
          <Route path="/tasks"
            element={
              <PrivateRoute>
                <Tasks />
              </PrivateRoute>
            } />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;

