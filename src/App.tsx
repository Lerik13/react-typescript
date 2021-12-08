import React from 'react';
import {BrowserRouter, Routes, Route, NavLink} from 'react-router-dom';
import TodosPage from './components/TodosPage';
import UsersPage from './components/UsersPage';

const App = () => {

	return (
		<BrowserRouter>
			<div>
				<div>
					<NavLink to="/users">Users</NavLink><br />
					<NavLink to="/todos">List of Todos</NavLink>
				</div>
				<Routes>
					<Route path={'/users'} element={<UsersPage/>} />
					<Route path={'/todos'} element={<TodosPage/>} />
				</Routes>
			 </div>
		</BrowserRouter>
	);
};

export default App;