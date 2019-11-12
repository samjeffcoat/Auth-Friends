import React from 'react';
import {
	BrowserRouter as Router,
	Route,
	Link,
	Switch
} from "react-router-dom";
import './App.css';
import Login from './components/login-page.component';

function App() {
	return ( <
		<
		Router >
		div className = "App" >
		<
		Login / >
		<
		/div> < /
		Router >
	);
}

export default App;