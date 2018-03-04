import React, {Component} from 'react';
import CardList from './CardList'
import {robots} from './robots.js';
import SearchBox from './SearchBox';
import './App.css';

class App extends Component {
	constructor() {
		super()
		console.log('constructor')
		this.state = {
			robots: [],
			searchField: ''
		}
	}
	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/users').then(response => {
			return response.json();
		}).then( users => {
			this.setState({robots:users})
		})
	}
	onSearchChange = (event) => {
		console.log('onSearchChange')
		this.setState({searchField:event.target.value})
	}
	render(){
		console.log('render')
		const filteredArray = this.state.robots.filter(robot => {
			return robot.name.toLowerCase().includes(this.state.searchField.toLowerCase())
		})
		return(
		<div className='tc'>
			<h1 className='f1'>Robo Friendes</h1>
			<SearchBox searchChange={this.onSearchChange}/>
			<CardList robots={filteredArray} />
		</div>
		);
	}	
}
export default App;