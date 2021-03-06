/* IMPORTS SITES */
import logoFortex from '../../imagens/logos/logo-fortex.png';
import logoCerimonial from '../../imagens/logos/logo-cerimonial.webp';
import logoLavafort from '../../imagens/logos/logo_header.png';

/* IMPORTS ARTES */
import arte1 from '../../imagens/artes/Comente-o-seu-melhor-conselho.jpg';
import arte2 from '../../imagens/artes/Dia_incrivel.jpg';
import arte3 from '../../imagens/artes/Feed-5_dicas_clientes-01.jpg';
import arte4 from '../../imagens/artes/OqueNaoFazerNoMarketing.jpg';

/* IMPORTES SISTEMAS */
import img_ad1 from '../../imagens/sistemas/img_ad1.png';
import img_ad2 from '../../imagens/sistemas/img_ad2.png';
import img_ad3 from '../../imagens/sistemas/img_ad3.png';
import img_ad4 from '../../imagens/sistemas/img_ad4.png';
import img_ad5 from '../../imagens/sistemas/img_ad5.png';
import img_vacina_sp1 from '../../imagens/sistemas/img_vacina_sp1.png';
import img_vacina_sp2 from '../../imagens/sistemas/img_vacina_sp2.png';
import img_vacina_sp3 from '../../imagens/sistemas/img_vacina_sp3.png';
import img_vacina_sp4 from '../../imagens/sistemas/img_vacina_sp4.png';
import img_vacina_sp5 from '../../imagens/sistemas/img_vacina_sp5.png';
import img_roh1 from '../../imagens/sistemas/img_roh1.png';
import img_roh2 from '../../imagens/sistemas/img_roh2.png';
import img_roh3 from '../../imagens/sistemas/img_roh3.png';
import img_roh4 from '../../imagens/sistemas/img_roh4.png';
import img_donca1 from '../../imagens/sistemas/img_donca1.png';
import img_donca2 from '../../imagens/sistemas/img_donca2.png';
import img_donca3 from '../../imagens/sistemas/img_donca3.png';
import img_donca4 from '../../imagens/sistemas/img_donca4.png';
import img_sis_dtic1 from '../../imagens/sistemas/img_sis_dtic1.png';
import img_sis_dtic2 from '../../imagens/sistemas/img_sis_dtic2.png';
import img_sis_dtic3 from '../../imagens/sistemas/img_sis_dtic3.png';
import img_sis_dtic4 from '../../imagens/sistemas/img_sis_dtic4.png';

/* icones */
import html from '../../imagens/icones/html.svg';
import jquery from '../../imagens/icones/jquery.svg';
import javascript from '../../imagens/icones/javascript.svg';
import css from '../../imagens/icones/css.svg';
import react from '../../imagens/icones/react.svg';


export const sites = {
	explicacao:
		<div className='container-trabalhos__explicacao'>
			<h3 className='container-trabalhos__titulo'> Web Design </h3>
			<p className="container-trabalhos__texto" >Aqui est??o alguns dos sites que desenvolvi tendo a atua????o de web
				designer. Todos os sites foram constru??dos conforme ??s regras do W3C quanto ao CSS e HTML. Al??m de serem
				desenvolvidos sem??nticamente e estruturalmente amig??veis para o SEO. </p>
			<span className='container-trabalhos__detalhes'>Todos os sites foram desenvolvidos em servi??o ?? empresa
				<a className="link__destaque" href="https://www.yaslip.com.br/" target="_blank" rel="noreferrer"> Yaslip
				</a>, a qual fui web designer em 12/2019 a 03/2021.
			</span>
		</div>,
	conteudo: [
		{
			titulo: 'Fortex Loca????o',
			img: logoFortex,
			url: 'https://www.fortexlocacao.com.br/',
			info: `A Fortex Loca????o ?? uma empresa que disponibiliza alugueis de equipamentos de constru????o.
					Seu site foi feito pensando em explicar o funcionamento de todos os seus equipamentos
					e como a empresa trabalha.`
		},
		{
			titulo: 'Lavafort',
			img: logoLavafort,
			url: 'https://lavafort.com.br/',
			info: `A Lavafort ?? uma empresa especializada em higieniza????o de estofados.
					Seu site foi pensado para demonstrar um pouco de seus procedimentos e facilitar
					a contrata????o de seus servi??os a domic??lio.`

		},
		{
			titulo: 'Cerimonial Pacaembu',
			img: logoCerimonial,
			url: 'https://cerimonialpacaembu.com.br/',
			info: `A Cerimonial, ?? especializada em servi??os funer??rios, desde os procedimentos m??dicos
					ao transporte e cremamento. Seu site foi desenvolvido para explicar mais sobre a sua
					??rea de atua????o e facilitar a contrata????o de seus servi??os.`
		},
	]
}

