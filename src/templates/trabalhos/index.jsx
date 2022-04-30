import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { artes, sistemas, sites } from '../../assets/textos/trabalhos';
import { faTimesCircle } from '@fortawesome/free-regular-svg-icons';
import ScrollReveal from 'scrollreveal'

import './styles.css';

export const Trabalhos = () =>{

	const [exibirExplicacao, setExibirExplicacao] = useState('sistemas');
	const [infosSites] = useState(sites);
	const [infosArtes] = useState(artes);
	const [infosSistemas] = useState(sistemas);
	const [galeria, setGaleria] = useState('');


	useEffect(() =>{
		const animation = {
			opacity: 0,
			easing: 'ease-in'
		};
		ScrollReveal().reveal('.cards__sistemas', animation);
		ScrollReveal().reveal('.cards__artes', animation);
		ScrollReveal().reveal('.cards__sites', animation);

		const underline = document.getElementById("underline");
		const titulo = document.getElementById("trabalhos__titulo");
		const novoTamanho = titulo.getBoundingClientRect().width;
		const novaPosicao = titulo.getBoundingClientRect().left + window.pageXOffset + 1;
		const novaAltura = titulo.getBoundingClientRect().top + window.pageYOffset + 32;

		underline.style.left = `${novaPosicao}px`;
		underline.style.top = `${novaAltura}px`;
		underline.style.width = `${novoTamanho}px`;
	}, []);

	const handleEfeitoTitulo = (event, sessao) =>{
		setExibirExplicacao(sessao);
		handleUnderline(event)
	}

	const handleUnderline = (event) =>{
		const { target } = event;
		const underline = document.getElementById("underline");
		const novaPosicao = target.getBoundingClientRect().left + window.pageXOffset + 1;
		const novoTamanho = target.getBoundingClientRect().width;
		underline.style.left = `${novaPosicao}px`;
		underline.style.width = `${novoTamanho}px`;
	}

	return(
		<div id="trabalhos" className="container-trabalhos">

				<div className="trabalhos__titulos">
					<h2 onClick={(event) => handleEfeitoTitulo(event, 'sistemas')} id="trabalhos__titulo"
						className="trabalhos__titulo">Sistemas</h2>
					<h2 onClick={(event) => handleEfeitoTitulo(event, 'sites')} className="trabalhos__titulo">Sites
					</h2>
					<h2 onClick={(event) => handleEfeitoTitulo(event, 'artes')} className="trabalhos__titulo">Artes
					</h2>
					<div id="underline" className='underline'></div>
				</div>

				{exibirExplicacao === 'sistemas' &&
					infosSistemas.explicacao
				}
				{exibirExplicacao === 'sites' &&
					infosSites.explicacao
				}
				{exibirExplicacao === 'artes' &&
					infosArtes.explicacao
				}

				<div className="container-cards">

					{ exibirExplicacao === 'sistemas' &&
							<div id="sistemas" className='cards cards__sistemas'>
								{ infosSistemas.conteudo.map((sessao, index) => (
										<div key={index} className="trabalhos__card">
											<div className="trabalhos__card__desc">
												<h3 className="trabalhos__card__desc__titulo">{sessao.sistema}</h3>
												<p>{sessao.desc}</p>
											</div>
											<div className="trabalhos__card__tecs">
												<h4 className="trabalhos__card__tecs__titulo">Tecnologias Utilizadas</h4>
												<ul className="trabalhos__card__ul__tecs">
													{sessao.tecs.map((tec, index) =>(
														<li key={index}>{tec}</li>
													))}
												</ul>
											</div>
											<button onClick={() => setGaleria(sessao.sistema)} className='trabalhos__card__trigger-imagens'>Imagens</button>
										</div>
									))
								}
							</div>
					}

					{ exibirExplicacao === 'sites' &&
							<div id="sites" className='cards cards__sites'>
								{ infosSites.conteudo.map((infos, index) =>{
										return (
											<div key={index} className="trabalhos__card">
												<img className="trabalhos__card__img" src={infos.img} alt="Logotipo" />
												<p className="trabalhos__card__p">{infos.info}</p>
												<a href={infos.url} rel="noreferrer" target="_blank">
													<button className="trabalhos__card__button">Acessar</button>
												</a>
											</div>
										)
									})
								}
							</div>

					}

					{ exibirExplicacao === 'artes' &&
							<div id="artes" className='cards cards__artes'>
								{ infosArtes.conteudo.map((infos, index) =>{
										return (
											<div key={index} className="trabalhos__card">
												<a href={infos.url} rel="noreferrer" target="_blank">
													<img className="trabalhos__card__img" src={infos.img} alt="Artes" />
												</a>
											</div>
										)
									})
								}
							</div>
					 }
				</div>

			{!!galeria &&
				<div className="container-galeria">
					<span className='container-galeria__close' onClick={() => setGaleria('')}>
						<FontAwesomeIcon icon={faTimesCircle}/>
					</span>
					<div className='container-galeria__container-imgs'>
						{infosSistemas.conteudo.map(sessao =>{
							if(sessao.sistema === galeria){
								return sessao.imgs.map((img, index) => (
										// console.log(img)
										<img key={index} src={img} alt="Sitemas" />
									))
								}
							})
						}
					</div>
				</div>
			}
			<div className="faixa faixa--branco"></div>
			<div className="faixa faixa--roxo"></div>
		</div>

	);
}
