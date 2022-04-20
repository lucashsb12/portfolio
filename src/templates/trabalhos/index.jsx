import { useEffect, useState } from 'react';


import { artes, sistemas, sites } from '../../assets/textos/trabalhos';

import './styles.css';

export const Trabalhos = () =>{

	const [exibirExplicacao, setExibirExplicacao] = useState('sites');
	const [infosSites] = useState(sites);
	const [infosArtes] = useState(artes);
	const [infosSistemas] = useState(sistemas);
	const [galeria, setGaleria] = useState('');

	return(
		<div id="trabalhos" className="container-trabalhos">
			<div className="trabalhos__titulos">
				<h2 onClick={() => setExibirExplicacao('sistemas')} className="trabalhos__titulo"> Sistemas </h2>
				<h2 onClick={() => setExibirExplicacao('sites')} className="trabalhos__titulo"> Sites </h2>
				<h2 onClick={() => setExibirExplicacao('artes')} className="trabalhos__titulo"> Artes </h2>
			</div>

			{exibirExplicacao === 'sistemas' &&
				<p className='container-trabalhos__explicacao'>
					{infosSites.explicacao}
				</p>
			}
			{exibirExplicacao === 'sites' &&
				<p className='container-trabalhos__explicacao'>
					{infosSites.explicacao}
				</p>
			}
			{exibirExplicacao === 'artes' &&
				<p className='container-trabalhos__explicacao'>
					{infosArtes.explicacao}
				</p>
			}


			<div className="container-cards">

				{ exibirExplicacao === 'sistemas' &&
					<div id="sistemas" className="cards cards__sistemas">
						{ infosSistemas.conteudo.map((sessao, index) => (
								<div key={index} className="trabalhos__card">
									{/* <img className="trabalhos__card__img" src={img} alt="Sistemas" /> */}
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
					<div id="sites" className="cards cards__sites">
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
					<div id="artes" className="cards cards__artes">
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
			}

		</div>
	);
}
