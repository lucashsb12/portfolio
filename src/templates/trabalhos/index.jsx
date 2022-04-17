import { useState } from 'react';
import logoFortex from '../../assets/imagens/logo-fortex.png';
import logoDr from '../../assets/imagens/logo-branco.webp';
import logoCerimonial from '../../assets/imagens/logo-cerimonial.webp';
import logoLavafort from '../../assets/imagens/logo_header.png';
import arte1 from '../../assets/imagens/Comente-o-seu-melhor-conselho.jpg';
import arte2 from '../../assets/imagens/Dia_incrivel.jpg';
import arte3 from '../../assets/imagens/Feed-5_dicas_clientes-01.jpg';
import arte4 from '../../assets/imagens/OqueNaoFazerNoMarketing.jpg';

import './styles.css';

export const Trabalhos = () =>{

	const [exibirExplicacao, setExibirExplicacao] = useState('sites');

	const [infosSites] = useState({
		explicacao: `Aqui estão alguns dos sites que desenvolvi tendo a atuação de web designer. Todos
			os sites foram construídos conforme às regras do W3C quanto ao CSS e HTML. Além de serem desenvolvidos
			semânticamente e estruturalmente amigáveis para o CEO.`,
		conteudo: [
			// {
			// 	titulo: 'drLeandro',
			// 	img: logoDr,
			// 	url: 'https://drleandromendoncacirurgiao.com.br/',
			// 	info: `Dr. Leandro, especializado em cirurgia abdominal.
			// 			Seu site foi pensado para explicar seus procedimentos e um pouco
			// 			sobre sua história de vida.`
			// },
			{
				titulo: 'Fortex Locação',
				img: logoFortex,
				url: 'https://www.fortexlocacao.com.br/',
				info: `A Fortex Locação é uma empresa que disponibiliza alugueis de equipamentos de construção.
						Seu site foi feito pensando em explicar o funcionamento de todos os seus equipamentos
						e como a empresa trabalha.`
			},
			{
				titulo: 'Lavafort',
				img: logoLavafort,
				url: 'https://lavafort.com.br/',
				info: `A Lavafort é uma empresa especializada em higienização de estofados.
						Seu site foi pensado para demonstrar um pouco de seus procedimentos e facilitar
						a contratação de seus serviços a domicílio.`

			},
			{
				titulo: 'Cerimonial Pacaembu',
				img: logoCerimonial,
				url: 'https://cerimonialpacaembu.com.br/',
				info: `A Cerimonial, é especializada em serviços funerários, desde os procedimentos médicos
						ao transporte e cremamento. Seu site foi desenvolvido para explicar mais sobre a sua
						área de atuação e facilitar a contratação de seus serviços.`
			},
		]
	});

	const [infosArtes] = useState({
		explicacao: `Em minha experiência profissional, há uma parte reservada para o trabalho
		freelancer. Fiz diversos trabalhos de criação de conteúdos para redes sociais. Criei desde
		artes para publicações, edições de vídeos, até criação de conteúdo em forma de textos.`,
		conteudo: [
			{
				img: arte1,
				url: 'https://www.instagram.com/p/COVMu-dtk4M/?utm_source=ig_web_copy_link',
			},
			{
				img: arte2,
				url: 'https://www.instagram.com/p/CKeIjNuM9fa/?utm_source=ig_web_copy_link',
			},
			{
				img: arte3,
				url: 'https://www.instagram.com/p/CJ_V_Q9guS7/?utm_source=ig_web_copy_link',
			},
			{
				img: arte4,
				url: 'https://www.instagram.com/p/CLCSoBTHf-V/?utm_source=ig_web_copy_link',
			},
		]
	});

	return(
		<div id="trabalhos" className="container-trabalhos">
			<div className="trabalhos__titulos">
				<h2 onClick={() => setExibirExplicacao('sistemas')} className="trabalhos__titulo"> Sistemas </h2>
				<h2 onClick={() => setExibirExplicacao('sites')} className="trabalhos__titulo"> Sites </h2>
				<h2 onClick={() => setExibirExplicacao('artes')} className="trabalhos__titulo"> Artes </h2>
			</div>

			<p className='container-trabalhos__explicacao'>
				{exibirExplicacao === 'sites' && infosSites.explicacao}
			</p>
			<p className='container-trabalhos__explicacao'>
				{exibirExplicacao === 'sistemas' && infosSites.explicacao}
			</p>
			<p className='container-trabalhos__explicacao'>
				{exibirExplicacao === 'artes' && infosArtes.explicacao}
			</p>

			<div className="container-cards">
					{
						exibirExplicacao === 'sites' &&
						<div id="sites" className="cards cards__sites">
							{
								infosSites.conteudo.map(infos =>{
									return (
										<div className="trabalhos__card">
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

				{
					exibirExplicacao === 'artes' &&
					<div id="artes" className="cards cards__artes">
						{
							infosArtes.conteudo.map(infos =>{
								return (
									<div className="trabalhos__card">
										<a href={infos.url} rel="noreferrer" target="_blank">
											<img className="trabalhos__card__img" src={infos.img} alt="Artes" />
										</a>
										{/* <a href={infos.url} rel="noreferrer" target="_blank">
											<button className="trabalhos__card__button">Acessar</button>
										</a> */}
									</div>
								)
							})
						}
					</div>
				}
			</div>
		</div>
	);
}
