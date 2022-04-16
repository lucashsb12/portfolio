import { Header } from '../../components/header';
import logo from '../../assets/imagens/logomarca.svg'
import './styles.css';

export const Home = () =>{
	return(
		<div id="home" className="container-home">
			<Header />

			<div className='home__frase'>
				<h1>Grandes Necessidades <br />
					Soluções Criativas
				</h1>
			</div>

			<div className="container-logo">
				<img src={logo} alt="Logomarca Lucas Henrique" className="logo" />
			</div>

		</div>
	)
}