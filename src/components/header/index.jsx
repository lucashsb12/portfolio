import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressBook, faComment, faLaptopCode, faHammer } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import './styles.css';

export const Header = () =>{

	const [barsActive, setBarsActive] = useState(false);

	const handleBars = () =>{
		setBarsActive(state => !state);
	}

	return(
		<header className="container-header">
			<div className="header__marca-container">
				<h1>Lucas Henrique</h1>
			</div>
			<label htmlFor="menu" className="trigger-menu" onClick={handleBars}>
				<span className={`bars ${barsActive ? 'bars--active' : ''}`}></span>
				<span className={`bars ${barsActive ? 'bars--active' : ''}`}></span>
				<span className={`bars ${barsActive ? 'bars--active' : ''}`}></span>
			</label>

			<input id="menu" type="checkbox" hidden/>

			<nav className="header__nav-mobile">
				<ul className="nav__items">
					<li className="nav__item-mobile">
						<a href="#trabalhos"><FontAwesomeIcon icon={faLaptopCode}/></a>
					</li>
					<li className="nav__item-mobile">
						<a href="#sobre"><FontAwesomeIcon icon={faComment}/></a>
					</li>
					<li className="nav__item-mobile">
						<a href="#home"><FontAwesomeIcon icon={faHammer}/></a>
					</li>
					<li className="nav__item-mobile">
						<a href="#contato"><FontAwesomeIcon icon={faAddressBook}/></a>
					</li>
				</ul>
			</nav>

			<nav className="header__nav">
				<ul className="nav__items">
					<li className="nav__item">
						<a href="#trabalhos">Habilidades</a>
					</li>
					<li className="nav__item">
						<a href="#sobre">Sobre</a>
					</li>
					<li className="nav__item">
						<a href="#home">Trabalhos</a>
					</li>
					<li className="nav__item">
						<a href="#contato">Contato</a>
					</li>
				</ul>
			</nav>

		</header>
	)
}
