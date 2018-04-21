import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Nav from '../components/Nav';
import { loadCashProjection } from '../action-creators/cashProjectionAction';
import ContentContainer from './ContentContainer';
import store from '../store';
import reactDataGrid from '../packages/react-data-grid';
import reactDataGridAddons from '../packages/react-data-grid-addons';


const ReactDOM = require('react-dom');

const Promise = require('es6-promise-promise');


class App extends Component{
	constructor( props ){
		super( props );
	}

	componentDidMount() {
		store.dispatch( loadCashProjection() );
	}
	
	render(){
     
		return(
			<div className="container-fluid">
				<Nav />
				<div style={ { marginTop: '70px' }}>
					<div className="row">
						<div className="col-sm-10">
							<ContentContainer/>
						</div>
					</div>
				</div>
			</div>
		)
	}
}


export default App;


