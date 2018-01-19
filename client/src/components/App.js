import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import { connect } from 'react-redux'
//import * as actions from '../actions/'

import Header from './Header'
import Home from './Home'
import News from './News'
import Community from './Community'
import Gallery from './Gallery'
import Collection from './Collection'
import Shop from './Shop'
import Login from './Login'

export default class App extends Component {
	componentDidMount() {
	
	}

	render() {
		return (
			<div>
				<BrowserRouter>
					<div>
						<Header />
						<Route exact path='/' component={Home}/>
						<Route exact path='/News' component={News}/>
						<Route exact path='/Community' component={Community}/>
						<Route exact path='/Gallery' component={Gallery}/>
						<Route exact path='/Collection' component={Collection}/>
						<Route exact path='/Shop' component={Shop}/>
						<Route exact path='/Login' component={Login}/>
					</div>
				</BrowserRouter>
			</div>
		)
	}
}

//export default connect(null, actions)(App)