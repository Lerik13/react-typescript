import React from 'react';
import Card, { CardVariant } from './components/Card';
import UserList from './components/UserList';
import { IUser } from './types/types';

const App = () => {
	const users: IUser[] = [
		{id: 1, name:'Ivan', email: 'aaa1@aa.aa', address: {city: 'Toronto', street: '111str', zipcode: 'Y4R C6E'}},
		{id: 2, name:'John', email: 'bbb1@bb.bb', address: {city: 'Monreal', street: '2str', zipcode: 'W1V C6E'}},
	]

	return (
		<div>
			<Card variant={CardVariant.primary} width='200px' height='200px'>
				<button>Button</button>
				<div>Card info</div>
			</Card>
			<UserList users={users} />
		</div>
	);
};

export default App;