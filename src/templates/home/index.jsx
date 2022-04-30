import { Header } from '../../components/header';
import { useEffect } from 'react';
import scrollreveal from 'scrollreveal';
import logo from '../../assets/imagens/logomarca.svg'
import './styles.css';

export const Home = () =>{
	useEffect(() =>{
		const appear = {
			opacity: 0,
			easing: 'ease-in-out',
			duration: 1000,
			cleanup: true
		};

		const slideUp = {
			distance: '200px',
			origin: 'bottom',
			opacity: 0,
			easing: 'ease-in-out',
			duration: 2000,
			cleanup: true
		};
		scrollreveal().reveal('.container-logo', appear);
		scrollreveal().reveal('.container-header', appear);
		scrollreveal().reveal('.home__frase', slideUp);
	}, []);

	return(
		<div id="home" className="container-home">
			<Header />

			<div className='home__frase'>
				<h2>Grandes Necessidades <br />
					Soluções Criativas
				</h2>
			</div>

			<div className="container-logo">
				<img src={logo} alt="Logomarca Lucas Henrique" className="logo" />
			</div>
			<div className="faixa faixa--roxo"></div>
		</div>
	)
}
