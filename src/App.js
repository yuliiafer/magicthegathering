import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Detail from './components/Detail';
import Home from './pages/Home';

function App() {
  return (
		<Router>
			<div>
				<nav>
					<Link to="/"></Link>
				</nav>

				<Switch>
        <Route path='/' exact component={Home}>
					</Route>
					<Route path="/detail/:id">
						<Detail />
					</Route>
				</Switch>
			</div>
		</Router>
  );
}

export default App;
