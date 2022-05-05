import { texto } from '../../assets/textos/contato';
import perfil from '../../assets/imagens/perfil.jpg'
import { useState } from 'react';
import whatsapp from '../../assets/imagens/icones/whatsapp.svg';
import linkedin from '../../assets/imagens/icones/linkedin.svg';
import github from '../../assets/imagens/icones/github.svg';

import './styles.css';

export const Contato = () =>{
	const [text] = useState(texto);

	return(
		<div id="contato" className='container-contato'>
			<h1 className='container-habilidades__titulo'>Contato</h1>

			<div className="container-apresentacao">
				<img id="perfil" className="foto-perfil" src={perfil} alt="" />
				<div className="texto">{text}</div>
			</div>
			<div className="container-social">
				<ul className='container-icones'>
					<li className="container-social__icone">
						<a href="https://www.linkedin.com/in/lucas-henriquehsb/" rel="noreferrer" target="_blank">
							<img src={linkedin} alt="" />
						</a>
					</li>
					<li className="container-social__icone">
						<a href="https://api.whatsapp.com/send?phone=5511957035048" rel="noreferrer" target="_blank">
							<img src={whatsapp} alt="" />
						</a>
					</li>
					<li className="container-social__icone">
						<a href="https://github.com/lucashsb12" rel="noreferrer" target="_blank">
							<img src={github} alt="" />
						</a>
					</li>
				</ul>
			</div>
			<div className="faixa faixa--azul"></div>
		</div>
	)
}