export const artes = {
	explicacao:
		<div className='container-trabalhos__explicacao'>
			<h3 className='container-trabalhos__titulo'> Cria????o de conte??do </h3>
			<p className="container-trabalhos__texto" >Em minha experi??ncia profissional, h?? uma parte reservada para o
				trabalho freelancer. Fiz diversos trabalhos de cria????o de conte??dos para redes sociais. Criei desde
				artes para publica????es, edi????es de v??deos, at?? cria????o de conte??do em forma de textos.
			</p>
			<span className='container-trabalhos__detalhes'>Todas as artes foram avaliadas e aprovadas pela
				<a className="link__destaque" href="https://www.instagram.com/ajulianavas/" target="_blank"
				rel="noreferrer"> Juliana Vas</a> para o seu cliente <a className="link__destaque"
				href="https://www.instagram.com/ajulianavas/" target="_blank" rel="noreferrer">Feras no Marketing</a>,
				a qual prestei servi??o em 12/2020 a 04/2021.
			</span>
		</div>,
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
}

export const sistemas = {
	explicacao:
		<div className='container-trabalhos__explicacao'>
			<h3 className='container-trabalhos__titulo'> Programa????o </h3>
			<p className="container-trabalhos__texto"> Atualmente meu foco principal ?? o desenvolvimento de sistemas web.
				Apresento abaixo os sistemas que desenvolvi atuando como programador front-end, sendo respons??vel pelo
				design e a programa????o.
			</p>
			<span className='container-trabalhos__detalhes'>Todos os sistemas abaixo foram desenvolvidos em servi??o ?? SMS
			DTIC, para a Prefeitura Municipal de Sa??de de SP a qual presto servi??o desde 03/2021.</span>
		</div>,
	conteudo: [
		{
			sistema: 'Atendimento Domiciliar',
			desc: `Sistema desenvolvido para auxiliar os profissionais de sa??de no controle
					de pacientes cadastrados no sistema. O sistema conta com um m??dulo dedicado ao
					COVID 19.`,
			tecs:[
					<img className="html" src={html} title="HTML5" alt="Logo HTML5"/>, <img className="css" title="CSS3"
					src={css} alt="Logo CSS3"/>, <img src={javascript} title="Javascript" alt="Logo Javascript"/>,
					<img src={jquery} title="Jquery" alt="Logo Jquery"/>
				],
			imgs: [
				img_ad1, img_ad2, img_ad3, img_ad4, img_ad5
			]
		},
		{
			sistema: 'Vacina Sampa',
			desc: `Sistema desenvolvido para auxiliar os profissionais de sa??de no controle
					de estoque e vacinas aplicadas COVID 19 em cada unidade de sa??de.`,
			tecs:[
					<img className="html" src={html} title="HTML5" alt="Logo HTML5"/>, <img className="css" title="CSS3"
					src={css} alt="Logo CSS3"/>, <img src={javascript} title="Javascript" alt="Logo Javascript"/>,
					<img src={jquery} title="Jquery" alt="Logo Jquery"/>
				],
			imgs: [
				img_vacina_sp1, img_vacina_sp2, img_vacina_sp3, img_vacina_sp4, img_vacina_sp5
			]
		},
		{
			sistema: 'Relat??rio de Ocupa????o Hospitalar',
			desc: `Sistema desenvolvido para auxiliar os profissionais de sa??de no controle de leitos ocupados
					nos hospitais do munic??pio de S??o Paulo.`,
			tecs:[
					<img className="html" src={html} title="HTML5" alt="Logo HTML5"/>, <img className="css" title="CSS3"
					src={css} alt="Logo CSS3"/>, <img src={javascript} title="Javascript" alt="Logo Javascript"/>,
					<img src={jquery} title="Jquery" alt="Logo Jquery"/>
				],
			imgs: [
				img_roh1, img_roh2, img_roh3, img_roh4
			]
		},
		{
			sistema: 'De Olho Na Carteirinha',
			desc: `Sistema desenvolvido para auxiliar os profissionais de sa??de no controle
					das carteiras de vacina????o de crian??as e adolescentes no munic??pio de S??o Paulo.`,
			tecs:[
					<img className="html" src={html} title="HTML5" alt="Logo HTML5"/>, <img className="css" title="CSS3"
					src={css} alt="Logo CSS3"/>, <img src={javascript} title="Javascript" alt="Logo Javascript"/>,
					<img src={jquery} title="Jquery" alt="Logo Jquery"/>
				],
			imgs:[
				img_donca1, img_donca2, img_donca3, img_donca4
			]
		},
		{
			sistema: 'SISDTIC',
			desc: `Sistema desenvolvido para auxiliar os profissionais internos do departamento
			onde trabalho atualmente. Ele ajuda a gerenciar contratos, m??tricas e automatizar trabalhos
			que eram feitos manualmente.`,
			tecs: [
					<img className="html" src={html} title="HTML5" alt="Logo HTML5"/>, <img className="css" title="CSS3"
					src={css} alt="Logo CSS3"/>, <img src={javascript} title="Javascript" alt="Logo Javascript"/>, <img src={react}
			 		title="ReactJs" alt="Logo ReactJs"/>
				],
			imgs:[
				img_sis_dtic1, img_sis_dtic2, img_sis_dtic3, img_sis_dtic4
			]
		}
	]
}
