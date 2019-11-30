import React, { Component } from 'react';
import Home from './Home/Home';

import './App.css';

class App extends Component {
	render() {
		return (
			<div className="App">
				<h1>To Do List</h1>
				<Home/>
			</div>
		);
	}
}

export default App;
