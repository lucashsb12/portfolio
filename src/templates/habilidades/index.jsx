import { useState } from 'react';
import { design, programacao, texto  } from '../../assets/textos/habilidades';
import './styles.css';

export const Habilidades = () =>{

	const [listaProgramacao, setListaProgramacao] = useState(programacao);
	const [listaDesign, setListaDesign] = useState(design);
	const [textoHabilidades] = useState(texto);

	return(
		<div id="habilidades" className="container-habilidades">
			<h1 className='container-habilidades__titulo'>Habilidades</h1>
			<div className='container-texto'>
				<p>{textoHabilidades}</p>
			</div>
			<div className="container-itens container-programacao">
				<h2 className='container-itens__titulo'>{listaProgramacao.linguagens.titulo}</h2>
				<div className='container__linguagens'>
					<ul className="container__lista container__lista--linguagens">
						{listaProgramacao.linguagens.itens.map((item, index) =>{
								return <li key={index} className="container__item">{item.nome} {item.icone} </li>
							})
						}
					</ul>
				</div>
			</div>
			<div className="container-itens container-ferramentas">
				<h2 className='container-itens__titulo'>Ferramentas</h2>
				<div className='container__ferramentas'>
					<ul className="container__lista container__lista--ferramentas">
						{listaDesign.ferramentas.itens.map((item, index) =>{
								return <li key={index} className="container__item">{item.nome} {item.icone} </li>
							})
						}
						{listaProgramacao.ferramentas.itens.map((item, index) =>{
								return <li key={index} className="container__item">{item.nome} {item.icone} </li>
							})
						}
					</ul>
				</div>
			</div>
			<div className="container-itens container-design">
				<h2 className='container-itens__titulo'>{listaDesign.linguagens.titulo}</h2>
				<div className='container__linguagens'>
					<ul className="container__lista container__lista--linguagens">
						{listaDesign.linguagens.itens.map((item, index) =>{
								return <li key={index} className="container__item">{item.nome} {item.icone} </li>
							})
						}
					</ul>
				</div>
			</div>


			<div className="faixa faixa--branca"></div>
			<div className="faixa faixa--azul"></div>

		</div>
	);
}
