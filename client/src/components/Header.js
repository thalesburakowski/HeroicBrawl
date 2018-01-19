import React, { Component } from 'react'
import { BrowserRouter, Route, Link } from 'react-router-dom'

class Header extends Component {
	render() {
		return (
			// escrever o código aqui
			<section>
				<div>
					<BrowserRouter>
						<div id="Cabecalho">
							<ul>
								<li>
									<Link to='/Home'>Home</Link>
								</li>
								<li>
									<Link to='/News'>Notícias</Link>
								</li>
								<li>
									<Link to='/Community'>Comunidade</Link>
								</li>
								<li>
									<Link to='/Gallery'>Galeria</Link>
								</li>
								<li>
									<Link to='/Collection'>Acervo</Link>
								</li>
								<li>
									<Link to='/Shop'>Loja</Link>
								</li>
							</ul>
						</div>
					</BrowserRouter>
				</div>
			</section>
		)
	}
}

export default Header